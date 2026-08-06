// export const WHATSAPP_NUMBER = "237690372977"; // ← À remplacer par ton vrai numéro
// export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//   "Bonjour NEXORA, je souhaite une intervention pour un problème de nuisibles."
// )}`;

// export const trustBadges = [
//   "Intervention le jour même",
//   "Garantie écrite",
//   "Techniciens certifiés",
//   "Devis gratuit",
// ];


// ============================================================
// NEXORA — Contenu centralisé de la landing page
// ============================================================

export const WHATSAPP_NUMBER = "237690372977";

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Bonjour NEXORA 👋\nJe souhaite une intervention pour un problème de nuisibles.\nPouvez-vous m'aider ?"
)}`;

export const PHONE_DISPLAY = "+237 690 37 29 77";
export const EMAIL = "contact@nexora.cm";
export const COMPANY_NAME = "NEXORA";
export const TAGLINE = "Votre protection définitive contre les nuisibles";

// ------------------------------------------------------------
// Trust badges (Hero + Final CTA)
// ------------------------------------------------------------
export const trustBadges: string[] = [
  "Intervention le jour même",
  "Garantie écrite incluse",
  "Techniciens certifiés",
  "Devis gratuit & transparent",
];

// ------------------------------------------------------------
// Statistiques (compteurs animés)
// ------------------------------------------------------------
export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 2500, suffix: "+", label: "Interventions réussies" },
  { value: 98, suffix: "%", label: "Clients satisfaits" },
  { value: 24, suffix: "h", label: "Disponibilité" },
  { value: 15, suffix: "+", label: "Ans d'expérience" },
];

// ------------------------------------------------------------
// Services
// ------------------------------------------------------------
export type ServiceIcon = "Bug" | "Mouse" | "Droplets" | "ShieldCheck";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
  features: string[];
}

export const services: Service[] = [
  {
    id: "desinsectisation",
    title: "Désinsectisation",
    description:
      "Élimination complète et durable des cafards, fourmis, termites, punaises de lit, moustiques et autres insectes. Traitement ciblé selon l’espèce et le niveau d’infestation.",
    icon: "Bug",
    features: [
      "Diagnostic précis de l’espèce",
      "Produits professionnels homologués",
      "Garantie jusqu’à 6 mois",
      "Sans odeur persistante",
    ],
  },
  {
    id: "deratisation",
    title: "Dératisation",
    description:
      "Lutte professionnelle contre rats et souris. Identification des points d’entrée, piégeage sécurisé et plan de prévention pour éviter toute réinfestation.",
    icon: "Mouse",
    features: [
      "Inspection complète des lieux",
      "Méthodes discrètes et efficaces",
      "Bouchement des points d’accès",
      "Suivi post-intervention",
    ],
  },
  {
    id: "desinfection",
    title: "Désinfection",
    description:
      "Assainissement profond des surfaces, sols et espaces de vie. Idéal après une infestation, pour les commerces, restaurants, bureaux et habitations.",
    icon: "Droplets",
    features: [
      "Respect des normes sanitaires",
      "Produits virucides et bactéricides",
      "Résultat visible immédiatement",
      "Adapté aux lieux sensibles",
    ],
  },
  {
    id: "prevention",
    title: "Prévention & Conseil",
    description:
      "Audit complet de vos locaux et plan de prévention personnalisé. Idéal pour les entreprises et les particuliers qui veulent éviter toute future infestation.",
    icon: "ShieldCheck",
    features: [
      "Rapport d’audit détaillé",
      "Recommandations concrètes",
      "Contrats d’entretien mensuels",
      "Accompagnement sur mesure",
    ],
  },
];

// ------------------------------------------------------------
// Risques (section "Pourquoi agir maintenant")
// ------------------------------------------------------------
export type RiskIcon = "HeartPulse" | "Home" | "Building2" | "TrendingUp";

export interface Risk {
  title: string;
  description: string;
  icon: RiskIcon;
}

export const risks: Risk[] = [
  {
    title: "Santé compromise",
    description:
      "Les nuisibles transmettent des maladies graves : leptospirose, salmonellose, allergies, asthme et infections cutanées. Votre famille et vos employés sont exposés chaque jour.",
    icon: "HeartPulse",
  },
  {
    title: "Dommages matériels",
    description:
      "Rats et souris rongent câbles électriques et isolants. Termites détruisent silencieusement les structures en bois. Les réparations coûtent souvent très cher.",
    icon: "Home",
  },
  {
    title: "Image de marque détruite",
    description:
      "Pour un restaurant, un hôtel ou un commerce : une seule infestation visible peut faire fuir vos clients et entraîner une fermeture administrative.",
    icon: "Building2",
  },
  {
    title: "Propagation ultra-rapide",
    description:
      "Une colonie de cafards peut doubler en quelques semaines seulement. Plus vous attendez, plus le traitement devient long, complexe et coûteux.",
    icon: "TrendingUp",
  },
];

// ------------------------------------------------------------
// Pourquoi choisir NEXORA
// ------------------------------------------------------------
export type WhyIcon =
  | "Award"
  | "FlaskConical"
  | "EyeOff"
  | "FileCheck"
  | "Clock"
  | "CircleDollarSign";

export interface WhyItem {
  title: string;
  description: string;
  icon: WhyIcon;
}

export const whyNexora: WhyItem[] = [
  {
    title: "Techniciens certifiés",
    description:
      "Notre équipe est formée aux dernières techniques de lutte intégrée contre les nuisibles et respecte strictement les normes en vigueur.",
    icon: "Award",
  },
  {
    title: "Produits professionnels",
    description:
      "Nous utilisons uniquement des formulations homologuées, efficaces et sélectionnées pour minimiser l’impact sur votre environnement et votre santé.",
    icon: "FlaskConical",
  },
  {
    title: "Intervention discrète",
    description:
      "Véhicules non signalés, horaires flexibles et discrétion totale. Idéal pour les particuliers comme pour les entreprises et commerces.",
    icon: "EyeOff",
  },
  {
    title: "Garantie écrite",
    description:
      "Toutes nos interventions sont accompagnées d’une garantie écrite. Si les nuisibles réapparaissent dans la période couverte, nous intervenons gratuitement.",
    icon: "FileCheck",
  },
  {
    title: "Disponible 7j/7",
    description:
      "Urgence ? Nous intervenons le jour même, y compris le week-end et les jours fériés. Votre tranquillité n’attend pas.",
    icon: "Clock",
  },
  {
    title: "Tarifs transparents",
    description:
      "Devis clair et détaillé avant toute intervention. Aucun frais caché. Vous ne payez qu’une fois le travail terminé et validé.",
    icon: "CircleDollarSign",
  },
];

// ------------------------------------------------------------
// Processus d’intervention
// ------------------------------------------------------------
export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Contactez-nous",
    description:
      "Un simple message WhatsApp ou un appel suffit. Décrivez votre problème en 30 secondes. Nous vous répondons rapidement.",
  },
  {
    step: "02",
    title: "Diagnostic gratuit",
    description:
      "Un technicien se déplace chez vous, identifie précisément l’espèce, les points d’entrée et l’ampleur de l’infestation.",
  },
  {
    step: "03",
    title: "Traitement ciblé",
    description:
      "Intervention professionnelle avec les produits et méthodes les plus adaptés à votre situation. Efficace et durable.",
  },
  {
    step: "04",
    title: "Suivi & Garantie",
    description:
      "Contrôle post-traitement + garantie écrite. Nous restons à vos côtés jusqu’à l’éradication totale des nuisibles.",
  },
];

// ------------------------------------------------------------
// Témoignages clients
// ------------------------------------------------------------
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Marie N.",
    role: "Propriétaire — Bastos",
    content:
      "Après des mois de lutte inutile contre les cafards, NEXORA a tout réglé en une seule intervention. Plus rien depuis 8 mois. Service impeccable et très professionnel.",
    rating: 5,
  },
  {
    name: "Jean-Paul T.",
    role: "Gérant de restaurant — Centre-ville",
    content:
      "Intervention discrète un dimanche matin. Les rats ont disparu. Mes clients n’ont rien remarqué. Je recommande vivement NEXORA à tous les professionnels de la restauration.",
    rating: 5,
  },
  {
    name: "Amina K.",
    role: "Famille — Odza",
    content:
      "Professionnels, ponctuels et rassurants. Ils ont pris le temps d’expliquer chaque étape. Les punaises de lit sont parties définitivement. Merci NEXORA !",
    rating: 5,
  },
];

// ------------------------------------------------------------
// FAQ
// ------------------------------------------------------------
export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "Combien de temps dure une intervention ?",
    answer:
      "La plupart des interventions durent entre 45 minutes et 2 heures selon l’ampleur de l’infestation. Nous restons le temps nécessaire pour obtenir un résultat parfait.",
  },
  {
    question: "Les produits sont-ils dangereux pour les enfants et les animaux ?",
    answer:
      "Nous utilisons des formulations professionnelles à faible residualité. Avant chaque intervention, nous vous indiquons précisément les précautions à prendre (durée d’aération, zones à éviter temporairement, etc.).",
  },
  {
    question: "Proposez-vous une garantie ?",
    answer:
      "Oui. Toutes nos interventions sont accompagnées d’une garantie écrite. En cas de réapparition des nuisibles dans la période couverte, nous intervenons gratuitement.",
  },
  {
    question: "Intervenez-vous le week-end et en urgence ?",
    answer:
      "Oui, 7 jours sur 7. Pour les urgences (invasion visible, établissement commercial, etc.), nous pouvons intervenir le jour même.",
  },
  {
    question: "Comment se passe le paiement ?",
    answer:
      "Devis gratuit et transparent avant toute intervention. Le paiement s’effectue uniquement après le travail réalisé et votre validation.",
  },
  {
    question: "Couvrez-vous tout Yaoundé et les environs ?",
    answer:
      "Oui. Nous intervenons à Yaoundé et dans les environs (Bastos, Odza, Mvan, Nkolbisson, Soa, Essos, Mvog-Ada, etc.). Contactez-nous pour confirmer votre zone.",
  },
  {
    question: "Faut-il préparer quelque chose avant votre arrivée ?",
    answer:
      "Nous vous indiquons exactement quoi faire selon le type d’intervention (dégager certains espaces, protéger la nourriture, etc.). Dans la plupart des cas, la préparation est très simple.",
  },
];