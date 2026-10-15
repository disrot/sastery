import { uploads } from "../data";

export function Catalog() {
  const loop = [...uploads, ...uploads];

  return (
    <section className="section" id="catalog">
      <div className="wrap">
        <p className="eyebrow">From the brand channels</p>
        <h2 className="section-title">One latest upload each.</h2>
        <p className="lede">
          The newest public video from each original brand channel, moving on its own. Pause it by hovering.
        </p>
      </div>
      <div className="marquee">
        <ul className="marquee-track">
          {loop.map((upload, index) => (
            <li key={`${upload.id}-${index}`} aria-hidden={index >= uploads.length}>
              <a
                className="upload-card"
                href={`https://www.youtube.com/watch?v=${upload.id}`}
                target="_blank"
                rel="noreferrer"
                tabIndex={index >= uploads.length ? -1 : undefined}
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
