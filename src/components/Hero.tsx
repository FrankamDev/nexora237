
// import { motion } from "framer-motion";
// import { CheckCircle2, Star } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";
// import WhatsAppButton from "./WhatsAppButton";
// import { trustBadges, WHATSAPP_LINK } from "../data/content";

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-primary-50/50 via-white to-white">
//       {/* Background decorations */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary-100/40 blur-3xl" />
//         <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-green-50/60 blur-3xl" />
//         <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-primary-50/50 blur-2xl" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Left content */}
//           <div className="text-center lg:text-left">
//             {/* Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-6"
//             >
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75" />
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600" />
//               </span>
//               Disponible aujourd'hui à Yaoundé
//             </motion.div>

//             {/* Title */}
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-dark-900 leading-[1.1] mb-6"
//             >
//               Éliminez les nuisibles{" "}
//               <span className="text-gradient">définitivement</span>
//             </motion.h1>

//             {/* Subtitle */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="text-lg sm:text-xl text-dark-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
//             >
//               Désinsectisation, dératisation et désinfection professionnelles.
//               Intervention rapide, résultats garantis, techniciens certifiés.
//               Votre tranquillité commence ici.
//             </motion.p>

//             {/* CTAs */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
//             >
//               <WhatsAppButton size="large">
//                 Obtenir une intervention
//               </WhatsAppButton>
//               <a
//                 href="#services"
//                 className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-dark-700 bg-white border-2 border-dark-200 rounded-full hover:border-primary-400 hover:text-primary-700 transition-all shadow-sm"
//               >
//                 Découvrir nos services
//               </a>
//             </motion.div>

//             {/* Trust badges */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className="flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start"
//             >
//               {trustBadges.map((badge) => (
//                 <div
//                   key={badge}
//                   className="flex items-center gap-2 text-sm text-dark-600"
//                 >
//                   <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0" />
//                   <span>{badge}</span>
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Right visual card */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="relative"
//           >
//             <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 p-8 md:p-10 shadow-2xl shadow-dark-900/20">
//               <div
//                 className="absolute inset-0 opacity-10"
//                 style={{
//                   backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
//                   backgroundSize: "40px 40px",
//                 }}
//               />

//               <div className="relative space-y-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 rounded-2xl bg-primary-500/20 flex items-center justify-center">
//                     <FaWhatsapp className="text-2xl text-primary-400" />
//                   </div>
//                   <div>
//                     <p className="text-white font-semibold">
//                       Réponse en <span className="text-primary-400">moins de 5 min</span>
//                     </p>
//                     <p className="text-dark-300 text-sm">Sur WhatsApp, 7j/7</p>
//                   </div>
//                 </div>

//                 <div className="h-px bg-white/10" />

//                 <div className="space-y-4">
//                   {[
//                     {
//                       title: "Diagnostic gratuit à domicile",
//                       desc: "Identification précise de l'infestation",
//                     },
//                     {
//                       title: "Traitement le jour même possible",
//                       desc: "Urgences prises en charge immédiatement",
//                     },
//                     {
//                       title: "Garantie écrite incluse",
//                       desc: "Nous intervenons gratuitement si besoin",
//                     },
//                   ].map((item) => (
//                     <div key={item.title} className="flex items-start gap-3">
//                       <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 mt-0.5">
//                         <CheckCircle2 className="w-4 h-4 text-primary-400" />
//                       </div>
//                       <div>
//                         <p className="text-white font-medium">{item.title}</p>
//                         <p className="text-dark-400 text-sm">{item.desc}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="pt-2">
//                   <a
//                     href={WHATSAPP_LINK}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-white text-dark-900 font-semibold hover:bg-primary-50 transition-colors"
//                   >
//                     <FaWhatsapp className="text-xl text-green-600" />
//                     Démarrer maintenant
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Floating rating card */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//               className="absolute -bottom-6 -left-4 sm:left-6 bg-white rounded-2xl shadow-xl shadow-dark-900/10 p-4 border border-dark-100"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="flex -space-x-2">
//                   {[1, 2, 3].map((i) => (
//                     <div
//                       key={i}
//                       className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white"
//                     />
//                   ))}
//                 </div>
//                 <div>
//                   <div className="flex items-center gap-1">
//                     {[1, 2, 3, 4, 5].map((i) => (
//                       <Star
//                         key={i}
//                         className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
//                       />
//                     ))}
//                   </div>
//                   <p className="text-xs text-dark-500 mt-0.5">
//                     +2 500 clients satisfaits
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { CheckCircle2, Star, Shield, ArrowRight, Clock, Award } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import WhatsAppButton from "./WhatsAppButton";
import { trustBadges, WHATSAPP_LINK } from "../data/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#090D16]">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glows d'ambiance ultra-subtils */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[150px]" />
        <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[120px]" />

        {/* Dynamic Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.8) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-7 text-center lg:text-left z-10">
            
            {/* Pill Badge Location & Urgency */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0F172A] border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-8 shadow-lg shadow-cyan-500/5 backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="tracking-wide">Disponible aujourd'hui à Yaoundé</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] mb-6 font-sans"
            >
              Éliminez les nuisibles{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-extrabold relative inline-block">
                définitivement
                <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full opacity-60" />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              Désinsectisation, dératisation et désinfection professionnelles.
              Intervention rapide, résultats garantis, techniciens certifiés.
              <strong className="text-white font-semibold"> Votre tranquillité commence ici.</strong>
            </motion.p>

            {/* CTAs Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <WhatsAppButton size="large" className="w-full sm:w-auto shadow-xl shadow-cyan-500/10">
                Obtenir une intervention
              </WhatsAppButton>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-slate-200 bg-[#0F172A]/80 border border-slate-700/80 rounded-2xl hover:bg-slate-800 hover:border-cyan-500/40 hover:text-white transition-all duration-300 shadow-lg active:scale-[0.98]"
              >
                Découvrir nos services
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>
            </motion.div>

            {/* Trust Badges Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start pt-4 border-t border-slate-800/60"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300"
                >
                  <div className="w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <span>{badge}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT VISUAL CONTAINER (GLASS CARD & SOCIAL PROOF) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative mt-8 lg:mt-0"
          >
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 to-blue-600/30 blur-2xl opacity-70" />

            <div className="relative rounded-3xl bg-[#0F172A]/90 border border-cyan-500/20 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-black/80 overflow-hidden">
              {/* Subtle metallic reflection line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

              <div className="relative space-y-6">
                
                {/* Header Card Status */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#090D16]/60 border border-slate-800">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <FaWhatsapp className="text-2xl text-emerald-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-white font-bold text-sm sm:text-base">
                        Réponse en <span className="text-emerald-400 font-extrabold">moins de 5 min</span>
                      </p>
                    </div>
                    <p className="text-slate-400 text-xs">Assistance prioritaire 7j/7</p>
                  </div>
                </div>

                <div className="h-px bg-slate-800/80" />

                {/* Feature List */}
                <div className="space-y-4">
                  {[
                    {
                      title: "Diagnostic gratuit à domicile",
                      desc: "Identification précise de l'infestation",
                      icon: Shield,
                    },
                    {
                      title: "Traitement le jour même",
                      desc: "Urgences prises en charge immédiatement",
                      icon: Clock,
                    },
                    {
                      title: "Garantie écrite incluse",
                      desc: "Re-intervention gratuite si besoin",
                      icon: Award,
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3.5 group">
                      <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/40 transition-colors">
                        <item.icon className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </p>
                        <p className="text-slate-400 text-xs sm:text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Direct Action Link */}
                <div className="pt-2">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-sm uppercase tracking-wider hover:from-emerald-400 hover:to-teal-500 transition-all duration-300 shadow-xl shadow-emerald-950/50 active:scale-[0.98]"
                  >
                    <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" />
                    <span>Démarrer maintenant</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Floating Social Proof Badge (Mobile & Desktop Thumb-Friendly) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 sm:-bottom-7 -left-2 sm:left-4 bg-[#090D16]/95 border border-cyan-500/30 rounded-2xl p-3.5 sm:p-4 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 border-2 border-[#090D16] flex items-center justify-center text-[10px] font-bold text-white shadow-md"
                    >
                      {i === 1 ? "★" : i === 2 ? "✓" : "+"}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-[11px] sm:text-xs font-semibold text-slate-300 mt-0.5">
                    +2 500 clients satisfaits
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}