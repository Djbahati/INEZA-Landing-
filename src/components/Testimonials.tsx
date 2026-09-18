import { Quote, Star } from "lucide-react";
import { Reveal, SectionTag, SpotCard } from "./ui";

const testimonials = [
  {
    quote:
      "INEZA gave our clinicians their evenings back. Notes are drafted before the patient leaves the room — my teams finally practise medicine, not data entry.",
    name: "Dr. Aline Uwase",
    role: "Chief Medical Information Officer",
    org: "Meridian Health",
    avatar: "images/avatar-aline.jpg",
    metric: "−42% documentation time",
  },
  {
    quote:
      "Triage used to be our bottleneck. Now the queue reprioritises itself in real time, and no critical patient waits unseen. It changed how our ED breathes.",
    name: "James Okonkwo",
    role: "Director of Nursing",
    org: "St. Aurelia Hospital",
    avatar: "images/avatar-james.jpg",
    metric: "−38% ED boarding",
  },
  {
    quote:
      "Post-care was our blind spot. INEZA's journeys follow every patient home — our readmissions fell by a third within two quarters. The board noticed.",
    name: "Dr. Sofia Marchetti",
    role: "Chief Operating Officer",
    org: "Aurora Rehab Network",
    avatar: "images/avatar-sofia.jpg",
    metric: "−31% readmissions",
  },
];

export default function Testimonials() {
  return (
    <section id="customers" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute -left-44 bottom-0 h-[26rem] w-[26rem] rounded-full bg-cyan-400/[0.08] blur-[120px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal>
              <SectionTag>Customers</SectionTag>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.025em] text-ink-950 sm:text-5xl">
                Loved by the people
                <br />
                who <em className="text-grad-deep font-serif font-normal italic">deliver</em> care.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={220}>
            <div className="flex items-center gap-3 rounded-2xl border border-mist-200 bg-white px-5 py-4 shadow-[0_12px_36px_-16px_rgb(4_24_29/0.15)]">
              <div className="flex" aria-label="Rated 4.9 out of 5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-[13px] font-semibold text-slate-600">
                <span className="font-display font-bold text-ink-950">4.9/5</span> · 2,300+
                clinicians
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 130} y={36}>
              <SpotCard
                className={`lift flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_1px_2px_rgb(4_24_29/0.04)] hover:border-pulse-500/40 hover:shadow-[0_26px_64px_-26px_rgb(13_148_136/0.28)] ${
                  i === 1 ? "md:-translate-y-4" : ""
                }`}
              >
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <Quote className="h-7 w-7 -scale-x-100 fill-pulse-100 text-pulse-300" />
                    <span className="rounded-full bg-mist-100 px-3 py-1 text-[10.5px] font-bold text-pulse-700 ring-1 ring-mist-200">
                      {t.metric}
                    </span>
                  </div>
                  <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-slate-600">
                    “{t.quote}”
                  </blockquote>
                  <div className="mt-7 flex items-center gap-3.5 border-t border-mist-200 pt-5">
                    <img
                      src={t.avatar}
                      alt={`Portrait of ${t.name}, ${t.role} at ${t.org}`}
                      width={48}
                      height={48}
                      loading="lazy"
                      decoding="async"
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-pulse-100"
                    />
                    <div>
                      <p className="text-[14px] font-bold text-ink-950">{t.name}</p>
                      <p className="text-[12px] font-medium text-slate-500">
                        {t.role} · {t.org}
                      </p>
                    </div>
                  </div>
                </div>
              </SpotCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
