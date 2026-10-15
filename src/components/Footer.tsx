import { Link } from "react-router-dom";
import { CHANNEL_URL, brand, partners, youtubeChannel } from "../data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <p className="logo-word">Sastery</p>
          <p>We got you all covered.</p>
          <a href={CHANNEL_URL} target="_blank" rel="noreferrer">
            youtube.com/@sastery
          </a>
        </div>
        <div>
          <p className="footer-label">Brand</p>
          <ul>
            {brand.slice(0, 6).map((channel) => (
              <li key={channel.handle}>
                <a href={youtubeChannel(channel.handle)} target="_blank" rel="noreferrer">
                  {channel.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-label">Partners</p>
          <ul>
            {partners.slice(0, 6).map((channel) => (
              <li key={channel.handle}>
                <a href={youtubeChannel(channel.handle)} target="_blank" rel="noreferrer">
                  {channel.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-label">Portal</p>
          <ul>
            <li>
              <Link to="/channels">Channels</Link>
            </li>
            <li>
              <Link to="/partners">Partners</Link>
            </li>
            <li>
              <Link to="/playlist">Playlists</Link>
            </li>
            <li>
              <Link to="/submit">Submit a track</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-base">
        <p>Joined YouTube Feb 16, 2020. Channel counts are from the public page.</p>
      </div>
    </footer>
  );
}
