import { motion, type HTMLMotionProps } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_LINK } from "../data/content";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "glow";
type ButtonSize = "small" | "default" | "large";

interface WhatsAppButtonProps extends Omit<HTMLMotionProps<"a">, "children"> {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  showShimmer?: boolean;
}

export default function WhatsAppButton({
  children = "Contacter sur WhatsApp",
  variant = "primary",
  size = "default",
  className = "",
  showShimmer = true,
  ...props
}: WhatsAppButtonProps) {
  // Styles de déclinaisons alignés sur la charte Dark Obsidian / Emerald
  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 border border-emerald-400/30",
    glow:
      "bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 text-slate-950 font-black shadow-lg shadow-emerald-500/30 hover:shadow-cyan-500/50 border border-cyan-300/40",
    secondary:
      "bg-[#0F172A]/90 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/10 hover:border-emerald-400 hover:text-emerald-300 shadow-md shadow-emerald-950/40 backdrop-blur-md",
    outline:
      "bg-transparent text-slate-200 border border-slate-700/80 hover:bg-slate-800/60 hover:border-emerald-500/50 hover:text-emerald-400 backdrop-blur-sm",
  };

  // Dimensions ajustées et paddings réactifs
  const sizes: Record<ButtonSize, string> = {
    small: "px-4 py-2 text-xs sm:text-sm gap-2",
    default: "px-6 py-3.5 text-sm sm:text-base gap-2.5",
    large: "px-8 py-4 text-base sm:text-lg gap-3 font-bold",
  };

  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-flex items-center justify-center font-semibold rounded-full overflow-hidden transition-all duration-300 group cursor-pointer select-none ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {/* Effet de reflet Shimmer lumineux au survol */}
      {showShimmer && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
      )}

      {/* Icône WhatsApp animée */}
      <FaWhatsapp className="text-xl sm:text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300 text-current" />

      {/* Libellé */}
      <span className="relative z-10 tracking-wide">{children}</span>
    </motion.a>
  );
}