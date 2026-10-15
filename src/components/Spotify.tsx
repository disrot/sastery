import type { SpotifyPlaylist } from "../network";

export function SpotifyGrid({
  playlists,
  tall,
}: {
  playlists: SpotifyPlaylist[];
  tall?: boolean;
}) {
  return (
    <ul className={tall ? "spotify-grid tall" : "spotify-grid"}>
      {playlists.map((playlist) => (
        <li key={playlist.id}>
          <iframe
            title={playlist.title}
            src={`https://open.spotify.com/embed/playlist/${playlist.id}?utm_source=generator&theme=0`}
            width="100%"
            height={tall ? 352 : 152}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <a
            className="text-link"
            href={`https://open.spotify.com/playlist/${playlist.id}`}
            target="_blank"
            rel="noreferrer"
          >
            Open {playlist.title} on Spotify
          </a>
        </li>
      ))}
    </ul>
  );
}
