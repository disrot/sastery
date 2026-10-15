import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Channel, Upload } from "./data";
import type { LiveChannel, LivePayload } from "./youtube-live";

const LiveContext = createContext<LivePayload | null>(null);

export function LiveProvider({ children }: { children: ReactNode }) {
  const [live, setLive] = useState<LivePayload | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/youtube", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: LivePayload | null) => {
        if (data?.channels) setLive(data);
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  return <LiveContext.Provider value={live}>{children}</LiveContext.Provider>;
}

export function useLive() {
  return useContext(LiveContext);
}

function subsNumber(label: string) {
  const match = label.replace(/ subscribers/i, "").trim().match(/^([\d.]+)\s*([KMB])?/i);
  if (!match) return 0;
  const value = Number(match[1]);
  const unit = match[2]?.toUpperCase();
  const scale = unit === "B" ? 1_000_000_000 : unit === "M" ? 1_000_000 : unit === "K" ? 1_000 : 1;
  return value * scale;
}

export function withLiveCounts(channels: Channel[], live: Record<string, LiveChannel> | undefined) {
  if (!live) return channels;
  return channels
    .map((channel) => {
      const patch = live[channel.handle];
      if (!patch) return channel;
      return { ...channel, subs: patch.subs, videos: patch.videos || channel.videos };
    })
    .sort((a, b) => subsNumber(b.subs) - subsNumber(a.subs));
}

export function withLiveUploads(current: Upload[], fresh: Upload[] | undefined) {
  if (!fresh?.length) return current;
  const byChannel = new Map(fresh.map((upload) => [upload.channel, upload]));
  return current.map((upload) => byChannel.get(upload.channel) ?? upload);
}
