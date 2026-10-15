import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { youtubeChannel, type Channel } from "../data";
import { Arrow } from "./Arrow";
import { CountUp } from "./CountUp";

function Avatar({ src, name }: { src: string; name: string }) {
  const [ok, setOk] = useState(true);
  const initials = name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase() || "S";
  if (!ok) return <span className="avatar fallback">{initials}</span>;
  return <img className="avatar" src={src} alt="" onError={() => setOk(false)} />;
}

function ChannelCard({ channel, muted = false }: { channel: Channel; muted?: boolean }) {
  const body = (
    <>
      <Avatar src={channel.avatar} name={channel.name} />
      <div className="channel-copy">
        <div className="channel-title">
          <h3>{channel.name}</h3>
          {channel.lane ? <span className="lane">{channel.lane}</span> : null}
        </div>
        <p className="handle">{channel.handle}</p>
        <p className="meta">
          <CountUp text={channel.subs.replace(" subscribers", "")} /> subscribers
          {channel.videos ? (
            <>
              <span aria-hidden="true"> · </span>
              <CountUp text={channel.videos.replace(" videos", "")} /> videos
            </>
          ) : null}
        </p>
        {channel.about ? <p className="about">{channel.about}</p> : null}
      </div>
      <span className="open">
        Open <Arrow />
      </span>
    </>
  );
  if (muted) return <div className="channel-card is-muted">{body}</div>;
  return (
    <a className="channel-card" href={youtubeChannel(channel.handle)} target="_blank" rel="noreferrer">
      {body}
    </a>
  );
}

export function ChannelSection({
  id,
  eyebrow,
  title,
  lede,
  channels,
  moreHref,
  moreLabel,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  lede: string;
  channels: Channel[];
  moreHref?: string;
  moreLabel?: string;
}) {
  const [query, setQuery] = useState("");
  const preview = Boolean(moreHref);
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q || preview) return channels;
    return channels.filter((channel) =>
      `${channel.name} ${channel.handle} ${channel.lane ?? ""} ${channel.about ?? ""}`
        .toLowerCase()
        .includes(q),
    );
  }, [channels, preview, query]);

  const clear = preview ? visible.slice(0, 6) : visible;
  const faded = preview ? visible.slice(6, 8) : [];

  return (
    <section className="section" id={id}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="section-title">{title}</h2>
            <p className="lede">{lede}</p>
          </div>
          <p className="stat">
            <strong>
              <CountUp text={String(channels.length)} />
            </strong>
            <span>channels</span>
          </p>
        </div>
        {preview ? null : (
          <label className="search">
            <span className="sr-only">Search {title}</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name or handle"
              type="search"
            />
          </label>
        )}
        {clear.length === 0 ? (
          <p className="empty">No channel matches “{query.trim()}”.</p>
        ) : (
          <ul className="channel-grid">
            {clear.map((channel) => (
              <li key={channel.handle}>
                <ChannelCard channel={channel} />
              </li>
            ))}
          </ul>
        )}
        {faded.length > 0 && moreHref ? (
          <div className="fade-row">
            <ul className="channel-grid" aria-hidden="true">
              {faded.map((channel) => (
                <li key={channel.handle}>
                  <ChannelCard channel={channel} muted />
                </li>
              ))}
            </ul>
            <Link className="btn btn-line fade-cta" to={moreHref}>
              {moreLabel} <Arrow />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
