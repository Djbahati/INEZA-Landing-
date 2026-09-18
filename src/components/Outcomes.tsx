import { Cable, BrainCircuit, TrendingUp } from "lucide-react";
import { Counter, Reveal, SectionTag, SpotCard } from "./ui";

const stats = [
  { to: 42, prefix: "−", suffix: "%", label: "Documentation time", sub: "notes drafted ambiently, signed in seconds" },
  { to: 31, prefix: "−", suffix: "%", label: "30-day readmissions", sub: "post-care journeys catch risk early" },
  { to: 18, prefix: "+", suffix: "%", label: "Patient throughput", sub: "flow prediction unblocks bottlenecks" },
  { to: 99.99, decimals: 2, suffix: "%", label: "Platform uptime", sub: "backed by an enforceable SLA" },
];

const steps = [
  {
    icon: Cable,
    n: "01",
    title: "Connect",
    desc: "Bidirectional EHR, device and scheduling integrations live in days — Epic, Oracle Health, MEDITECH, OpenMRS. No rip-and-replace, ever.",
  },
  {
    icon: BrainCircuit,
    n: "02",
    title: "Assist",
    desc: "Copilots triage, draft and schedule inside your existing workflow. Every output arrives with rationale — clinicians always sign off.",
  },
  {
    icon: TrendingUp,
    n: "03",
    title: "Improve",
    desc: "Every action feeds the outcome loop. Boards see ROI weekly — wait times, readmissions, staff hours recovered — not yearly.",
  },
];

export default function Outcomes() {
  return (
    <section id="outcomes" className="noise relative overflow-hidden bg-ink-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-32 top-10 h-[26rem] w-[26rem] animate-aurora-b rounded-full bg-pulse-600/[0.14] blur-[130px]" />
        <div className="absolute -right-24 bottom-0 h-[24rem] w-[24rem] animate-aurora-a rounded-full bg-cyan-500/[0.1] blur-[120px]" />
        <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent_80%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionTag dark>Outcomes</SectionTag>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.025em] text-white sm:text-5xl">
              Numbers your board
              <br />
              will{" "}
              <em className="text-grad font-serif font-normal italic">actually</em> care about.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-[15.5px] leading-relaxed text-slate-400">
              Median results across the INEZA network of hospitals, clinics and
              post-acute partners in a 12-month independent study.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3.5 lg:grid-cols-4 lg:gap-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 110}>
              <SpotCard
                spot="rgb(45 212 191 / 0.18)"
                className="lift h-full rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm hover:border-pulse-400/30 sm:p-7"
              >
                <div className="relative">
                  <Counter
                    to={s.to}
                    decimals={s.decimals ?? 0}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    className="text-grad font-display text-4xl font-bold tracking-tight sm:text-[2.75rem]"
                  />
                  <p className="mt-2.5 text-[13.5px] font-bold text-white">{s.label}</p>
                  <p className="mt-1 text-[12px] leading-relaxed text-slate-500">{s.sub}</p>
                </div>
              </SpotCard>
            </Reveal>
          ))}
        </div>

        {/* How it works */}
        <div className="relative mt-20">
          <div
            className="absolute left-[2.1rem] right-[2.1rem] top-10 hidden h-px bg-gradient-to-r from-transparent via-pulse-500/40 to-transparent lg:block"
            aria-hidden
          />
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 140}>
                <div className="group relative text-center lg:text-left">
                  <div className="relative mx-auto grid h-20 w-20 place-items-center lg:mx-0">
                    <span className="absolute inset-0 rounded-3xl border border-pulse-400/25 bg-pulse-400/[0.07] transition-all duration-500 group-hover:rotate-6 group-hover:border-pulse-400/50" />
                    <s.icon className="relative h-8 w-8 text-pulse-300" strokeWidth={1.8} />
                    <span className="absolute -right-2 -top-2 rounded-full bg-gradient-to-r from-pulse-400 to-cyan-400 px-2 py-0.5 font-display text-[10px] font-bold text-ink-950">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-white">{s.title}</h3>
                  <p className="mx-auto mt-2.5 max-w-sm text-[13.5px] leading-relaxed text-slate-400 lg:mx-0">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
