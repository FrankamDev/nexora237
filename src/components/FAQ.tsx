// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Plus, Minus } from "lucide-react";
// import { faqs } from "../data/content";

// interface FAQItemProps {
//   faq: { question: string; answer: string };
//   isOpen: boolean;
//   onToggle: () => void;
// }

// function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
//   return (
//     <div className="border-b border-dark-100 last:border-0">
//       <button
//         onClick={onToggle}
//         className="w-full flex items-center justify-between gap-4 py-5 text-left group"
//         aria-expanded={isOpen}
//       >
//         <span className="font-semibold text-dark-900 group-hover:text-primary-700 transition-colors">
//           {faq.question}
//         </span>
//         <span
//           className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
//             isOpen
//               ? "bg-primary-100 text-primary-700"
//               : "bg-dark-100 text-dark-500"
//           }`}
//         >
//           {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
//         </span>
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.25 }}
//             className="overflow-hidden"
//           >
//             <p className="pb-5 text-dark-600 leading-relaxed pr-12">
//               {faq.answer}
//             </p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState(0);

//   return (
//     <section id="faq" className="py-20 md:py-28 bg-white">
//       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3"
//           >
//             Questions fréquentes
//           </motion.p>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-3xl sm:text-4xl font-extrabold text-dark-900 tracking-tight"
//           >
//             Tout ce que vous devez savoir
//           </motion.h2>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="bg-dark-50 rounded-3xl p-6 md:p-8 border border-dark-100"
//         >
//           {faqs.map((faq, index) => (
//             <FAQItem
//               key={index}
//               faq={faq}
//               isOpen={openIndex === index}
//               onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
//             />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircleQuestion } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { faqs, WHATSAPP_LINK } from "../data/content";

interface FAQItemProps {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ faq, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <div
      className={`group transition-all duration-300 rounded-2xl mb-3 border ${
        isOpen
          ? "bg-[#0F172A]/90 border-cyan-500/40 shadow-xl shadow-cyan-500/5"
          : "bg-[#0F172A]/40 border-slate-800/80 hover:border-slate-700/80 hover:bg-[#0F172A]/60"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3.5">
          {/* Badge Numéroté Style Futuristic */}
          <span
            className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 transition-colors ${
              isOpen
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40"
                : "bg-slate-800/80 text-slate-400 border border-slate-700/50 group-hover:text-slate-200"
            }`}
          >
            0{index + 1}
          </span>
          <span
            className={`font-semibold text-base sm:text-lg transition-colors ${
              isOpen
                ? "text-cyan-300"
                : "text-slate-100 group-hover:text-white"
            }`}
          >
            {faq.question}
          </span>
        </div>

        {/* Bouton Toggle Interactif */}
        <span
          className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-cyan-500 text-slate-950 rotate-180 shadow-md shadow-cyan-500/30"
              : "bg-slate-800/80 text-slate-400 group-hover:bg-slate-700 group-hover:text-white"
          }`}
        >
          <ChevronDown className="w-5 h-5" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/50 mt-1">
              <p className="pl-10 text-slate-300/90">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[#090D16] overflow-hidden">
      {/* Halo Lumineux Décoratif d'arrière-plan */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/5 blur-[160px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Questions Fréquentes</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 font-sans"
          >
            Tout ce que vous devez{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              savoir
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto"
          >
            Des réponses claires et transparentes sur nos interventions, nos garanties et nos tarifs à Yaoundé.
          </motion.p>
        </div>

        {/* Liste des Accordéons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-14"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        {/* Call-to-Action Anti-Objection (Conversion Booster) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#090D16] to-[#0F172A] border border-cyan-500/30 p-8 sm:p-10 text-center shadow-2xl overflow-hidden"
        >
          {/* Effet d'éclat lumineux */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

          <div className="relative z-10 max-w-lg mx-auto space-y-5">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <MessageCircleQuestion className="w-6 h-6" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Vous avez une question spécifique ?
            </h3>

            <p className="text-slate-300 text-sm sm:text-base">
              Nos experts en désinsectisation sont en ligne pour analyser directement votre problème et vous donner une estimation immédiate.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-sm uppercase tracking-wider hover:from-emerald-400 hover:to-teal-500 transition-all duration-300 shadow-xl shadow-emerald-950/50 active:scale-[0.98]"
            >
              <FaWhatsapp className="text-xl" />
              <span>Poser ma question sur WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}