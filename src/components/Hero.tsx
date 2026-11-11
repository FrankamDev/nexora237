import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock3,
  MapPin,
} from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const benefits = [
  "Traitement adapté au nuisible",
  "Intervention à domicile",
  "Suivi après traitement",
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#080D16] pt-24 pb-10 text-white sm:pt-32 sm:pb-16">
      
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">

          {/* CONTENT */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="relative z-10 text-center lg:text-left"
          >

            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 text-[11px] font-semibold text-emerald-300 sm:text-sm">
              <ShieldCheck size={15} />
              Entreprise professionnelle anti-nuisibles
            </div>

            {/* TITLE */}
            <h1 className="text-[2.4rem] font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Débarrassez-vous
              <span className="block text-cyan-400">
                des nuisibles.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-6 text-slate-300 sm:text-lg sm:leading-8 lg:mx-0">
              Punaises, cafards, rats ou moustiques ?
              <strong className="text-white">
                {" "}NEXORA intervient à domicile
              </strong>{" "}
              à Yaoundé et Douala.
            </p>

            {/* IMAGE MOBILE : avant CTA */}
            <div className="relative mx-auto mt-7 w-full max-w-lg lg:hidden">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-emerald-400/10 blur-xl" />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
                <img
                  src="./i4.jpg"
                  alt="Technicien NEXORA réalisant un traitement anti-nuisibles"
                  className="aspect-[4/3] w-full object-cover"
                  fetchPriority="high"
                  decoding="async"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#080D16]/80 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 text-xs font-semibold backdrop-blur-md">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    Intervention professionnelle
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <WhatsAppButton
                size="large"
                className="min-h-14 w-full justify-center text-base font-bold sm:w-auto"
              >
                Obtenir mon devis
              </WhatsAppButton>

              <a
                href="/services"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-4 font-semibold text-slate-100 transition hover:border-cyan-400/50 hover:bg-slate-800"
              >
                Nos services
                <ArrowRight size={17} className="text-cyan-400" />
              </a>
            </div>

            {/* MICRO COPY */}
            <p className="mt-3 text-[11px] text-slate-500">
              Réponse rapide sur WhatsApp • Yaoundé & Douala
            </p>

            {/* BENEFITS */}
            <div className="mx-auto mt-7 max-w-md space-y-2.5 text-left lg:mx-0">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-emerald-400"
                  />

                  <span className="text-sm text-slate-300">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* LOCATION */}
            <div className="mt-7 flex items-center justify-center gap-5 border-t border-slate-800 pt-5 text-[11px] text-slate-400 lg:justify-start">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-cyan-400" />
                Yaoundé & Douala
              </span>

              <span className="flex items-center gap-1.5">
                <Clock3 size={14} className="text-cyan-400" />
                Sur rendez-vous
              </span>
            </div>

          </motion.div>

          {/* IMAGE DESKTOP */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, scale: 0.97, y: 16 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative mx-auto hidden w-full max-w-xl lg:block"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 to-emerald-400/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">

              <img
                src="./i4.jpg"
                alt="Technicien NEXORA réalisant un traitement anti-nuisibles"
                className="aspect-[4/5] w-full object-cover"
                fetchPriority="high"
                decoding="async"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080D16]/95 via-transparent to-black/10" />

              <div className="absolute bottom-0 p-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs font-medium backdrop-blur-md">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  Service professionnel
                </span>

                <h2 className="mt-3 text-3xl font-bold">
                  Votre tranquillité,
                  <span className="block text-cyan-300">
                    notre priorité.
                  </span>
                </h2>
              </div>
            </div>

            {/* Location */}
            <div className="absolute -left-5 top-8 flex items-center gap-3 rounded-xl border border-white/10 bg-[#101827]/95 p-4 shadow-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-xs font-bold text-white">
                  Cameroun
                </p>

                <p className="mt-1 text-[11px] text-slate-400">
                  Douala · Yaoundé
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}