
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Zap } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";


interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Pourquoi NEXORA", href: "/pourquoi" },
  { label: "Comment ça marche", href: "/processus" },
  { label: "Témoignages", href: "/temoignages" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setIsMobileOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileOpen
          ? "border-b border-cyan-500/20 bg-[#090D16]/95 py-3 shadow-xl shadow-black/20 backdrop-blur-2xl"
          : "bg-gradient-to-b from-[#090D16]/95 to-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          {/* LOGO */}
          <a
            href="/"
            onClick={closeMenu}
            className="group relative flex min-w-0 items-center gap-2.5"
            aria-label="NEXORA, accueil"
          >
            <div className="relative shrink-0">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 opacity-40 blur transition group-hover:opacity-80" />

              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-cyan-400/30 bg-[#0F172A] sm:h-11 sm:w-11">
                <img
                  src="/logo.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="flex min-w-0 flex-col">
              <span className="text-xl font-black tracking-wider text-white sm:text-2xl">
                NEXORA<span className="text-cyan-400">.</span>
              </span>
              <span className="-mt-1 hidden text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:block">
                Anti-Nuisibles
              </span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Navigation principale"
            className="hidden items-center gap-1 rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-2 lg:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative rounded-full px-3 py-2 text-xs font-semibold text-slate-300 transition hover:bg-cyan-400/10 hover:text-cyan-300 xl:px-4"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 origin-left scale-x-0 rounded-full bg-cyan-400 transition-transform group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden items-center gap-3 xl:flex">
            <span className="flex items-center gap-2 text-xs text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              À votre écoute
            </span>

            <WhatsAppButton size="small">
              Demander un devis
            </WhatsAppButton>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-navigation"
            className={`group flex shrink-0 items-center gap-2 rounded-xl border px-3 py-2.5 transition-all duration-300 active:scale-95 sm:gap-2.5 sm:px-4 ${
              isMobileOpen
                ? "border-cyan-400 bg-cyan-400/10 text-cyan-300"
                : "border-cyan-400/40 bg-slate-900 text-white shadow-lg shadow-cyan-950/30 hover:border-cyan-300 hover:bg-slate-800"
            } lg:hidden`}
          >
            <span className="text-xs font-extrabold tracking-[0.15em]">
              {isMobileOpen ? "FERMER" : "MENU"}
            </span>

            <span className="relative flex h-5 w-5 items-center justify-center">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isMobileOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute"
                >
                  {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.span>
              </AnimatePresence>
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* BACKDROP */}
            <motion.button
              type="button"
              aria-label="Fermer le menu"
              tabIndex={-1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="fixed inset-0 top-[68px] -z-10 cursor-default bg-black/60 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-3 top-full mt-3 max-h-[calc(100dvh-90px)] overflow-y-auto rounded-3xl border border-cyan-400/20 bg-[#0A101E]/[0.98] p-4 shadow-2xl shadow-black/50 backdrop-blur-2xl sm:inset-x-6 sm:p-6 lg:hidden"
            >
              {/* MENU HEADER */}
              <div className="mb-5 flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400">
                    Navigation
                  </p>
                  <h2 className="mt-1 text-lg font-bold text-white">
                    Comment pouvons-nous vous aider ?
                  </h2>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                  <Zap size={19} className="text-cyan-300" />
                </div>
              </div>

              {/* NAVIGATION LINKS */}
              <nav aria-label="Navigation mobile" className="space-y-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.045, duration: 0.22 }}
                    className="group flex min-h-14 items-center justify-between gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/50 px-4 py-3 transition-all duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/[0.07] active:scale-[0.98]"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-xs font-bold text-cyan-400 transition group-hover:bg-cyan-400/15">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm font-semibold text-slate-200 transition group-hover:text-white sm:text-base">
                        {link.label}
                      </span>
                    </span>

                    <ChevronRight
                      size={19}
                      className="shrink-0 text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyan-400"
                    />
                  </motion.a>
                ))}
              </nav>

              {/* CONTACT SECTION */}
              <div className="mt-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-4">
                <div className="mb-3 flex items-start gap-3">
                  <span className="relative mt-1 flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>

                  <div>
                    <p className="text-sm font-bold text-white">
                      Un problème de nuisibles ?
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      Expliquez-nous votre situation et recevez un devis adapté.
                    </p>
                  </div>
                </div>

                <div className="w-full [&>a]:flex [&>a]:w-full [&>a]:justify-center">
                  <WhatsAppButton>
                    Demander un devis
                  </WhatsAppButton>
                </div>

                <p className="mt-3 text-center text-[10px] text-slate-500">
                  Yaoundé · Douala et environs
                </p>
              </div>

              <p className="mt-4 text-center text-[10px] tracking-wide text-slate-600">
                NEXORA — Votre partenaire anti-nuisibles
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}


