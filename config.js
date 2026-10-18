/* ==========================================================================
   CONFIGURATION DU SITE — le seul fichier à modifier pour changer le nom,
   la palette par défaut, les liens et les informations encore à confirmer.
   Les valeurs entre crochets [ ] sont des emplacements à remplir.
   ========================================================================== */
window.SITE_CONFIG = {
  /* Nom du produit : affiché partout via la variable {name}. */
  productName: "Docapri",

  /* Palette active par défaut : "a", "b", "c", "d" ou "e" (voir themes.css).
     Une palette peut aussi être choisie par l'adresse : ?theme=b ou ?theme=2 */
  defaultPalette: "b",

  /* Afficher le sélecteur de palette flottant (utile pendant les tests). */
  showPaletteSwitcher: true,

  /* Langues proposées. La première est la langue de repli. */
  languages: ["fr", "en"],
  fallbackLanguage: "en",

  /* Langue par défaut d'un visiteur inconnu : français si son pays est
     francophone, anglais sinon. En production, le pays est fourni par le
     serveur (en-tête de géolocalisation du CDN européen) à l'adresse
     ci-dessous ; sans réponse, on se rabat sur la langue du navigateur. */
  geoCountryEndpoint: null, // ex. "/api/country" → { "country": "FR" }
  francophoneCountries: [
    "FR", "BE", "CH", "LU", "MC", "CA", "SN", "CI", "CM", "MA", "TN", "DZ",
    "ML", "BF", "NE", "TD", "GN", "BJ", "TG", "GA", "CG", "CD", "MG", "HT",
    "RW", "BI", "DJ", "KM", "SC", "VU", "CF", "GQ", "MU", "NC", "PF", "RE",
    "GP", "MQ", "GF", "YT", "PM", "WF", "BL", "MF"
  ],

  /* Liens vers l'application (domaine séparé). */
  appUrl: "https://app.[DOMAINE]",
  /* "waitlist" : Commencer mène à la liste d'attente ; "open" : à l'application. */
  phase: "waitlist",

  /* Logos des connecteurs (page Branchements). Déposer les fichiers officiels
     fournis par chaque éditeur (kit presse / charte de marque) dans le dossier
     logos/ et indiquer leur chemin ici. Sans fichier, l'initiale s'affiche. */
  connectorLogos: {
    "outlook": "logos/outlook.svg",
    "gmail": "logos/gmail.svg",
    "google-drive": "logos/google-drive.svg",
    "dropbox": "logos/dropbox.svg"
  },

  /* Formulaires : "mock" = maquette, rien n'est envoyé. */
  formsMode: "mock",
  /* Vidéo de démonstration (page Commencer, onglet « Voir une démo »).
     null = emplacement « vidéo à produire ». Fichier hébergé sur le site, pas de plateforme tierce. */
  demoVideoUrl: null,
  formEndpoint: "[POINT D'ACCÈS FORMULAIRES UE]",
  responseTimeHours: 48,

  /* Informations techniques à confirmer avant publication (page Vos données). */
  hosting: {
    provider: "[HÉBERGEUR]",
    country: "[PAYS D'HÉBERGEMENT]",
    certifications: "[CERTIFICATIONS]"
  },
  ai: {
    models: "[MODÈLES D'IA]",
    country: "[PAYS D'HÉBERGEMENT DES MODÈLES]"
  },
  retention: "[DURÉE DE CONSERVATION]",
  backupPurge: "[DÉLAI DE PURGE DES SAUVEGARDES]",   // consignes : 30 jours, à confirmer (DPA art. 9)
  feedbackRule: "[RÈGLE À CONFIRMER]",                // signalement volontaire : retirer la mention une fois la règle validée
  analytics: "[OUTIL DE MESURE D'AUDIENCE, SANS COOKIE, HÉBERGÉ DANS L'UE]",
  cguStatus: "[CGU EN COURS DE RÉDACTION, RELECTURE JURISTE]",
  dpaStatus: "[DPA EN COURS DE FINALISATION, RELECTURE JURISTE]",
  minAge: "[18]",                                     // âge minimal (15 si le juriste le confirme)
  linkExpiry: "[1 h]",                                // validité du lien de confirmation
  unvalidatedPurge: "[7 JOURS]",                      // suppression des comptes non confirmés
  cguVersion: "[VERSION ET DATE DES CGU]",
  dpaVersion: "[VERSION ET DATE DU DPA]",
  dpoEmail: "[E-MAIL DPO]",
  contactEmail: "[E-MAIL CONTACT]",

  /* Tarifs futurs (la phase de test est gratuite). */
  pricing: {
    personal: "[PRIX]",
    student: "[PRIX]",
    business: "[PRIX]"
  },

  /* Société éditrice (mentions légales). */
  company: {
    name: "[RAISON SOCIALE]",
    address: "[ADRESSE]",
    registration: "[IMMATRICULATION]",
    director: "[DIRECTEUR DE LA PUBLICATION]"
  },

  /* Afficher les notes internes (« à vérifier avant publication »). */
  showDraftNotes: true
};
