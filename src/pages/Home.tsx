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
        lede="Sorted by subscriber count. Six up front, the rest waits on the channels page."
        channels={brand}
        moreHref="/channels"
        moreLabel="All brand channels"
      />
      <Catalog />
      <section className="section" id="playlist">
        <div className="wrap">
          <p className="eyebrow">Spotify</p>
          <h2 className="section-title">Playlists from the profile.</h2>
          <p className="lede">
            Four public playlists from the Sastery Spotify account: sped up, 8D, house, and Latin.
          </p>
          <SpotifyGrid playlists={spotifyPlaylists} />
          <p className="more-link">
            <Link to="/playlist">Open the playlist page</Link>
          </p>
        </div>
      </section>
      <ChannelSection
        id="partners"
        eyebrow="Our partners"
        title="The bigger numbers first."
        lede="The partner row, led by 1Hr Trend. Six shown here. The rest is one page away."
        channels={partners}
        moreHref="/partners"
        moreLabel="All partners"
      />
      <Faq />
    </>
  );
}
