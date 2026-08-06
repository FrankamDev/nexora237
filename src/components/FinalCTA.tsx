import { motion } from "framer-motion";
import { Clock, CheckCircle2 } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.2) 0%, transparent 40%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.15) 0%, transparent 40%)`,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm"
        >
          <Clock className="w-4 h-4" />
          Intervention possible aujourd'hui
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6"
        >
          Prêt à retrouver la sérénité ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-primary-100 mb-10 max-w-2xl mx-auto"
        >
          Un message WhatsApp suffit. Nous vous répondons en quelques minutes,
          diagnostiquons gratuitement et intervenons rapidement. Votre problème
          de nuisibles s'arrête ici.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <WhatsAppButton
            size="large"
            variant="secondary"
            className="!bg-white !text-primary-700 !border-0 hover:!bg-primary-50 shadow-xl"
          >
            Contacter NEXORA maintenant
          </WhatsAppButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-primary-100"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Devis gratuit
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Garantie écrite
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Disponible 7j/7
          </div>
        </motion.div>
      </div>
    </section>
  );
}