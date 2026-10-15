import { Link } from "react-router-dom";
import { Arrow } from "./Arrow";

const steps = [
  {
    n: "01",
    title: "Pick the channel",
    copy: "Slap house, sped-up, slowed, mashup, 8D, bass, extended, and the Gem. catalog.",
  },
  {
    n: "02",
    title: "Send the link",
    copy: "A YouTube, Drive, or private link, plus who made it and who should be credited.",
  },
  {
    n: "03",
    title: "Keep the pitch",
    copy: "You get a reference code on this device. A pitch is not an upload.",
  },
];

export function Paths() {
  return (
    <section className="section" id="paths">
      <div className="wrap">
        <p className="eyebrow">For the people behind the edits</p>
        <h2 className="section-title">Two ways into the network.</h2>
        <div className="split">
          <article className="path-card">
            <p className="path-kicker">Artists & editors</p>
            <h3>Reach a brand channel</h3>
            <p>
              The Our Brand row is where a pitch lands. Choose the channel that
              already posts that kind of edit, then open the portal.
            </p>
            <Link className="text-link" to="/submit">
              Submit a track <Arrow />
            </Link>
          </article>
          <article className="path-card">
            <p className="path-kicker">Labels & channels</p>
            <h3>See the partners</h3>
            <p>
              The Our Partners row is already on the channel — 8d., Spedie,
              Let’s Latin, 1Hr Trend, and the rest.
            </p>
            <Link className="text-link" to="/partners">
              Explore partners <Arrow />
            </Link>
          </article>
        </div>
        <ol className="steps">
          {steps.map((step) => (
            <li key={step.n}>
              <span>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
