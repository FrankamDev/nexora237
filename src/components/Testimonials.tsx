// import { motion } from "framer-motion";
// import { Star, Quote } from "lucide-react";
// import { testimonials } from "../data/content";

// export default function Testimonials() {
//   return (
//     <section id="temoignages" className="py-20 md:py-28 bg-dark-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3"
//           >
//             Ils nous font confiance
//           </motion.p>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 tracking-tight mb-6"
//           >
//             Ce que disent nos clients
//           </motion.h2>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
//           {testimonials.map((t, index) => (
//             <motion.div
//               key={t.name}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               className="relative bg-white rounded-3xl p-8 border border-dark-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
//             >
//               <Quote className="absolute top-6 right-6 w-10 h-10 text-primary-100" />

//               <div className="flex gap-1 mb-5">
//                 {Array.from({ length: t.rating }).map((_, i) => (
//                   <Star
//                     key={i}
//                     className="w-4 h-4 fill-amber-400 text-amber-400"
//                   />
//                 ))}
//               </div>

//               <p className="text-dark-700 leading-relaxed mb-6 relative z-10">
//                 « {t.content} »
//               </p>

//               <div className="flex items-center gap-3">
//                 <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-sm">
//                   {t.name.charAt(0)}
//                 </div>
//                 <div>
//                   <p className="font-semibold text-dark-900">{t.name}</p>
//                   <p className="text-sm text-dark-500">{t.role}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { Star, Quote, Sparkles, CheckCircle2 } from "lucide-react";
import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section id="temoignages" className="relative py-24 md:py-32 bg-[#090D16] text-white overflow-hidden">
      {/* Background Lighting & Radial Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/5 blur-[170px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-emerald-500/5 blur-[150px] rounded-full" />
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
            <span>Ils nous font confiance</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 font-sans text-white"
          >
            Ce que disent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              nos clients
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto"
          >
            Découvrez les retours d'expérience de particuliers et professionnels ayant retrouvé un environnement sain à Yaoundé.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-[#0F172A]/40 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-[#0F172A]/80 p-6 sm:p-8 rounded-3xl transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden"
            >
              {/* Ligne spéculaire de survol */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/0 group-hover:via-cyan-400/60 to-transparent transition-all duration-500" />

              {/* Background Quote Icon Accent */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-800/40 group-hover:text-cyan-500/10 transition-colors pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: t.rating || 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-8 relative z-10 italic">
                  « {t.content} »
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-800/60">
                <div className="relative shrink-0">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white font-black text-sm shadow-md">
                    {t.name ? t.name.charAt(0) : "C"}
                  </div>
                  <CheckCircle2 className="absolute -bottom-1 -right-1 w-4 h-4 text-emerald-400 fill-[#090D16]" />
                </div>

                <div className="min-w-0">
                  <p className="font-bold text-white text-sm sm:text-base truncate group-hover:text-cyan-300 transition-colors">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-400 truncate">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}