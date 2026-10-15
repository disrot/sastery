import { Link } from "react-router-dom";
import { brand, partners, spotifyPlaylists } from "../network";
import { Catalog } from "../components/Catalog";
import { ChannelSection } from "../components/Channels";
import { Faq } from "../components/Faq";
import { Hero } from "../components/Hero";
import { Paths } from "../components/Paths";
import { SpotifyGrid } from "../components/Spotify";

export function Home() {
  return (
    <>
      <Hero />
      <Paths />
      <ChannelSection
        id="brand"
        eyebrow="Our brand"
        title="The channels under Sastery."
        lede=""
        channels={brand}
        moreHref="/channels"
        moreLabel="All brand channels"
      />
      <Catalog />
      <section className="section" id="playlist">
        <div className="wrap">
          <p className="eyebrow">Spotify</p>
          <h2 className="section-title">Never-ending playlists.</h2>
          <SpotifyGrid playlists={spotifyPlaylists} />
          <p className="more-link">
            <Link className="btn btn-line" to="/playlist">
              Open the playlist page
            </Link>
          </p>
        </div>
      </section>
      <ChannelSection
        id="partners"
        eyebrow="Our partners"
        title="Our support systems."
        lede=""
        channels={partners}
        moreHref="/partners"
        moreLabel="All partners"
      />
      <Faq />
    </>
  );
}
