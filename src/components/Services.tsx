// import { motion } from "framer-motion";
// import { Bug, Mouse, Droplets, ShieldCheck, Check } from "lucide-react";
// import { services } from "../data/content";
// import WhatsAppButton from "./WhatsAppButton";

// const iconMap = {
//   Bug,
//   Mouse,
//   Droplets,
//   ShieldCheck,
// } as const;

// export default function Services() {
//   return (
//     <section id="services" className="py-20 md:py-28 bg-dark-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3"
//           >
//             Nos expertises
//           </motion.p>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 tracking-tight mb-6"
//           >
//             Des solutions adaptées à chaque nuisible
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-lg text-dark-600"
//           >
//             Que ce soit une invasion de cafards, des rats dans les combles ou un
//             besoin de désinfection, nous avons la méthode et l'expérience pour
//             résoudre votre problème.
//           </motion.p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
//           {services.map((service, index) => {
//             const Icon = iconMap[service.icon] || Bug;

//             return (
//               <motion.div
//                 key={service.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                 className="group relative bg-white rounded-3xl p-8 border border-dark-100 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300"
//               >
//                 <div className="flex items-start gap-5">
//                   <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-primary-500/20 group-hover:scale-105 transition-transform">
//                     <Icon className="w-7 h-7" />
//                   </div>

//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold text-dark-900 mb-2">
//                       {service.title}
//                     </h3>
//                     <p className="text-dark-600 leading-relaxed mb-5">
//                       {service.description}
//                     </p>

//                     <ul className="space-y-2">
//                       {service.features.map((feature) => (
//                         <li
//                           key={feature}
//                           className="flex items-center gap-2 text-sm text-dark-700"
//                         >
//                           <Check className="w-4 h-4 text-primary-600 shrink-0" />
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-14 text-center"
//         >
//           <WhatsAppButton size="large">
//             Demander un devis gratuit
//           </WhatsAppButton>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { Bug, Mouse, Droplets, ShieldCheck, Check, Sparkles, ArrowRight } from "lucide-react";
import { services } from "../data/content";
import WhatsAppButton from "./WhatsAppButton";

// Map d'icônes dynamic avec fallback
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bug,
  Mouse,
  Droplets,
  ShieldCheck,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#090D16] text-white overflow-hidden">
      {/* Background Lighting & Radial Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-[600px] h-[400px] bg-cyan-500/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-1/3 right-10 w-[550px] h-[450px] bg-emerald-500/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Nos expertises</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 font-sans text-white"
          >
            Des solutions adaptées à{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              chaque nuisible
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto"
          >
            Que ce soit une invasion de cafards, des rongeurs dans vos locaux ou un
            besoin de désinfection approfondie à Yaoundé, nous déployons les méthodes les plus efficaces.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Bug;

            return (
              <motion.div
                key={service.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-[#0F172A]/40 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-[#0F172A]/80 p-6 sm:p-8 rounded-3xl transition-all duration-300 shadow-xl overflow-hidden"
              >
                {/* Ligne d'accent lumineuse spéculaire au survol */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/0 group-hover:via-cyan-400/60 to-transparent transition-all duration-500" />

                <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
                  
                  {/* Icon Badge */}
                  <div className="relative shrink-0">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-60 blur transition duration-300" />
                    <div className="relative w-14 h-14 rounded-2xl bg-[#090D16] border border-cyan-500/40 text-cyan-400 flex items-center justify-center shadow-lg group-hover:text-emerald-300 group-hover:border-emerald-400/50 group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2.5 pt-2 border-t border-slate-800/60">
                      {service.features.map((feature: string) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200"
                        >
                          <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center shrink-0 text-emerald-400">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center justify-center text-center gap-4"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 blur opacity-40 animate-pulse" />
            <WhatsAppButton size="large" className="relative px-8 py-4">
              Demander un devis gratuit
            </WhatsAppButton>
          </div>

          <span className="text-xs text-slate-400 flex items-center gap-1.5 mt-2">
            Intervention personnalisée sur devis immédiat
            <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
          </span>
        </motion.div>

      </div>
    </section>
  );
}