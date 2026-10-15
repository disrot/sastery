import { useEffect, useRef, useState } from "react";

function format(value: number, decimals: number) {
  return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString("en-US");
}

export function CountUp({ text }: { text: string }) {
  const match = text.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? Number(match[1]) : null;
  const rest = match ? match[2] : "";
  const decimals = match?.[1].includes(".") ? match[1].split(".")[1].length : 0;
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(target === null ? text : `0${rest}`);

  useEffect(() => {
    if (target === null) return;
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const finish = () => setShown(`${format(target, decimals)}${rest}`);
    if (reduce) {
      finish();
      return;
    }
    const start = () => {
      const began = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - began) / 1100);
        const eased = 1 - (1 - t) ** 3;
        setShown(`${format(target * eased, decimals)}${rest}`);
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        start();
      },
      { threshold: 0.6 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [decimals, rest, target]);

  return (
    <span ref={ref}>
      <span aria-hidden="true">{shown}</span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
