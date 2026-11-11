import {
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

import {
  WHATSAPP_LINK,
  WHATSAPP_NUMBER,
} from "../data/content";

export default function Footer() {
  const services = [
    "Désinsectisation",
    "Dératisation",
    "Désinfection",
    "Prévention & Audit",
  ];

  const navigation = [
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Pourquoi NEXORA",
      href: "#pourquoi",
    },
    {
      label: "Processus",
      href: "#processus",
    },
    {
      label: "FAQ",
      href: "#faq",
    },
  ];

  return (
    <footer className="border-t border-slate-800 bg-[#070B12] text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">

        {/* Main */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="inline-flex items-center gap-2.5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10">
                <ShieldCheck className="h-5 w-5 text-cyan-400" />
              </div>

              <span className="text-xl font-black tracking-tight text-white">
                NEXORA
                <span className="text-cyan-400">.</span>
              </span>
            </a>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
              Solutions professionnelles de désinsectisation,
              dératisation et désinfection à Yaoundé et Douala.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-emerald-400"
            >
              <FaWhatsapp className="text-base" />

              Contacter sur WhatsApp

              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h3>

            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm transition hover:text-cyan-400"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>

            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm transition hover:text-cyan-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-10 grid gap-3 border-t border-slate-800 pt-8 sm:grid-cols-3">

          <a
            href="#"
            className="flex items-center gap-3 text-sm transition hover:text-cyan-400"
          >
            <MapPin className="h-4 w-4 shrink-0 text-cyan-400" />

            <span>
              Yaoundé · Douala, Cameroun
            </span>
          </a>

          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="flex items-center gap-3 text-sm transition hover:text-cyan-400"
          >
            <Phone className="h-4 w-4 shrink-0 text-cyan-400" />

            <span>
              +237 690 37 29 77
            </span>
          </a>

          <a
            href="mailto:contact.nexora.cm@gmail.com"
            className="flex items-center gap-3 text-sm transition hover:text-cyan-400"
          >
            <Mail className="h-4 w-4 shrink-0 text-cyan-400" />

            <span>
              contact.nexora.cm@gmail.com
            </span>
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-2 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} NEXORA. Tous droits réservés.
          </p>

          <p>
            Yaoundé · Douala · Intervention 7j/7
          </p>
        </div>
      </div>
    </footer>
  );
}