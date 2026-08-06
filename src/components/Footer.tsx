import { Shield, MapPin, Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-dark-950 text-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-500 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                NEXORA
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-5">
              Expert en désinsectisation, dératisation et désinfection à Yaoundé
              et ses environs. Votre protection contre tous les nuisibles.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium text-sm transition-colors"
            >
              <FaWhatsapp className="text-lg" />
              Écrire sur WhatsApp
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors">
                  Désinsectisation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors">
                  Dératisation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors">
                  Désinfection
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors">
                  Prévention & Conseil
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#pourquoi" className="hover:text-primary-400 transition-colors">
                  Pourquoi NEXORA
                </a>
              </li>
              <li>
                <a href="#processus" className="hover:text-primary-400 transition-colors">
                  Comment ça marche
                </a>
              </li>
              <li>
                <a href="#temoignages" className="hover:text-primary-400 transition-colors">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-500 shrink-0" />
                <span>
                  Yaoundé et environs
                  <br />
                  Cameroun
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary-500 shrink-0" />
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  +237 699 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary-500 shrink-0" />
                <a
                  href="mailto:contact@nexora.cm"
                  className="hover:text-primary-400 transition-colors"
                >
                  contact@nexora.cm
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-dark-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} NEXORA. Tous droits réservés.</p>
          <p className="text-dark-500">
            Désinsectisation • Dératisation • Désinfection — Yaoundé
          </p>
        </div>
      </div>
    </footer>
  );
}