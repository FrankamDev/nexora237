
# NEXORA Anti-Nuisibles

**Une solution professionnelle pour un environnement propre, sain et sans nuisibles.**

NEXORA Anti-Nuisibles est une plateforme web conçue pour présenter les services de désinsectisation, de dératisation et de désinfection. Elle permet aux visiteurs de découvrir les prestations proposées et de contacter rapidement l'entreprise via WhatsApp.

## Fonctionnalités

- Présentation des services anti-nuisibles.
- Interface moderne, responsive et adaptée aux mobiles.
- Navigation entre les différentes pages.
- Boutons de contact via WhatsApp.
- Sections de présentation, avantages, processus d'intervention, témoignages et FAQ.
- Animations fluides pour améliorer l'expérience utilisateur.

## Technologies utilisées

- **React** — construction de l'interface utilisateur.
- **TypeScript** — typage statique et fiabilité du code.
- **Vite** — environnement de développement et de build.
- **Tailwind CSS** — stylisation et responsive design.
- **React Router** — gestion de la navigation.
- **Framer Motion** — animations.
- **Lucide React** — icônes.

## Prérequis

Avant de commencer, assure-toi d'avoir installé :

- [Node.js](https://nodejs.org/)
- npm, généralement fourni avec Node.js.
- Git (facultatif, pour la gestion du code source).

## Installation

### 1. Cloner le projet

```bash
git clone URL_DU_DEPOT
```

Remplace `URL_DU_DEPOT` par l'adresse réelle du dépôt Git.

### 2. Accéder au dossier

```bash
cd nom-du-projet
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Lancer le serveur de développement

```bash
npm run dev
```

Ouvre ensuite l'adresse locale affichée dans le terminal, généralement `http://localhost:5173`.

## Build de production

Pour générer les fichiers optimisés destinés au déploiement :

```bash
npm run build
```

Pour tester localement la version de production :

```bash
npm run preview
```

## Structure du projet

```text
src/
├── components/
│   ├── Header.tsx
│   └── WhatsAppButton.tsx
├── data/
│   └── content.ts
├── pages/
│   ├── Home.tsx
│   └── Services.tsx
├── App.tsx
└── main.tsx

public/
├── logo.jpg
└── images/

index.html
package.json
README.md
```

*Cette structure est indicative : adapte-la aux dossiers et fichiers réellement présents dans ton projet.*

## Personnalisation

Avant la mise en production, vérifie les éléments suivants :

- Le numéro WhatsApp utilisé par les boutons de contact.
- Le logo et les images.
- Les textes, tarifs et services proposés.
- Les liens de navigation.
- Les informations de contact de l'entreprise.
- Les témoignages et les éventuelles zones d'intervention.

## Déploiement

Le projet peut être déployé sur une plateforme compatible avec les applications frontend, comme Vercel, Netlify ou un hébergement web compatible avec les fichiers statiques.

Après le build, les fichiers de production sont générés dans le dossier `dist/`.

Pour un hébergement classique, configure également la réécriture des routes vers `index.html` afin que les pages gérées par React Router fonctionnent après un rafraîchissement.

## Contribution

Les améliorations et corrections sont les bienvenues. Pour contribuer :

1. Créer une branche dédiée.
2. Effectuer les modifications.
3. Tester le projet.
4. Soumettre une pull request.

## Licence

La licence de ce projet reste à définir par son propriétaire.

---

**NEXORA Anti-Nuisibles**  
*Un environnement propre. Une tranquillité retrouvée.*
