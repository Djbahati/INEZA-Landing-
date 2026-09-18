import { Activity } from "lucide-react";

export default function Logo({ dark = true }: { dark?: boolean }) {
  return (
    <a
      href="#top"
      aria-label="INEZA COMPANY — home"
      className="group inline-flex items-center gap-2.5"
    >
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-pulse-300 via-pulse-500 to-cyan-500 shadow-lg shadow-pulse-500/25 transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-105">
        <Activity className="h-4.5 w-4.5 text-ink-950" strokeWidth={2.75} />
        <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-[17px] font-bold tracking-tight ${
            dark ? "text-white" : "text-ink-950"
          }`}
        >
          INEZA
        </span>
        <span className="mt-1 block text-[8.5px] font-bold uppercase tracking-[0.32em] text-pulse-400">
          AI System
        </span>
      </span>
    </a>
  );
}
