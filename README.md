# Site Docapri — phase 1

Site vitrine bilingue (FR/EN), statique, sans dépendance.

## Fichiers
- `config.js` : nom du produit, palette par défaut, phase (liste d'attente / ouvert), emplacements [À COMPLÉTER] (hébergeur, modèles d'IA, prix, mentions légales).
- `themes.css` : toutes les couleurs, polices, arrondis, espacements. 5 palettes (A à E), B par défaut.
- `i18n/fr.js`, `i18n/en.js` : tous les textes, démos comprises. Ajouter une langue = copier un fichier + déclarer la langue dans `config.js`.
- `app.css` : mise en page et composants (aucune couleur en dur).
- `app.js` : routage, pages, démos interactives.

## Tester une palette
- `?theme=a` … `?theme=e` (ou `?theme=1` … `5`) dans l'adresse,
- le sélecteur flottant (désactivable : `showPaletteSwitcher: false`),
- la page interne `#fr.palettes` : les 5 palettes côte à côte, contrastes calculés automatiquement.

## Langue par défaut
Pays francophone → français, sinon anglais. En production, renseigner `geoCountryEndpoint` (pays fourni par le CDN européen) ; sans lui, la langue du navigateur sert de repli.

## Lancer en local
`python3 -m http.server` dans ce dossier, puis ouvrir http://localhost:8000.

## À faire (phases suivantes)
- Pré-générer les pages en `/fr/…` et `/en/…` (le routeur lit déjà ce format).
- Héberger les polices dans `/fonts` et retirer le lien vers le service de polices.
- Brancher formulaires et agenda (`formsMode: "live"`, service UE).
- Valider chaque phrase de « Vos données » avec les faits techniques.
