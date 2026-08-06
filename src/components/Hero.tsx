
import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import WhatsAppButton from "./WhatsAppButton";
import { trustBadges, WHATSAPP_LINK } from "../data/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-primary-50/50 via-white to-white">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary-100/40 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-green-50/60 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-primary-50/50 blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600" />
              </span>
              Disponible aujourd'hui à Yaoundé
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-dark-900 leading-[1.1] mb-6"
            >
              Éliminez les nuisibles{" "}
              <span className="text-gradient">définitivement</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-dark-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Désinsectisation, dératisation et désinfection professionnelles.
              Intervention rapide, résultats garantis, techniciens certifiés.
              Votre tranquillité commence ici.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <WhatsAppButton size="large">
                Obtenir une intervention
              </WhatsAppButton>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-dark-700 bg-white border-2 border-dark-200 rounded-full hover:border-primary-400 hover:text-primary-700 transition-all shadow-sm"
              >
                Découvrir nos services
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 text-sm text-dark-600"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 p-8 md:p-10 shadow-2xl shadow-dark-900/20">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="relative space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary-500/20 flex items-center justify-center">
                    <FaWhatsapp className="text-2xl text-primary-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      Réponse en <span className="text-primary-400">moins de 5 min</span>
                    </p>
                    <p className="text-dark-300 text-sm">Sur WhatsApp, 7j/7</p>
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                <div className="space-y-4">
                  {[
                    {
                      title: "Diagnostic gratuit à domicile",
                      desc: "Identification précise de l'infestation",
                    },
                    {
                      title: "Traitement le jour même possible",
                      desc: "Urgences prises en charge immédiatement",
                    },
                    {
                      title: "Garantie écrite incluse",
                      desc: "Nous intervenons gratuitement si besoin",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-primary-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{item.title}</p>
                        <p className="text-dark-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-white text-dark-900 font-semibold hover:bg-primary-50 transition-colors"
                  >
                    <FaWhatsapp className="text-xl text-green-600" />
                    Démarrer maintenant
                  </a>
                </div>
              </div>
            </div>

            {/* Floating rating card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-4 sm:left-6 bg-white rounded-2xl shadow-xl shadow-dark-900/10 p-4 border border-dark-100"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-dark-500 mt-0.5">
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