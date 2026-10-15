import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Arrow } from "./Arrow";

export function Hero() {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) video.current?.pause();
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-media" aria-hidden="true">
        <video
          ref={video}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/1015.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
      </div>
      <div className="wrap hero-copy">
        <p className="eyebrow">YouTube network · @sastery</p>
        <h1>
          <span className="hero-line">
            Sastery <span className="mint">portal</span>
          </span>
          <span className="hero-line hero-pills">
            for{" "}
            <Link className="pill" to="/channels">
              artists <Arrow />
            </Link>
            <span className="amp">&</span>
            <Link className="pill" to="/partners">
              partners <Arrow />
            </Link>
          </span>
        </h1>
        <p className="hero-tag">We got you all covered.</p>
        <p className="lede">
          Brand channels and partners, biggest audiences first. This is the
          door for a new track.
        </p>
        <div className="hero-panel">
          <div>
            <p className="hero-panel-title">Send a track into the network.</p>
            <p className="hero-panel-copy">
              Pick a brand channel, share the link, and keep a copy of the pitch.
            </p>
          </div>
          <Link className="btn btn-solid" to="/submit">
            Open the portal
          </Link>
        </div>
      </div>
    </section>
  );
}
