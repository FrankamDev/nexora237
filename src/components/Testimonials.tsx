import { motion } from "framer-motion";
import {
  Star,
  Quote,
  Sparkles,
  CheckCircle2,
  MapPin,
} from "lucide-react";

import { testimonials } from "../data/content";

const testimonialImages = [
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
];

export default function Testimonials() {
  return (
    <section
      id="temoignages"
      className="relative overflow-hidden bg-[#090D16] py-20 text-white sm:py-24 md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[170px]" />

        <div className="absolute bottom-10 right-10 h-[350px] w-[450px] rounded-full bg-emerald-500/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Ils nous font confiance</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="mb-5 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Ce que disent{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              nos clients
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="mx-auto max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7"
          >
            Découvrez les retours d'expérience de particuliers et
            professionnels ayant retrouvé un environnement sain grâce à NEXORA.
          </motion.p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {testimonials.map((t, index) => {
            const image =
              testimonialImages[index % testimonialImages.length];

            return (
              <motion.article
                key={t.name || index}
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-[#0F172A]/60 shadow-xl transition-colors duration-300 hover:border-cyan-500/40"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden sm:h-52">
                  <img
                    src={image}
                    alt={`Illustration ${t.role || "intervention NEXORA"}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-black/10 to-transparent" />

                  {/* Badge */}
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    <MapPin className="h-3 w-3 text-cyan-300" />
                    Yaoundé
                  </div>

                  {/* Quote */}
                  <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
                    <Quote className="h-5 w-5 text-cyan-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-7">

                  {/* Stars */}
                  <div className="mb-5 flex items-center gap-1">
                    {Array.from({
                      length: t.rating || 5,
                    }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial */}
                  <p className="relative z-10 mb-7 text-sm italic leading-6 text-slate-200 sm:text-base">
                    « {t.content} »
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 border-t border-slate-800/70 pt-5">
                    <div className="relative shrink-0">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 text-sm font-black text-white shadow-md">
                        {t.name
                          ? t.name.charAt(0).toUpperCase()
                          : "C"}
                      </div>

                      <CheckCircle2 className="absolute -bottom-1 -right-1 h-4 w-4 fill-[#0F172A] text-emerald-400" />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-white transition-colors group-hover:text-cyan-300 sm:text-base">
                        {t.name}
                      </p>

                      <p className="truncate text-xs text-slate-400">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom trust */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="mx-auto mt-10 flex max-w-xl items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center sm:mt-12"
        >
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />

          <p className="text-xs font-medium text-slate-300 sm:text-sm">
            Des interventions professionnelles à Yaoundé et Douala.
          </p>
        </motion.div>
      </div>
    </section>
  );
}