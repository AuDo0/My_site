# Site Docapri — phase 1

Site vitrine bilingue (FR/EN), statique, sans dépendance.

## Fichiers à éditer sans toucher au code
- `config.js` : nom du produit, palette par défaut, phase (liste d'attente / ouvert), logos des connecteurs, valeurs [À COMPLÉTER] (hébergeur, modèles d'IA, prix, mentions légales).
- `faq/fr.txt`, `faq/en.txt` : questions fréquentes, une section par page (mode d'emploi en tête de fichier).
- `blog/fr.txt`, `blog/en.txt` : articles du blog (mode d'emploi en tête de fichier).
- `i18n/fr.js`, `i18n/en.js` : tous les autres textes du site, données de la démo comprises.
- `themes.css` : couleurs, polices, arrondis, espacements ; 5 palettes, B par défaut.
- `logos/` : logos officiels des connecteurs.

## Code
- `app.css` : mise en page et composants (site et démo de l'application).
- `app.js` : navigation, pages, démo interactive, lecture de la FAQ et du blog.

## Menu
4 entrées visibles : Produit (Démo interactive, Routines, Connecteurs, Vos données), Domaines, Tarifs, Blog,
plus « Réserver une démo » et « Commencer ». Toutes les pages sont listées dans le pied de page.

## Tester une palette
`?theme=a` … `?theme=e` (ou `?theme=1` … `5`), le sélecteur flottant (`showPaletteSwitcher: false` pour le masquer),
ou la page interne « Palettes » (lien en pied de page).

## Lancer en local
`python3 -m http.server` dans ce dossier, puis http://localhost:8000.
La FAQ et le blog sont lus depuis les fichiers texte : il faut passer par un petit serveur (pas d'ouverture directe du fichier).

## À faire (phases suivantes)
- Pré-générer les pages en `/fr/…` et `/en/…` (le routeur lit déjà ce format).
- Héberger les polices dans `/fonts` et retirer le lien vers le service de polices.
- Brancher formulaires et agenda (service UE).
- Valider chaque phrase de « Vos données », de la FAQ et des pages légales avec les faits techniques et un juriste.
