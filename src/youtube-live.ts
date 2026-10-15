import { channelIds } from "./channel-ids";
import { uploads, type Upload } from "./data";
import { brand, partners } from "./network";

const BROWSE = "https://www.youtube.com/youtubei/v1/browse?prettyPrint=false";
const VIDEOS_TAB = "EgZ2aWRlb3PyBgQKAjoA";
const CACHE_MS = 6 * 60 * 60 * 1000;

export type LiveChannel = {
  subs: string;
  videos?: string;
};

export type LivePayload = {
  channels: Record<string, LiveChannel>;
  uploads: Upload[];
};

type Dict = Record<string, unknown>;

let cache: { at: number; data: LivePayload } | null = null;

function isDict(value: unknown): value is Dict {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function contentOf(value: unknown) {
  return isDict(value) && typeof value.content === "string" ? value.content : undefined;
}

function readCounts(node: unknown, found: { subs?: string; videos?: string }) {
  if (Array.isArray(node)) {
    for (const item of node) readCounts(item, found);
    return;
  }
  if (!isDict(node) || found.subs) return;
  const parts = node.metadataParts;
  if (Array.isArray(parts)) {
    const texts = parts
      .map((part) => (isDict(part) ? contentOf(part.text) : undefined))
      .filter((text): text is string => Boolean(text));
    const subs = texts.find((text) => /subscribers/i.test(text));
    const videos = texts.find((text) => /\bvideos\b/i.test(text));
    if (subs) found.subs = subs;
    if (videos) found.videos = videos;
  }
  for (const value of Object.values(node)) {
    if (found.subs) return;
    readCounts(value, found);
  }
}

function firstLockup(node: unknown): Dict | undefined {
  if (Array.isArray(node)) {
    for (const item of node) {
      const found = firstLockup(item);
      if (found) return found;
    }
    return;
  }
  if (!isDict(node)) return;
  if (isDict(node.lockupViewModel)) return node.lockupViewModel;
  for (const value of Object.values(node)) {
    const found = firstLockup(value);
    if (found) return found;
  }
}

function readUpload(lockup: Dict, channel: string): Upload | undefined {
  const id = typeof lockup.contentId === "string" ? lockup.contentId : "";
  const meta = isDict(lockup.metadata) ? lockup.metadata.lockupMetadataViewModel : undefined;
  if (!isDict(meta) || !id) return;
  const title = contentOf(meta.title);
  if (!title) return;
  const rows =
    isDict(meta.metadata) && isDict(meta.metadata.contentMetadataViewModel)
      ? meta.metadata.contentMetadataViewModel.metadataRows
      : undefined;
  let views = "";
  let age = "";
  if (Array.isArray(rows)) {
    for (const row of rows) {
      if (!isDict(row) || !Array.isArray(row.metadataParts)) continue;
      const texts = row.metadataParts
        .map((part) => (isDict(part) ? contentOf(part.text) : undefined))
        .filter((text): text is string => Boolean(text));
      const view = texts.find((text) => /view/i.test(text));
      if (!view) continue;
      views = view;
      age = texts.find((text) => text !== view) ?? "";
      break;
    }
  }
  return { id, title, channel, views: views || "0 views", age };
}

async function readChannel(channelId: string, name: string) {
  const response = await fetch(BROWSE, {
    method: "POST",
    headers: { "content-type": "application/json", "user-agent": "Mozilla/5.0" },
    body: JSON.stringify({
      context: {
        client: { clientName: "WEB", clientVersion: "2.20251015.00.00", hl: "en", gl: "US" },
      },
      browseId: channelId,
      params: VIDEOS_TAB,
    }),
    signal: AbortSignal.timeout(12000),
  });
  if (!response.ok) return null;
  const data: unknown = await response.json();
  const counts: { subs?: string; videos?: string } = {};
  readCounts(data, counts);
  if (!counts.subs) return null;
  const lockup = firstLockup(data);
  return {
    subs: counts.subs,
    videos: counts.videos,
    upload: lockup ? readUpload(lockup, name) : undefined,
  };
}

async function pool<T>(items: T[], limit: number, worker: (item: T) => Promise<void>) {
  let index = 0;
  async function run() {
    while (index < items.length) {
      const current = items[index];
      index += 1;
      await worker(current);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => run()));
}

export async function loadLive(): Promise<LivePayload> {
  if (cache && Date.now() - cache.at < CACHE_MS) return cache.data;
  const tracked = new Set(uploads.map((upload) => upload.channel));
  const channels: LivePayload["channels"] = {};
  const fresh: Upload[] = [];
  const list = [...brand, ...partners].flatMap((channel) => {
    const id = channelIds[channel.handle];
    return id ? [{ ...channel, id }] : [];
  });

  await pool(list, 8, async (channel) => {
    try {
      const result = await readChannel(channel.id, channel.name);
      if (!result) return;
      channels[channel.handle] = { subs: result.subs, videos: result.videos };
      if (result.upload && tracked.has(channel.name)) fresh.push(result.upload);
    } catch {
      return;
    }
  });

  const data = { channels, uploads: fresh };
  if (Object.keys(channels).length > 0) cache = { at: Date.now(), data };
  return data;
}
