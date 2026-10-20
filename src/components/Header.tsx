

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X,  ChevronRight, Zap } from "lucide-react";
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
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileOpen]);

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#090D16]/80 backdrop-blur-2xl border-b border-cyan-500/15 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-gradient-to-b from-[#090D16]/90 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
         
          <a href="/" className="flex items-center gap-3 group relative">
            <div className="relative">
             
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 blur opacity-40 group-hover:opacity-90 transition duration-500 group-hover:scale-105" />
              
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0F172A] border border-cyan-500/30 flex items-center justify-center shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-600/30" />
                <img src="/logo.jpg" alt="Logo NEXORA" className="rounded-full sm:w-6 sm:h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300 font-sans">
                NEXORA<span className="text-cyan-400 font-extrabold">.</span>
              </span>
              <span className="text-[9px] font-semibold tracking-widest text-cyan-400/80 uppercase -mt-1 hidden sm:block">
                Anti-Nuisibles
              </span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION BAR */}
          <nav
            className="hidden lg:flex items-center gap-1 px-6 py-2 rounded-full bg-[#0F172A]/60 border border-slate-800/80 backdrop-blur-md shadow-inner"
            aria-label="Navigation principale"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-cyan-300 transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </a>
            ))}
          </nav>

          {/* RIGHT ACTION: STATUS + CTA */}
          <div className="hidden md:flex items-center gap-5">
            {/* Tag Live Signal CRO */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-medium text-cyan-200">Dispo 24/7</span>
            </div>

            {/* Bouton CTA Principal avec WhatsApp */}
            <WhatsAppButton size="small">
              Intervention rapide
            </WhatsAppButton>
          </div>

          {/* BOUTON MOBILE BURGER ULTRA-MODERNE */}
          <button
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="lg:hidden relative p-2.5 rounded-xl bg-[#0F172A] border border-cyan-500/20 text-slate-200 hover:text-cyan-400 active:scale-95 transition-all shadow-lg"
            aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={22} className="text-cyan-400" /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* FULLSCREEN MOBILE DRAWER & MENU SYSTEM */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[65px] z-40 lg:hidden bg-[#090D16]/95 backdrop-blur-3xl border-t border-cyan-500/20 flex flex-col justify-between px-6 py-8 overflow-y-auto"
          >
            {/* Halo lumineux décoratif dans le menu */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Navigation links */}
            <nav className="relative z-10 space-y-3" aria-label="Navigation mobile">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.07 + 0.1 }}
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#0F172A]/50 border border-slate-800/80 text-lg font-semibold text-slate-100 hover:text-cyan-300 hover:border-cyan-500/40 active:scale-[0.98] transition-all"
                >
                  <span className="tracking-wide">{link.label}</span>
                  <ChevronRight size={18} className="text-cyan-400/60" />
                </motion.a>
              ))}
            </nav>

            {/* Mobile Footer CTA Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative z-10 pt-6 mt-6 border-t border-slate-800/80 space-y-4"
            >
              <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                <span className="flex items-center gap-1.5">
                  <Zap size={14} className="text-amber-400" /> Support immédiat
                </span>
                <span className="text-emerald-400 font-medium">Temps de réponse &lt; 5 min</span>
              </div>

              <WhatsAppButton className="w-full justify-center text-base py-4 rounded-2xl shadow-xl shadow-cyan-500/10">
                Contacter sur WhatsApp
              </WhatsAppButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}