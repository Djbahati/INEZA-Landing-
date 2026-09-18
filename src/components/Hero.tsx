import { ArrowRight, BadgeCheck, CalendarCheck2, ShieldCheck, TrendingDown } from "lucide-react";
import Dashboard from "./Dashboard";
import { Reveal, SectionTag } from "./ui";

function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_65%_at_50%_-10%,rgb(15_118_110/0.32),transparent_62%)]" />
      <div className="absolute -top-32 left-[8%] h-[30rem] w-[30rem] animate-aurora-a rounded-full bg-pulse-500/[0.16] blur-[130px]" />
      <div className="absolute right-[4%] top-[22%] h-[26rem] w-[26rem] animate-aurora-b rounded-full bg-cyan-500/[0.13] blur-[120px]" />
      <div className="absolute bottom-[-20%] left-[30%] h-[24rem] w-[36rem] rounded-full bg-pulse-700/[0.14] blur-[140px]" />
      <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_38%,black,transparent_78%)]" />
    </div>
  );
}

const trust = [
  { icon: ShieldCheck, label: "HIPAA-ready" },
  { icon: BadgeCheck, label: "SOC 2 Type II" },
  { icon: ShieldCheck, label: "ISO 27001" },
];

export default function Hero() {
  return (
    <section id="top" className="noise relative overflow-hidden bg-ink-950 pb-10 sm:pb-14">
      <Aurora />

      <div className="relative z-10 mx-auto max-w-6xl px-5 pt-32 sm:px-8 sm:pt-40 lg:pt-44">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Copy */}
          <div className="lg:col-span-5">
            <Reveal>
              <a href="#platform" className="group inline-block">
                <SectionTag dark className="transition-colors duration-300 hover:border-pulse-400/40">
                  INEZA AI SYSTEM 2.0
                  <span className="h-3 w-px bg-white/20" />
                  <span className="normal-case tracking-normal text-slate-300">
                    Post-Care Journeys are live
                  </span>
                  <ArrowRight className="h-3 w-3 text-pulse-300 transition-transform duration-300 group-hover:translate-x-0.5" />
                </SectionTag>
              </a>
            </Reveal>

            <Reveal delay={110}>
              <h1 className="mt-7 font-display text-[2.65rem] font-bold leading-[1.04] tracking-[-0.03em] text-white sm:text-6xl lg:text-[3.9rem]">
                Every heartbeat.
                <br />
                Every handoff.
                <br />
                One{" "}
                <em className="text-grad font-serif font-normal italic tracking-normal">
                  intelligent
                </em>{" "}
                system.
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-slate-400">
                INEZA AI SYSTEM unifies triage, ambient documentation, scheduling
                and post-care follow-up for hospitals, clinics and home recovery —
                so your teams do more caring and less clicking.
              </p>
            </Reveal>

            <Reveal delay={330}>
              <div className="mt-9 flex flex-wrap items-center gap-3.5">
                <a
                  href="#cta"
                  className="btn-sheen group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pulse-300 via-pulse-400 to-cyan-300 px-7 py-3.5 text-sm font-bold text-ink-950 shadow-[0_10px_40px_-8px_rgb(45_212_191/0.55)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_20px_56px_-8px_rgb(45_212_191/0.65)]"
                >
                  Book a live demo
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#platform"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur transition-all duration-500 hover:border-white/30 hover:bg-white/[0.08]"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-pulse-400/20 ring-1 ring-pulse-400/40 transition-transform duration-500 group-hover:scale-110">
                    <ArrowRight className="h-3 w-3 text-pulse-300 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                  Explore platform
                </a>
              </div>
            </Reveal>

            <Reveal delay={440}>
              <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2.5">
                {trust.map((t) => (
                  <li
                    key={t.label}
                    className="flex items-center gap-2 text-[12.5px] font-medium text-slate-500"
                  >
                    <t.icon className="h-4 w-4 text-pulse-500" />
                    {t.label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Visual */}
          <div className="relative lg:col-span-7">
            <Reveal delay={250} y={44} scale={0.972}>
              <div className="relative">
                <Dashboard />

                {/* Floating chips */}
                <div className="absolute -top-7 right-2 hidden animate-float md:block lg:-right-5">
                  <div className="glass-dark flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-2xl shadow-ink-950/60">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-pulse-400/15 text-pulse-300 ring-1 ring-pulse-400/30">
                      <TrendingDown className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-display text-sm font-bold text-white">
                        −31%
                      </span>
                      <span className="block text-[10px] font-medium text-slate-400">
                        readmission risk
                      </span>
                    </span>
                  </div>
                </div>

                <div className="absolute -bottom-7 left-2 hidden animate-float-delayed md:block lg:-left-6">
                  <div className="glass-dark flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-2xl shadow-ink-950/60">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-400/30">
                      <CalendarCheck2 className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-display text-sm font-bold text-white">
                        12 no-shows
                      </span>
                      <span className="block text-[10px] font-medium text-slate-400">
                        prevented today
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Under-glow */}
            <div
              className="pointer-events-none absolute -bottom-16 left-1/2 -z-10 h-40 w-[80%] -translate-x-1/2 rounded-full bg-pulse-500/25 blur-[100px]"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
