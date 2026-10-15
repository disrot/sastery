import { useState } from "react";
import { faqs } from "../data";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section" id="faq">
      <div className="wrap faq-grid">
        <div>
          <p className="eyebrow">Questions</p>
          <h2 className="section-title">Before you send anything.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => {
            const expanded = open === index;
            return (
              <div key={item.q} className={expanded ? "faq is-open" : "faq"}>
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? null : index)}
                >
                  {item.q}
                  <span aria-hidden="true">{expanded ? "–" : "+"}</span>
                </button>
                <div className="faq-panel" aria-hidden={!expanded}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
