import { motion } from "framer-motion";
import {
  Award,
  FlaskConical,
  EyeOff,
  FileCheck,
  Clock,
  CircleDollarSign,
} from "lucide-react";
import { whyNexora } from "../data/content";

const iconMap = {
  Award,
  FlaskConical,
  EyeOff,
  FileCheck,
  Clock,
  CircleDollarSign,
} as const;

export default function WhyNexora() {
  return (
    <section id="pourquoi" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3"
            >
              Pourquoi NEXORA
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 tracking-tight mb-6"
            >
              La différence qui fait toute la tranquillité
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-dark-600 leading-relaxed mb-8"
            >
              Nous ne faisons pas de traitements superficiels. Chaque
              intervention est pensée pour éradiquer le problème à la source et
              empêcher son retour. C'est pour cela que nos clients nous
              recommandent.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-primary-50 border border-primary-100"
            >
              <p className="text-dark-800 font-medium italic">
                « Nous traitons chaque domicile et chaque commerce comme si
                c'était le nôtre. Résultat : des clients qui dorment enfin
                tranquilles. »
              </p>
              <p className="mt-3 text-sm text-primary-700 font-semibold">
                — L'équipe NEXORA
              </p>
            </motion.div>
          </div>

          {/* Right grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {whyNexora.map((item, index) => {
              const Icon = iconMap[item.icon] || Award;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="p-5 rounded-2xl bg-dark-50 border border-dark-100 hover:bg-white hover:shadow-md hover:border-primary-100 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-dark-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-dark-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}