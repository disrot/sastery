import { loadLive } from "../src/youtube-live";

export const maxDuration = 60;

export default async function handler(_request: unknown, response: {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => { json: (body: unknown) => void };
}) {
  try {
    const data = await loadLive();
    response.setHeader("Cache-Control", "public, s-maxage=21600, stale-while-revalidate=86400");
    response.status(200).json(data);
  } catch {
    response.status(200).json({ channels: {}, uploads: [] });
  }
}
