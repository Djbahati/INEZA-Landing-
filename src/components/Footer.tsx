import type { SVGProps } from "react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import Logo from "./Logo";

const socialSvgProps = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
} satisfies SVGProps<SVGSVGElement>;

const LinkedinIcon = () => (
  <svg {...socialSvgProps} className="h-4 w-4">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

const XIcon = () => (
  <svg {...socialSvgProps} className="h-3.5 w-3.5">
    <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41Z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg {...socialSvgProps} className="h-4 w-4">
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
  </svg>
);

const GithubIcon = () => (
  <svg {...socialSvgProps} className="h-4 w-4">
    <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.11 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.38.82 1.11.82 2.24v3.32c0 .32.22.7.82.58A12 12 0 0 0 12 .3Z" />
  </svg>
);

const cols: { h: string; links: { label: string; href: string }[] }[] = [
  {
    h: "Platform",
    links: [
      { label: "AI Triage Copilot", href: "#platform" },
      { label: "Ambient Notes", href: "#platform" },
      { label: "Smart Scheduling", href: "#platform" },
      { label: "Post-Care Journeys", href: "#platform" },
      { label: "Command Center", href: "#platform" },
    ],
  },
  {
    h: "Solutions",
    links: [
      { label: "Hospitals", href: "#solutions" },
      { label: "Clinics", href: "#solutions" },
      { label: "Post-Health", href: "#solutions" },
      { label: "Health Networks", href: "#solutions" },
      { label: "Public Health", href: "#solutions" },
    ],
  },
  {
    h: "Company",
    links: [
      { label: "About INEZA", href: "#top" },
      { label: "Outcomes", href: "#outcomes" },
      { label: "Customers", href: "#customers" },
      { label: "Partners", href: "#customers" },
      { label: "Contact", href: "#cta" },
    ],
  },
  {
    h: "Resources",
    links: [
      { label: "Security & Trust", href: "#platform" },
      { label: "Compliance & FAQ", href: "#faq" },
      { label: "12-Month ROI Study", href: "#outcomes" },
      { label: "Pricing", href: "#pricing" },
      { label: "System Status", href: "#outcomes" },
    ],
  },
];

const socials = [
  { icon: LinkedinIcon, label: "INEZA COMPANY on LinkedIn", href: "https://www.linkedin.com/company/ineza-company" },
  { icon: XIcon, label: "INEZA COMPANY on X", href: "https://x.com/inezacompany" },
  { icon: YoutubeIcon, label: "INEZA COMPANY on YouTube", href: "https://www.youtube.com/@inezacompany" },
  { icon: GithubIcon, label: "INEZA COMPANY on GitHub", href: "https://github.com/ineza-company" },
];

const badges = ["HIPAA-Ready", "SOC 2 Type II", "ISO 27001", "GDPR", "FHIR R4"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 pt-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pulse-400/60 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-pulse-600/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-slate-400">
              INEZA COMPANY builds INEZA AI SYSTEM — one intelligent platform for
              hospitals, clinics and post-health care. The best system in
              health, for every moment of care.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-400 hover:-translate-y-0.5 hover:border-pulse-400/40 hover:text-pulse-300"
                >
                  <s.icon />
                </a>
              ))}
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[11.5px] font-semibold text-slate-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pulse-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-pulse-400" />
              </span>
              All systems operational · 99.99% uptime
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {cols.map((c) => (
              <nav key={c.h} aria-label={c.h}>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">
                  {c.h}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="group inline-flex items-center gap-1 text-[13px] font-medium text-slate-400 transition-colors duration-300 hover:text-pulse-300"
                      >
                        {l.label}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 border-t border-white/[0.07] py-6">
          <ShieldCheck className="h-4 w-4 text-pulse-400" />
          {badges.map((b) => (
            <span
              key={b}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider text-slate-400"
            >
              {b}
            </span>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.07] py-7 sm:flex-row">
          <p className="text-[12px] font-medium text-slate-500">
            © 2026 INEZA COMPANY. All rights reserved.
          </p>
          <p className="text-[12px] font-medium text-slate-500">
            INEZA AI SYSTEM —{" "}
            <em className="text-grad font-serif text-[13.5px] italic">
              the best system in health.
            </em>
          </p>
        </div>
      </div>
    </footer>
  );
}
