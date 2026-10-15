import { uploads } from "../data";
import { useLive, withLiveUploads } from "../live";

export function Catalog() {
  const live = useLive();
  const current = withLiveUploads(uploads, live?.uploads);
  const loop = [...current, ...current];

  return (
    <section className="section" id="catalog">
      <div className="wrap">
        <p className="eyebrow">From the brand channels</p>
        <h2 className="section-title">One latest upload each.</h2>
      </div>
      <div className="marquee">
        <ul className="marquee-track">
          {loop.map((upload, index) => (
            <li key={`${upload.id}-${index}`} aria-hidden={index >= current.length}>
              <a
                className="upload-card"
                href={`https://www.youtube.com/watch?v=${upload.id}`}
                target="_blank"
                rel="noreferrer"
                tabIndex={index >= current.length ? -1 : undefined}
              >
                <img src={`https://i.ytimg.com/vi/${upload.id}/hqdefault.jpg`} alt="" />
                <span>
                  <strong>{upload.title}</strong>
                  <em>
                    {upload.channel} · {upload.views} · {upload.age}
                  </em>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
