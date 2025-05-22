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
│   │   ├── logo.webp          # Logo optimisées webp
│   │   ├── plants/             # Images optimisées des plantes
│   │   │   ├── Poivron.webp
│   │   │   ├── aloe_vera.webp
│   │   │   ├── basilic.webp
│   │   │   ├── betterave.webp
│   │   │   ├── camomille.webp
│   │   │   ├── capucine.webp
│   │   │   ├── ciboulette.webp
│   │   │   ├── citronella.webp
│   │   │   ├── courgette.webp
│   │   │   ├── ficus.webp
│   │   │   ├── fraisier.webp
│   │   │   ├── lavande.webp
│   │   │   ├── lettuce.webp
│   │   │   ├── menthe.webp
│   │   │   ├── patate.webp
│   │   │   ├── persil.webp
│   │   │   ├── piment_espelette.webp
│   │   │   ├── radis.webp
│   │   │   ├── romarin.webp
│   │   │   └── tomates-cerises.webp       
├── data/
│   ├── plants.json             # Données des plantes (pour génération statique)
│   ├── gardens.json            # Données des jardins communautaires
├── jardins/
│   ├── index.html              # L'index du site
├── plantes/
│   ├── index.html              # L'index du site
│   │   ├── plants/             # Images optimisées des plantes
│   │   │   ├── Poivron.html
│   │   │   ├── aloe_vera.html
│   │   │   ├── basilic.html
│   │   │   ├── betterave.html
│   │   │   ├── camomille.html
│   │   │   ├── capucine.html
│   │   │   ├── ciboulette.html
│   │   │   ├── citronella.html
│   │   │   ├── courgette.html
│   │   │   ├── ficus.html
│   │   │   ├── fraisier.html
│   │   │   ├── lavande.html
│   │   │   ├── lettuce.html
│   │   │   ├── menthe.html
│   │   │   ├── patate.html
│   │   │   ├── persil.html
│   │   │   ├── piment_espelette.html
│   │   │   ├── radis.html
│   │   │   ├── romarin.html
│   │   │   └── tomates-cerises.html 
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

## Presentation du site 

UrbanGrow est un site dédié au jardinage, pensé pour offrir une expérience à la fois performante, accesible et inclusive. Conçu avec une attention particulière à l'accessibilite, le site respecte les normes AAA pour le contraste, garentissat une lecture optimale pour tous les utilisateurs, y compris ceux ayant une déficience visuelle. L'interface allie efficaciter et simpliciter, permettant un accès rapide aux informations essentielles sur le jardinage, tout en assurant une navigation fluide sur tous les appareils. 
