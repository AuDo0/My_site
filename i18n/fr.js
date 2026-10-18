/* ==========================================================================
   TEXTES EN FRANÇAIS — tous les textes du site, démos comprises.
   Variables disponibles : {name} (nom du produit), {host}, {hostCountry},
   {certs}, {models}, {modelsCountry}, {retention}, {hours}, {dpo},
   {contactEmail}, {company}, {address}, {registration}, {director},
   {pricePersonal}, {priceStudent}, {priceBusiness}.
   Dans les réponses de démo, [[n]] place un appel de source.
   Pour ajouter une langue : copier ce fichier, traduire, déclarer la langue
   dans config.js. La mise en page ne change pas.
   ========================================================================== */
window.I18N = window.I18N || {};
window.I18N.fr = {
  meta: {
    langName: "Français",
    short: "FR",
    skip: "Aller au contenu",
    titleSuffix: "{name}",
    description: "{name} : l'assistant qui connaît vos mails et vos documents, répond en citant ses sources et transforme ce qu'il lit en tâches et en échéances."
  },

  slugs: {
    home: "accueil", action: "en-action", plugins: "branchements", routines: "routines",
    fields: "domaines", data: "vos-donnees", start: "commencer", live: "voir-en-vrai",
    pricing: "tarifs", legal: "informations-legales", themes: "palettes"
  },

  nav: {
    action: "En action", plugins: "Branchements", routines: "Routines", fields: "Domaines",
    data: "Vos données", pricing: "Tarifs", live: "Voir en vrai", start: "Commencer",
    menu: "Menu", close: "Fermer le menu", main: "Navigation principale", lang: "Langue"
  },

  common: {
    sourced: "Sourcé",
    sources: "Sources",
    open: "Ouvrir",
    openSource: "Ouvrir la source",
    close: "Fermer",
    validate: "Valider",
    validated: "Validé",
    ignore: "Ignorer",
    ignored: "Ignoré",
    accept: "Accepter",
    accepted: "Acceptée",
    refuse: "Refuser",
    refused: "Refusée",
    undo: "Annuler",
    fictive: "Données fictives",
    fictiveLong: "Démo : toutes les données sont fictives. Rien n'est envoyé.",
    proposal: "Proposition",
    youValidate: "{name} propose, vous validez.",
    notFound: "Introuvable",
    mail: "E-mail",
    doc: "Document",
    external: "Base externe",
    excerpt: "Passage cité",
    soon: "À venir",
    available: "Disponible",
    onRequest: "Sur demande",
    draftNote: "Note interne",
    required: "obligatoire",
    sentMock: "Maquette : rien n'a été envoyé. En ligne, ce formulaire part vers un service hébergé en Europe."
  },

  /* ------------------------------------------------------------------ */
  home: {
    title: "Vos mails et vos documents, enfin à votre service",
    eyebrow: "Assistant d'organisation et de mémoire",
    h1: "Posez la question. <em>Recevez la réponse et sa source.</em>",
    lead: "{name} lit vos mails et vos documents, répond en citant chaque passage utilisé, et transforme ce qu'il lit en tâches, en échéances et en dossiers rangés. Quand l'information n'existe pas, il le dit.",
    demoTitle: "Essayez l'outil ici, avec des données fictives",
    ctaStart: "Commencer gratuitement",
    ctaLive: "Voir en vrai, 20 minutes",
    availability: "Application web · Installation sur téléphone bientôt disponible",
    demo: {
      label: "Démonstration animée",
      folder: "Dossier · Entrepôt Delaunay",
      question: "Quel délai de paiement avons-nous accordé à Delaunay ?",
      thinking: "Recherche dans 3 412 mails et 865 documents…",
      answer: "45 jours fin de mois, accordés par Claire Morel le 12 mars 2026[[1]]. Le contrat-cadre signé le 2 avril reprend ce délai à l'article 5.2[[2]].",
      s1: "Mail de Claire Morel · 12 mars 2026",
      s2: "Contrat-cadre Delaunay.pdf · p. 3",
      task: "Échéance détectée : facture n° 2026-041 à encaisser le 30 novembre",
      taskBtn: "Créer la tâche",
      replay: "Rejouer"
    },
    beforeAfter: {
      title: "Ce que vous ne faites plus",
      before: "Sans {name}",
      after: "Avec {name}",
      rows: [
        ["Fouiller trois boîtes mail et deux dossiers partagés pour retrouver un chiffre.", "Une question, une réponse, le passage d'origine en un clic."],
        ["Relire un fil de 23 messages avant une réunion.", "Un résumé en cinq points, chacun relié au message concerné."],
        ["Noter les dates d'échéance au fil des mails, et en oublier une.", "Les échéances repérées dans le courrier, à valider d'un geste."],
        ["Glisser chaque pièce jointe dans le bon dossier, à la main.", "Des routines qui rangent pour vous, avec ou sans votre accord préalable."]
      ]
    },
    benefits: {
      title: "Trois raisons d'essayer",
      items: [
        { title: "Chaque réponse se vérifie", text: "Les sources sont citées à chaque phrase. Si rien ne répond à la question, {name} l'écrit au lieu d'inventer." },
        { title: "Lire devient agir", text: "Une échéance dans un mail devient une tâche. Une pièce jointe rejoint son dossier. Vous validez, c'est fait." },
        { title: "Vos données restent en Europe", text: "Hébergement et modèles d'IA en France ou dans l'Union européenne. Rien n'est vendu, rien n'est réutilisé." }
      ]
    },
    steps: {
      title: "Trois étapes pour commencer",
      items: [
        { title: "Branchez vos sources", text: "Choisissez les boîtes mail et les dossiers à lire. Le reste n'est jamais ouvert." },
        { title: "Posez vos questions", text: "En langage courant, sur un dossier, une personne, une date, un montant." },
        { title: "Validez les propositions", text: "Tâches, échéances, rangements : rien ne se fait sans votre accord, sauf si vous le décidez." }
      ]
    },
    audiences: {
      title: "Pour qui",
      items: [
        { title: "Équipes et entreprises", text: "Beaucoup de mails, de pièces jointes et de dossiers clients, fournisseurs ou projets." },
        { title: "Chercheurs et doctorants", text: "Articles, notes, échanges avec la direction de thèse : tout retrouver avec sa référence." },
        { title: "Vies bien remplies", text: "Administratif, logement, santé, enfants : gérer sa vie personnelle avec la rigueur d'une entreprise." }
      ]
    },
    final: {
      title: "Essayez-le sur vos propres mails",
      text: "Pendant la phase de test, l'accès est gratuit. En échange, nous vous demanderons votre avis.",
      cta: "Commencer",
      cta2: "Réserver une démo"
    }
  },

  /* ------------------------------------------------------------------ */
  action: {
    title: "En action",
    eyebrow: "Démos interactives",
    h1: "Essayez-le ici, avec des données fictives",
    lead: "Chaque scénario reprend les écrans de l'application. Cliquez sur les sources, validez les tâches, acceptez ou refusez les propositions.",
    tabsLabel: "Scénarios",
    tabs: {
      ask: "Interroger",
      sort: "Trier le courrier",
      dossier: "Historique d'un dossier",
      summary: "Résumer un document",
      deadlines: "Ne rater aucune échéance"
    },
    sideLabel: "Sections de l'application",
    hint: "Passez d'une section à l'autre avec le menu de l'application, comme dans l'outil. Vos choix sont conservés d'un écran à l'autre.",
    intro: {
      dashboard: "La vue du matin : ce qui attend votre validation, les prochaines échéances, les dossiers actifs. Cliquez sur une tuile pour ouvrir la section.",
      assistant: "Une question en langage courant, une réponse sourcée. Essayez aussi la dernière question : l'information n'existe pas.",
      folders: "Tout ce qui concerne un dossier, extrait automatiquement des mails et des documents : chronologie, acteurs, faits clés, versions.",
      documents: "Choisissez un document ou un fil de discussion, lisez l'essentiel, transformez-le en tâches.",
      review: "Tout ce que {name} vous propose, au même endroit : rangements, échéances, routines. Validez ou ignorez.",
      deadlines: "Les dates repérées dans votre courrier, avec leur source. À vous de valider.",
      mails: "Le courrier du matin, déjà trié. Acceptez les rangements proposés ou ignorez-les."
    }
  },

  app: {
    nav: {
      dashboard: "Tableau de bord", assistant: "Assistant", folders: "Dossiers", documents: "Documents",
      review: "À valider", deadlines: "Échéances", mails: "Mails",
      inbox: "Courrier", ask: "Questions", tasks: "Tâches", routines: "Routines"
    },
    searchPlaceholder: "Posez une question sur vos mails et vos documents",
    ask: "Demander",
    scope: "Recherche dans : 3 412 mails · 865 documents · 4 sources",
    examples: "Questions d'exemple",
    notFoundTitle: "Information introuvable",
    searched: "Recherché dans",
    draftReply: "Préparer un mail pour la demander",
    draftDone: "Brouillon préparé dans vos mails",
    createTask: "Créer la tâche",
    taskCreated: "Tâche créée",
    acceptAll: "Tout accepter",
    folderLabel: "Ranger dans",
    tasksCount: "{n} tâche(s) créée(s)",
    pending: "en attente",
    done: "faites"
  },

  demo: {
    dashboard: {
      hello: "Bonjour Camille",
      date: "Lundi 19 octobre 2026",
      tiles: { review: "à valider", deadlines: "échéances à venir", mails: "mails à ranger", folders: "dossiers actifs" },
      next: "Prochaines échéances",
      recent: "Dossiers récents",
      askTitle: "Demander à l'assistant",
      seeAll: "Tout voir",
      allDone: "Aucune échéance en attente. Tout est à jour."
    },
    review: {
      count: "{n} élément(s) attendent votre validation",
      filing: "Rangements proposés",
      deadlines: "Échéances repérées",
      routines: "Routine proposée",
      empty: "Tout est validé. Rien ne se fait sans vous."
    },
    folders: [
      { name: "Entrepôt Delaunay", meta: "41 mails · 23 documents · hier" },
      { name: "Atelier Bertin", meta: "18 mails · 9 documents · 14 oct." },
      { name: "Assurance du local", meta: "7 mails · 4 documents · 9 sept." },
      { name: "Comptabilité 2026", meta: "52 mails · 61 documents · 15 oct." },
      { name: "Recrutement chef de chantier", meta: "12 mails · 8 documents · 10 oct." },
      { name: "Bureaux Part-Dieu", meta: "9 mails · 5 documents · 2 oct." },
      { name: "Sous-traitance électricité", meta: "15 mails · 7 documents · 30 sept." },
      { name: "Administratif", meta: "30 mails · 22 documents · 12 oct." }
    ],
    foldersNote: "Dans cette démo, seul le dossier « Entrepôt Delaunay » est détaillé. Dans l'application, chaque dossier a sa chronologie, ses acteurs, ses faits clés et ses versions.",
    ask: {
      cases: [
        {
          q: "Quel délai de paiement avons-nous accordé à Delaunay ?",
          a: "45 jours fin de mois. Claire Morel l'a accepté par mail le 12 mars 2026[[1]], et le contrat-cadre signé le 2 avril le reprend à l'article 5.2[[2]].",
          sources: [
            { type: "mail", title: "Re: Conditions de règlement", meta: "Claire Morel · 12 mars 2026", excerpt: "C'est d'accord pour 45 jours fin de mois à compter de la prochaine commande, comme évoqué au téléphone." },
            { type: "doc", title: "Contrat-cadre Delaunay.pdf", meta: "Page 3 · article 5.2", excerpt: "Les factures sont payables à quarante-cinq (45) jours fin de mois à compter de leur date d'émission." }
          ]
        },
        {
          q: "Quand faut-il résilier l'assurance du local au plus tard ?",
          a: "Avant le 30 novembre 2026. Le contrat arrive à échéance le 31 janvier 2027[[1]] avec un préavis de deux mois[[2]]. Le courtier a confirmé ces dates en septembre[[3]].",
          sources: [
            { type: "doc", title: "Attestation assurance 2026.pdf", meta: "Page 1", excerpt: "Période de garantie : du 1er février 2026 au 31 janvier 2027." },
            { type: "doc", title: "Conditions générales MRP.pdf", meta: "Page 11 · article 18", excerpt: "La résiliation à l'échéance est possible moyennant un préavis de deux mois." },
            { type: "mail", title: "Votre contrat multirisque", meta: "Cabinet Vasseur · 9 septembre 2026", excerpt: "Je vous confirme l'échéance au 31/01 et le préavis de deux mois." }
          ]
        },
        {
          q: "Combien avons-nous facturé à l'atelier Bertin en 2025 ?",
          a: "18 420 € HT sur quatre factures : 3 200 € en février[[1]], 6 850 € en mai[[2]], 4 120 € en septembre[[3]] et 4 250 € en décembre[[4]].",
          sources: [
            { type: "doc", title: "Facture 2025-012.pdf", meta: "14 février 2025", excerpt: "Total HT : 3 200,00 €" },
            { type: "doc", title: "Facture 2025-047.pdf", meta: "22 mai 2025", excerpt: "Total HT : 6 850,00 €" },
            { type: "doc", title: "Facture 2025-089.pdf", meta: "18 septembre 2025", excerpt: "Total HT : 4 120,00 €" },
            { type: "doc", title: "Facture 2025-118.pdf", meta: "11 décembre 2025", excerpt: "Total HT : 4 250,00 €" }
          ]
        },
        {
          q: "Qui a validé la dernière version du plan de l'entrepôt ?",
          a: "Julien Faure a validé la version 3 le 8 octobre 2026[[1]]. Elle remplace la version 2, qui déplaçait le quai de chargement[[2]].",
          sources: [
            { type: "mail", title: "Plan entrepôt v3 — OK pour moi", meta: "Julien Faure · 8 octobre 2026", excerpt: "Je valide la v3, on peut lancer la consultation des entreprises." },
            { type: "doc", title: "Plan entrepôt v2.pdf", meta: "Note de révision", excerpt: "Quai de chargement déplacé côté nord." }
          ]
        },
        {
          absent: true,
          q: "Quel est le numéro SIRET de Julien Faure ?",
          a: "Je n'ai trouvé ce numéro dans aucun de vos mails ni de vos documents. Je préfère ne rien proposer plutôt qu'un numéro inventé.",
          searched: "3 412 mails · 865 documents · dossier « Entrepôt Delaunay » compris",
          sources: []
        }
      ]
    },

    sort: {
      mails: [
        { from: "Julien Faure", subject: "Devis menuiserie — version corrigée", snippet: "Voici le devis mis à jour avec la remise de 5 %…", folder: "Entrepôt Delaunay / Devis", tag: "Devis" },
        { from: "Comptabilité Lambert", subject: "Facture octobre 2026", snippet: "Veuillez trouver ci-joint notre facture n° 2026-311…", folder: "Fournisseurs / Lambert / 2026 / 10", tag: "Facture" },
        { from: "Claire Morel", subject: "Réunion de chantier jeudi", snippet: "Pouvez-vous confirmer votre présence jeudi à 9 h…", folder: "Entrepôt Delaunay / Réunions", tag: "Rendez-vous" },
        { from: "Cabinet Vasseur", subject: "Avenant à votre contrat", snippet: "Suite à notre échange, voici l'avenant à signer…", folder: "Administratif / Assurances", tag: "À signer" },
        { from: "Lettre d'information", subject: "Les nouveautés du mois", snippet: "Découvrez nos offres de saison…", folder: "Lecture / Plus tard", tag: "Information" }
      ],
      routine: {
        title: "Proposition de routine",
        text: "Vous rangez chaque mois les factures de Comptabilité Lambert au même endroit. Le faire automatiquement ?",
        rule: "Quand une facture arrive de Comptabilité Lambert → ranger dans Fournisseurs / Lambert / année / mois",
        acceptedMsg: "Routine activée. Vous la retrouvez dans Routines, avec son journal.",
        refusedMsg: "Routine refusée. Elle ne vous sera plus proposée."
      }
    },

    dossier: {
      name: "Entrepôt Delaunay",
      sub: "Rénovation de l'entrepôt · ouvert le 4 février 2026",
      tabs: { timeline: "Chronologie", actors: "Acteurs", facts: "Faits clés", versions: "Versions" },
      timeline: [
        { date: "4 févr. 2026", text: "Première demande de Claire Morel : rénovation de 800 m².", src: { type: "mail", title: "Projet entrepôt", meta: "Claire Morel · 4 février 2026", excerpt: "Nous souhaitons rénover l'entrepôt de la rue des Tanneurs, environ 800 m²." } },
        { date: "12 mars 2026", text: "Délai de paiement accepté : 45 jours fin de mois.", src: { type: "mail", title: "Re: Conditions de règlement", meta: "Claire Morel · 12 mars 2026", excerpt: "C'est d'accord pour 45 jours fin de mois." } },
        { date: "2 avr. 2026", text: "Signature du contrat-cadre.", src: { type: "doc", title: "Contrat-cadre Delaunay.pdf", meta: "Page 9 · signatures", excerpt: "Fait à Lyon, le 2 avril 2026, en deux exemplaires." } },
        { date: "8 oct. 2026", text: "Plan v3 validé par Julien Faure.", src: { type: "mail", title: "Plan entrepôt v3 — OK pour moi", meta: "Julien Faure · 8 octobre 2026", excerpt: "Je valide la v3." } },
        { date: "23 oct. 2026", text: "Réunion de chantier prévue à 9 h.", src: { type: "mail", title: "Réunion de chantier jeudi", meta: "Claire Morel · 16 octobre 2026", excerpt: "Pouvez-vous confirmer votre présence jeudi à 9 h ?" } }
      ],
      actors: [
        { name: "Claire Morel", role: "Cliente · directrice générale Delaunay", count: "41 mails" },
        { name: "Julien Faure", role: "Architecte", count: "27 mails · 6 plans" },
        { name: "Comptabilité Lambert", role: "Cabinet comptable", count: "9 mails" },
        { name: "Cabinet Vasseur", role: "Courtier en assurance", count: "4 mails" }
      ],
      facts: [
        { label: "Surface", value: "800 m²", src: { type: "mail", title: "Projet entrepôt", meta: "Claire Morel · 4 février 2026", excerpt: "environ 800 m²" } },
        { label: "Budget validé", value: "212 000 € HT", src: { type: "doc", title: "Contrat-cadre Delaunay.pdf", meta: "Page 2 · article 3", excerpt: "Le montant global est fixé à 212 000 € HT." } },
        { label: "Paiement", value: "45 jours fin de mois", src: { type: "doc", title: "Contrat-cadre Delaunay.pdf", meta: "Page 3 · article 5.2", excerpt: "payables à quarante-cinq (45) jours fin de mois" } },
        { label: "Fin des travaux prévue", value: "15 mars 2027", src: { type: "doc", title: "Planning travaux v2.xlsx", meta: "Onglet Synthèse", excerpt: "Réception des travaux : 15/03/2027" } }
      ],
      versions: [
        { v: "v3", date: "6 oct. 2026", note: "Version validée. Ajout d'un bureau à l'étage.", current: true },
        { v: "v2", date: "2 sept. 2026", note: "Quai de chargement déplacé côté nord." },
        { v: "v1", date: "18 juin 2026", note: "Première esquisse." }
      ]
    },

    summary: {
      choose: "Document à résumer",
      docs: [
        {
          title: "Contrat-cadre Delaunay.pdf",
          meta: "14 pages · ajouté le 2 avril 2026",
          points: [
            { text: "Montant global de 212 000 € HT, révisable une fois par an.", ref: "p. 2, art. 3" },
            { text: "Paiement à 45 jours fin de mois ; pénalités au taux légal majoré.", ref: "p. 3, art. 5" },
            { text: "Réception des travaux fixée au 15 mars 2027.", ref: "p. 5, art. 8" },
            { text: "Résiliation possible avec un préavis de trois mois.", ref: "p. 7, art. 12" },
            { text: "Attestation d'assurance décennale à fournir avant le démarrage.", ref: "p. 8, art. 14" }
          ],
          tasks: [
            { title: "Envoyer l'attestation décennale à Claire Morel", due: "avant le 2 nov. 2026" },
            { title: "Préparer la révision annuelle du prix", due: "1er avril 2027" }
          ]
        },
        {
          title: "Fil « Plan entrepôt » (23 messages)",
          meta: "Du 18 juin au 8 octobre 2026 · 4 participants",
          points: [
            { text: "Trois versions du plan se sont succédé ; la v3 est validée.", ref: "mail du 8 oct." },
            { text: "Le quai de chargement passe côté nord pour l'accès des camions.", ref: "mail du 2 sept." },
            { text: "Claire Morel demande un bureau supplémentaire à l'étage.", ref: "mail du 21 sept." },
            { text: "Question encore ouverte : la hauteur des portes sectionnelles.", ref: "mail du 7 oct." },
            { text: "Prochaine étape : consultation des entreprises.", ref: "mail du 8 oct." }
          ],
          tasks: [
            { title: "Trancher la hauteur des portes avec Julien Faure", due: "avant la réunion du 23 oct." },
            { title: "Lancer la consultation des entreprises", due: "fin octobre 2026" }
          ]
        }
      ]
    },

    deadlines: {
      summary: "{n} échéances repérées ce mois-ci",
      items: [
        { date: "23 oct.", title: "Réunion de chantier, 9 h", kind: "Rendez-vous", src: { type: "mail", title: "Réunion de chantier jeudi", meta: "Claire Morel · 16 octobre 2026", excerpt: "Pouvez-vous confirmer votre présence jeudi à 9 h ?" } },
        { date: "31 oct.", title: "Payer la facture Lambert n° 2026-311", kind: "Paiement", urgent: true, src: { type: "doc", title: "Facture 2026-311.pdf", meta: "Comptabilité Lambert", excerpt: "Date limite de paiement : 31/10/2026" } },
        { date: "2 nov.", title: "Envoyer l'attestation décennale", kind: "Document à fournir", src: { type: "doc", title: "Contrat-cadre Delaunay.pdf", meta: "Page 8 · article 14", excerpt: "L'attestation est remise au maître d'ouvrage avant tout démarrage." } },
        { date: "30 nov.", title: "Dernier jour pour résilier l'assurance du local", kind: "Préavis", src: { type: "doc", title: "Conditions générales MRP.pdf", meta: "Page 11 · article 18", excerpt: "préavis de deux mois" } },
        { date: "30 nov.", title: "Encaisser la facture Delaunay n° 2026-041", kind: "Encaissement", src: { type: "doc", title: "Facture 2026-041.pdf", meta: "Émise le 14 octobre 2026", excerpt: "Échéance : 30/11/2026" } }
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  plugins: {
    title: "Branchements",
    eyebrow: "Branchements",
    h1: "Il lit ce que vous lui ouvrez, rien de plus",
    lead: "Branchez vos boîtes mail et vos espaces de fichiers. Vous choisissez les dossiers lus ; {name} les indexe en continu et ne touche à rien d'autre.",
    statusLabel: "État",
    groups: {
      mail: "Messageries",
      files: "Fichiers",
      soon: "En préparation"
    },
    items: [
      { group: "mail", name: "Outlook", desc: "Mails et pièces jointes, dossiers choisis.", status: "available" },
      { group: "mail", name: "Gmail", desc: "Mails et pièces jointes, libellés choisis.", status: "available" },
      { group: "files", name: "Google Drive", desc: "Documents, PDF, tableurs, dossiers partagés.", status: "available" },
      { group: "files", name: "Dropbox", desc: "Documents et dossiers d'équipe.", status: "available" },
      { group: "soon", name: "Calendrier", desc: "Rendez-vous et disponibilités, pour relier réunions et dossiers.", status: "soon" },
      { group: "soon", name: "Enregistrements audio", desc: "Compte rendu de réunion à partir d'un fichier audio.", status: "soon" },
      { group: "soon", name: "Vos outils métier", desc: "Logiciel interne, base documentaire, gestion de dossiers : connecteur sur mesure.", status: "onRequest" }
    ],
    how: {
      title: "Comment se passe un branchement",
      items: [
        { title: "Vous autorisez l'accès", text: "Depuis votre compte, en lecture. Vous pouvez retirer l'autorisation à tout moment." },
        { title: "Vous choisissez le périmètre", text: "Boîtes, dossiers, libellés. Le reste n'est ni lu ni copié." },
        { title: "L'indexation suit vos nouveautés", text: "Chaque nouveau mail ou fichier est pris en compte, sans action de votre part." }
      ]
    },
    platform: {
      title: "Où l'utiliser",
      web: "Navigateur web, sur ordinateur, tablette et téléphone.",
      pwa: "Installation sur l'écran d'accueil du téléphone, sans passer par un magasin d'applications."
    },
    request: {
      title: "Il vous manque un branchement ?",
      text: "Dites-nous quel outil vous utilisez. Nous construisons les connecteurs dans l'ordre des demandes.",
      tool: "Outil à brancher",
      toolPh: "Nom de l'outil ou du logiciel",
      email: "Votre e-mail",
      submit: "Envoyer la demande",
      done: "Demande enregistrée. Merci, nous revenons vers vous."
    }
  },

  /* ------------------------------------------------------------------ */
  routines: {
    title: "Routines",
    eyebrow: "Routines",
    h1: "Vos règles, appliquées sans y penser",
    lead: "Une routine, c'est une phrase : quand ceci arrive, si cette condition est remplie, alors faire cela. Avec votre validation à chaque fois, ou en toute autonomie.",
    anatomy: {
      title: "Ce qui compose une routine",
      items: [
        { k: "Déclencheur", v: "Un mail reçu, un document ajouté, une heure de la journée." },
        { k: "Condition", v: "L'expéditeur, un mot dans l'objet, le type de pièce jointe." },
        { k: "Action", v: "Ranger, créer une tâche, résumer, préparer une réponse." },
        { k: "Validation", v: "Vous approuvez chaque action, ou vous laissez faire." },
        { k: "Journal", v: "Tout ce qui a été fait, quand et pourquoi, consultable et annulable." }
      ]
    },
    editor: {
      title: "Composez une routine",
      sub: "Éditeur de démonstration. Modifiez les champs, puis lancez un essai sur le courrier fictif.",
      when: "Quand",
      if: "si",
      contains: "contient",
      then: "alors",
      into: "dans",
      validation: "Demander ma validation avant d'agir",
      triggers: { mail: "je reçois un mail", doc: "un document est ajouté" },
      fields: { from: "l'expéditeur", subject: "l'objet", attachment: "la pièce jointe" },
      actions: { file: "le ranger", task: "créer une tâche", summary: "le résumer" },
      defaultValue: "offre",
      defaultFolder: "Offres/{contact}/{AAAA}/{MM}",
      valuePh: "ex. Lambert",
      folderPh: "ex. Offres/{contact}/{AAAA}/{MM}",
      tokens: "Repères disponibles : {AAAA} année, {MM} mois, {contact} expéditeur",
      preview: "Votre routine",
      test: "Essayer sur le courrier fictif",
      logTitle: "Journal de l'essai",
      noMatch: "Aucun mail fictif ne correspond. Essayez « offre », « facture » ou « Lambert ».",
      matched: "{n} mail(s) concerné(s)",
      waiting: "En attente de votre validation",
      doneAuto: "Fait automatiquement",
      approve: "Approuver",
      approved: "Approuvé",
      sample: [
        { from: "Atelier Bertin", subject: "Offre de prix — rayonnages", date: "2026-10-03", attachment: "offre-rayonnages.pdf" },
        { from: "Comptabilité Lambert", subject: "Facture septembre", date: "2026-09-30", attachment: "facture-2026-287.pdf" },
        { from: "Atelier Bertin", subject: "Nouvelle offre — mezzanine", date: "2026-10-14", attachment: "offre-mezzanine.pdf" },
        { from: "Comptabilité Lambert", subject: "Facture octobre", date: "2026-10-15", attachment: "facture-2026-311.pdf" },
        { from: "Claire Morel", subject: "Réunion de chantier jeudi", date: "2026-10-16", attachment: "" }
      ],
      taskPrefix: "Tâche : traiter",
      summaryPrefix: "Résumé ajouté pour"
    },
    proposals: {
      title: "Routines proposées par {name}",
      sub: "Il observe vos habitudes et vous suggère des règles. Rien ne s'active sans votre accord.",
      items: [
        { text: "Chaque offre reçue d'Atelier Bertin → ranger dans Offres / Bertin / année / mois.", why: "Vous l'avez fait à la main 6 fois depuis juin." },
        { text: "Chaque facture fournisseur → créer une tâche de paiement à la date limite indiquée.", why: "12 factures reçues ce trimestre." },
        { text: "Chaque fil de plus de 10 messages → me proposer un résumé.", why: "4 fils longs ce mois-ci." }
      ]
    },
    soon: {
      title: "Bientôt",
      items: [
        "Routines planifiées : le résumé des mails non lus chaque soir à 18 h.",
        "Un espace pour écrire vos règles en toutes lettres et les partager avec votre équipe."
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  fields: {
    title: "Domaines",
    eyebrow: "Domaines",
    h1: "Le même assistant, nourri des références de votre métier",
    lead: "Le socle reste identique : vos mails, vos documents, vos dossiers. Chaque version y ajoute les bases externes dont votre métier a besoin, citées avec la même rigueur.",
    tabsLabel: "Domaines",
    tabs: { legal: "Juridique", research: "Recherche", business: "Entreprise" },
    adds: "Ce que cette version ajoute",
    who: "Pour",
    tryIt: "Exemple de question",
    yourDocs: "Vos documents",
    externalBase: "Référence externe",
    legal: {
      who: "Avocats, juristes d'entreprise, notaires, services contentieux.",
      adds: ["Textes de loi et codes à jour", "Jurisprudence", "Vos modèles d'actes et de clauses", "Chronologie et pièces de chaque affaire"],
      q: "Dans le dossier Morel, la clause de non-concurrence est-elle valable ?",
      a: "La clause interdit toute activité concurrente pendant 24 mois en région Auvergne-Rhône-Alpes[[1]]. Elle est donc limitée dans le temps et dans l'espace. En revanche, je ne trouve aucune contrepartie financière, ni dans le contrat ni dans les deux avenants[[2]]. Or la jurisprudence l'exige pour qu'une clause de non-concurrence soit valable[[3]]. Point à vérifier.",
      sources: [
        { type: "doc", title: "Contrat de travail Morel.pdf", meta: "Page 6 · article 9", excerpt: "Le salarié s'interdit, pendant 24 mois, toute activité concurrente en région Auvergne-Rhône-Alpes." },
        { type: "doc", title: "Avenants 1 et 2.pdf", meta: "Recherche sur « contrepartie », « indemnité »", excerpt: "Aucune occurrence." },
        { type: "external", title: "Cass. soc., 10 juillet 2002, n° 00-45.135", meta: "Jurisprudence", excerpt: "Conditions cumulatives de validité : intérêts légitimes de l'entreprise, limitation dans le temps et l'espace, prise en compte des spécificités de l'emploi, contrepartie financière." }
      ]
    },
    research: {
      who: "Chercheurs, doctorants, laboratoires, bureaux d'études.",
      adds: ["Bases d'articles scientifiques ouvertes", "Votre bibliographie et vos notes de lecture", "Échanges avec la direction de thèse", "Citations dans le format de votre choix"],
      q: "Quels articles de ma bibliographie utilisent un échantillonnage stratifié, comme mon chapitre 3 ?",
      a: "Trois articles de votre bibliographie le font : Arnaud et Chen (2023)[[1]], Lindqvist (2021)[[2]] et Okafor et al. (2024)[[3]]. Votre directrice de thèse vous avait aussi signalé le troisième en juin[[4]]. Aucun ne travaille sur la même population que vous.",
      note: "Références fictives, pour la démonstration.",
      sources: [
        { type: "doc", title: "Arnaud & Chen 2023.pdf", meta: "Section 2.3 · Méthodes", excerpt: "A stratified random sample of 1,240 households was drawn…" },
        { type: "doc", title: "Lindqvist 2021.pdf", meta: "Page 7", excerpt: "Strata were defined by region and income quintile." },
        { type: "external", title: "Okafor et al., 2024", meta: "Base d'articles ouverte · résumé", excerpt: "We use proportional stratified sampling across 14 districts." },
        { type: "mail", title: "Lectures pour le chapitre 3", meta: "Pr. Delmas · 12 juin 2026", excerpt: "Regardez Okafor, leur plan de sondage est proche du vôtre." }
      ]
    },
    business: {
      who: "Qualité, achats, conformité, direction des opérations.",
      adds: ["Les normes et référentiels que vous ajoutez (qualité, sécurité de l'information…)", "Vos procédures et votre documentation interne", "Contrats fournisseurs et clients", "Référentiels sur mesure, propres à votre secteur"],
      q: "Notre procédure achats couvre-t-elle l'évaluation des fournisseurs demandée par la norme ISO 9001 ?",
      a: "En partie. La norme demande de définir des critères d'évaluation, de sélection et de suivi des prestataires externes[[1]]. Votre procédure définit bien la sélection[[2]], mais je n'y trouve aucun critère de suivi de la performance. Le dernier compte rendu d'audit interne relevait déjà ce manque[[3]].",
      sources: [
        { type: "external", title: "ISO 9001:2015 · § 8.4.1", meta: "Norme · maîtrise des prestataires externes", excerpt: "L'organisme doit déterminer et appliquer des critères pour l'évaluation, la sélection, la surveillance des performances et la réévaluation des prestataires externes." },
        { type: "doc", title: "PRO-ACH-02 Procédure achats.docx", meta: "Version 4 · § 3", excerpt: "Sélection des fournisseurs : trois devis minimum, grille de notation…" },
        { type: "doc", title: "Audit interne 2026.pdf", meta: "Page 4 · écart n° 3", excerpt: "Absence de suivi formalisé de la performance des fournisseurs." }
      ]
    },
    custom: {
      title: "Votre métier n'est pas dans la liste ?",
      text: "Vocabulaire, règles, modèles de documents, connecteurs, référentiels : chaque version se construit sur mesure.",
      cta: "Parler à l'équipe"
    }
  },

  /* ------------------------------------------------------------------ */
  data: {
    title: "Vos données",
    eyebrow: "Vos données",
    h1: "Vos données vous appartiennent. Voici ce que nous en faisons.",
    lead: "Chaque engagement de cette page s'accompagne de la façon de le vérifier.",
    draft: "Avant publication, chaque phrase de cette page doit correspondre à un fait technique vérifié. Les éléments entre crochets sont à compléter ; une formulation non prouvée est retirée.",
    howCheck: "Comment le vérifier",
    commitments: [
      { title: "Hébergées en Europe", text: "Vos données sont hébergées chez {host}, en {hostCountry}.", check: "Liste des sous-traitants et de leurs pays, publiée et tenue à jour. Certifications : {certs}." },
      { title: "Une IA hébergée en Europe", text: "Les modèles d'IA ({models}) tournent en {modelsCountry}. Aucune donnée n'est envoyée à un service d'IA situé hors d'Europe.", check: "Chaque modèle utilisé et son lieu d'hébergement figurent dans le registre des sous-traitants." },
      { title: "Jamais vendues", text: "Vos données ne sont ni vendues, ni louées, ni cédées.", check: "Engagement inscrit dans les conditions d'utilisation." },
      { title: "Jamais lues, jamais réutilisées", text: "Personne ne consulte vos données. Elles ne servent pas à entraîner ni à améliorer l'outil.", check: "Le journal d'audit de votre compte montre chaque accès à vos données." },
      { title: "Un seul cas d'exception, choisi par vous", text: "Si vous signalez une réponse pour nous aider à corriger un défaut, seul l'élément signalé nous est transmis. Il est anonymisé, utilisé pour cette correction, puis supprimé.", check: "Le signalement est un geste explicite, jamais coché par défaut. Il apparaît dans votre journal d'audit, avec sa date de suppression." },
      { title: "Un périmètre que vous fixez", text: "Vous choisissez les boîtes mail et les dossiers lus. Vous pouvez les retirer à tout moment ; leur index est alors effacé.", check: "La liste des sources branchées est visible dans vos réglages." },
      { title: "Des données séparées", text: "Les données de chaque client sont strictement isolées de celles des autres.", check: "Description de l'architecture fournie sur demande." },
      { title: "Des réponses traçables", text: "Chaque réponse cite ses sources. Sans source, pas de réponse. L'assistant propose, vous validez.", check: "Ouvrez n'importe quelle source citée : vous arrivez au passage d'origine." }
    ],
    rgpd: {
      title: "Vos droits",
      items: [
        { k: "Accès", v: "Exportez à tout moment l'ensemble de vos données." },
        { k: "Suppression", v: "Supprimez votre compte : vos données et leurs index sont effacés." },
        { k: "Conservation", v: "Durée de conservation : {retention}." },
        { k: "Registre", v: "Registre des traitements et liste des sous-traitants disponibles." },
        { k: "Contact", v: "Délégué à la protection des données : {dpo}." }
      ]
    },
    stack: {
      title: "Où vont vos données",
      steps: ["Vos boîtes mail et vos fichiers", "Indexation chez {host} ({hostCountry})", "Modèles d'IA en {modelsCountry}", "Réponse sourcée, sur votre écran"],
      note: "Aucune étape ne sort de l'Union européenne."
    }
  },

  /* ------------------------------------------------------------------ */
  start: {
    title: "Commencer",
    eyebrow: "Voir en vrai · Commencer",
    h1: "Choisissez comment commencer",
    lead: "Une démo avec nous, un accès validé par l'équipe ou une inscription immédiate. Pendant la phase de test, tout est gratuit.",
    tabsLabel: "Parcours",
    tabs: { demo: "Voir en vrai", request: "Demander un accès", signup: "Inscription directe", team: "Parler à l'équipe" },
    demo: {
      title: "Réservez une démo de 20 minutes",
      text: "Nous vous montrons l'application sur des données d'exemple, puis nous répondons à vos questions.",
      tz: "Horaires affichés dans votre fuseau : {tz}",
      pickDay: "Choisissez un jour",
      pickSlot: "Choisissez un créneau",
      noSlot: "Choisissez d'abord un jour.",
      chosen: "Créneau choisi",
      confirm: "Confirmer la réservation",
      done: "C'est noté pour le {slot}. Une confirmation part à {email}, avec le lien de la visioconférence."
    },
    request: {
      title: "Demandez un accès",
      text: "L'équipe étudie votre demande et vous répond sous {hours} h. Idéal si vous voulez un accompagnement au démarrage.",
      submit: "Envoyer la demande",
      done: "Demande reçue. Nous vous répondons sous {hours} h à {email}."
    },
    signup: {
      title: "Inscrivez-vous maintenant",
      text: "Créez votre compte et branchez vos premières sources en quelques minutes.",
      submit: "Créer mon compte",
      done: "Compte prêt. Un lien d'activation part à {email}.",
      waitlist: "Nous ouvrons les accès par vagues. Vous êtes inscrit sur la liste d'attente ; un lien part à {email} dès votre tour."
    },
    team: {
      title: "Parlez à l'équipe",
      text: "Un besoin sur mesure, un connecteur, un domaine métier, une question sur vos données : écrivez-nous. Réponse sous {hours} h.",
      submit: "Envoyer le message",
      done: "Message reçu. Réponse sous {hours} h à {email}."
    },
    form: {
      name: "Nom",
      email: "E-mail",
      emailHint: "Professionnel de préférence",
      org: "Organisation",
      optional: "facultatif",
      need: "Votre besoin",
      needPh: "Ex. : retrouver l'historique de nos dossiers clients, ne plus rater d'échéances…",
      profile: "Vous êtes",
      profiles: ["Une entreprise ou une équipe", "Chercheur ou doctorant", "Particulier", "Autre"],
      message: "Message",
      consent: "J'accepte que {name} utilise ces informations pour répondre à ma demande, conformément à la politique de confidentialité.",
      consentErr: "Cochez cette case pour envoyer le formulaire.",
      emailErr: "Saisissez une adresse e-mail valide, par exemple nom@entreprise.fr.",
      nameErr: "Indiquez votre nom.",
      needErr: "Décrivez votre besoin en une phrase.",
      fixErrors: "Le formulaire contient des erreurs. Corrigez les champs signalés."
    }
  },

  /* ------------------------------------------------------------------ */
  pricing: {
    title: "Tarifs",
    eyebrow: "Tarifs",
    h1: "Gratuit pendant la phase de test",
    lead: "Toutes les formules sont gratuites tant que dure la phase de test. Nous vous contacterons pour recueillir votre retour d'expérience.",
    banner: "Phase de test : accès gratuit à toutes les fonctions.",
    freeMonth: "Premier mois offert",
    priceNow: "0 €",
    duringTest: "pendant la phase de test",
    perMonth: "/ mois",
    perUser: "/ utilisateur / mois",
    later: "Après la phase de test",
    choose: "Commencer",
    contact: "Parler à l'équipe",
    plans: [
      { id: "personal", name: "Personnel", for: "Pour gérer sa vie personnelle et administrative.", price: "{pricePersonal}", unit: "perMonth", features: ["2 sources branchées", "Questions sourcées illimitées", "Tâches et échéances", "Routines de base"] },
      { id: "student", name: "Étudiant", for: "Pour les étudiants, doctorants et jeunes chercheurs.", price: "{priceStudent}", unit: "perMonth", features: ["Toutes les fonctions Personnel", "Bibliographie et notes de lecture", "Justificatif étudiant demandé"] },
      { id: "business", name: "Entreprise", for: "Pour les équipes qui partagent des dossiers.", price: "{priceBusiness}", unit: "perUser", featured: true, features: ["Sources illimitées", "Dossiers partagés en équipe", "Routines avancées et journal", "Journal d'audit"] },
      { id: "custom", name: "Sur mesure", for: "Pour un métier, des volumes ou des connecteurs spécifiques.", price: "Sur devis", unit: null, features: ["Version par domaine", "Connecteurs sur mesure", "Vocabulaire et modèles propres", "Accompagnement dédié"] }
    ],
    faq: {
      title: "Questions fréquentes",
      items: [
        { q: "Que se passe-t-il à la fin de la phase de test ?", a: "Nous vous prévenons avant tout changement. Le premier mois payant reste offert, quelle que soit la formule." },
        { q: "Pourquoi vous contacter pendant le test ?", a: "Pour savoir ce qui vous fait gagner du temps et ce qui manque. Vous pouvez refuser." },
        { q: "Puis-je partir avec mes données ?", a: "Oui. Vous exportez vos données à tout moment, et la suppression du compte efface tout." }
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  legal: {
    title: "Informations légales",
    h1: "Informations légales",
    sections: [
      { id: "mentions", title: "Mentions légales", body: "Éditeur : {company}, {address}. Immatriculation : {registration}. Directeur de la publication : {director}. Hébergement du site : {host}, {hostCountry}." },
      { id: "confidentialite", title: "Politique de confidentialité", body: "Les informations saisies dans les formulaires servent uniquement à répondre à votre demande. Elles sont hébergées en Europe et conservées {retention}. Elles ne sont ni vendues ni transmises à des tiers. Contact : {dpo}." },
      { id: "rgpd", title: "RGPD", body: "Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition. Écrivez à {dpo}. Vous pouvez aussi saisir l'autorité de protection des données de votre pays." },
      { id: "cookies", title: "Cookies", body: "Ce site ne dépose aucun cookie publicitaire ni de mesure d'audience. Les statistiques de fréquentation sont anonymes, sans cookie, et hébergées dans l'Union européenne. Seul votre choix de langue est mémorisé dans votre navigateur." }
    ]
  },

  /* ------------------------------------------------------------------ */
  themes: {
    title: "Palettes",
    h1: "Comparer les palettes",
    lead: "Page interne. Le même écran, rendu avec chaque palette définie dans themes.css. Les contrastes sont calculés automatiquement à partir des variables.",
    use: "Appliquer au site",
    active: "Palette active",
    pairs: {
      textBg: "Texte / fond",
      textSurface: "Texte / surface",
      text2Bg: "Texte secondaire / fond",
      primaryTextBg: "Titres et liens / fond",
      onPrimary: "Texte / bouton principal",
      onAccent: "Texte / bouton d'action",
      accentTextBg: "Texte d'action / fond"
    },
    pass: "Conforme",
    fail: "Insuffisant",
    rule: "Seuil : 4,5:1 pour le texte courant.",
    names: { a: "Bleu confiance", b: "Vert sarcelle et argile", c: "Ardoise et corail", d: "Pétrole et argile", e: "Automne doux" },
    switcher: "Palette"
  },

  footer: {
    tagline: "L'assistant qui connaît vos mails et vos documents, et le prouve à chaque réponse.",
    product: "Produit",
    company: "{name}",
    legal: "Légal",
    links: { mentions: "Mentions légales", privacy: "Confidentialité", rgpd: "RGPD", cookies: "Cookies", themes: "Palettes (interne)" },
    rights: "Démo du site · phase 1",
    langLabel: "Langue du site"
  }
};

/* ------------------------------------------------------------------ */
/* DÉMO DE L'APPLICATION (page En action) — données 100 % fictives.    */
/* Dates au format AAAA-MM-JJ ; « today » fixe le jour de la démo.     */
/* ------------------------------------------------------------------ */
window.I18N.fr.demo.app = {
  today: "2026-10-19",
  user: { initials: "CM", name: "Camille Martin" },
  rel: { today: "aujourd'hui", tomorrow: "demain", yesterday: "hier", inDays: "dans {n} jours", overdue: "dépassée depuis {n} jour(s)", ago: "il y a {n} jours", now: "à l'instant" },
  ui: {
    seeAll: "Tout voir", open: "Ouvert", closed: "Clos", upcoming: "À venir", late: "En retard", done: "Faite",
    markDone: "Marquer comme faite", markUndone: "Rouvrir", more: "Plus d'actions", back: "Dossiers",
    noFolder: "Sans dossier", allFolders: "Tous les dossiers", allNatures: "Toutes les natures", allDomains: "Tous les domaines",
    validate: "Valider", refuse: "Refuser", validated: "Validé", refused: "Refusé", undo: "Annuler",
    demoOnly: "Démo : cette action est désactivée ici. Dans l'application, elle fonctionne.",
    cancel: "Annuler", add: "Ajouter", create: "Créer",
    note: "Note personnelle", noteInfo: "Visible par vous seul.", notePh: "Une idée, un rappel, une liste…",
    emptyReview: "Aucune proposition à valider. L'assistant et les passes nocturnes déposent ici ce qu'ils suggèrent d'écrire.",
    seeFolders: "Voir les dossiers",
    sourceLink: "Source"
  },
  dashboard: { folders: "Dossiers récents", deadlines: "Échéances", review: "À valider" },
  assistant: {
    title: "Mes conversations", newConv: "Nouvelle conversation", search: "Rechercher par titre…",
    intro: "Posez une question sur vos documents.", introInfo: "Les réponses citent leurs sources. Sans source, pas de réponse.",
    placeholder: "Posez une question…", send: "Envoyer", toSend: "pour envoyer", ctrl: "Ctrl", enter: "Entrée",
    try: "Essayez par exemple :", you: "Vous", scope: "Recherche dans",
    scopeAll: "tous vos mails et documents",
    noMatch: "Je n'ai trouvé aucun passage qui réponde à cette question dans vos mails ni dans vos documents. Je préfère ne rien affirmer sans source.",
    noMatchSearched: "3 412 mails · 865 documents"
  },
  conversations: [
    { c: 0, folder: "delaunay", ago: 2 },
    { c: 1, folder: "assurances", ago: 3 },
    { c: 2, folder: null, ago: 3 },
    { c: 3, folder: "delaunay", ago: 4 },
    { c: 4, folder: null, ago: 5 }
  ],
  keywords: [
    ["délai", "paiement", "delaunay", "règlement", "payer"],
    ["résilier", "assurance", "local", "préavis", "résiliation"],
    ["facturé", "facture", "bertin", "2025", "chiffre"],
    ["validé", "plan", "entrepôt", "version", "architecte"],
    ["siret", "numéro", "faure", "immatriculation"]
  ],
  folders: {
    title: "Dossiers", create: "Créer un dossier", filter: { open: "Ouverts", all: "Ouverts et clos", closed: "Clos" }, search: "Titre ou référence",
    newName: "Nom du dossier", newRef: "Référence", created: "Dossier créé",
    detailNote: "Dans cette démo, la mémoire complète (chronologie, acteurs, faits, versions) est détaillée pour « Entrepôt Delaunay ». Ici, voici ce que {name} a déjà relié à ce dossier.",
    linkedDeadlines: "Échéances liées", linkedDocs: "Documents", factUpdated: "mis à jour"
  },
  domains: { business: "Entreprise", legal: "Juridique", research: "Recherche", personal: "Vie perso" },
  folderList: [
    { id: "delaunay", domain: "business", name: "Rénovation entrepôt Delaunay", ref: "D-2611-07", contact: "Claire Morel", activity: "2026-10-18", due: "2026-10-23", docs: ["Contrat-cadre_Delaunay.pdf", "Plan_entrepot_v3.pdf", "Planning_travaux_v2.xlsx", "Facture_2026-041.pdf", "Devis_menuiserie_v2.pdf", "CR_reunion_02-10.docx"], extra: 17 },
    { id: "lyonsud", domain: "legal", name: "Litige prud'homal Morel c/ Arvel", ref: "RG 26/01842", contact: "Me Sophie Kahn", activity: "2026-10-16", due: "2026-10-14", docs: ["Contrat_travail_Morel.pdf", "Avenants_1_et_2.pdf", "Conclusions_adverses.pdf", "Bordereau_pieces.docx", "Jurisprudence_non-concurrence.pdf"], extra: 11 },
    { id: "these", domain: "research", name: "Thèse — chapitre 3 : échantillonnage", ref: "THS-C3", contact: "Pr. Delmas", activity: "2026-10-15", docs: ["Arnaud_Chen_2023.pdf", "Lindqvist_2021.pdf", "Okafor_2024.pdf", "Notes_lecture.md", "Plan_chapitre3.docx", "Retours_Delmas.pdf"], extra: 13 },
    { id: "offres", domain: "business", name: "Certification ISO 9001 — audit interne 2026", ref: "QUA-ISO-26", contact: "Service qualité", activity: "2026-10-13", due: "2026-11-20", docs: ["PRO-ACH-02_Procedure_achats.docx", "Audit_interne_2026.pdf", "Plan_actions_qualite.xlsx", "Manuel_qualite_v5.pdf"], extra: 8 },
    { id: "bertin", domain: "business", name: "Fournisseur Atelier Bertin — agencement", ref: "FRN-4381", contact: "Julien Faure", activity: "2026-10-15", due: "2027-02-17", docs: ["Offre_rayonnages.pdf", "Offre_mezzanine.pdf", "Garantie_fournisseur.pdf", "Fiche_fournisseur.pdf"], extra: 5 },
    { id: "etude", domain: "legal", name: "Bail commercial — local rue des Tanneurs", ref: "BAIL-TAN-12", contact: "SCI Les Tanneurs", activity: "2026-10-09", due: "2026-10-27", docs: ["Bail_commercial_2018.pdf", "Proposition_renouvellement.pdf", "Indices_ILC_2026.xlsx"], extra: 3 },
    { id: "villeurb", domain: "research", name: "Article « Sondages stratifiés » — soumission revue", ref: "ART-2026-04", contact: "Co-auteurs", activity: "2026-10-06", due: "2026-11-06", docs: ["Manuscrit_v4.docx", "Figures.zip", "Lettre_editeur.docx", "Retours_relecteurs.pdf"], extra: 2 },
    { id: "assurances", domain: "personal", name: "Vie perso — assurances et contrats", ref: "PERSO-ASSU", activity: "2026-09-24", docs: ["Attestation_assurance_2026.pdf", "Conditions_generales_MRP.pdf", "Avenant_2026.pdf", "Mutuelle_tableau_garanties.pdf"] },
    { id: "tilleuls", domain: "personal", name: "Vie perso — achat appartement Lyon 7e", ref: "PERSO-APPT", contact: "Notaire Me Rivière", activity: "2026-09-19", due: "2026-12-04", docs: ["Compromis_de_vente.pdf", "Offre_de_pret.pdf", "Diagnostics_DPE.pdf"], extra: 6 }
  ],
  documents: {
    title: "Documents", upload: "Déposer des documents", filter: { active: "Documents actifs", archived: "Documents archivés" },
    general: "Documents généraux", byFolder: "Documents des dossiers", docsCount: "{n} documents", andMore: "+ {n} autres",
    cols: { title: "Titre", category: "Catégorie", version: "Version courante", source: "Source", indexing: "Indexation", added: "Déposé", actions: "Actions" },
    open: "Ouvrir", summarize: "Résumer", indexed: "Indexé", indexing: "En cours", summaryOf: "Résumé de", close: "Fermer le résumé",
    prev: "Précédent", next: "Suivant"
  },
  docList: [
    { title: "Contrat-cadre Delaunay", file: "Contrat-cadre_Delaunay.pdf", cat: "Contrat", v: "v2", source: "Mail", indexed: true, date: "2026-04-02", summary: 0, src: { type: "doc", title: "Contrat-cadre_Delaunay.pdf", meta: "Page 3 · article 5.2", excerpt: "Les factures sont payables à quarante-cinq (45) jours fin de mois à compter de leur date d'émission." } },
    { title: "Plan entrepôt v3", file: "Plan_entrepot_v3.pdf", cat: "Plan", v: "v3", source: "Mail", indexed: true, date: "2026-10-06", summary: 1, src: { type: "doc", title: "Plan_entrepot_v3.pdf", meta: "Cartouche", excerpt: "Indice C — ajout d'un bureau à l'étage, quai de chargement côté nord." } },
    { title: "Conditions générales MRP", file: "Conditions_generales_MRP.pdf", cat: "Contrat", v: "v1", source: "Dépôt", indexed: true, date: "2026-09-09", src: { type: "doc", title: "Conditions_generales_MRP.pdf", meta: "Page 11 · article 18", excerpt: "La résiliation à l'échéance est possible moyennant un préavis de deux mois." } },
    { title: "Facture 2026-311", file: "Facture_2026-311.pdf", cat: "Facture", v: "v1", source: "Mail", indexed: false, date: "2026-10-19", src: { type: "doc", title: "Facture_2026-311.pdf", meta: "Comptabilité Lambert", excerpt: "Date limite de paiement : 30/10/2026" } },
    { title: "Arnaud & Chen 2023", file: "Arnaud_Chen_2023.pdf", cat: "Article", v: "v1", source: "Dépôt", indexed: true, date: "2026-09-13", src: { type: "doc", title: "Arnaud_Chen_2023.pdf", meta: "Section 2.3", excerpt: "A stratified random sample of 1,240 households was drawn…" } },
    { title: "Procédure achats", file: "PRO-ACH-02_Procedure_achats.docx", cat: "Procédure", v: "v4", source: "Partage", indexed: true, date: "2026-09-02", src: { type: "doc", title: "PRO-ACH-02_Procedure_achats.docx", meta: "§ 3", excerpt: "Sélection des fournisseurs : trois devis minimum, grille de notation…" } }
  ],
  review: {
    title: "À valider", count: "{n} proposition(s)",
    natures: { filing: "Rangement", deadline: "Échéance", task: "Tâche", fact: "Mémoire du dossier", routine: "Routine" },
    acceptedDeadline: "Échéance ajoutée dans Échéances.", acceptedFact: "Mémoire du dossier mise à jour.", acceptedFiling: "Mail rangé.", acceptedTask: "Tâche créée.", acceptedRoutine: "Routine activée."
  },
  proposals: [
    { nature: "filing", folder: "delaunay", text: "Ranger « Devis menuiserie — version corrigée » dans Entrepôt Delaunay / Devis", why: "Mail de Julien Faure · le devis cite la référence D-2611-07.", mail: 0, target: "Entrepôt Delaunay / Devis", src: { type: "mail", title: "Devis menuiserie — version corrigée", meta: "Julien Faure · 19 octobre 2026", excerpt: "Réf. D-2611-07 — voici le devis mis à jour avec la remise de 5 % sur les huisseries." } },
    { nature: "filing", folder: "bertin", text: "Ranger « Nouvelle offre — mezzanine » dans Offres / Bertin / 2026 / 10", why: "Vous rangez les offres d'Atelier Bertin ainsi depuis juin.", mail: 4, target: "Offres / Bertin / 2026 / 10", src: { type: "mail", title: "Nouvelle offre — mezzanine", meta: "Atelier Bertin · 14 octobre 2026", excerpt: "Veuillez trouver ci-jointe notre offre pour la mezzanine métallique." } },
    { nature: "deadline", folder: "delaunay", text: "Ajouter l'échéance « Envoyer l'attestation décennale » au 2 novembre", why: "Contrat-cadre, article 14 : à remettre avant le démarrage des travaux.", add: { date: "2026-11-02", title: "Envoyer l'attestation décennale à Claire Morel", folder: "delaunay" }, src: { type: "doc", title: "Contrat-cadre_Delaunay.pdf", meta: "Page 8 · article 14", excerpt: "L'attestation est remise au maître d'ouvrage avant tout démarrage." } },
    { nature: "task", folder: "bertin", text: "Créer la tâche « Comparer l'offre mezzanine et l'offre rayonnages »", why: "Deux offres du même fournisseur reçues à onze jours d'écart.", src: { type: "mail", title: "Nouvelle offre — mezzanine", meta: "Atelier Bertin · 14 octobre 2026", excerpt: "Cette offre peut se combiner avec celle du 3 octobre." } },
    { nature: "fact", folder: "delaunay", text: "Mettre à jour « Fin des travaux prévue » : 29 mars 2027 (au lieu du 15 mars)", why: "Claire Morel annonce un décalage de deux semaines.", factIndex: 3, factValue: "29 mars 2027", src: { type: "mail", title: "Planning — décalage", meta: "Claire Morel · 17 octobre 2026", excerpt: "La réception est décalée de deux semaines, au 29 mars." } },
    { nature: "routine", folder: "bertin", text: "Chaque offre reçue d'Atelier Bertin → ranger dans Offres / Bertin / année / mois", why: "Vous l'avez fait à la main 6 fois depuis juin.", src: { type: "mail", title: "Offre de prix — rayonnages", meta: "Atelier Bertin · 3 octobre 2026", excerpt: "Notre offre de prix pour les rayonnages." } }
  ],
  deadlines: {
    title: "Échéances", add: "Ajouter une échéance",
    filter: { active: "Entrées actives", upcoming: "À venir", late: "En retard", done: "Faites" },
    newTitle: "Intitulé", newDate: "Date", newFolder: "Dossier", empty: "Aucune échéance dans cette vue.", added: "Échéance ajoutée"
  },
  deadlineList: [
    { date: "2026-10-14", title: "Déposer les conclusions au conseil de prud'hommes", folder: "lyonsud", src: { type: "mail", title: "Calendrier de procédure", meta: "Greffe · 2 octobre 2026", excerpt: "Les conclusions du défendeur sont attendues au plus tard le 14 octobre 2026." } },
    { date: "2026-10-16", title: "Envoyer le bordereau de pièces à Me Kahn", folder: "lyonsud", src: { type: "mail", title: "Pièces à communiquer", meta: "Me Sophie Kahn · 9 octobre 2026", excerpt: "Merci de m'adresser le bordereau complet avant vendredi." } },
    { date: "2026-10-22", title: "Envoyer le chapitre 3 révisé au Pr. Delmas", folder: "these", src: { type: "mail", title: "Lectures pour le chapitre 3", meta: "Pr. Delmas · 9 octobre 2026", excerpt: "Envoyez-moi la version révisée avant notre point du 22." } },
    { date: "2026-10-23", title: "Réunion de chantier, 9 h", folder: "delaunay", src: { type: "mail", title: "Réunion de chantier vendredi", meta: "Claire Morel · 16 octobre 2026", excerpt: "Pouvez-vous confirmer votre présence vendredi 23 à 9 h ?" } },
    { date: "2026-10-27", title: "Répondre à la proposition de renouvellement du bail", folder: "etude", src: { type: "doc", title: "Proposition_renouvellement.pdf", meta: "Page 1", excerpt: "Nous vous remercions de nous faire connaître votre réponse avant le 27 octobre 2026." } },
    { date: "2026-10-30", title: "Payer la facture Lambert n° 2026-311", folder: "delaunay", src: { type: "doc", title: "Facture_2026-311.pdf", meta: "Comptabilité Lambert", excerpt: "Date limite de paiement : 30/10/2026" } },
    { date: "2026-11-06", title: "Soumettre l'article à la revue", folder: "villeurb", src: { type: "mail", title: "Numéro spécial — appel à articles", meta: "Comité éditorial · 15 septembre 2026", excerpt: "Les manuscrits sont reçus jusqu'au 6 novembre 2026." } },
    { date: "2026-11-20", title: "Clore les écarts de l'audit interne ISO 9001", folder: "offres", src: { type: "doc", title: "Audit_interne_2026.pdf", meta: "Page 4 · écart n° 3", excerpt: "Action corrective attendue avant le 20 novembre 2026." } },
    { date: "2026-11-30", title: "Dernier jour pour résilier l'assurance du local", folder: "assurances", src: { type: "doc", title: "Conditions_generales_MRP.pdf", meta: "Page 11 · article 18", excerpt: "préavis de deux mois" } },
    { date: "2026-12-04", title: "Signer l'acte de vente chez le notaire", folder: "tilleuls", src: { type: "mail", title: "Date de signature", meta: "Me Rivière · 25 septembre 2026", excerpt: "La signature de l'acte authentique est fixée au 4 décembre à 10 h." } }
  ],
  mails: {
    title: "Mails", addBox: "Ajouter une boîte mail", manage: "Gérer les mails", search: "Sujet, correspondant ou texte",
    filter: { all: "Tous les fils", toFile: "À ranger", filed: "Rangés" }, period: { all: "Toute période", week: "7 derniers jours" },
    auto: "Envoi automatique", proposal: "Proposition : ranger dans", filedIn: "Rangé dans", empty: "Aucun mail ne correspond.", summary: "En bref"
  },
  mailList: [
    { subject: "Devis menuiserie — version corrigée", from: "Julien Faure", snippet: "Bonjour Camille, voici le devis mis à jour avec la remise de 5 % sur les huisseries, réf. D-2611-07. Les délais restent inchangés.", date: "2026-10-19", proposal: 0, brief: "Devis corrigé, remise de 5 %, délais inchangés." },
    { subject: "Facture octobre 2026", from: "Comptabilité Lambert", snippet: "Veuillez trouver ci-joint notre facture n° 2026-311, payable au 30 octobre 2026. Ce message est envoyé automatiquement.", date: "2026-10-19", auto: true, filed: "delaunay", brief: "Facture à payer avant le 30 octobre (échéance déjà créée)." },
    { subject: "Planning — décalage", from: "Claire Morel", snippet: "Bonjour, l'entreprise de gros œuvre nous annonce deux semaines de retard. La réception est décalée au 29 mars.", date: "2026-10-17", filed: "delaunay", brief: "Réception décalée au 29 mars 2027 (proposition de mise à jour du dossier)." },
    { subject: "Votre relevé mensuel est disponible", from: "Mutuelle Horizon", snippet: "Votre relevé de remboursements d'octobre est disponible dans votre espace adhérent. Ce message est envoyé automatiquement.", date: "2026-10-18", auto: true, brief: "Notification sans action." },
    { subject: "Nouvelle offre — mezzanine", from: "Atelier Bertin", snippet: "Bonjour, veuillez trouver ci-jointe notre offre pour la mezzanine métallique. Elle peut se combiner avec celle du 3 octobre.", date: "2026-10-14", proposal: 1, brief: "Nouvelle offre, combinable avec l'offre rayonnages." },
    { subject: "Avenant à votre contrat", from: "Cabinet Vasseur", snippet: "Suite à notre échange, voici l'avenant à signer pour l'extension de garantie du local.", date: "2026-10-12", filed: "assurances", brief: "Avenant à signer." },
    { subject: "Lectures pour le chapitre 3", from: "Pr. Delmas", snippet: "Regardez Okafor et al., leur plan de sondage est proche du vôtre. On en parle jeudi ?", date: "2026-10-09", filed: "these", brief: "Lecture conseillée : Okafor et al. 2024." },
    { subject: "Les nouveautés du mois", from: "Matériaux Plus", snippet: "Découvrez nos offres de saison sur l'isolation et les menuiseries. Ce message est envoyé automatiquement.", date: "2026-10-08", auto: true, brief: "Lettre d'information." }
  ]
};

/* Assistant de la démo : questions préparées, étapes, réponse citée. */
window.I18N.fr.demo.app.assistantUi = {
  stepsDone: "{n} étapes en {t}", stepsRunning: "Recherche en cours…", absent: "Information absente des sources",
  pick: "Questions disponibles dans la démo", composePh: "Choisissez une question ci-dessous", openDoc: "Ouvrir le passage cité",
  toggleSteps: "Afficher ou masquer les étapes"
};
window.I18N.fr.demo.app.viewer = {
  version: "Version", page: "Page {n} sur {t}", found: "Passage retrouvé page {n}", foundMail: "Passage retrouvé dans le mail",
  showFull: "Afficher toute la citation", showLess: "Réduire la citation", download: "Télécharger le fichier d'origine",
  prev: "Page précédente", next: "Page suivante", zoomIn: "Agrandir", zoomOut: "Réduire", close: "Fermer",
  notShown: "Page {n} : contenu non reproduit dans la démo.", from: "De", to: "À", date: "Date", subject: "Objet", mail: "Mail"
};
window.I18N.fr.demo.app.qa = [
  {
    q: "Quel délai de paiement avons-nous accordé à Delaunay ?", folder: "delaunay", ago: 2,
    steps: [
      { t: "Analyse de la question", d: "réflexion rapide", s: 1.4 },
      { t: "Vue d'ensemble du périmètre", d: "dossier Entrepôt Delaunay", s: 2.1 },
      { t: "Liste des sources", d: "fils de mails « Delaunay » : 7", s: 0.81 },
      { t: "Lecture d'un fil de mails", d: "« Re: Conditions de règlement » : 4 messages", s: 0.93 },
      { t: "Recherche dans les sources", d: "« délai de paiement Delaunay » : 8 extraits", s: 6.3 },
      { t: "Éléments réunis", d: "8 extraits et 2 documents", s: 1.1 },
      { t: "Rédaction de la réponse", d: "premier mot après 3,2 s", s: 9.8 }
    ],
    blocks: [
      { p: "Le délai accordé à Delaunay est de 45 jours fin de mois. Claire Morel l'a accepté par mail le 12 mars 2026 :" },
      { quote: "C'est d'accord pour 45 jours fin de mois à compter de la prochaine commande, comme évoqué au téléphone.", s: 0 },
      { p: "Le contrat-cadre signé le 2 avril 2026 reprend ce délai à l'article 5.2 :" },
      { quote: "Les factures sont payables à quarante-cinq (45) jours fin de mois à compter de leur date d'émission.", s: 1 },
      { p: "Appliqué à la facture n° 2026-041, émise le 14 octobre, l'encaissement est attendu au plus tard le 30 novembre." }
    ],
    sources: [
      { type: "mail", title: "Re: Conditions de règlement", from: "Claire Morel", to: "Camille Martin", date: "12 mars 2026", before: ["Bonjour Camille,", "Merci pour votre appel de ce matin."], after: ["Je préviens notre service comptable.", "Bien cordialement,", "Claire Morel — Directrice générale, Delaunay"] },
      { type: "doc", title: "Contrat-cadre Delaunay", file: "Contrat-cadre_Delaunay_signe.pdf", version: "v2", page: 3, pages: 14, heading: "Article 5 — Conditions de paiement", before: ["5.1 Les prix s'entendent hors taxes. Ils sont révisables une fois par an dans les conditions de l'article 3."], after: ["5.3 Tout retard de paiement entraîne des pénalités au taux légal majoré de trois points, sans mise en demeure préalable."] }
    ]
  },
  {
    q: "Quand faut-il résilier l'assurance du local au plus tard ?", folder: "assurances", ago: 3,
    steps: [
      { t: "Analyse de la question", d: "réflexion rapide", s: 1.2 },
      { t: "Vue d'ensemble du périmètre", d: "tous vos mails et documents", s: 2.6 },
      { t: "Liste des sources", d: "documents « assurance » : 3", s: 0.64 },
      { t: "Recherche dans les sources", d: "« résiliation préavis assurance local » : 8 extraits", s: 5.9 },
      { t: "Éléments réunis", d: "8 extraits et 2 documents", s: 0.9 },
      { t: "Rédaction de la réponse", d: "premier mot après 2,7 s", s: 8.4 }
    ],
    blocks: [
      { p: "Au plus tard le 30 novembre 2026. Le contrat arrive à échéance le 31 janvier 2027 :" },
      { quote: "Période de garantie : du 1er février 2026 au 31 janvier 2027.", s: 0 },
      { p: "Les conditions générales imposent un préavis de deux mois :" },
      { quote: "La résiliation à l'échéance est possible moyennant un préavis de deux mois, par lettre recommandée ou par envoi électronique.", s: 1 },
      { p: "Cette date figure déjà dans vos échéances, rattachée au dossier Assurances." }
    ],
    sources: [
      { type: "doc", title: "Attestation assurance 2026", file: "Attestation_assurance_2026.pdf", version: "v1", page: 1, pages: 2, heading: "Attestation d'assurance — Multirisque professionnelle", before: ["Assuré : Camille Martin, 12 rue des Tanneurs, 69001 Lyon.", "Contrat n° MRP-448 213."], after: ["Garanties : incendie, dégâts des eaux, vol, responsabilité civile."] },
      { type: "doc", title: "Conditions générales MRP", file: "Conditions_generales_MRP.pdf", version: "v1", page: 11, pages: 36, heading: "Article 18 — Durée et résiliation du contrat", before: ["18.1 Le contrat est conclu pour un an. Il se renouvelle par tacite reconduction à chaque échéance annuelle."], after: ["18.3 L'assureur peut également résilier le contrat dans les mêmes formes, avec le même préavis."] }
    ]
  },
  {
    q: "Résume les derniers échanges avec Claire Morel", folder: "delaunay", ago: 3,
    steps: [
      { t: "Analyse de la question", d: "réflexion approfondie", s: 2.0 },
      { t: "Vue d'ensemble du périmètre", d: "dossier Entrepôt Delaunay", s: 2.8 },
      { t: "Liste des sources", d: "fils de mails « Claire Morel » : 6", s: 0.95 },
      { t: "Lecture d'un fil de mails", d: "« Planning — décalage » : 1 message", s: 0.93 },
      { t: "Lecture d'un fil de mails", d: "« Réunion de chantier vendredi » : 2 messages", s: 0.026 },
      { t: "Lecture d'un fil de mails", d: "« Plan entrepôt — bureau » : 3 messages", s: 0.031 },
      { t: "Recherche dans les sources", d: "« Claire Morel demandes récentes » : 8 extraits", s: 10.4 },
      { t: "Éléments réunis", d: "18 extraits et 3 fils de mails", s: 1.3 },
      { t: "Rédaction de la réponse", d: "premier mot après 6,1 s", s: 14.2 }
    ],
    blocks: [
      { p: "Trois points ressortent des derniers échanges avec Claire Morel." },
      { p: "1. La réception des travaux est décalée de deux semaines :" },
      { quote: "La réception est décalée de deux semaines, au 29 mars.", s: 0 },
      { p: "2. Elle attend votre confirmation pour la réunion de chantier :" },
      { quote: "Pouvez-vous confirmer votre présence vendredi 23 à 9 h ?", s: 1 },
      { p: "3. Le bureau supplémentaire à l'étage, qu'elle avait demandé, est intégré au plan v3 :" },
      { quote: "Nous aimerions ajouter un bureau à l'étage, au-dessus du quai.", s: 2 },
      { p: "À faire : répondre pour la réunion de vendredi. Le décalage du planning attend votre validation dans À valider." }
    ],
    sources: [
      { type: "mail", title: "Planning — décalage", from: "Claire Morel", to: "Camille Martin", date: "17 octobre 2026", before: ["Bonjour Camille,", "L'entreprise de gros œuvre nous annonce deux semaines de retard sur la dalle."], after: ["Les autres lots ne sont pas touchés.", "Claire"] },
      { type: "mail", title: "Réunion de chantier vendredi", from: "Claire Morel", to: "Camille Martin, Julien Faure", date: "16 octobre 2026", before: ["Bonjour à tous,", "Je propose de faire le point sur site avant la consultation des entreprises."], after: ["Merci de me répondre d'ici mercredi.", "Claire"] },
      { type: "mail", title: "Plan entrepôt — bureau", from: "Claire Morel", to: "Julien Faure", date: "21 septembre 2026", before: ["Bonjour Julien,", "Après réflexion avec l'équipe logistique :"], after: ["La surface peut être prise sur la zone de stockage.", "Claire"] }
    ]
  },
  {
    q: "Qui a validé la dernière version du plan de l'entrepôt ?", folder: "delaunay", ago: 4,
    steps: [
      { t: "Analyse de la question", d: "réflexion rapide", s: 1.1 },
      { t: "Vue d'ensemble du périmètre", d: "dossier Entrepôt Delaunay", s: 1.9 },
      { t: "Liste des sources", d: "versions du document « Plan entrepôt » : 3", s: 0.42 },
      { t: "Lecture d'un fil de mails", d: "« Plan entrepôt v3 — OK pour moi » : 1 message", s: 0.88 },
      { t: "Éléments réunis", d: "4 extraits et 1 document", s: 0.7 },
      { t: "Rédaction de la réponse", d: "premier mot après 2,1 s", s: 6.3 }
    ],
    blocks: [
      { p: "Julien Faure, l'architecte, a validé la version 3 du plan le 8 octobre 2026 :" },
      { quote: "Je valide la v3, on peut lancer la consultation des entreprises.", s: 0 },
      { p: "Cette version ajoute un bureau à l'étage et conserve le quai de chargement côté nord, comme l'indique le cartouche du plan :" },
      { quote: "Indice C — ajout d'un bureau à l'étage, quai de chargement côté nord.", s: 1 }
    ],
    sources: [
      { type: "mail", title: "Plan entrepôt v3 — OK pour moi", from: "Julien Faure", to: "Camille Martin, Claire Morel", date: "8 octobre 2026", before: ["Bonjour,", "J'ai repris les remarques de vendredi."], after: ["Je prépare le dossier de consultation pour la fin du mois.", "Julien Faure — Architecte"] },
      { type: "doc", title: "Plan entrepôt v3", file: "Plan_entrepot_v3.pdf", version: "v3", page: 1, pages: 1, heading: "Cartouche — Entrepôt Delaunay, rue des Tanneurs", before: ["Indice A — 18/06/2026 — première esquisse.", "Indice B — 02/09/2026 — quai de chargement déplacé."], after: ["Échelle 1/100 — Format A1."] }
    ]
  },
  {
    q: "Quel est le numéro SIRET de Julien Faure ?", folder: null, ago: 5, absent: true,
    steps: [
      { t: "Analyse de la question", d: "réflexion rapide", s: 0.9 },
      { t: "Recherche dans les sources", d: "« SIRET Julien Faure » : 0 extrait", s: 4.2 },
      { t: "Recherche dans les sources", d: "« Julien Faure immatriculation société » : 3 extraits", s: 3.8 },
      { t: "Rédaction de la réponse", d: "premier mot après 1,9 s", s: 5.6 }
    ],
    blocks: [
      { p: "Aucun de vos mails ni de vos documents ne mentionne le numéro SIRET de Julien Faure. Les sources donnent son nom, sa fonction et son adresse, mais jamais d'immatriculation, par exemple dans sa signature :" },
      { quote: "Julien Faure — Architecte — 14 rue des Tanneurs, 69001 Lyon", s: 0 },
      { p: "Je préfère ne pas proposer de numéro sans source. Vous pouvez le lui demander ou le vérifier dans l'annuaire officiel des entreprises." }
    ],
    sources: [
      { type: "mail", title: "Plan entrepôt v3 — OK pour moi", from: "Julien Faure", to: "Camille Martin, Claire Morel", date: "8 octobre 2026", before: ["Je valide la v3, on peut lancer la consultation des entreprises.", "Bien à vous,"], after: ["Tél. 04 00 00 00 00"] }
    ]
  }
];

/* Exemples par domaine pour l'Assistant (juridique, recherche, entreprise). */
window.I18N.fr.demo.app.qa.splice(4, 0,
  {
    q: "Dans le litige Morel, la clause de non-concurrence est-elle valable ?", folder: "lyonsud", ago: 1,
    steps: [
      { t: "Analyse de la question", d: "réflexion approfondie", s: 2.4 },
      { t: "Vue d'ensemble du périmètre", d: "dossier Litige prud'homal Morel c/ Arvel", s: 2.2 },
      { t: "Liste des sources", d: "documents du dossier : 16", s: 0.71 },
      { t: "Recherche dans les sources", d: "« clause de non-concurrence contrepartie » : 8 extraits", s: 7.6 },
      { t: "Recherche dans la base juridique", d: "« validité clause non-concurrence » : 5 décisions", s: 4.9 },
      { t: "Éléments réunis", d: "13 extraits, 2 documents et 1 décision", s: 1.2 },
      { t: "Rédaction de la réponse", d: "premier mot après 4,4 s", s: 12.7 }
    ],
    blocks: [
      { p: "Probablement pas en l'état. La clause est bien limitée dans le temps et dans l'espace :" },
      { quote: "Le salarié s'interdit, pendant 24 mois, toute activité concurrente en région Auvergne-Rhône-Alpes.", s: 0 },
      { p: "En revanche, je ne trouve aucune contrepartie financière, ni dans le contrat ni dans ses deux avenants. Or la jurisprudence en fait une condition de validité :" },
      { quote: "Une clause de non-concurrence n'est licite que si elle est indispensable à la protection des intérêts légitimes de l'entreprise, limitée dans le temps et dans l'espace, qu'elle tient compte des spécificités de l'emploi du salarié et comporte l'obligation pour l'employeur de verser au salarié une contrepartie financière.", s: 1 },
      { p: "Point à vérifier avec Me Kahn avant le dépôt des conclusions, en retard depuis le 14 octobre." }
    ],
    sources: [
      { type: "doc", title: "Contrat de travail Morel", file: "Contrat_travail_Morel.pdf", version: "v1", page: 6, pages: 9, heading: "Article 9 — Non-concurrence", before: ["9.1 Compte tenu des fonctions de directeur commercial confiées au salarié :"], after: ["9.2 L'employeur peut renoncer à la présente clause dans les quinze jours suivant la rupture du contrat."] },
      { type: "doc", title: "Cass. soc., 10 juillet 2002, n° 00-45.135", file: "Cass_soc_10-07-2002_00-45135.pdf", version: "base juridique", page: 2, pages: 3, heading: "Motifs", before: ["Vu le principe fondamental de libre exercice d'une activité professionnelle et l'article L. 120-2 du Code du travail ;", "Attendu que :"], after: ["Qu'en statuant comme elle l'a fait, la cour d'appel a violé le principe et le texte susvisés."] }
    ]
  },
  {
    q: "Quels articles de ma bibliographie utilisent un échantillonnage stratifié ?", folder: "these", ago: 2,
    steps: [
      { t: "Analyse de la question", d: "réflexion rapide", s: 1.3 },
      { t: "Vue d'ensemble du périmètre", d: "dossier Thèse — chapitre 3", s: 1.8 },
      { t: "Liste des sources", d: "articles de la bibliographie : 19", s: 0.52 },
      { t: "Recherche dans les sources", d: "« stratified sampling » : 8 extraits", s: 5.4 },
      { t: "Recherche dans les bases scientifiques", d: "« proportional stratified sampling districts » : 3 résumés", s: 3.9 },
      { t: "Lecture d'un fil de mails", d: "« Lectures pour le chapitre 3 » : 2 messages", s: 0.61 },
      { t: "Éléments réunis", d: "11 extraits, 3 articles et 1 mail", s: 1.0 },
      { t: "Rédaction de la réponse", d: "premier mot après 3,0 s", s: 9.2 }
    ],
    blocks: [
      { p: "Trois articles de votre bibliographie utilisent un échantillonnage stratifié. Arnaud et Chen (2023) tirent un échantillon de ménages :" },
      { quote: "A stratified random sample of 1,240 households was drawn from the regional register.", s: 0 },
      { p: "Lindqvist (2021) stratifie par région et par revenu, et Okafor et al. (2024) appliquent une stratification proportionnelle sur 14 districts. Votre directeur de thèse vous avait signalé ce dernier :" },
      { quote: "Regardez Okafor et al., leur plan de sondage est proche du vôtre.", s: 1 },
      { p: "Aucun des trois ne travaille sur la même population que votre chapitre 3. Références fictives, pour la démonstration." }
    ],
    sources: [
      { type: "doc", title: "Arnaud & Chen 2023", file: "Arnaud_Chen_2023.pdf", version: "v1", page: 7, pages: 24, heading: "2.3 Sampling design", before: ["The survey covers twelve municipalities with contrasting income profiles."], after: ["Strata were defined by municipality size and median income."] },
      { type: "mail", title: "Lectures pour le chapitre 3", from: "Pr. Delmas", to: "Camille Martin", date: "9 octobre 2026", before: ["Bonjour Camille,", "J'ai relu votre plan, c'est solide."], after: ["On en parle jeudi ?", "M. Delmas"] }
    ]
  },
  {
    q: "Notre procédure achats répond-elle à l'ISO 9001 sur l'évaluation des fournisseurs ?", folder: "offres", ago: 3,
    steps: [
      { t: "Analyse de la question", d: "réflexion approfondie", s: 2.1 },
      { t: "Vue d'ensemble du périmètre", d: "dossier Certification ISO 9001", s: 2.0 },
      { t: "Liste des sources", d: "procédures qualité : 12", s: 0.66 },
      { t: "Recherche dans le référentiel", d: "« ISO 9001 § 8.4.1 prestataires externes » : 2 extraits", s: 3.1 },
      { t: "Recherche dans les sources", d: "« évaluation fournisseurs suivi performance » : 8 extraits", s: 6.0 },
      { t: "Éléments réunis", d: "10 extraits et 3 documents", s: 1.1 },
      { t: "Rédaction de la réponse", d: "premier mot après 3,6 s", s: 10.5 }
    ],
    blocks: [
      { p: "En partie seulement. La norme demande des critères pour sélectionner, mais aussi pour suivre les fournisseurs :" },
      { quote: "L'organisme doit déterminer et appliquer des critères pour l'évaluation, la sélection, la surveillance des performances et la réévaluation des prestataires externes.", s: 0 },
      { p: "Votre procédure couvre bien la sélection, mais rien sur le suivi de la performance. L'audit interne de cette année relevait déjà ce manque :" },
      { quote: "Absence de suivi formalisé de la performance des fournisseurs.", s: 1 },
      { p: "L'action corrective est attendue avant le 20 novembre ; l'échéance figure dans le dossier." }
    ],
    sources: [
      { type: "doc", title: "ISO 9001:2015", file: "ISO_9001-2015_referentiel.pdf", version: "référentiel", page: 18, pages: 44, heading: "8.4.1 Maîtrise des processus, produits et services fournis par des prestataires externes — Généralités", before: ["L'organisme doit s'assurer que les processus, produits et services fournis par des prestataires externes sont conformes aux exigences."], after: ["L'organisme doit conserver des informations documentées sur ces activités et sur toutes les actions nécessaires résultant des évaluations."] },
      { type: "doc", title: "Audit interne 2026", file: "Audit_interne_2026.pdf", version: "v2", page: 4, pages: 11, heading: "Écart n° 3 — Achats", before: ["Processus audité : achats et sous-traitance. Interlocuteur : responsable achats."], after: ["Gravité : mineure. Action corrective attendue avant le 20 novembre 2026."] }
    ]
  }
);

/* Domaines : bases publiques connectées en direct et veille passive. */
(function (f) {
  f.legal.adds.unshift("Connexion et scan en direct des textes et à la jurisprudence publiés, mis à jour en continu");
  f.research.adds.unshift("Connexion et scan en direct des bases d'articles ouvertes : chaque nouvelle publication est comparée à vos dossiers");
  f.business.noLive = true;
  f.live = {
    status: "Connecté en direct · dernière mise à jour aujourd'hui, 7 h 12",
    title: "Veille passive",
    scan: "Scan en direct", scanned: "{n} nouvelles publications analysées aujourd'hui", matched: "{n} concernent vos dossiers",
    sub: "{name} croise chaque nouveauté publiée avec vos dossiers. Quand une publication concerne l'un d'eux, il vous prévient, avec la source et la raison.",
    concerns: "Concerne", why: "Pourquoi", add: "Ajouter au dossier", added: "Ajouté au dossier", ignore: "Ignorer", ignored: "Ignorée", news: "Nouveauté",
    note: "Exemples fictifs, pour la démonstration."
  };
  f.legal.watch = [
    { date: "16 oct. 2026", title: "Cass. soc., 14 octobre 2026 — clause de non-concurrence sans contrepartie", folder: "Litige prud'homal Morel c/ Arvel", why: "Votre dossier conteste une clause de 24 mois sans contrepartie financière. Cet arrêt confirme la nullité dans un cas proche.", src: { type: "external", title: "Cass. soc., 14 octobre 2026 (exemple fictif)", meta: "Jurisprudence · publié le 16 octobre 2026", excerpt: "La clause de non-concurrence dépourvue de contrepartie financière est nulle ; le salarié qui l'a respectée peut prétendre à réparation." } },
    { date: "11 oct. 2026", title: "Nouvel indice des loyers commerciaux publié", folder: "Bail commercial — local rue des Tanneurs", why: "La proposition de renouvellement du bail repose sur l'indice précédent. Le nouvel indice change le montant plafonné.", src: { type: "external", title: "Indice des loyers commerciaux (exemple fictif)", meta: "Publication officielle · 11 octobre 2026", excerpt: "L'indice du deuxième trimestre 2026 s'établit en hausse de 2,1 % sur un an." } }
  ];
  f.research.watch = [
    { date: "15 oct. 2026", title: "Diallo et al. (2026) — stratification et non-réponse dans les enquêtes ménages", folder: "Thèse — chapitre 3 : échantillonnage", why: "L'article traite la même question que votre section 3.2 et cite Arnaud et Chen (2023), déjà dans votre bibliographie.", src: { type: "external", title: "Diallo et al., 2026 (exemple fictif)", meta: "Base d'articles ouverte · résumé · 15 octobre 2026", excerpt: "We compare post-stratification weights under differential non-response across 1,800 households." } },
    { date: "9 oct. 2026", title: "Appel à articles : numéro spécial « Méthodes d'enquête »", folder: "Article « Sondages stratifiés » — soumission revue", why: "Le thème correspond à votre manuscrit v4. Date limite : 6 novembre.", src: { type: "external", title: "Appel à articles (exemple fictif)", meta: "Revue de méthodologie · 9 octobre 2026", excerpt: "Manuscripts on sampling design and survey weighting are welcome until 6 November 2026." } }
  ];
})(window.I18N.fr.fields);
