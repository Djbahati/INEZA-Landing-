import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";

/* ---------------- In-view hook ---------------- */
export function useInView<T extends HTMLElement = HTMLDivElement>(opts?: {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const once = opts?.once !== false;
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      {
        threshold: opts?.threshold ?? 0.15,
        rootMargin: opts?.rootMargin ?? "0px 0px -6% 0px",
      }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}

/* ---------------- Scroll reveal wrapper ---------------- */
export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
  scale = 1,
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  scale?: number;
  style?: CSSProperties;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={
        {
          "--ry": `${y}px`,
          "--rs": scale,
          transitionDelay: `${delay}ms`,
          ...style,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

/* ---------------- Section tag pill ---------------- */
export function SectionTag({
  children,
  dark = false,
  className = "",
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] ${
        dark
          ? "border-white/15 bg-white/5 text-pulse-300"
          : "border-pulse-600/20 bg-pulse-500/[0.08] text-pulse-700"
      } ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pulse-400 opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-pulse-500" />
      </span>
      {children}
    </span>
  );
}

/* ---------------- Animated counter ---------------- */
export function Counter({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 2000,
  className = "",
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.5 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(2, -10 * p);
      setVal(to * (p === 1 ? 1 : eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  const formatted = val.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

/* ---------------- Spotlight card ---------------- */
export function SpotCard({
  children,
  className = "",
  spot,
}: {
  children: ReactNode;
  className?: string;
  spot?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`spot-card ${className}`}
      style={spot ? ({ "--spot": spot } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}

/* ---------------- Primary button ---------------- */
export function PrimaryButton({
  children,
  href = "#cta",
  className = "",
  dark = false,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <a
      href={href}
      className={`btn-sheen group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-tight transition-all duration-500 hover:-translate-y-0.5 active:translate-y-0 ${
        dark
          ? "bg-gradient-to-r from-pulse-300 via-pulse-400 to-cyan-300 text-ink-950 shadow-[0_8px_32px_-8px_rgb(45_212_191/0.55)] hover:shadow-[0_16px_48px_-8px_rgb(45_212_191/0.6)]"
          : "bg-gradient-to-r from-pulse-600 to-cyan-600 text-white shadow-[0_8px_32px_-8px_rgb(13_148_136/0.5)] hover:shadow-[0_16px_48px_-8px_rgb(13_148_136/0.55)]"
      } ${className}`}
    >
      {children}
    </a>
  );
}
