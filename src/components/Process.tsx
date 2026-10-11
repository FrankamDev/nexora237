

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { processSteps } from "../data/content";
import WhatsAppButton from "./WhatsAppButton";

export default function Process() {
  return (
    <section
      id="processus"
      className="relative py-24 md:py-32 bg-[#090D16] text-white overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-cyan-500/5 blur-[160px] rounded-full" />
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-emerald-500/5 blur-[130px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Comment ça marche</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 font-sans text-white"
          >
            4 étapes simples vers la{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              sérénité
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Pas de complications. Pas de surprises. Un processus d'intervention
            clair, ultra-rapide et transparent sur tout Yaoundé.
          </motion.p>
        </div>

        {/* Timeline Grid Wrapper */}
        <div className="relative mb-16">
          
          {/* Ligne Connectrice Continue (Desktop) */}
          <div className="hidden lg:block absolute top-[2.75rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-cyan-500/10 via-cyan-500/40 to-emerald-500/20 z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                className="group relative flex flex-col items-center lg:items-start text-center lg:text-left bg-[#0F172A]/40 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-[#0F172A]/80 p-6 sm:p-8 rounded-2xl transition-all duration-300 shadow-xl"
              >
                {/* Ligne d'accent lumineuse au survol */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-400/0 group-hover:via-cyan-400/60 to-transparent transition-all duration-500" />

                {/* Badge Numéroté & Glow */}
                <div className="relative mb-6">
                  <div className="absolute -inset-1.5 rounded-2xl bg-cyan-500/20 blur opacity-0 group-hover:opacity-100 transition duration-300" />
                  <div className="relative w-14 h-14 rounded-2xl bg-[#090D16] border border-cyan-500/40 text-cyan-400 font-extrabold text-xl flex items-center justify-center shadow-lg shadow-cyan-950/50 group-hover:text-emerald-300 group-hover:border-emerald-400/50 transition-colors">
                    {step.step || `0${index + 1}`}
                  </div>
                </div>

                {/* Titre de l'étape */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Action / Call-To-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center justify-center text-center gap-4"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 blur opacity-50 animate-pulse" />
            <WhatsAppButton size="large" className="relative px-8 py-4">
              Lancer mon intervention
            </WhatsAppButton>
          </div>

          <span className="text-xs text-slate-400 flex items-center gap-1.5 mt-2">
             Diagnostic gratuit & réponse en quelques minutes
            <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
          </span>
        </motion.div>

      </div>
    </section>
  );
}