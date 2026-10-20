
import { motion, useReducedMotion } from "framer-motion";
import {
  Bug,
  Mouse,
  Droplets,
  ShieldCheck,
  Check,
  Sparkles,
  ArrowRight,
  MapPin,
} from "lucide-react";

import { services } from "../data/content";
import WhatsAppButton from "./WhatsAppButton";

const iconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Bug,
  Mouse,
  Droplets,
  ShieldCheck,
};

// Images illustrant les différents types de services.
// Tu peux remplacer ces URLs par tes propres photos dans /public/images.
const imageMap: Record<string, string> = {
  Bug: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85",
  Mouse:
    "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=900&q=85",
  Droplets:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
  ShieldCheck:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
};

const fallbackImage =
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85";

export default function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#090D16] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Décoration du fond */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
            <Sparkles className="h-4 w-4" />
            Nos solutions
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Un problème de nuisibles ?
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Nous avons une solution.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            Maisons, appartements, bureaux et commerces : choisissez votre
            besoin et contactez NEXORA.
          </p>
        </motion.div>

        {/* Bandeau de confiance */}
        <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, text: "Traitement adapté" },
            { icon: Check, text: "Devis sur demande" },
            { icon: MapPin, text: "Yaoundé et Douala" },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
            >
              <Icon className="h-5 w-5 shrink-0 text-emerald-400" />
              <span className="text-sm font-semibold text-slate-200">
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* Cartes des services */}
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-7">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Bug;
            const image = imageMap[service.icon] || fallbackImage;

            return (
              <motion.article
                key={service.id || index}
                initial={
                  shouldReduceMotion ? false : { opacity: 0, y: 24 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.45,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#101827] transition-colors duration-300 hover:border-cyan-400/40"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden sm:h-60">
                  <img
                    src={image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-black/10 to-transparent" />

                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
                    <Icon className="h-4 w-4 text-cyan-300" />
                    Service NEXORA
                  </div>

                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="text-2xl font-black text-white drop-shadow sm:text-3xl">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-5 sm:p-7">
                  <p className="text-sm leading-6 text-slate-300 sm:text-base">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {service.features.map((feature: string) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-slate-200"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <WhatsAppButton
                      size="large"
                      className="w-full justify-center"
                    >
                      Demander un devis
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </WhatsAppButton>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Appel à l'action final */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-[#101827] to-emerald-500/10 px-5 py-9 text-center sm:mt-16 sm:px-10"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
            <MessageCircleIcon />
          </div>

          <h3 className="mt-5 text-2xl font-black sm:text-3xl">
            Vous ne savez pas quel traitement choisir ?
          </h3>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-300">
            Décrivez votre problème à notre équipe. Nous vous orienterons
            vers une solution adaptée.
          </p>

          <div className="mt-6 flex justify-center">
            <WhatsAppButton size="large">
              Parler à NEXORA
            </WhatsAppButton>
          </div>

          <p className="mt-4 text-xs text-slate-400">
            Yaoundé · Douala
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function MessageCircleIcon() {
  return <Bug className="h-7 w-7" />;
}




