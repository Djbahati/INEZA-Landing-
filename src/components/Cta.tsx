import { useState, type FormEvent } from "react";
import { ArrowRight, CalendarCheck2, CheckCircle2, PlugZap, Users } from "lucide-react";
import { Reveal } from "./ui";

const points = [
  { icon: CalendarCheck2, label: "Live in 30 days" },
  { icon: PlugZap, label: "No rip-and-replace" },
  { icon: Users, label: "Dedicated clinical team" },
];

export default function Cta() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const nextEmail = email.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextEmail)) {
      setError("Enter a valid work email to book your demo.");
      return;
    }

    setEmail(nextEmail);
    setError("");
    setSent(true);
  };

  return (
    <section id="cta" className="relative px-5 pb-24 pt-4 sm:px-8 sm:pb-32">
      <div className="mx-auto max-w-6xl">
        <Reveal y={44} scale={0.985}>
          <div className="noise relative overflow-hidden rounded-[2.5rem] bg-ink-950 px-6 py-16 shadow-[0_48px_120px_-32px_rgb(4_24_29/0.7)] sm:px-12 sm:py-20 lg:px-16">
            {/* Ambient */}
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <div className="absolute -left-24 -top-24 h-96 w-96 animate-aurora-a rounded-full bg-pulse-500/25 blur-[110px]" />
              <div className="absolute -bottom-32 -right-16 h-96 w-96 animate-aurora-b rounded-full bg-cyan-500/20 blur-[110px]" />
              <div className="grid-lines absolute inset-0 opacity-80 [mask-image:radial-gradient(ellipse_65%_70%_at_50%_50%,black,transparent_85%)]" />
            </div>

            <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
              <div>
                <Reveal>
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-pulse-300">
                    Ready when you are
                  </p>
                </Reveal>
                <Reveal delay={100}>
                  <h2 className="mt-4 font-display text-[2.4rem] font-bold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl">
                    Care deserves the{" "}
                    <em className="text-grad font-serif font-normal italic">best</em>
                    <br className="hidden sm:block" /> system in health.
                  </h2>
                </Reveal>
                <Reveal delay={200}>
                  <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-slate-400">
                    Join{" "}
                    <a
                      href="#customers"
                      className="font-semibold text-pulse-300 underline decoration-pulse-400/50 underline-offset-2 transition-colors hover:text-pulse-200"
                    >
                      240+ care organisations
                    </a>{" "}
                    running on INEZA AI SYSTEM. Tell us where it hurts — we'll
                    show you the fix in a live, 20-minute demo on your own
                    workflows.
                  </p>
                </Reveal>
                <Reveal delay={300}>
                  <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                    {points.map((p) => (
                      <li key={p.label} className="flex items-center gap-2 text-[13px] font-semibold text-slate-300">
                        <p.icon className="h-4 w-4 text-pulse-400" />
                        {p.label}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              <Reveal delay={250}>
                <div className="glass-dark rounded-3xl p-7 sm:p-8">
                  {sent ? (
                    <div className="flex min-h-[13rem] flex-col items-center justify-center text-center">
                      <span className="grid h-14 w-14 place-items-center rounded-full bg-pulse-400/15 ring-1 ring-pulse-400/40">
                        <CheckCircle2 className="h-7 w-7 text-pulse-300" />
                      </span>
                      <p className="mt-5 font-display text-xl font-bold text-white">
                        You're on the list.
                      </p>
                      <p className="mt-2 max-w-xs text-[13.5px] leading-relaxed text-slate-400">
                        A clinical specialist will reach out within 24 hours to
                        schedule your personalised demo.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={submit} noValidate={false}>
                      <label
                        htmlFor="cta-email"
                        className="font-display text-lg font-bold text-white"
                      >
                        Book your live demo
                      </label>
                      <p className="mt-1.5 text-[13px] text-slate-400">
                        Work email only — we'll tailor the walkthrough to your
                        facility type.
                      </p>
                      <div className="mt-5 space-y-3">
                        <input
                          id="cta-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (error) setError("");
                          }}
                          placeholder="you@hospital.org"
                          aria-invalid={error ? "true" : "false"}
                          aria-describedby={error ? "cta-email-error" : undefined}
                          className="w-full rounded-full border border-white/15 bg-white/[0.06] px-5 py-3.5 text-sm font-medium text-white placeholder:text-slate-500 backdrop-blur transition-all duration-300 focus:border-pulse-400/60 focus:bg-white/[0.09] focus:outline-none focus:ring-4 focus:ring-pulse-400/15"
                        />
                        {error && (
                          <p
                            id="cta-email-error"
                            className="px-2 text-[12px] font-semibold text-rose-200"
                            role="alert"
                          >
                            {error}
                          </p>
                        )}
                        <button
                          type="submit"
                          className="btn-sheen group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pulse-300 via-pulse-400 to-cyan-300 px-6 py-3.5 text-sm font-bold text-ink-950 shadow-[0_10px_40px_-8px_rgb(45_212_191/0.55)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_52px_-8px_rgb(45_212_191/0.6)]"
                        >
                          Book my demo
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                      </div>
                      <p className="mt-4 text-center text-[11.5px] leading-relaxed text-slate-500">
                        Free 30-day pilot included. No credit card, no lock-in —
                        measured outcomes or you walk away.
                      </p>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
