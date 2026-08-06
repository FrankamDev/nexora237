import { motion } from "framer-motion";
import { Bug, Mouse, Droplets, ShieldCheck, Check } from "lucide-react";
import { services } from "../data/content";
import WhatsAppButton from "./WhatsAppButton";

const iconMap = {
  Bug,
  Mouse,
  Droplets,
  ShieldCheck,
} as const;

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Nos expertises
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 tracking-tight mb-6"
          >
            Des solutions adaptées à chaque nuisible
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-dark-600"
          >
            Que ce soit une invasion de cafards, des rats dans les combles ou un
            besoin de désinfection, nous avons la méthode et l'expérience pour
            résoudre votre problème.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Bug;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl p-8 border border-dark-100 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-primary-500/20 group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-dark-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-dark-600 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-dark-700"
                        >
                          <Check className="w-4 h-4 text-primary-600 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <WhatsAppButton size="large">
            Demander un devis gratuit
          </WhatsAppButton>
        </motion.div>
      </div>
    </section>
  );
}