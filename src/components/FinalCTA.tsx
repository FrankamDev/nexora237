// import { motion } from "framer-motion";
// import { Clock, CheckCircle2 } from "lucide-react";
// import WhatsAppButton from "./WhatsAppButton";

// export default function FinalCTA() {
//   return (
//     <section className="py-20 md:py-28 relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900" />
//       <div
//         className="absolute inset-0 opacity-20"
//         style={{
//           backgroundImage: `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.2) 0%, transparent 40%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.15) 0%, transparent 40%)`,
//         }}
//       />

//       <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm"
//         >
//           <Clock className="w-4 h-4" />
//           Intervention possible aujourd'hui
//         </motion.div>

//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.1 }}
//           className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6"
//         >
//           Prêt à retrouver la sérénité ?
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="text-lg text-primary-100 mb-10 max-w-2xl mx-auto"
//         >
//           Un message WhatsApp suffit. Nous vous répondons en quelques minutes,
//           diagnostiquons gratuitement et intervenons rapidement. Votre problème
//           de nuisibles s'arrête ici.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//           className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
//         >
//           <WhatsAppButton
//             size="large"
//             variant="secondary"
//             className="!bg-white !text-primary-700 !border-0 hover:!bg-primary-50 shadow-xl"
//           >
//             Contacter NEXORA maintenant
//           </WhatsAppButton>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//           className="flex flex-wrap justify-center gap-6 text-sm text-primary-100"
//         >
//           <div className="flex items-center gap-2">
//             <CheckCircle2 className="w-4 h-4" />
//             Devis gratuit
//           </div>
//           <div className="flex items-center gap-2">
//             <CheckCircle2 className="w-4 h-4" />
//             Garantie écrite
//           </div>
//           <div className="flex items-center gap-2">
//             <CheckCircle2 className="w-4 h-4" />
//             Disponible 7j/7
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { Clock, CheckCircle2, ShieldCheck, Zap, Sparkles } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-36 bg-[#090D16] overflow-hidden">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glows d'ambiance ultra-puissants pour le climax de conversion */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/15 via-emerald-500/15 to-blue-600/10 blur-[170px]" />
        
        {/* Pattern de micro-grille premium */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.8) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Glassmorphism Ultra Premium */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0F172A]/90 to-[#090D16]/95 border border-cyan-500/30 p-8 sm:p-12 md:p-16 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.8)] overflow-hidden text-center">
          
          {/* Ligne d'éclat supérieure */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
          
          {/* Badge de réassurance & urgence */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-medium mb-8 shadow-lg shadow-cyan-500/10 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span className="tracking-wide">Intervention possible aujourd'hui à Yaoundé</span>
          </motion.div>

          {/* Titre d'Impact CRO */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6 font-sans"
          >
            Prêt à retrouver votre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-extrabold relative inline-block">
              sérénité ?
              <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full opacity-60" />
            </span>
          </motion.h2>

          {/* Sous-titre persuasif */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Un message WhatsApp suffit. Nous vous répondons en quelques minutes,
            diagnostiquons gratuitement et intervenons rapidement.{" "}
            <strong className="text-white font-semibold">Votre problème de nuisibles s'arrête ici.</strong>
          </motion.p>

          {/* Zone du CTA Principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 mb-10"
          >
            <div className="relative w-full sm:w-auto">
              {/* Halos de pulsion derrière le bouton principal */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse" />
              
              <WhatsAppButton
                size="large"
                className="relative w-full sm:w-auto justify-center text-base sm:text-lg py-4 sm:py-5 px-8 sm:px-10 shadow-2xl shadow-emerald-950/80"
              >
                Contacter NEXORA maintenant
              </WhatsAppButton>
            </div>

            <span className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
              <Zap className="w-3.5 h-3.5 text-amber-400" /> Temps de réponse moyen : <strong>&lt; 5 minutes</strong>
            </span>
          </motion.div>

          {/* Badges de Confiance Finaux */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 pt-8 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300 font-medium"
          >
            {[
              { label: "Devis 100% gratuit", icon: ShieldCheck },
              { label: "Garantie écrite incluse", icon: Sparkles },
              { label: "Service disponible 7j/7", icon: CheckCircle2 },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <badge.icon className="w-3.5 h-3.5" />
                </div>
                <span>{badge.label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}