// import { Shield, MapPin, Phone, Mail } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";
// import { WHATSAPP_LINK, WHATSAPP_NUMBER } from "../data/content";

// export default function Footer() {
//   return (
//     <footer className="bg-dark-950 text-dark-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
//           {/* Brand */}
//           <div className="lg:col-span-1">
//             <a href="#" className="flex items-center gap-2.5 mb-5">
//               <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-500 flex items-center justify-center">
//                 <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
//               </div>
//               <span className="text-xl font-bold text-white tracking-tight">
//                 NEXORA
//               </span>
//             </a>
//             <p className="text-sm leading-relaxed mb-5">
//               Expert en désinsectisation, dératisation et désinfection à Yaoundé
//               et ses environs. Votre protection contre tous les nuisibles.
//             </p>
//             <a
//               href={WHATSAPP_LINK}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium text-sm transition-colors"
//             >
//               <FaWhatsapp className="text-lg" />
//               Écrire sur WhatsApp
//             </a>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">Services</h4>
//             <ul className="space-y-2.5 text-sm">
//               <li>
//                 <a href="#services" className="hover:text-primary-400 transition-colors">
//                   Désinsectisation
//                 </a>
//               </li>
//               <li>
//                 <a href="#services" className="hover:text-primary-400 transition-colors">
//                   Dératisation
//                 </a>
//               </li>
//               <li>
//                 <a href="#services" className="hover:text-primary-400 transition-colors">
//                   Désinfection
//                 </a>
//               </li>
//               <li>
//                 <a href="#services" className="hover:text-primary-400 transition-colors">
//                   Prévention & Conseil
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Navigation */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">Navigation</h4>
//             <ul className="space-y-2.5 text-sm">
//               <li>
//                 <a href="#pourquoi" className="hover:text-primary-400 transition-colors">
//                   Pourquoi NEXORA
//                 </a>
//               </li>
//               <li>
//                 <a href="#processus" className="hover:text-primary-400 transition-colors">
//                   Comment ça marche
//                 </a>
//               </li>
//               <li>
//                 <a href="#temoignages" className="hover:text-primary-400 transition-colors">
//                   Témoignages
//                 </a>
//               </li>
//               <li>
//                 <a href="#faq" className="hover:text-primary-400 transition-colors">
//                   FAQ
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">Contact</h4>
//             <ul className="space-y-3 text-sm">
//               <li className="flex items-start gap-2.5">
//                 <MapPin className="w-4 h-4 mt-0.5 text-primary-500 shrink-0" />
//                 <span>
//                   Yaoundé et environs
//                   <br />
//                   Cameroun
//                 </span>
//               </li>
//               <li className="flex items-center gap-2.5">
//                 <Phone className="w-4 h-4 text-primary-500 shrink-0" />
//                 <a
//                   href={`tel:+${WHATSAPP_NUMBER}`}
//                   className="hover:text-primary-400 transition-colors"
//                 >
//                   +237 699 00 00 00
//                 </a>
//               </li>
//               <li className="flex items-center gap-2.5">
//                 <Mail className="w-4 h-4 text-primary-500 shrink-0" />
//                 <a
//                   href="mailto:contact@nexora.cm"
//                   className="hover:text-primary-400 transition-colors"
//                 >
//                   contact@nexora.cm
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="pt-8 border-t border-dark-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
//           <p>© {new Date().getFullYear()} NEXORA. Tous droits réservés.</p>
//           <p className="text-dark-500">
//             Désinsectisation • Dératisation • Désinfection — Yaoundé
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }


import { ShieldCheck, MapPin, Phone, Mail, ArrowUpRight, Zap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative bg-[#050811] text-slate-400 border-t border-cyan-500/20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[150px] rounded-full" />
      </div>

      {/* Ligne luminescente supérieure */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 mb-16">
          
          {/* BRAND COLUMN (4 col) */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 blur opacity-40 group-hover:opacity-80 transition duration-300" />
                <div className="relative w-10 h-10 rounded-xl bg-[#0F172A] border border-cyan-500/30 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="text-2xl font-black text-white tracking-wider">
                NEXORA<span className="text-cyan-400">.</span>
              </span>
            </a>

            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Leader en désinsectisation, dératisation et désinfection à Yaoundé.
              Protection intégrale et réintervention garantie pour votre tranquillité.
            </p>

            <div className="pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 text-xs font-semibold uppercase tracking-wider transition-all duration-300 group"
              >
                <FaWhatsapp className="text-base text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Assistance WhatsApp 24/7</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* SERVICES LINK COLUMN (2 col) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Désinsectisation", href: "#services" },
                { label: "Dératisation", href: "#services" },
                { label: "Désinfection sanitaire", href: "#services" },
                { label: "Prévention & Audit", href: "#services" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-slate-600 group-hover:text-cyan-400 transition-colors">›</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* NAVIGATION COLUMN (2 col) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Pourquoi NEXORA", href: "#pourquoi" },
                { label: "Comment ça marche", href: "#processus" },
                { label: "Témoignages", href: "#temoignages" },
                { label: "FAQ", href: "#faq" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-slate-600 group-hover:text-cyan-400 transition-colors">›</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO COLUMN (3 col) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Contact Direct
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0 text-cyan-400 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-slate-300">
                  Yaoundé et environs<br />Cameroun
                </span>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0 text-cyan-400">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="text-slate-300 hover:text-cyan-300 transition-colors font-medium"
                >
                  +237 699 00 00 00
                </a>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0 text-cyan-400">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href="mailto:contact@nexora.cm"
                  className="text-slate-300 hover:text-cyan-300 transition-colors font-medium"
                >
                  contact@nexora.cm
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} NEXORA. Tous droits réservés.</p>
          
          <div className="flex items-center gap-2 text-slate-400">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Intervention d'urgence 7j/7 — Yaoundé</span>
          </div>
        </div>
      </div>
    </footer>
  );
}