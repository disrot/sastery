import { useEffect } from "react";
import { allPlaylists } from "../network";
import { SpotifyGrid } from "../components/Spotify";

export function PlaylistPage() {
  useEffect(() => {
    document.title = "Playlists — Sastery";
  }, []);

  return (
    <section className="section page-top">
      <div className="wrap">
        <p className="eyebrow">Spotify</p>
        <h2 className="section-title">Playlists.</h2>
        <p className="lede">
          Every public playlist on the Sastery Spotify profile. The home page shows four. This page shows the full shelf.
        </p>
        <SpotifyGrid playlists={allPlaylists} />
      </div>
    </section>
  );
}
