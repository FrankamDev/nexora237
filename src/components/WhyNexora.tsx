import { motion } from "framer-motion";
import {
  Award,
  FlaskConical,
  EyeOff,
  FileCheck,
  Clock,
  CircleDollarSign,
  ShieldCheck,
  Sparkles,
  Quote,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import { whyNexora } from "../data/content";

const iconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Award,
  FlaskConical,
  EyeOff,
  FileCheck,
  Clock,
  CircleDollarSign,
  ShieldCheck,
};

const images = [
  {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85",
    alt: "Professionnel réalisant une intervention de traitement",
  },
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
    alt: "Intérieur propre et entretenu",
  },
];

export default function WhyNexora() {
  return (
    <section
      id="pourquoi"
      className="relative overflow-hidden bg-[#090D16] py-16 text-white sm:py-24 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px] sm:h-[600px] sm:w-[600px]" />

        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-teal-500/5 blur-[130px] sm:h-[500px] sm:w-[500px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================================================== */}
        {/* HEADER */}
        {/* ================================================== */}

        <div className="mb-12 max-w-3xl sm:mb-16">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
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
            }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-400 sm:px-3.5 sm:text-xs"
          >
            <Sparkles className="h-3.5 w-3.5" />

            Pourquoi NEXORA
          </motion.div>

          <motion.h2
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
              duration: 0.65,
              delay: 0.1,
            }}
            className="text-3xl font-black leading-[1.08] tracking-tight sm:text-4xl md:text-5xl"
          >
            La différence qui garantit votre{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              tranquillité
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
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
              delay: 0.2,
            }}
            className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7"
          >
            Nous ne faisons pas de traitements superficiels. Chaque
            intervention est pensée pour traiter le problème à la source et
            réduire les risques de récidive.
          </motion.p>
        </div>

        {/* ================================================== */}
        {/* IMAGE + CONTENT */}
        {/* ================================================== */}

        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-14">

          {/* ================================================== */}
          {/* LEFT : IMAGE */}
          {/* ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-5"
          >
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0F172A] shadow-2xl">

              {/* Main image */}
              <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10] lg:aspect-[4/5]">
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-black/10 to-transparent" />

                {/* Badge */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md sm:left-5 sm:top-5 sm:text-xs">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />

                  Intervention professionnelle
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="text-xs font-medium text-cyan-300">
                    NEXORA · Yaoundé & Douala
                  </p>

                  <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">
                    Un environnement plus sain.
                  </h3>
                </div>
              </div>

              {/* Small info */}
              <div className="grid grid-cols-2 border-t border-white/10 bg-[#0F172A]">
                <div className="border-r border-white/10 px-4 py-4 sm:px-5">
                  <p className="text-lg font-black text-white">
                    Pro
                  </p>

                  <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
                    Méthode structurée
                  </p>
                </div>

                <div className="px-4 py-4 sm:px-5">
                  <p className="text-lg font-black text-white">
                    Local
                  </p>

                  <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
                    Yaoundé · Douala
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================================================== */}
          {/* RIGHT : CONTENT */}
          {/* ================================================== */}

          <div className="lg:col-span-7">

            {/* Quote */}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
              }}
              className="relative mb-7 overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-[#0F172A] to-[#090D16] p-5 sm:mb-8 sm:p-7"
            >
              <Quote className="absolute -bottom-4 -right-2 h-20 w-20 rotate-180 text-cyan-500/5" />

              <p className="relative z-10 text-sm font-medium italic leading-6 text-slate-200 sm:text-base sm:leading-7">
                « Nous traitons chaque domicile et chaque commerce comme si
                c'était le nôtre. Notre mission : des espaces sains et des
                clients qui retrouvent leur tranquillité. »
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-slate-800/80 pt-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-[10px] font-black text-cyan-300">
                  NX
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-400 sm:text-xs">
                  L'engagement NEXORA
                </span>
              </div>
            </motion.div>

            {/* Advantages */}
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {whyNexora.map((item, index) => {
                const Icon = iconMap[item.icon] || Award;

                return (
                  <motion.div
                    key={item.title || index}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    className="group relative rounded-2xl border border-slate-800/80 bg-[#0F172A]/60 p-4 shadow-lg transition-colors duration-300 hover:border-cyan-500/40 hover:bg-[#0F172A]/90 sm:p-5"
                  >
                    {/* Top line */}
                    <div className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent transition-all duration-500 group-hover:via-cyan-400/60" />

                    {/* Icon */}
                    <div className="mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 transition-all duration-300 group-hover:scale-105 group-hover:bg-cyan-500/20">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="mb-2 text-sm font-bold text-white transition-colors group-hover:text-cyan-300 sm:text-base">
                      {item.title}
                    </h3>

                    <p className="text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom reassurance */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
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
                duration: 0.5,
                delay: 0.2,
              }}
              className="mt-6 flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-4"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />

              <p className="text-xs font-medium leading-5 text-slate-300 sm:text-sm">
                Une approche professionnelle, claire et adaptée à votre
                situation.
              </p>

              <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-emerald-400" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}