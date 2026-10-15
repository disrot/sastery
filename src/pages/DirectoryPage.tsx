import { useEffect } from "react";
import { ChannelSection } from "../components/Channels";
import type { Channel } from "../data";

export function DirectoryPage({
  title,
  eyebrow,
  lede,
  channels,
}: {
  title: string;
  eyebrow: string;
  lede: string;
  channels: Channel[];
}) {
  useEffect(() => {
    document.title = `${title} — Sastery`;
  }, [title]);

  return (
    <ChannelSection eyebrow={eyebrow} title={title} lede={lede} channels={channels} />
  );
}
