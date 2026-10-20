

import { motion } from "framer-motion";
import {
  HeartPulse,
  Home,
  Building2,
  TrendingUp,
  AlertTriangle,
  Flame,
  ShieldAlert,
} from "lucide-react";
import { risks } from "../data/content";
import WhatsAppButton from "./WhatsAppButton";

// Dynamic Icon Lookup
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HeartPulse,
  Home,
  Building2,
  TrendingUp,
  AlertTriangle,
  Flame,
};

export default function Risks() {
  return (
    <section className="relative py-24 md:py-32 bg-[#090D16] text-white overflow-hidden">
      {/* Background Lighting & Crimson Emergency Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-rose-600/10 blur-[170px] rounded-full" />
        <div className="absolute -top-20 left-10 w-72 h-72 bg-amber-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
            <span>Pourquoi agir maintenant</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 font-sans text-white"
          >
            Chaque jour d'attente{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-400 to-amber-400">
              empire la situation
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Les nuisibles ne s'arrêtent pas. Ils se multiplient, contaminent et
            détruisent vos structures. Plus vous attendez, plus le traitement devient complexe
            et coûteux.
          </motion.p>
        </div>

        {/* Risk Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {risks.map((risk, index) => {
            const Icon = iconMap[risk.icon] || AlertTriangle;
            return (
              <motion.div
                key={risk.title || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative p-6 sm:p-7 rounded-2xl border border-slate-800/80 bg-[#0F172A]/40 hover:bg-[#0F172A]/90 hover:border-rose-500/40 transition-all duration-300 shadow-xl"
              >
                {/* Ligne d'accent luminescente crimson au survol */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-rose-500/0 group-hover:via-rose-500/60 to-transparent transition-all duration-500" />

                {/* Container Icône Réactif */}
                <div className="relative mb-6">
                  <div className="absolute -inset-1 rounded-xl bg-rose-500/20 blur opacity-0 group-hover:opacity-100 transition duration-300" />
                  <div className="relative w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center group-hover:scale-105 group-hover:bg-rose-500/20 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-rose-300 transition-colors">
                  {risk.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {risk.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action avec Halo de Secours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-rose-500 via-emerald-500 to-teal-500 blur opacity-40 animate-pulse" />
            <WhatsAppButton size="large" className="relative px-8 py-4">
              Stopper l'infestation maintenant
            </WhatsAppButton>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-slate-400 font-medium">
            Réponse rapide • Devis 100% gratuit • Sans engagement
          </p>
        </motion.div>

      </div>
    </section>
  );
}

