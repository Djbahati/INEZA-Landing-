import { useState } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Reveal, SectionTag } from "./ui";

const tiers = [
  {
    name: "Clinic",
    tagline: "For independent clinics & group practices",
    monthly: 349,
    annual: 3619,
    cta: "Start a free pilot",
    popular: false,
    features: [
      "Ambient clinical notes",
      "Smart scheduling & no-show prediction",
      "Post-care SMS journeys",
      "3 provider seats included",
      "Up to 2 locations",
      "HIPAA BAA & audit logs",
      "Email & chat support",
    ],
  },
  {
    name: "Hospital",
    tagline: "For hospitals & multi-department facilities",
    monthly: 749,
    annual: 6599,
    cta: "Book a live demo",
    popular: true,
    features: [
      "Everything in Clinic, plus:",
      "AI Triage Copilot with rationale",
      "Command Center analytics",
      "EHR integrations — Epic, Cerner, OpenMRS",
      "SSO, role-based access & full audit trails",
      "Dedicated clinical success manager",
      "99.99% uptime SLA",
    ],
  },
  {
    name: "Enterprise Network",
    tagline: "For health systems & national networks",
    monthly: null,
    annual: null,
    cta: "Talk to our team",
    popular: false,
    features: [
      "Everything in Hospital, plus:",
      "Multi-facility command view",
      "Custom model tuning on your outcomes",
      "Regional data residency options",
      "On-call clinical engineer",
      "White-glove, parallel-run rollout",
      "Quarterly ROI & outcomes review",
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="relative overflow-hidden bg-mist-100/70 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute right-[-12rem] top-[-6rem] h-[30rem] w-[30rem] rounded-full bg-pulse-400/10 blur-[130px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionTag>Pricing</SectionTag>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.025em] text-ink-950 sm:text-5xl">
              Priced for outcomes,
              <br />
              not <em className="text-grad-deep font-serif font-normal italic">line items.</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-[15.5px] leading-relaxed text-slate-500">
              Every plan begins with a free 30-day clinical pilot. If the numbers
              don't move, you don't pay.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-8 inline-flex items-center rounded-full border border-mist-300 bg-white p-1 shadow-sm">
              {(["Monthly", "Annual"] as const).map((m) => {
                const active = (m === "Annual") === annual;
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setAnnual(m === "Annual")}
                    aria-pressed={active}
                    className={`relative rounded-full px-5 py-2 text-[13px] font-bold transition-all duration-400 ${
                      active ? "bg-ink-950 text-white shadow-md" : "text-slate-500 hover:text-ink-950"
                    }`}
                  >
                    {m}
                    {m === "Annual" && (
                      <span
                        className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[9.5px] font-bold ${
                          active ? "bg-pulse-400 text-ink-950" : "bg-pulse-500/10 text-pulse-700"
                        }`}
                      >
                        −20%
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 120} className="h-full">
              <div
                className={`group relative h-full rounded-[1.9rem] ${
                  t.popular
                    ? "bg-gradient-to-b from-pulse-400 via-pulse-500/60 to-cyan-500 p-px shadow-[0_32px_80px_-24px_rgb(13_148_136/0.45)] lg:-translate-y-4"
                    : ""
                }`}
              >
                {t.popular && (
                  <span className="absolute -top-3.5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-pulse-400 to-cyan-400 px-4 py-1.5 text-[10.5px] font-bold uppercase tracking-widest text-ink-950 shadow-lg">
                    <Sparkles className="h-3 w-3" /> Most popular
                  </span>
                )}
                <div
                  className={`lift flex h-full flex-col rounded-[calc(1.9rem-1px)] p-7 sm:p-8 ${
                    t.popular
                      ? "bg-ink-950 text-white"
                      : "border border-slate-200/80 bg-white text-slate-700"
                  }`}
                >
                  <h3
                    className={`font-display text-xl font-bold tracking-tight ${
                      t.popular ? "text-white" : "text-ink-950"
                    }`}
                  >
                    {t.name}
                  </h3>
                  <p className={`mt-1 text-[12.5px] font-medium ${t.popular ? "text-slate-400" : "text-slate-500"}`}>
                    {t.tagline}
                  </p>

                  <div className="mt-6 flex items-end gap-1.5">
                    {t.monthly ? (
                      <>
                        <span
                          className={`font-display text-[2.6rem] font-bold leading-none tracking-tight ${
                            t.popular ? "text-grad" : "text-ink-950"
                          }`}
                        >
                          ${annual ? t.annual : t.monthly}
                        </span>
                        <span className={`pb-1 text-[12.5px] font-medium ${t.popular ? "text-slate-400" : "text-slate-500"}`}>
                          / facility / mo
                          <br />
                          {annual ? "billed annually" : "billed monthly"}
                        </span>
                      </>
                    ) : (
                      <span className="font-display text-[2.2rem] font-bold leading-none tracking-tight text-ink-950">
                        Let's talk
                      </span>
                    )}
                  </div>

                  <ul className="mt-7 flex-1 space-y-3">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13px] leading-relaxed">
                        <span
                          className={`mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full ${
                            t.popular ? "bg-pulse-400/20 text-pulse-300" : "bg-pulse-500/10 text-pulse-700"
                          }`}
                        >
                          <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
                        </span>
                        <span className={t.popular ? "text-slate-300" : "text-slate-600"}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#cta"
                    className={`group/btn mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-500 hover:-translate-y-0.5 ${
                      t.popular
                        ? "btn-sheen bg-gradient-to-r from-pulse-300 via-pulse-400 to-cyan-300 text-ink-950 shadow-[0_10px_36px_-8px_rgb(45_212_191/0.5)]"
                        : "border border-ink-950/12 bg-white text-ink-950 hover:border-pulse-600/50 hover:bg-mist-50 hover:shadow-[0_14px_36px_-14px_rgb(13_148_136/0.35)]"
                    }`}
                  >
                    {t.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-center text-[12.5px] font-medium text-slate-400">
            All plans include onboarding, migration support, HIPAA BAA and SOC 2
            report access. Prices in USD, taxes excluded.{" "}
            <a
              href="#faq"
              className="font-semibold text-pulse-700 underline decoration-pulse-400/50 underline-offset-2 transition-colors hover:text-pulse-600"
            >
              Questions? See the FAQ
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
