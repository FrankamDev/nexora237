import { motion } from "framer-motion";
import {
  HeartPulse,
  Home,
  Building2,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";
import { risks } from "../data/content";
import WhatsAppButton from "./WhatsAppButton";

const iconMap = {
  HeartPulse,
  Home,
  Building2,
  TrendingUp,
} as const;

export default function Risks() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-4"
          >
            <AlertTriangle className="w-4 h-4" />
            Pourquoi agir maintenant
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 tracking-tight mb-6"
          >
            Chaque jour d'attente empire la situation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-dark-600 leading-relaxed"
          >
            Les nuisibles ne s'arrêtent pas. Ils se multiplient, contaminent et
            détruisent. Plus vous attendez, plus le traitement devient complexe
            et coûteux.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {risks.map((risk, index) => {
            const Icon = iconMap[risk.icon] || AlertTriangle;
            return (
              <motion.div
                key={risk.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl border border-dark-100 bg-white hover:border-red-200 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-5 group-hover:bg-red-100 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-dark-900 mb-2">
                  {risk.title}
                </h3>
                <p className="text-dark-600 text-sm leading-relaxed">
                  {risk.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <WhatsAppButton size="large">
            Stopper l'infestation maintenant
          </WhatsAppButton>
          <p className="mt-4 text-sm text-dark-500">
            Réponse rapide • Devis gratuit • Sans engagement
          </p>
        </motion.div>
      </div>
    </section>
  );
}