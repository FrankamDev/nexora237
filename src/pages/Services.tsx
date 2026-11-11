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
  MessageCircle,
} from "lucide-react";

import { services } from "../data/content";
import WhatsAppButton from "../components/WhatsAppButton";


const iconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Bug,
  Mouse,
  Droplets,
  ShieldCheck,
};

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
      className="relative overflow-hidden bg-[#090D16] py-16 text-white sm:py-24 lg:py-28"
    >
      {/* Background */}
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

        {/* Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-300 sm:px-4 sm:text-xs">
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Nos solutions
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Un problème de nuisibles ?

            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Nous avons une solution.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:mt-5 sm:text-base sm:leading-7">
            Maisons, appartements, bureaux et commerces : choisissez votre
            besoin et contactez NEXORA.
          </p>
        </motion.div>

        {/* Trust points */}
        <div className="mb-8 grid grid-cols-1 gap-3 sm:mb-10 sm:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              text: "Traitement adapté",
            },
            {
              icon: Check,
              text: "Devis sur demande",
            },
            {
              icon: MapPin,
              text: "Yaoundé et Douala",
            },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 sm:py-4"
            >
              <Icon className="h-5 w-5 shrink-0 text-emerald-400" />

              <span className="text-xs font-semibold text-slate-200 sm:text-sm">
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-7">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Bug;
            const image = imageMap[service.icon] || fallbackImage;

            return (
              <motion.article
                key={service.id || index}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 24,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
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

                  <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-black/20 to-transparent" />

                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-2 text-[11px] font-semibold text-white backdrop-blur-md">
                    <Icon className="h-4 w-4 text-cyan-300" />
                    Service NEXORA
                  </div>

                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="text-2xl font-black text-white drop-shadow sm:text-3xl">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
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

                  {/* CTA */}
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

        {/* Bottom CTA */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 15,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-12 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-[#101827] to-emerald-500/10 px-5 py-8 text-center sm:mt-16 sm:px-10 sm:py-9"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
            <MessageCircle className="h-7 w-7" />
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

