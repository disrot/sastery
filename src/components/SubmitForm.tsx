import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { brand } from "../data";

const STORAGE_KEY = "sastery-submissions";

type Submission = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  project: string;
  title: string;
  link: string;
  channel: string;
  intent: string;
  notes: string;
};

type Field =
  | "name"
  | "email"
  | "project"
  | "title"
  | "link"
  | "channel"
  | "intent"
  | "rights";

const empty = {
  name: "",
  email: "",
  project: "",
  title: "",
  link: "",
  channel: brand[0]?.name ?? "",
  intent: "",
  notes: "",
  rights: false,
};

function loadDesk(): Submission[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Submission[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function validate(values: typeof empty) {
  const errors: Partial<Record<Field, string>> = {};
  if (!values.name.trim()) errors.name = "Add your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Add a real email.";
  }
  if (!values.project.trim()) errors.project = "Add the artist or project.";
  if (!values.title.trim()) errors.title = "Add the track title.";
  try {
    const url = new URL(values.link.trim());
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      errors.link = "Use an http or https link.";
    }
  } catch {
    errors.link = "Add a link to the audio or video.";
  }
  if (!values.channel) errors.channel = "Pick a brand channel.";
  if (values.intent !== "Promote" && values.intent !== "Playlist listing") {
    errors.intent = "Choose promote or playlist listing.";
  }
  if (!values.rights) errors.rights = "Confirm you have the rights to submit this.";
  return errors;
}

export function SubmitForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [desk, setDesk] = useState<Submission[]>([]);
  const [latest, setLatest] = useState<Submission | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setDesk(loadDesk());
  }, []);

  function update<K extends keyof typeof empty>(key: K, value: (typeof empty)[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    const first = Object.keys(nextErrors)[0];
    if (first) {
      document.getElementById(first)?.focus();
      return;
    }
    const submission: Submission = {
      id: `SAST-${crypto.randomUUID().slice(0, 6).toUpperCase()}`,
      createdAt: new Date().toISOString(),
      name: values.name.trim(),
      email: values.email.trim(),
      project: values.project.trim(),
      title: values.title.trim(),
      link: values.link.trim(),
      channel: values.channel,
      intent: values.intent,
      notes: values.notes.trim(),
    };
    const next = [submission, ...desk];
    setDesk(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setLatest(submission);
    setValues(empty);
    setCopied(false);
  }

  function remove(id: string) {
    const next = desk.filter((item) => item.id !== id);
    setDesk(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    if (latest?.id === id) setLatest(null);
  }

  async function copyLatest() {
    if (!latest) return;
    const text = [
      latest.id,
      `${latest.project} — ${latest.title}`,
      latest.intent,
      `For ${latest.channel}`,
      latest.link,
      `${latest.name} <${latest.email}>`,
      latest.notes,
    ]
      .filter(Boolean)
      .join("\n");
    await navigator.clipboard.writeText(text);
    setCopied(true);
  }

  return (
    <section className="section portal" id="submit">
      <div className="wrap">
        <div className="portal-grid">
          <div>
            <p className="eyebrow">Submission portal</p>
            <h2 className="section-title">Send a track into the network.</h2>
            <p className="lede">
              File a pitch for one of the brand channels. You get a reference
              code, and the pitch stays on this device until a desk is connected.
            </p>
            <ul className="fine-print">
              <li>Choose promote or playlist listing. Nothing is uploaded from this form.</li>
              <li>Only submit audio you have the rights to share.</li>
              <li>Counts and channels match the public @sastery page.</li>
            </ul>
          </div>

          {latest ? (
            <div className="form-card success" role="status">
              <p className="eyebrow">Pitch filed</p>
              <h3>{latest.id}</h3>
              <p>
                {latest.project} — {latest.title}
              </p>
              <p className="meta">
                {latest.intent} for {latest.channel}
              </p>
              <div className="success-actions">
                <button className="btn btn-solid" type="button" onClick={copyLatest}>
                  {copied ? "Copied" : "Copy the pitch"}
                </button>
                <button className="btn btn-line" type="button" onClick={() => setLatest(null)}>
                  Submit another
                </button>
              </div>
            </div>
          ) : (
            <form className="form-card" onSubmit={onSubmit} noValidate>
              <div className="fields">
                <Field label="Your name" id="name" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={(event) => update("name", event.target.value)}
                  />
                </Field>
                <Field label="Email" id="email" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(event) => update("email", event.target.value)}
                  />
                </Field>
                <Field label="Artist or project" id="project" error={errors.project}>
                  <input
                    id="project"
                    name="project"
                    value={values.project}
                    onChange={(event) => update("project", event.target.value)}
                  />
                </Field>
                <Field label="Track title" id="title" error={errors.title}>
                  <input
                    id="title"
                    name="title"
                    value={values.title}
                    onChange={(event) => update("title", event.target.value)}
                  />
                </Field>
                <Field label="Link to the audio" id="link" error={errors.link} wide>
                  <input
                    id="link"
                    name="link"
                    type="url"
                    placeholder="https://"
                    value={values.link}
                    onChange={(event) => update("link", event.target.value)}
                  />
                </Field>
                <Field label="Brand channel" id="channel" error={errors.channel}>
                  <select
                    id="channel"
                    name="channel"
                    value={values.channel}
                    onChange={(event) => update("channel", event.target.value)}
                  >
                    {[...brand]
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((channel) => (
                      <option key={channel.handle} value={channel.name}>
                        {channel.name}
                      </option>
                    ))}
                  </select>
                </Field>
                <div id="intent" tabIndex={-1} className="field wide intent-block">
                  <p id="intent-label" className="intent-label">
                    What should we do with it?
                  </p>
                  <div className="intent-grid" role="radiogroup" aria-labelledby="intent-label">
                    {(
                      [
                        ["Promote", "Push the track through a brand channel."],
                        ["Playlist listing", "Ask for a place on a Sastery playlist."],
                      ] as const
                    ).map(([intent, copy]) => (
                      <label key={intent} className="intent-card">
                        <input
                          type="radio"
                          name="intent"
                          value={intent}
                          checked={values.intent === intent}
                          onChange={() => update("intent", intent)}
                        />
                        <strong>{intent}</strong>
                        <span>{copy}</span>
                      </label>
                    ))}
                  </div>
                  {errors.intent ? <small className="field-error">{errors.intent}</small> : null}
                </div>
                <Field label="Credits and notes" id="notes" wide>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={values.notes}
                    onChange={(event) => update("notes", event.target.value)}
                  />
                </Field>
              </div>
              <label className={errors.rights ? "check invalid" : "check"}>
                <input
                  id="rights"
                  type="checkbox"
                  checked={values.rights}
                  onChange={(event) => update("rights", event.target.checked)}
                />
                <span>I have the rights to submit this track for review.</span>
              </label>
              {errors.rights ? <p className="field-error">{errors.rights}</p> : null}
              <button className="btn btn-solid submit-btn" type="submit">
                File the pitch
              </button>
            </form>
          )}
        </div>

        <div className="desk">
          <div className="section-head">
            <div>
              <h3>Pitches on this browser</h3>
              <p className="lede">
                Saved locally. Clearing site data removes them. Nothing is emailed from here.
              </p>
            </div>
          </div>
          {desk.length === 0 ? (
            <p className="empty">No pitches saved on this browser yet.</p>
          ) : (
            <ul className="desk-list">
              {desk.map((item) => (
                <li key={item.id}>
                  <div>
                    <strong>{item.id}</strong>
                    <span>
                      {item.project} — {item.title}
                    </span>
                    <em>
                      {item.intent ? `${item.intent} · ` : ""}
                      {item.channel} ·{" "}
                      {new Date(item.createdAt).toLocaleString()}
                    </em>
                  </div>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    Open link
                  </a>
                  <button type="button" onClick={() => remove(item.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  error,
  wide,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <label className={wide ? "field wide" : "field"} htmlFor={id}>
      <span>{label}</span>
      {children}
      {error ? <small className="field-error">{error}</small> : null}
    </label>
  );
}
