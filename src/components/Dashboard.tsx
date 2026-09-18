import { useEffect, useState } from "react";
import {
  Bell,
  BedDouble,
  CalendarCheck2,
  Clock3,
  HeartPulse,
  LayoutDashboard,
  MoonStar,
  Search,
  Settings,
  Sparkles,
  Stethoscope,
  TrendingDown,
  Users,
} from "lucide-react";
import { useInView } from "./ui";

const ECG_PATH =
  "M0 30 H42 L50 18 L58 44 L66 8 L74 38 L80 30 H122 L129 22 L137 40 L143 30 H188 L196 14 L206 48 L214 18 L220 30 H260";

const triage = [
  { p: "P1", label: "Chest pain · Bed 4", time: "0:42", cls: "bg-rose-400/15 text-rose-300 ring-rose-400/30" },
  { p: "P2", label: "Fever 39.2° · Rm 12", time: "3:10", cls: "bg-amber-400/15 text-amber-300 ring-amber-400/30" },
  { p: "P3", label: "Ankle sprain · Triage", time: "12:05", cls: "bg-pulse-400/15 text-pulse-300 ring-pulse-400/30" },
];

const notes = [
  "Summarising: 68M, post-MI day 2 — vitals stable, echo booked 14:00, meds reconciled…",
  "Drafting discharge summary for Amahoro K. — PT cleared, follow-up journey armed…",
  "Flag: Bed 9 SpO₂ trending −2.1% over 30 min. Notifying charge nurse…",
];

function useTypewriter(lines: string[], speed = 26) {
  const [text, setText] = useState("");
  const [li, setLi] = useState(0);

  useEffect(() => {
    const line = lines[li];
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const type = () => {
      if (i <= line.length) {
        setText(line.slice(0, i));
        i += 2;
        timer = setTimeout(type, speed);
      } else {
        timer = setTimeout(() => setLi((v) => (v + 1) % lines.length), 2600);
      }
    };
    type();
    return () => clearTimeout(timer);
  }, [li, lines, speed]);

  return text;
}

export default function Dashboard() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.25 });
  const typed = useTypewriter(notes);
  const bars = [42, 68, 50, 82, 64, 95, 76, 88];
  const C = 2 * Math.PI * 30;

  return (
    <div
      ref={ref}
      className="relative rounded-[1.75rem] bg-gradient-to-b from-white/[0.16] via-white/[0.07] to-white/[0.03] p-px shadow-[0_40px_120px_-24px_rgb(0_0_0/0.8)]"
    >
      <div className="overflow-hidden rounded-[calc(1.75rem-1px)] bg-ink-950/90 backdrop-blur-2xl">
        {/* Window bar */}
        <div className="flex items-center gap-3 border-b border-white/[0.07] px-5 py-3.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-pulse-400/70" />
          </div>
          <div className="mx-auto flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1 text-[11px] font-medium text-slate-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pulse-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-pulse-400" />
            </span>
            INEZA Command Center · Live
          </div>
          <div className="hidden items-center gap-3 text-slate-500 sm:flex">
            <Search className="h-3.5 w-3.5" />
            <Bell className="h-3.5 w-3.5" />
          </div>
        </div>

        <div className="flex">
          {/* Mini sidebar */}
          <div className="hidden flex-col items-center gap-1 border-r border-white/[0.07] px-2.5 py-4 sm:flex">
            {[LayoutDashboard, BedDouble, CalendarCheck2, Users, HeartPulse].map(
              (Icon, i) => (
                <span
                  key={i}
                  className={`grid h-8 w-8 place-items-center rounded-lg transition-colors ${
                    i === 0
                      ? "bg-pulse-400/15 text-pulse-300 ring-1 ring-pulse-400/30"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>
              )
            )}
            <span className="mt-auto grid h-8 w-8 place-items-center rounded-lg text-slate-600">
              <Settings className="h-4 w-4" />
            </span>
          </div>

          {/* Main panel */}
          <div className="grid flex-1 grid-cols-2 gap-2.5 p-3 sm:gap-3 sm:p-4">
            {/* Patients today */}
            <div className="rounded-xl border border-white/[0.07] bg-white/[0.035] p-3.5">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Patients today
                </p>
                <Users className="h-3.5 w-3.5 text-pulse-400" />
              </div>
              <p className="mt-1.5 font-display text-2xl font-bold text-white">
                128
                <span className="ml-1.5 align-middle text-[10px] font-semibold text-pulse-400">
                  +12%
                </span>
              </p>
              <div className="mt-2 flex h-9 items-end gap-1" aria-hidden>
                {bars.map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-pulse-600/60 to-pulse-300"
                    style={{
                      height: inView ? `${h}%` : "6%",
                      transition: `height 1.1s var(--ease-out-expo) ${400 + i * 70}ms`,
                      opacity: 0.55 + (h / 100) * 0.45,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Live vitals ECG */}
            <div className="rounded-xl border border-white/[0.07] bg-white/[0.035] p-3.5">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Bed 4 · Live vitals
                </p>
                <HeartPulse className="h-3.5 w-3.5 text-rose-400" />
              </div>
              <div className="mt-1 flex items-baseline gap-2">
                <p className="font-display text-2xl font-bold text-white">72</p>
                <p className="text-[10px] font-semibold text-slate-400">
                  bpm · SpO₂ <span className="text-pulse-300">98%</span>
                </p>
              </div>
              <svg viewBox="0 0 260 60" className="mt-1 h-10 w-full" aria-hidden>
                <path
                  d={ECG_PATH}
                  fill="none"
                  stroke="rgb(94 234 212 / 0.18)"
                  strokeWidth="1.75"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <path
                  d={ECG_PATH}
                  fill="none"
                  stroke="#2dd4bf"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeDasharray="70 330"
                  className="ecg-glow animate-ecg"
                />
              </svg>
            </div>

            {/* Triage queue */}
            <div className="rounded-xl border border-white/[0.07] bg-white/[0.035] p-3.5">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  AI triage queue
                </p>
                <span className="text-[9.5px] font-bold text-pulse-300">Auto-prioritised</span>
              </div>
              <ul className="mt-2.5 space-y-1.5">
                {triage.map((t, i) => (
                  <li
                    key={t.p}
                    className="flex items-center gap-2 rounded-lg bg-white/[0.03] px-2 py-1.5 ring-1 ring-white/[0.05]"
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? "none" : "translateX(-10px)",
                      transition: `all .7s var(--ease-out-expo) ${650 + i * 130}ms`,
                    }}
                  >
                    <span
                      className={`rounded-md px-1.5 py-0.5 text-[9px] font-bold ring-1 ${t.cls}`}
                    >
                      {t.p}
                    </span>
                    <span className="flex-1 truncate text-[10.5px] font-medium text-slate-300">
                      {t.label}
                    </span>
                    <span className="flex items-center gap-1 text-[9.5px] text-slate-500">
                      <Clock3 className="h-2.5 w-2.5" /> {t.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ambient note */}
            <div className="rounded-xl border border-pulse-400/20 bg-gradient-to-br from-pulse-500/[0.09] to-cyan-500/[0.05] p-3.5">
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-pulse-300">
                  <Sparkles className="h-3 w-3" /> Ambient note
                </p>
                <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[9px] font-semibold text-slate-400 ring-1 ring-white/10">
                  Awaiting sign-off
                </span>
              </div>
              <p className="mt-2.5 min-h-[3.4rem] text-[11px] leading-relaxed text-slate-300">
                {typed}
                <span className="ml-0.5 inline-block h-3 w-[2px] animate-pulse bg-pulse-300 align-middle" />
              </p>
              <div className="mt-1 flex items-center gap-1" aria-hidden>
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <span
                    key={i}
                    className="h-3 w-[3px] origin-center animate-wave rounded-full bg-pulse-400/70"
                    style={{ animationDelay: `${i * 0.11}s` }}
                  />
                ))}
                <span className="ml-1.5 flex items-center gap-1 text-[9px] text-slate-500">
                  <MoonStar className="h-2.5 w-2.5" /> Listening · consult 07
                </span>
              </div>
            </div>

            {/* Post-care adherence */}
            <div className="col-span-2 flex items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.035] p-3.5">
              <div className="relative h-16 w-16 shrink-0">
                <svg viewBox="0 0 72 72" className="h-16 w-16 -rotate-90">
                  <circle cx="36" cy="36" r="30" fill="none" stroke="rgb(255 255 255 / 0.08)" strokeWidth="7" />
                  <circle
                    cx="36"
                    cy="36"
                    r="30"
                    fill="none"
                    stroke="url(#inezaRing)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeDasharray={C}
                    strokeDashoffset={inView ? C * (1 - 0.87) : C}
                    style={{ transition: "stroke-dashoffset 1.8s var(--ease-out-expo) 700ms" }}
                  />
                  <defs>
                    <linearGradient id="inezaRing" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#5eead4" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="absolute inset-0 grid place-items-center font-display text-sm font-bold text-white">
                  87%
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Post-care journeys
                </p>
                <p className="mt-0.5 truncate text-[12px] font-semibold text-white">
                  312 recoveries followed home this week
                </p>
                <p className="mt-0.5 flex items-center gap-1 text-[10.5px] text-pulse-300">
                  <TrendingDown className="h-3 w-3" /> Readmission risk down 31%
                </p>
              </div>
              <div className="hidden items-center gap-1.5 rounded-full bg-white/[0.05] px-3 py-1.5 text-[10px] font-semibold text-slate-300 ring-1 ring-white/10 md:flex">
                <Stethoscope className="h-3 w-3 text-pulse-400" /> 24 wards connected
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
