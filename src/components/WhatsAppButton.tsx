import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_LINK } from "../data/content";

export default function WhatsAppButton({
  children = "Contacter sur WhatsApp",
  variant = "primary",
  size = "default",
  className = "",
}) {
  const variants = {
    primary:
      "bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40",
    secondary:
      "bg-white text-green-700 border-2 border-green-200 hover:border-green-500 hover:bg-green-50",
    outline:
      "bg-transparent text-white border-2 border-white/40 hover:bg-white/10",
  };

  const sizes = {
    default: "px-7 py-3.5 text-base",
    large: "px-9 py-4.5 text-lg",
    small: "px-5 py-2.5 text-sm",
  };

  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 font-semibold rounded-full transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <FaWhatsapp className="text-xl" />
      <span>{children}</span>
    </motion.a>
  );
}