import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Customers", href: "#customers" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-6">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-500 sm:px-5 ${
          scrolled
            ? "mt-3 border-white/10 bg-ink-950/85 shadow-2xl shadow-ink-950/40 backdrop-blur-2xl"
            : "mt-4 border-white/[0.08] bg-white/[0.045] backdrop-blur-xl"
        }`}
      >
        <Logo />

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-link text-[13.5px] font-medium text-slate-300 transition-colors duration-300 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#cta"
            className="text-[13.5px] font-medium text-slate-300 transition-colors hover:text-white"
          >
            Contact sales
          </a>
          <a
            href="#cta"
            className="btn-sheen group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pulse-300 to-cyan-300 px-5 py-2.5 text-[13.5px] font-bold text-ink-950 shadow-[0_6px_24px_-6px_rgb(45_212_191/0.5)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-6px_rgb(45_212_191/0.6)]"
          >
            Book a demo
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 -z-10 flex flex-col bg-ink-950/[0.985] px-8 pb-10 pt-32 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1">
          {links.map((l, i) => (
            <li
              key={l.href}
              style={{
                transitionDelay: open ? `${90 + i * 55}ms` : "0ms",
                transform: open ? "none" : "translateY(18px)",
                opacity: open ? 1 : 0,
              }}
              className="transition-all duration-500"
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border-b border-white/[0.07] py-4 font-display text-2xl font-semibold text-slate-200 transition-colors hover:text-pulse-300"
              >
                {l.label}
                <ArrowRight className="h-5 w-5 -translate-x-2 text-pulse-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#cta"
          onClick={() => setOpen(false)}
          style={{
            transitionDelay: open ? `${90 + links.length * 55}ms` : "0ms",
            transform: open ? "none" : "translateY(18px)",
            opacity: open ? 1 : 0,
          }}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pulse-300 to-cyan-300 px-6 py-4 text-base font-bold text-ink-950 transition-all duration-500"
        >
          Book a live demo <ArrowRight className="h-4 w-4" />
        </a>
        <p className="mt-auto text-center text-xs text-slate-500">
          INEZA COMPANY · The best system in health
        </p>
      </div>
    </header>
  );
}
