import {
  Activity,
  ArrowRight,
  CalendarRange,
  Check,
  FileText,
  HeartHandshake,
  ShieldCheck,
  Waypoints,
} from "lucide-react";
import { Reveal, SectionTag, SpotCard } from "./ui";

function IconTile({ icon: Icon, className = "" }: { icon: typeof Activity; className?: string }) {
  return (
    <span
      className={`inline-grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-pulse-500 to-cyan-600 text-white shadow-lg shadow-pulse-600/25 ring-1 ring-white/20 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ${className}`}
    >
      <Icon className="h-5 w-5" strokeWidth={2.2} />
    </span>
  );
}

const card =
  "group relative flex flex-col rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_1px_2px_rgb(4_24_29/0.04)] hover:border-pulse-500/40 hover:shadow-[0_24px_60px_-24px_rgb(13_148_136/0.25)]";

/* ---------- mini visuals ---------- */
function FlowChart() {
  return (
    <div className="relative mt-6 h-36 overflow-hidden rounded-2xl border border-mist-200 bg-mist-50 p-4">
      <div className="flex items-center justify-between text-[10px] font-semibold text-slate-500">
        <span>Predicted patient volume · next 12h</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-pulse-500" /> predicted
          <span className="ml-2 h-1.5 w-1.5 rounded-full bg-slate-300" /> capacity
        </span>
      </div>
      <svg viewBox="0 0 320 96" className="mt-3 h-24 w-full" aria-hidden>
        <defs>
          <linearGradient id="flowFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 70 C 40 66, 55 30, 85 34 S 135 74, 165 58 S 225 10, 255 22 S 305 44, 320 38 L320 96 L0 96 Z"
          fill="url(#flowFill)"
        />
        <path
          d="M0 70 C 40 66, 55 30, 85 34 S 135 74, 165 58 S 225 10, 255 22 S 305 44, 320 38"
          fill="none"
          stroke="#0d9488"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path d="M0 52 H320" stroke="#cbd5e1" strokeWidth="1.4" strokeDasharray="5 6" />
        <circle cx="255" cy="22" r="4" fill="#0d9488" stroke="#fff" strokeWidth="2" />
      </svg>
      <span className="absolute right-3 top-9 rounded-full bg-pulse-600 px-2.5 py-1 text-[9.5px] font-bold text-white shadow-lg shadow-pulse-600/30">
        Surge at 14:00 — 2 staff rebalanced
      </span>
    </div>
  );
}

function TriageMini() {
  const rows = [
    { p: "P1", c: "text-rose-600 bg-rose-500/10 ring-rose-500/25", l: "Chest pain", w: "w-4/5" },
    { p: "P2", c: "text-amber-600 bg-amber-500/10 ring-amber-500/25", l: "High fever", w: "w-3/5" },
    { p: "P3", c: "text-pulse-700 bg-pulse-500/10 ring-pulse-500/25", l: "Sprain", w: "w-2/5" },
  ];
  return (
    <div className="mt-6 space-y-2">
      {rows.map((r) => (
        <div
          key={r.p}
          className={`flex items-center gap-2 rounded-xl bg-mist-50 px-2.5 py-2 ring-1 ring-mist-200`}
        >
          <span className={`rounded-md px-1.5 py-0.5 text-[9px] font-bold ring-1 ${r.c}`}>{r.p}</span>
          <span className="text-[11px] font-medium text-slate-600">{r.l}</span>
          <span
            className={`ml-auto h-1 rounded-full bg-gradient-to-r from-pulse-500 to-cyan-500 transition-all duration-700 ${r.w}`}
          />
        </div>
      ))}
      <p className="pt-1 text-[10px] font-medium text-slate-400">
        Reprioritised 240×/day · rationale attached
      </p>
    </div>
  );
}

function WaveMini() {
  return (
    <div className="mt-6 rounded-2xl border border-mist-200 bg-mist-50 p-4">
      <div className="flex h-8 items-center gap-1" aria-hidden>
        {[5, 9, 14, 22, 12, 26, 17, 8, 20, 11, 6, 15, 23, 10, 7, 13, 18, 9].map((h, i) => (
          <span
            key={i}
            className="w-[3px] origin-center animate-wave rounded-full bg-gradient-to-t from-pulse-600 to-cyan-400"
            style={{ height: `${h}px`, animationDelay: `${i * 0.09}s` }}
          />
        ))}
        <span className="ml-auto rounded-full bg-pulse-500/10 px-2 py-0.5 text-[9px] font-bold text-pulse-700 ring-1 ring-pulse-500/20">
          REC
        </span>
      </div>
      <div className="mt-3 space-y-1.5">
        <span className="block h-1.5 w-11/12 rounded bg-slate-200" />
        <span className="block h-1.5 w-4/5 rounded bg-slate-200" />
        <span className="block h-1.5 w-3/5 rounded bg-pulse-200" />
      </div>
    </div>
  );
}

function JourneyMini() {
  const steps = [
    { d: "Day 0", l: "Discharge", done: true },
    { d: "Day 2", l: "AI check-in", done: true },
    { d: "Day 7", l: "Wound scan", done: true },
    { d: "Day 21", l: "Physio review", done: false },
  ];
  return (
    <div className="relative mt-6 rounded-2xl border border-mist-200 bg-mist-50 p-5">
      <div className="absolute left-8 right-8 top-[2.32rem] h-px bg-mist-300" aria-hidden />
      <div
        className="absolute left-8 top-[2.32rem] h-px w-[52%] bg-gradient-to-r from-pulse-500 to-cyan-500"
        aria-hidden
      />
      <ol className="relative grid grid-cols-4 gap-2">
        {steps.map((s) => (
          <li key={s.d} className="flex flex-col items-center text-center">
            <span
              className={`grid h-6 w-6 place-items-center rounded-full ring-4 ring-mist-50 ${
                s.done
                  ? "bg-gradient-to-br from-pulse-500 to-cyan-600 text-white"
                  : "bg-white text-slate-400 ring-4 ring-mist-50 border border-mist-300"
              }`}
            >
              {s.done ? <Check className="h-3 w-3" strokeWidth={3} /> : <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />}
            </span>
            <span className="mt-2 text-[9.5px] font-bold text-pulse-700">{s.d}</span>
            <span className="text-[10px] font-medium text-slate-500">{s.l}</span>
          </li>
        ))}
      </ol>
      <p className="mt-4 rounded-xl bg-white px-3 py-2 text-[10.5px] font-medium text-slate-600 ring-1 ring-mist-200">
        <span className="font-bold text-pulse-700">SMS · Day 2:</span> “Pain 2/10, meds taken —
        recovery on track.”
      </p>
    </div>
  );
}

function CommandMini() {
  const kpis = [
    { l: "ED wait", v: "9 min", w: "w-[32%]" },
    { l: "Bed turnover", v: "+18%", w: "w-[68%]" },
    { l: "Staff load", v: "Balanced", w: "w-[54%]" },
  ];
  return (
    <div className="mt-6 space-y-2.5">
      {kpis.map((k) => (
        <div key={k.l} className="flex items-center gap-3">
          <span className="w-20 text-[10px] font-semibold text-slate-500">{k.l}</span>
          <span className="h-2 flex-1 overflow-hidden rounded-full bg-mist-200">
            <span
              className={`block h-full rounded-full bg-gradient-to-r from-pulse-500 to-cyan-500 transition-all duration-1000 ${k.w}`}
            />
          </span>
          <span className="w-16 text-right text-[10px] font-bold text-ink-900">{k.v}</span>
        </div>
      ))}
    </div>
  );
}

function SecurityMini() {
  const chips = ["HIPAA", "GDPR", "SOC 2 II", "ISO 27001", "FHIR R4", "HL7"];
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {chips.map((c) => (
        <span
          key={c}
          className="rounded-full bg-mist-100 px-3 py-1.5 text-[10px] font-bold text-slate-600 ring-1 ring-mist-200 transition-colors duration-300 group-hover:bg-pulse-500/10 group-hover:text-pulse-700"
        >
          {c}
        </span>
      ))}
      <p className="mt-2 w-full text-[10.5px] font-medium leading-relaxed text-slate-400">
        Encryption at rest &amp; in transit · regional data residency · full audit trails.
      </p>
    </div>
  );
}

/* ---------- feature data ---------- */
const features = [
  {
    icon: CalendarRange,
    span: "lg:col-span-4",
    title: "Smart Scheduling & Flow",
    desc: "Demand forecasting predicts surges and no-shows hours ahead, auto-rebalances providers and fills gaps before they become waiting rooms.",
    visual: <FlowChart />,
  },
  {
    icon: Activity,
    span: "lg:col-span-2",
    title: "AI Triage Copilot",
    desc: "Symptoms to priority in seconds — with transparent rationale clinicians can audit and override.",
    visual: <TriageMini />,
  },
  {
    icon: FileText,
    span: "lg:col-span-2",
    title: "Ambient Clinical Notes",
    desc: "Consultations become structured, coded notes. Clinicians review and sign — never retype.",
    visual: <WaveMini />,
  },
  {
    icon: HeartHandshake,
    span: "lg:col-span-4",
    title: "Post-Care Journeys",
    desc: "Recovery plans that follow patients home — automated check-ins over SMS and voice, red flags escalated to your team before they become readmissions.",
    visual: <JourneyMini />,
  },
  {
    icon: Waypoints,
    span: "lg:col-span-3",
    title: "Command Center Analytics",
    desc: "Every ward, clinic and outcome in one real-time view — from ED boarding to bed turnover.",
    visual: <CommandMini />,
  },
  {
    icon: ShieldCheck,
    span: "lg:col-span-3",
    title: "Enterprise-Grade Security",
    desc: "Built for the most regulated environments on Earth. Your PHI never trains shared models.",
    visual: <SecurityMini />,
  },
];

export default function Features() {
  return (
    <section id="platform" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute -right-40 top-24 h-[28rem] w-[28rem] rounded-full bg-pulse-400/[0.07] blur-[110px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <SectionTag>Platform</SectionTag>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.025em] text-ink-950 sm:text-5xl">
              Everything care needs.
              <br />
              <span className="text-grad-deep">One intelligent system.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-slate-500">
              Six deeply-connected modules, one shared clinical brain. Deploy
              them together or start with the workflow that hurts most.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 110} className={f.span}>
              <SpotCard className={`${card} lift h-full`}>
                <div className="relative">
                  <IconTile icon={f.icon} />
                  <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-ink-950">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-500">{f.desc}</p>
                  {f.visual}
                </div>
              </SpotCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-10 flex justify-center">
            <a
              href="#solutions"
              className="group inline-flex items-center gap-2 text-sm font-bold text-pulse-700 transition-colors hover:text-pulse-600"
            >
              See how it fits your care setting
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
