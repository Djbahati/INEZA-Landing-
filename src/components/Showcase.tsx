import {
  ArrowRight,
  BedDouble,
  CheckCircle2,
  HeartPulse,
  Radio,
  Stethoscope,
} from "lucide-react";
import { Reveal, SectionTag, PrimaryButton } from "./ui";

const solutions = [
  {
    icon: BedDouble,
    title: "Hospitals",
    desc: "Unclog the ED, orchestrate beds and give every ward a real-time pulse — without adding a single screen to a nurse's round.",
    stat: "−38% ED boarding time",
  },
  {
    icon: Stethoscope,
    title: "Clinics",
    desc: "From front desk to follow-up: scheduling, notes and billing-ready documentation that runs itself between appointments.",
    stat: "+2.4 hrs back per clinician, daily",
  },
  {
    icon: HeartPulse,
    title: "Post-Health & Home Recovery",
    desc: "Journeys that call, text and nudge patients after discharge — escalating red flags to your team before they become readmissions.",
    stat: "−31% 30-day readmissions",
  },
];

export default function Showcase() {
  return (
    <section id="solutions" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="grid-lines-light pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Visual */}
          <Reveal y={40} scale={0.975} className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-pulse-500/15 via-cyan-400/10 to-transparent blur-2xl" aria-hidden />
              <div className="group overflow-hidden rounded-[2rem] shadow-[0_40px_90px_-30px_rgb(4_24_29/0.45)] ring-1 ring-ink-950/10">
                <img
                  src="images/showcase-clinic.jpg"
                  alt="A nurse in a modern hospital ward reviewing the INEZA AI dashboard on a tablet"
                  width={1536}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3.4] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
                />
              </div>

              {/* Floating glass cards */}
              <div className="absolute -right-3 top-8 animate-float sm:-right-6">
                <div className="glass-dark rounded-2xl !border-white/25 !bg-ink-950/70 px-4 py-3 shadow-2xl">
                  <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-pulse-300">
                    <Radio className="h-3 w-3 animate-pulse" /> Live triage
                  </p>
                  <p className="mt-1 text-[13px] font-bold text-white">
                    Mercy Ward · cleared in <span className="text-pulse-300">38s</span>
                  </p>
                </div>
              </div>
              <div className="absolute -left-3 bottom-10 animate-float-delayed sm:-left-6">
                <div className="rounded-2xl border border-white/60 bg-white/85 px-4 py-3 shadow-2xl backdrop-blur-xl">
                  <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-pulse-700">
                    <CheckCircle2 className="h-3 w-3" /> Post-care journey
                  </p>
                  <p className="mt-1 text-[13px] font-bold text-ink-950">
                    Day-7 check-in sent to Aline M.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <SectionTag>Solutions</SectionTag>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.025em] text-ink-950 sm:text-5xl">
                From the ICU
                <br />
                to the{" "}
                <em className="text-grad-deep font-serif font-normal italic">living room.</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-slate-500">
                Care doesn't end at the hospital door — and neither does INEZA.
                One system carries context through every setting, so nothing and
                no one falls through the cracks.
              </p>
            </Reveal>

            <div className="mt-9 space-y-2.5">
              {solutions.map((s, i) => (
                <Reveal key={s.title} delay={260 + i * 110}>
                  <div className="group flex gap-4 rounded-2xl border border-transparent p-4 transition-all duration-500 hover:-translate-y-1 hover:border-mist-200 hover:bg-mist-50 hover:shadow-[0_18px_44px_-18px_rgb(13_148_136/0.22)] sm:gap-5 sm:p-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-pulse-500 to-cyan-600 text-white shadow-lg shadow-pulse-600/25 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                      <s.icon className="h-5.5 w-5.5" strokeWidth={2.1} />
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="font-display text-[16px] font-bold tracking-tight text-ink-950">
                          {s.title}
                        </h3>
                        <span className="rounded-full bg-pulse-500/10 px-2.5 py-0.5 text-[10.5px] font-bold text-pulse-700 ring-1 ring-pulse-500/20">
                          {s.stat}
                        </span>
                      </div>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-500">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={560}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <PrimaryButton href="#cta">
                  Find your fit
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </PrimaryButton>
                <p className="text-[12.5px] font-medium text-slate-400">
                  Free 30-day clinical pilot · measured, not promised
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
