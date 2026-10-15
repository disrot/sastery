import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CHANNEL_URL } from "../data";

const links = [
  { to: "/channels", label: "Channels" },
  { to: "/partners", label: "Partners" },
  { to: "/playlist", label: "Playlists" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [avatarOk, setAvatarOk] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  return (
    <header className="nav">
      <div className="wrap nav-bar">
        <NavLink className="logo" to="/" onClick={() => setOpen(false)}>
          <span className="mark">
            {avatarOk ? (
              <img src="/logo.png" alt="" onError={() => setAvatarOk(false)} />
            ) : (
              "S"
            )}
          </span>
          <span>Sastery</span>
        </NavLink>
        <nav className={open ? "nav-links open" : "nav-links"} aria-label="Primary">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <NavLink className="btn btn-solid nav-cta-mobile" to="/submit" onClick={() => setOpen(false)}>
            Submit a track
          </NavLink>
        </nav>
        <NavLink className="btn btn-line nav-cta" to="/submit">
          Submit a track
        </NavLink>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
      <a className="sr-only" href={CHANNEL_URL}>
        Sastery on YouTube
      </a>
    </header>
  );
}
