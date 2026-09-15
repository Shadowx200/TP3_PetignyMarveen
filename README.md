# UrbanCut

UrbanCut est un site web fictif pour un salon de barbier.
Le site permet de consulter les services offerts, découvrir les produits
disponibles et prendre un rendez-vous avec un barbier.

## Auteur

Marveen Petigny

Cours : Technique d'intégration des interfaces Web 2

## Technologies utilisées

- HTML
- CSS
- JavaScript
- Tailwind CSS
- PWA
- Git et GitHub

## Pages du site

- Accueil
- Services
- Produits
- Réservation

## Composants Tailwind

### 1. Barre de navigation responsive

Une barre de navigation responsive est utilisée sur les quatre pages du site.
Sur mobile, les liens sont remplacés par un bouton permettant d'ouvrir le menu.

Référence :
https://tailwindcss.com/docs/responsive-design

### 2. Cartes de services et de produits

Des cartes sont utilisées sur les pages Services et Produits pour présenter
les différents services et produits offerts par UrbanCut.

Référence :
https://tailwindcss.com/docs/grid-template-columns

### 3. Accordéon FAQ

Un accordéon est utilisé dans la page Services pour afficher et masquer les
réponses aux questions fréquentes.

Référence :
https://tailwindcss.com/docs/display

## Animations

### 1. Apparition des titres

Les titres principaux des pages utilisent une animation CSS.
Lors du chargement de la page, le titre apparaît avec un petit déplacement
vers le haut et un effet d'opacité.

Animation réalisée avec CSS `@keyframes`.

Référence :
https://developer.mozilla.org/fr/docs/Web/CSS/@keyframes

### 2. Animation des cartes

Les cartes des services et des produits utilisent une transition CSS.
Lorsque l'utilisateur passe la souris sur une carte, celle-ci se déplace
légèrement vers le haut.

Animation réalisée avec CSS `transition` et `transform`.

Référence :
https://developer.mozilla.org/fr/docs/Web/CSS/transition

### 3. Transition du carrousel

Le carrousel de la page d'accueil utilise une transition d'opacité entre
les différentes images.

Animation réalisée avec CSS et JavaScript.

Référence :
https://developer.mozilla.org/fr/docs/Web/CSS/opacity

## Progressive Web App (PWA)

UrbanCut fonctionne comme une Progressive Web App.

Le projet contient un fichier `manifest.json` avec les informations de
l'application ainsi que trois icônes maskable :

- 144x144
- 192x192
- 512x512

Un Service Worker est également utilisé pour mettre en cache les fichiers
principaux du site.

Le site peut donc continuer à afficher son contenu principal même lorsque
la connexion Internet est désactivée.

Fichiers utilisés :

- `manifest.json`
- `service-worker.js`

## Liens du projet

Dépôt GitHub :
https://github.com/Shadowx200/TP3_PetignyMarveen

Site GitHub Pages :
https://shadowx200.github.io/TP3_PetignyMarveen/
