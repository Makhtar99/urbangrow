# UrbanGrow

UrbanGrow est un site web dédié au jardinage urbain, offrant des informations sur les plantes adaptées aux espaces urbains et les jardins communautaires.

## Structure du projet

```
urbanGrow/
├── index.html                  # Page d'accueil
├── plantes/
│   ├── index.html              # Liste des plantes
│   ├── details.html            # Template de page détail (une seule page)
├── jardins/
│   ├── index.html              # Carte/liste des jardins
├── contact.html                # Formulaire de contact
├── accessibility.html          # Page d'informations sur l'accessibilité
├── assets/
│   ├── css/
│   │   ├── reset.css           # Reset CSS minimal
│   │   ├── main.css            # Styles principaux
│   │   ├── print.css           # Styles pour impression
│   ├── js/
│   │   ├── main.js             # JavaScript minimal pour les interactions
│   │   ├── no-js-fallbacks.js  # Détection absence JS et fallbacks
│   ├── img/
│   │   ├── icons/              # Icônes SVG individuelles
│   │   ├── sprite.svg          # Sprite SVG optimisé
│   │   ├── plants/             # Images optimisées des plantes
│   ├── fonts/                  # Polices optimisées (WOFF2/WOFF)
├── data/
│   ├── plants.json             # Données des plantes (pour génération statique)
│   ├── gardens.json            # Données des jardins communautaires
└── README.md                   # Documentation
```

## Principes de conception

- **Accessible** : Conforme aux recommandations WCAG, navigation au clavier, compatibilité avec les lecteurs d'écran
- **Responsive** : S'adapte à tous les appareils, du mobile au desktop
- **Performant** : Chargement rapide, utilisation minimale de JavaScript
- **Résilient** : Fonctionne même sans JavaScript (dégradation élégante)
- **Durable** : Code optimisé pour réduire l'empreinte carbone

## Fonctionnalités

- Catalogue de plantes avec fiches détaillées
- Carte des jardins communautaires
- Formulaire de contact
- Informations sur l'accessibilité

## Utilisation

Ouvrez simplement le fichier `index.html` dans votre navigateur pour consulter le site localement.

## Données

Les données des plantes et des jardins sont stockées dans des fichiers JSON dans le dossier `data/`.
