// import { motion } from "framer-motion";
// import {
//   Award,
//   FlaskConical,
//   EyeOff,
//   FileCheck,
//   Clock,
//   CircleDollarSign,
// } from "lucide-react";
// import { whyNexora } from "../data/content";

// const iconMap = {
//   Award,
//   FlaskConical,
//   EyeOff,
//   FileCheck,
//   Clock,
//   CircleDollarSign,
// } as const;

// export default function WhyNexora() {
//   return (
//     <section id="pourquoi" className="py-20 md:py-28 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//           {/* Left content */}
//           <div>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3"
//             >
//               Pourquoi NEXORA
//             </motion.p>

//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//               className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 tracking-tight mb-6"
//             >
//               La différence qui fait toute la tranquillité
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//               className="text-lg text-dark-600 leading-relaxed mb-8"
//             >
//               Nous ne faisons pas de traitements superficiels. Chaque
//               intervention est pensée pour éradiquer le problème à la source et
//               empêcher son retour. C'est pour cela que nos clients nous
//               recommandent.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3 }}
//               className="p-6 rounded-2xl bg-primary-50 border border-primary-100"
//             >
//               <p className="text-dark-800 font-medium italic">
//                 « Nous traitons chaque domicile et chaque commerce comme si
//                 c'était le nôtre. Résultat : des clients qui dorment enfin
//                 tranquilles. »
//               </p>
//               <p className="mt-3 text-sm text-primary-700 font-semibold">
//                 — L'équipe NEXORA
//               </p>
//             </motion.div>
//           </div>

//           {/* Right grid */}
//           <div className="grid sm:grid-cols-2 gap-5">
//             {whyNexora.map((item, index) => {
//               const Icon = iconMap[item.icon] || Award;

//               return (
//                 <motion.div
//                   key={item.title}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: index * 0.08 }}
//                   className="p-5 rounded-2xl bg-dark-50 border border-dark-100 hover:bg-white hover:shadow-md hover:border-primary-100 transition-all duration-300"
//                 >
//                   <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center mb-4">
//                     <Icon className="w-5 h-5" />
//                   </div>
//                   <h3 className="font-bold text-dark-900 mb-1.5">
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-dark-600 leading-relaxed">
//                     {item.description}
//                   </p>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import {
  Award,
  FlaskConical,
  EyeOff,
  FileCheck,
  Clock,
  CircleDollarSign,
  ShieldCheck,
  Sparkles,
  Quote,
} from "lucide-react";
import { whyNexora } from "../data/content";

// Map d'icônes dynamic avec fallback
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  FlaskConical,
  EyeOff,
  FileCheck,
  Clock,
  CircleDollarSign,
  ShieldCheck,
};

export default function WhyNexora() {
  return (
    <section id="pourquoi" className="relative py-24 md:py-32 bg-[#090D16] text-white overflow-hidden">
      {/* Background Atmosphere & Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-[600px] h-[600px] bg-cyan-500/10 blur-[170px] rounded-full" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-teal-500/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Narrative & Quote (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Pourquoi NEXORA</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] text-white font-sans"
            >
              La différence qui garantit votre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                tranquillité
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
            >
              Nous ne faisons pas de traitements superficiels. Chaque
              intervention est pensée pour éradiquer le problème à la source et
              empêcher son retour définitif à Yaoundé.
            </motion.p>

            {/* Blockquote Style Cyber-Glass */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#0F172A]/90 to-[#090D16]/90 border border-cyan-500/30 backdrop-blur-xl shadow-xl overflow-hidden"
            >
              <Quote className="absolute -bottom-2 -right-2 w-20 h-20 text-cyan-500/5 rotate-180 pointer-events-none" />
              
              <p className="text-slate-200 text-sm sm:text-base font-medium italic leading-relaxed relative z-10">
                « Nous traitons chaque domicile et chaque commerce comme si
                c'était le nôtre. Notre mission : des espaces sains et des clients qui dorment enfin paisiblement. »
              </p>

              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 text-xs font-bold">
                  NX
                </div>
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  L'engagement NEXORA
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Interactive Grid (7 cols) */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              {whyNexora.map((item, index) => {
                const Icon = iconMap[item.icon] || Award;

                return (
                  <motion.div
                    key={item.title || index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group relative p-5 sm:p-6 rounded-2xl bg-[#0F172A]/40 border border-slate-800/80 hover:bg-[#0F172A]/90 hover:border-cyan-500/40 transition-all duration-300 shadow-lg"
                  >
                    {/* Ligne spéculaire de survol */}
                    <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-400/0 group-hover:via-cyan-400/60 to-transparent transition-all duration-500" />

                    {/* Badge Icône */}
                    <div className="relative mb-4">
                      <div className="absolute -inset-1 rounded-xl bg-cyan-500/20 blur opacity-0 group-hover:opacity-100 transition duration-300" />
                      <div className="relative w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:scale-105 transition-all">
                        <Icon className="w-5.5 h-5.5" />
                      </div>
                    </div>

                    <h3 className="font-bold text-base sm:text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}