import { Reveal } from "./ui";

const orgs = [
  { name: "Meridian Health", cls: "font-display font-bold" },
  { name: "ST. AURELIA", cls: "font-semibold tracking-[0.28em]" },
  { name: "NorthPeak Clinics", cls: "font-display font-semibold italic" },
  { name: "Vitalis Group", cls: "font-bold tracking-wide" },
  { name: "CarePoint Post-Acute", cls: "font-display font-medium" },
  { name: "HELIX MEDICAL", cls: "font-semibold tracking-[0.2em]" },
  { name: "Aurora Rehab Network", cls: "font-display font-semibold" },
  { name: "Ubuntu Care Alliance", cls: "font-medium tracking-wider" },
];

export default function LogoMarquee() {
  const row = [...orgs, ...orgs];
  return (
    <section aria-label="Trusted by leading care organisations" className="relative bg-ink-950 pb-20 pt-2 sm:pb-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.24em] text-slate-500">
            Trusted by 240+ hospitals, clinics &amp; post-acute networks
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div className="mask-fade-x mt-9 overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-16 pr-16 hover:[animation-play-state:paused]">
              {row.map((o, i) => (
                <span
                  key={`${o.name}-${i}`}
                  aria-hidden={i >= orgs.length}
                  className={`whitespace-nowrap text-[15px] text-slate-500 transition-colors duration-400 hover:text-pulse-200 ${o.cls}`}
                >
                  {o.name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
