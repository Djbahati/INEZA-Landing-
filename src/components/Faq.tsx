import { useState, type ReactNode } from "react";
import { ArrowRight, ChevronDown, MessagesSquare } from "lucide-react";
import { Reveal, SectionTag } from "./ui";

const linkCls =
  "font-semibold text-pulse-700 underline decoration-pulse-400/50 underline-offset-2 transition-colors hover:text-pulse-600 hover:decoration-pulse-500";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "Is INEZA AI SYSTEM compliant with healthcare regulations?",
    a: "Yes — compliance is a foundation, not a feature. INEZA is HIPAA-ready, GDPR-aligned, SOC 2 Type II certified and ISO 27001 compliant. All PHI is encrypted in transit and at rest, every access is audit-logged, and we sign BAAs on every plan. Your data is never used to train shared models without explicit consent.",
  },
  {
    q: "Which EHRs and systems does it integrate with?",
    a: (
      <>
        We speak FHIR R4 and HL7 natively, with pre-built connectors for Epic,
        Oracle Health (Cerner), MEDITECH, athenahealth and OpenMRS — plus lab
        systems, imaging, wearables and scheduling tools. A typical two-way
        integration is live in under three weeks.{" "}
        <a href="#platform" className={linkCls}>
          Explore the platform modules
        </a>
        .
      </>
    ),
  },
  {
    q: "How accurate is the AI — and who stays in control?",
    a: "Clinicians, always. INEZA is human-in-the-loop by design: every triage recommendation, note draft and escalation arrives with transparent rationale and confidence signals, and nothing enters the record without clinical sign-off. Model performance and drift are monitored continuously and reported to you quarterly.",
  },
  {
    q: "How long does implementation actually take?",
    a: "Clinics go live in under two weeks; a full hospital deployment averages 30 days. INEZA runs in parallel with your existing systems during the pilot — there is no rip-and-replace, no downtime, and no workflow freeze. Your teams train in hours, not weeks.",
  },
  {
    q: "Does it work in low-bandwidth or rural settings?",
    a: "Absolutely. INEZA is offline-first: mobile clinics and wards keep working through connectivity drops and sync when back online. Patient journeys run over SMS and voice, so follow-up reaches patients who don't own a smartphone.",
  },
  {
    q: "What does pricing look like for a network or ministry deployment?",
    a: (
      <>
        Pricing is per facility, with network-wide agreements for health
        systems and public-sector partners. Every engagement starts with a
        free, measured 30-day pilot — we only proceed when the outcomes data
        justifies it. See{" "}
        <a href="#pricing" className={linkCls}>
          plans on the pricing table
        </a>{" "}
        or{" "}
        <a href="#cta" className={linkCls}>
          talk to our team
        </a>{" "}
        for a tailored proposal.
      </>
    ),
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <SectionTag>FAQ</SectionTag>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.025em] text-ink-950 sm:text-5xl">
                  Questions,
                  <br />
                  answered{" "}
                  <em className="text-grad-deep font-serif font-normal italic">honestly.</em>
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-slate-500">
                  The things every CMIO, nursing director and operations lead
                  asks us first. For everything else — we're one message away.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <a
                  href="#cta"
                  className="group mt-8 inline-flex items-center gap-4 rounded-3xl border border-mist-200 bg-white p-5 pr-6 shadow-[0_12px_36px_-16px_rgb(4_24_29/0.12)] transition-all duration-500 hover:-translate-y-1 hover:border-pulse-500/40 hover:shadow-[0_22px_52px_-20px_rgb(13_148_136/0.3)]"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-pulse-500 to-cyan-600 text-white shadow-lg shadow-pulse-600/25 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <MessagesSquare className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[14.5px] font-bold text-ink-950">
                      Talk to a clinical specialist
                    </span>
                    <span className="mt-0.5 flex items-center gap-1 text-[12.5px] font-semibold text-pulse-700">
                      Replies within one business day
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </span>
                </a>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-3.5">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={f.q} delay={i * 70}>
                    <div
                      className={`overflow-hidden rounded-2xl border bg-white transition-all duration-500 ${
                        isOpen
                          ? "border-pulse-500/40 shadow-[0_20px_48px_-20px_rgb(13_148_136/0.3)]"
                          : "border-slate-200/80 hover:border-mist-300"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      >
                        <span className="font-display text-[15.5px] font-bold tracking-tight text-ink-950">
                          {f.q}
                        </span>
                        <span
                          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-500 ${
                            isOpen
                              ? "rotate-180 bg-gradient-to-br from-pulse-500 to-cyan-600 text-white"
                              : "bg-mist-100 text-slate-500"
                          }`}
                        >
                          <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
                        </span>
                      </button>
                      <div
                        id={`faq-panel-${i}`}
                        role="region"
                        className={`acc-panel ${isOpen ? "open" : ""}`}
                      >
                        <div className="acc-inner">
                          <p className="px-6 pb-6 text-[14px] leading-relaxed text-slate-500">
                            {f.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
