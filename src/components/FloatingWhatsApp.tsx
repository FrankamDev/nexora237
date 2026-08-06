// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { MessageCircle, X, Send, CheckCheck, Sparkles, ShieldCheck } from "lucide-react";

// // Remplacez par votre numéro WhatsApp au format international (sans le +)
// const WHATSAPP_NUMBER = "237600000000"; // Ex: 2376XXXXXXXX pour le Cameroun

// // Questions rapides proposées à l'utilisateur
// const QUICK_QUESTIONS = [
//   "Je souhaite un devis gratuit 📋",
//   "Problème urgent de cafards / rongeurs 🚨",
//   "Demander une inspection à domicile 🏠",
// ];

// export default function FloatingWhatsApp() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [message, setMessage] = useState("");
//   const [unreadCount, setUnreadCount] = useState(1);
//   const chatEndRef = useRef<HTMLDivElement>(null);

//   // Auto-scroll en bas du chat
//   useEffect(() => {
//     if (isOpen) {
//       setUnreadCount(0);
//       chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [isOpen]);

//   const handleSendMessage = (textToSend?: string) => {
//     const finalMsg = textToSend || message;
//     if (!finalMsg.trim()) return;

//     const encodedMsg = encodeURIComponent(finalMsg);
//     const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;

//     window.open(whatsappUrl, "_blank", "noopener,noreferrer");
//     setMessage("");
//   };

//   return (
//     <div className="fixed bottom-5 right-5 z-50 font-sans">
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.9, y: 20 }}
//             transition={{ duration: 0.25, ease: "easeOut" }}
//             className="w-[calc(100vw-2.5rem)] sm:w-[380px] bg-[#0F172A] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden mb-4 flex flex-col"
//             style={{ maxHeight: "520px" }}
//           >
//             {/* Header du Chatbot */}
//             <div className="bg-gradient-to-r from-[#090D16] via-[#0F172A] to-[#090D16] p-4 border-b border-slate-800/80 flex items-center justify-between relative">
//               <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
              
//               <div className="flex items-center gap-3">
//                 <div className="relative">
//                   <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white font-bold shadow-md">
//                     <ShieldCheck className="w-6 h-6 text-slate-950" />
//                   </div>
//                   {/* Pastille En Ligne */}
//                   <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#090D16] rounded-full animate-pulse" />
//                 </div>

//                 <div>
//                   <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
//                     Assistance 3D Pest
//                     <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
//                   </h4>
//                   <p className="text-xs text-emerald-400 font-medium flex items-center gap-1">
//                     <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
//                     En ligne • Réponse en &lt; 5 min
//                   </p>
//                 </div>
//               </div>

//               {/* Bouton Fermer */}
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="w-8 h-8 rounded-full bg-slate-800/60 hover:bg-slate-700/80 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
//                 aria-label="Fermer le chat"
//               >
//                 <X className="w-4 h-4" />
//               </button>
//             </div>

//             {/* Corps de la conversation */}
//             <div className="p-4 overflow-y-auto space-y-4 flex-1 bg-[#090D16]/90 backdrop-blur-md text-xs sm:text-sm">
//               {/* Horodatage fictif */}
//               <div className="text-center">
//                 <span className="text-[10px] uppercase font-semibold text-slate-500 bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-800">
//                   Aujourd'hui
//                 </span>
//               </div>

//               {/* Message de bienvenue automatique */}
//               <div className="flex flex-col items-start gap-1 max-w-[85%]">
//                 <div className="bg-[#1E293B] border border-slate-700/60 text-slate-200 p-3.5 rounded-2xl rounded-tl-none shadow-md space-y-2">
//                   <p>
//                     Bonjour ! 👋 Bienvenue chez <strong>Anti-Nuisibles Yaoundé</strong>.
//                   </p>
//                   <p className="text-slate-300">
//                     Comment pouvons-nous vous aider à assainir votre logement ou espace commercial aujourd'hui ?
//                   </p>
//                 </div>
//                 <span className="text-[10px] text-slate-500 ml-1 flex items-center gap-1">
//                   12:00 <CheckCheck className="w-3 h-3 text-cyan-400" />
//                 </span>
//               </div>

//               {/* Suggestions Rapides */}
//               <div className="pt-2 space-y-2">
//                 <p className="text-[11px] text-slate-400 font-medium">Faire une demande rapide :</p>
//                 <div className="flex flex-wrap gap-2">
//                   {QUICK_QUESTIONS.map((q, idx) => (
//                     <button
//                       key={idx}
//                       onClick={() => handleSendMessage(q)}
//                       className="text-xs text-cyan-300 bg-cyan-950/40 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400/60 px-3 py-2 rounded-xl text-left transition-all duration-200 active:scale-95"
//                     >
//                       {q}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div ref={chatEndRef} />
//             </div>

//             {/* Zone d'envoi de message */}
//             <div className="p-3 bg-[#0F172A] border-t border-slate-800/80">
//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   handleSendMessage();
//                 }}
//                 className="flex items-center gap-2"
//               >
//                 <input
//                   type="text"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   placeholder="Écrivez votre message..."
//                   className="flex-1 bg-[#090D16] border border-slate-700/80 focus:border-cyan-500/60 focus:outline-none rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 transition-colors"
//                 />
//                 <button
//                   type="submit"
//                   disabled={!message.trim()}
//                   className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 flex items-center justify-center font-bold shadow-lg transition-all duration-200 shrink-0"
//                 >
//                   <Send className="w-4 h-4" />
//                 </button>
//               </form>
//               <div className="text-center mt-2">
//                 <span className="text-[10px] text-slate-500">
//                   Redirection directe vers WhatsApp Messenger
//                 </span>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Bouton Flottant Principal (Bulle WhatsApp) */}
//       <motion.button
//         onClick={() => setIsOpen(!isOpen)}
//         whileHover={{ scale: 1.08 }}
//         whileTap={{ scale: 0.92 }}
//         className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] transition-all duration-300"
//         aria-label="Ouvrir le chat WhatsApp"
//       >
//         {/* Halo Lumineux pulsant */}
//         <span className="absolute -inset-1 rounded-full bg-emerald-400/40 blur-md animate-ping pointer-events-none opacity-75" />

//         {/* Badge de notification non lue */}
//         {unreadCount > 0 && !isOpen && (
//           <span className="absolute -top-1 -right-1 w-5 h-5 bg-cyan-400 border-2 border-[#090D16] text-[#090D16] text-[10px] font-black rounded-full flex items-center justify-center shadow-md animate-bounce">
//             {unreadCount}
//           </span>
//         )}

//         {/* Switch d'icône */}
//         {isOpen ? (
//           <X className="w-7 h-7 text-slate-950 relative z-10" />
//         ) : (
//           <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-slate-950 relative z-10 fill-slate-950/20" />
//         )}
//       </motion.button>
//     </div>
//   );
// }


import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  CheckCheck,
  Sparkles,
  ShieldCheck,
  Loader2,
} from "lucide-react";

// Remplacez par votre numéro WhatsApp au format international (sans le +)
const WHATSAPP_NUMBER = "237690372977"; // Ex: 2376XXXXXXXX pour le Cameroun

const QUICK_QUESTIONS = [
  "Je souhaite un devis gratuit 📋",
  "Problème urgent de cafards / rongeurs 🚨",
  "Demander une inspection à domicile 🏠",
];

type Message = {
  id: string;
  from: "bot" | "user";
  text: string;
  time: string;
};

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Bonjour";
  if (hour < 18) return "Bon après-midi";
  return "Bonsoir";
};

const getCurrentTime = () => {
  return new Date().toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const isBusinessHours = () => {
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay(); // 0 = dimanche
  // Lundi-Samedi 7h-20h (adaptable)
  return day !== 0 && hour >= 7 && hour < 20;
};

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [unreadCount, setUnreadCount] = useState(1);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const online = isBusinessHours();

  // Scroll automatique
  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  }, []);

  // Initialisation de la conversation au premier open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setUnreadCount(0);
      setIsTyping(true);

      const timer = setTimeout(() => {
        setIsTyping(false);
        setMessages([
          {
            id: "welcome",
            from: "bot",
            text: `${getGreeting()} ! 👋 Bienvenue chez **Anti-Nuisibles Yaoundé**.\n\nJe suis votre assistant intelligent. Comment puis-je vous aider à protéger votre espace aujourd’hui ?`,
            time: getCurrentTime(),
          },
        ]);
        scrollToBottom();
      }, 900);

      return () => clearTimeout(timer);
    }

    if (isOpen) {
      setUnreadCount(0);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Fermeture avec Échap
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Scroll à chaque nouveau message
  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isTyping, isOpen, scrollToBottom]);

  const addBotReply = (text: string, delay = 1100) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          from: "bot",
          text,
          time: getCurrentTime(),
        },
      ]);
    }, delay);
  };

  const buildWhatsAppMessage = (userText: string) => {
    const context = hasInteracted
      ? "Suite à notre échange sur le site :"
      : "Message depuis le site web :";

    return `${context}\n\n${userText}\n\n---\nEnvoyé via le chat intelligent Anti-Nuisibles Yaoundé`;
  };

  const handleSendMessage = (textToSend?: string) => {
    const finalMsg = (textToSend || message).trim();
    if (!finalMsg) return;

    setHasInteracted(true);

    // Ajout du message utilisateur
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        from: "user",
        text: finalMsg,
        time: getCurrentTime(),
      },
    ]);
    setMessage("");

    // Réponses intelligentes selon le contenu
    const lower = finalMsg.toLowerCase();

    if (lower.includes("devis") || lower.includes("gratuit")) {
      addBotReply(
        "Parfait ! 📋 Pour vous préparer un devis précis et gratuit, j’ai besoin de quelques infos.\n\nPouvez-vous me préciser :\n• Type de nuisible (cafards, rongeurs, termites…)\n• Surface approximative\n• Ville / quartier\n\nOu cliquez sur « Envoyer sur WhatsApp » pour parler directement à un technicien."
      );
    } else if (
      lower.includes("urgent") ||
      lower.includes("cafard") ||
      lower.includes("rongeur") ||
      lower.includes("rat")
    ) {
      addBotReply(
        "Je comprends l’urgence 🚨\n\nNous intervenons rapidement à Yaoundé et environs.\n\nJe prépare votre demande prioritaire. Un technicien vous répondra en moins de 5 minutes sur WhatsApp."
      );
    } else if (lower.includes("inspection") || lower.includes("domicile")) {
      addBotReply(
        "Excellente décision 🏠\n\nNous proposons une inspection diagnostique gratuite.\n\nSouhaitez-vous planifier un passage ? Je peux déjà transmettre vos coordonnées à l’équipe."
      );
    } else {
      addBotReply(
        "Merci pour votre message.\n\nUn conseiller va prendre en charge votre demande. Vous pouvez continuer directement sur WhatsApp pour une réponse encore plus rapide."
      );
    }
  };

  const openWhatsApp = (customText?: string) => {
    const lastUserMsg =
      customText ||
      [...messages].reverse().find((m) => m.from === "user")?.text ||
      message ||
      "Bonjour, je souhaite être contacté.";

    const finalText = buildWhatsAppMessage(lastUserMsg);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(finalText)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-[calc(100vw-2.5rem)] sm:w-[380px] bg-[#0F172A] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden mb-4 flex flex-col"
            style={{ maxHeight: "520px" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#090D16] via-[#0F172A] to-[#090D16] p-4 border-b border-slate-800/80 flex items-center justify-between relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />

              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white font-bold shadow-md">
                    <ShieldCheck className="w-6 h-6 text-slate-950" />
                  </div>
                  <span
                    className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-[#090D16] rounded-full ${
                      online ? "bg-emerald-500 animate-pulse" : "bg-slate-500"
                    }`}
                  />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    Assistance 3D Pest
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  </h4>
                  <p className="text-xs font-medium flex items-center gap-1">
                    {online ? (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                        <span className="text-emerald-400">
                          En ligne • Réponse en &lt; 5 min
                        </span>
                      </>
                    ) : (
                      <span className="text-slate-400">
                        Hors ligne • Réponse sous 1h
                      </span>
                    )}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800/60 hover:bg-slate-700/80 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Fermer le chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Corps de conversation */}
            <div className="p-4 overflow-y-auto space-y-4 flex-1 bg-[#090D16]/90 backdrop-blur-md text-xs sm:text-sm">
              <div className="text-center">
                <span className="text-[10px] uppercase font-semibold text-slate-500 bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-800">
                  Aujourd'hui
                </span>
              </div>

              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col gap-1 max-w-[85%] ${
                    msg.from === "user" ? "items-end ml-auto" : "items-start"
                  }`}
                >
                  <div
                    className={`p-3.5 rounded-2xl shadow-md whitespace-pre-line ${
                      msg.from === "user"
                        ? "bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-tr-none"
                        : "bg-[#1E293B] border border-slate-700/60 text-slate-200 rounded-tl-none"
                    }`}
                  >
                    {msg.text.split("**").map((part, i) =>
                      i % 2 === 1 ? (
                        <strong key={i}>{part}</strong>
                      ) : (
                        <span key={i}>{part}</span>
                      )
                    )}
                  </div>
                  <span className="text-[10px] text-slate-500 flex items-center gap-1 px-1">
                    {msg.time}
                    {msg.from === "user" && (
                      <CheckCheck className="w-3 h-3 text-cyan-400" />
                    )}
                  </span>
                </div>
              ))}

              {/* Indicateur de frappe */}
              {isTyping && (
                <div className="flex items-start gap-1 max-w-[85%]">
                  <div className="bg-[#1E293B] border border-slate-700/60 text-slate-300 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-emerald-400" />
                    <span className="text-xs">L’assistant écrit…</span>
                  </div>
                </div>
              )}

              {/* Suggestions rapides (seulement au début) */}
              {messages.length <= 1 && !isTyping && (
                <div className="pt-2 space-y-2">
                  <p className="text-[11px] text-slate-400 font-medium">
                    Faire une demande rapide :
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {QUICK_QUESTIONS.map((q, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(q)}
                        className="text-xs text-cyan-300 bg-cyan-950/40 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400/60 px-3 py-2 rounded-xl text-left transition-all duration-200 active:scale-95"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA WhatsApp après interaction */}
              {hasInteracted && !isTyping && (
                <div className="pt-1">
                  <button
                    onClick={() => openWhatsApp()}
                    className="w-full text-xs font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 py-2.5 rounded-xl transition-all active:scale-[0.98] shadow-md"
                  >
                    Continuer sur WhatsApp →
                  </button>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Zone de saisie */}
            <div className="p-3 bg-[#0F172A] border-t border-slate-800/80">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Écrivez votre message..."
                  className="flex-1 bg-[#090D16] border border-slate-700/80 focus:border-cyan-500/60 focus:outline-none rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!message.trim()}
                  className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 flex items-center justify-center font-bold shadow-lg transition-all duration-200 shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <div className="text-center mt-2">
                <span className="text-[10px] text-slate-500">
                  Conversation intelligente • Puis redirection WhatsApp
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton flottant */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] transition-all duration-300"
        aria-label="Ouvrir le chat WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400/40 blur-md animate-ping pointer-events-none opacity-75" />

        {unreadCount > 0 && !isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-cyan-400 border-2 border-[#090D16] text-[#090D16] text-[10px] font-black rounded-full flex items-center justify-center shadow-md animate-bounce">
            {unreadCount}
          </span>
        )}

        {isOpen ? (
          <X className="w-7 h-7 text-slate-950 relative z-10" />
        ) : (
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-slate-950 relative z-10 fill-slate-950/20" />
        )}
      </motion.button>
    </div>
  );
}