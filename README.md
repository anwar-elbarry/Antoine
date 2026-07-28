# Antoine Blanco — Coaching Sportif

Une landing page moderne, performante et 100% responsive conçue pour **Antoine Blanco**, coach sportif. L'objectif de cette page est de convertir les visiteurs grâce à un design soigné, des animations immersives, et une interface utilisateur fluide.

## 🚀 Fonctionnalités et Points Clés

- **Responsive Design (Mobile First)** : Adaptation parfaite sur Desktop (1440px+), Tablettes (1024px) et Mobiles (768px) sans casser le design originel.
- **Animations Avancées avec GSAP** :
  - Infinite Marquee fluide pour la section des partenaires/marques.
  - Apparitions dynamiques au scroll (`ScrollTrigger`) pour les sections, les titres et les cartes (effet cascade).
- **Micro-interactions** :
  - Effets de survol (hover) sur les boutons (scale, changement de couleur) et les cartes (élévation et ombre portée).
  - Défilement fluide (smooth scrolling) lors du clic sur les Call-to-Action.
- **Slider Témoignages 3D** : Un carrousel de témoignages sur mesure en Vanilla JS permettant une navigation intuitive entre les différentes slides.
- **Performance et Optimisation** :
  - Chargement optimisé des polices Google Fonts (Anton, Montserrat, Poppins, Great Vibes) via une seule requête avec `display=swap` pour éliminer le FOUT (Flash of Unstyled Text).

## 🛠️ Technologies Utilisées

- **HTML5** : Sémantique et structuration claire.
- **CSS3 (Vanilla)** :
  - Variables CSS pour gérer le thème (couleurs, polices, espacements).
  - Flexbox & CSS Grid pour des layouts complexes et fluides.
  - Media Queries dédiées pour le responsive design.
- **JavaScript (Vanilla)** : Logique du carrousel de témoignages.
- **GSAP (GreenSock)** : Animations au scroll (ScrollTrigger) et transitions continues (Marquee).

## 📂 Structure du projet

```
├── index.html             # Point d'entrée principal
├── README.md              # Documentation du projet
└── assets/
    ├── css/
    │   ├── main.css       # Styles globaux, layout et Media Queries
    │   ├── reset.css      # Reset CSS et configurations de base (smooth scroll)
    │   └── variables.css  # Variables de thème (couleurs, polices)
    ├── images/            # Ressources visuelles (photos, logos, icônes)
    └── js/
        ├── animations.js  # Configuration GSAP ScrollTrigger
        └── slider.js      # Logique du carrousel et GSAP Marquee
```

## 💻 Installation & Utilisation

Ce projet est un site statique classique (Front-end Vanilla). Aucune étape de compilation complexe n'est requise.

1. **Cloner le projet** ou télécharger les fichiers.
2. Ouvrir le fichier `index.html` directement dans votre navigateur web, ou utiliser une extension comme **Live Server** sur VSCode pour un rechargement à chaud.

---
*Projet développé dans le but d'offrir une expérience utilisateur (UX) optimale avec un design premium (UI).*
