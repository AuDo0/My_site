/* ==========================================================================
   ENGLISH TEXT — every string on the site, demos included.
   Same structure and variables as fr.js.
   ========================================================================== */
window.I18N = window.I18N || {};
window.I18N.en = {
  meta: {
    langName: "English",
    short: "EN",
    skip: "Skip to content",
    titleSuffix: "{name}",
    description: "{name}: the assistant that knows your email and documents, answers with its sources, and turns what it reads into tasks and deadlines."
  },

  slugs: {
    home: "home", action: "in-action", plugins: "plug-ins", routines: "routines",
    fields: "fields", data: "your-data", start: "get-started", live: "see-it-live",
    pricing: "pricing", legal: "legal", themes: "palettes"
  },

  nav: {
    action: "In action", plugins: "Plug-ins", routines: "Routines", fields: "Fields",
    data: "Your data", pricing: "Pricing", live: "See it live", start: "Get started",
    menu: "Menu", close: "Close menu", main: "Main navigation", lang: "Language"
  },

  common: {
    sourced: "Sourced",
    sources: "Sources",
    open: "Open",
    openSource: "Open source",
    close: "Close",
    validate: "Approve",
    validated: "Approved",
    ignore: "Dismiss",
    ignored: "Dismissed",
    accept: "Accept",
    accepted: "Accepted",
    refuse: "Decline",
    refused: "Declined",
    undo: "Undo",
    fictive: "Sample data",
    fictiveLong: "Demo: all data is made up. Nothing is sent.",
    proposal: "Suggestion",
    youValidate: "{name} suggests, you approve.",
    notFound: "Not found",
    mail: "Email",
    doc: "Document",
    external: "External source",
    excerpt: "Quoted passage",
    soon: "Coming soon",
    available: "Available",
    onRequest: "On request",
    draftNote: "Internal note",
    required: "required",
    sentMock: "Mock-up: nothing was sent. Live, this form goes to a service hosted in Europe."
  },

  home: {
    title: "Your email and documents, finally working for you",
    eyebrow: "Organisation and memory assistant",
    h1: "Ask the question. <em>Get the answer and its source.</em>",
    lead: "{name} reads your email and documents, answers by citing every passage it used, and turns what it reads into tasks, deadlines and tidy folders. When the information doesn't exist, it says so.",
    demoTitle: "Try the tool right here, with sample data",
    ctaStart: "Start for free",
    ctaLive: "See it live, 20 minutes",
    availability: "Web app · Phone install coming soon",
    demo: {
      label: "Animated demo",
      folder: "Folder · Delaunay warehouse",
      question: "What payment terms did we give Delaunay?",
      thinking: "Searching 3,412 emails and 865 documents…",
      answer: "45 days end of month, agreed by Claire Morel on 12 March 2026[[1]]. The framework contract signed on 2 April repeats these terms in clause 5.2[[2]].",
      s1: "Email from Claire Morel · 12 March 2026",
      s2: "Delaunay framework contract.pdf · p. 3",
      task: "Deadline found: invoice 2026-041 due on 30 November",
      taskBtn: "Create task",
      replay: "Replay"
    },
    beforeAfter: {
      title: "What you stop doing",
      before: "Without {name}",
      after: "With {name}",
      rows: [
        ["Digging through three inboxes and two shared folders to find one figure.", "One question, one answer, the original passage one click away."],
        ["Rereading a 23-message thread before a meeting.", "A five-point summary, each point linked to its message."],
        ["Writing down deadlines as emails come in, and missing one.", "Deadlines spotted in your mail, approved with one click."],
        ["Dragging each attachment into the right folder by hand.", "Routines that file for you, with or without asking first."]
      ]
    },
    benefits: {
      title: "Three reasons to try it",
      items: [
        { title: "Every answer can be checked", text: "Sources are cited sentence by sentence. If nothing answers the question, {name} says so instead of making something up." },
        { title: "Reading turns into doing", text: "A deadline in an email becomes a task. An attachment joins its folder. You approve, it's done." },
        { title: "Your data stays in Europe", text: "Hosting and AI models in France or the European Union. Nothing is sold, nothing is reused." }
      ]
    },
    steps: {
      title: "Three steps to get going",
      items: [
        { title: "Connect your sources", text: "Pick the mailboxes and folders to read. Nothing else is ever opened." },
        { title: "Ask your questions", text: "In plain language, about a case, a person, a date, an amount." },
        { title: "Approve the suggestions", text: "Tasks, deadlines, filing: nothing happens without your go-ahead, unless you decide otherwise." }
      ]
    },
    audiences: {
      title: "Who it's for",
      items: [
        { title: "Teams and companies", text: "Lots of email, attachments, and client, supplier or project files." },
        { title: "Researchers and PhD students", text: "Papers, notes, exchanges with your supervisor: find everything with its reference." },
        { title: "Busy lives", text: "Paperwork, housing, health, children: run your personal life with the rigour of a business." }
      ]
    },
    final: {
      title: "Try it on your own email",
      text: "Access is free during the test phase. In return, we'll ask for your feedback.",
      cta: "Get started",
      cta2: "Book a demo"
    }
  },

  action: {
    title: "In action",
    eyebrow: "Interactive demos",
    h1: "Try it here, with sample data",
    lead: "Each scenario uses the app's own screens. Click the sources, approve the tasks, accept or decline the suggestions.",
    tabsLabel: "Scenarios",
    tabs: {
      ask: "Ask",
      sort: "Sort the mail",
      dossier: "A case's history",
      summary: "Summarise a document",
      deadlines: "Never miss a deadline"
    },
    sideLabel: "App sections",
    hint: "Move between sections with the app's menu, just like in the product. Your choices carry over from screen to screen.",
    intro: {
      dashboard: "The morning view: what's waiting for your approval, upcoming deadlines, active folders. Click a tile to open its section.",
      assistant: "A plain-language question, a sourced answer. Try the last question too: the information doesn't exist.",
      folders: "Everything about a case, extracted automatically from emails and documents: timeline, people, key facts, versions.",
      documents: "Pick a document or a thread, read the gist, turn it into tasks.",
      review: "Everything {name} suggests, in one place: filing, deadlines, routines. Approve or dismiss.",
      deadlines: "Dates spotted in your mail, with their source. Your call.",
      mails: "This morning's mail, already sorted. Accept the suggested folders or dismiss them."
    }
  },

  app: {
    nav: {
      dashboard: "Dashboard", assistant: "Assistant", folders: "Folders", documents: "Documents",
      review: "To review", deadlines: "Deadlines", mails: "Mail",
      inbox: "Mail", ask: "Questions", tasks: "Tasks", routines: "Routines"
    },
    searchPlaceholder: "Ask a question about your email and documents",
    ask: "Ask",
    scope: "Searching: 3,412 emails · 865 documents · 4 sources",
    examples: "Sample questions",
    notFoundTitle: "Information not found",
    searched: "Searched",
    draftReply: "Draft an email asking for it",
    draftDone: "Draft saved in your mailbox",
    createTask: "Create task",
    taskCreated: "Task created",
    acceptAll: "Accept all",
    folderLabel: "File in",
    tasksCount: "{n} task(s) created",
    pending: "pending",
    done: "done"
  },

  demo: {
    dashboard: {
      hello: "Good morning, Camille",
      date: "Monday 19 October 2026",
      tiles: { review: "to review", deadlines: "upcoming deadlines", mails: "emails to file", folders: "active folders" },
      next: "Upcoming deadlines",
      recent: "Recent folders",
      askTitle: "Ask the assistant",
      seeAll: "See all",
      allDone: "No pending deadlines. You're all caught up."
    },
    review: {
      count: "{n} item(s) waiting for your approval",
      filing: "Suggested filing",
      deadlines: "Deadlines spotted",
      routines: "Suggested routine",
      empty: "Everything is approved. Nothing happens without you."
    },
    folders: [
      { name: "Delaunay warehouse", meta: "41 emails · 23 documents · yesterday" },
      { name: "Bertin workshop", meta: "18 emails · 9 documents · 14 Oct" },
      { name: "Premises insurance", meta: "7 emails · 4 documents · 9 Sep" },
      { name: "Accounts 2026", meta: "52 emails · 61 documents · 15 Oct" },
      { name: "Hiring a site manager", meta: "12 emails · 8 documents · 10 Oct" },
      { name: "Part-Dieu offices", meta: "9 emails · 5 documents · 2 Oct" },
      { name: "Electrical subcontracting", meta: "15 emails · 7 documents · 30 Sep" },
      { name: "Admin", meta: "30 emails · 22 documents · 12 Oct" }
    ],
    foldersNote: "In this demo, only the “Delaunay warehouse” folder is detailed. In the app, every folder has its own timeline, people, key facts and versions.",
    ask: {
      cases: [
        {
          q: "What payment terms did we give Delaunay?",
          a: "45 days end of month. Claire Morel agreed by email on 12 March 2026[[1]], and the framework contract signed on 2 April repeats it in clause 5.2[[2]].",
          sources: [
            { type: "mail", title: "Re: Payment terms", meta: "Claire Morel · 12 March 2026", excerpt: "Fine with 45 days end of month from the next order, as we discussed on the phone." },
            { type: "doc", title: "Delaunay framework contract.pdf", meta: "Page 3 · clause 5.2", excerpt: "Invoices are payable forty-five (45) days end of month from their date of issue." }
          ]
        },
        {
          q: "What's the last day to cancel the premises insurance?",
          a: "30 November 2026. The policy ends on 31 January 2027[[1]] with two months' notice[[2]]. The broker confirmed these dates in September[[3]].",
          sources: [
            { type: "doc", title: "Insurance certificate 2026.pdf", meta: "Page 1", excerpt: "Period of cover: 1 February 2026 to 31 January 2027." },
            { type: "doc", title: "General terms.pdf", meta: "Page 11 · clause 18", excerpt: "Cancellation at renewal requires two months' notice." },
            { type: "mail", title: "Your business policy", meta: "Vasseur brokers · 9 September 2026", excerpt: "I confirm renewal on 31/01 and two months' notice." }
          ]
        },
        {
          q: "How much did we invoice Bertin workshop in 2025?",
          a: "€18,420 excl. VAT over four invoices: €3,200 in February[[1]], €6,850 in May[[2]], €4,120 in September[[3]] and €4,250 in December[[4]].",
          sources: [
            { type: "doc", title: "Invoice 2025-012.pdf", meta: "14 February 2025", excerpt: "Total excl. VAT: €3,200.00" },
            { type: "doc", title: "Invoice 2025-047.pdf", meta: "22 May 2025", excerpt: "Total excl. VAT: €6,850.00" },
            { type: "doc", title: "Invoice 2025-089.pdf", meta: "18 September 2025", excerpt: "Total excl. VAT: €4,120.00" },
            { type: "doc", title: "Invoice 2025-118.pdf", meta: "11 December 2025", excerpt: "Total excl. VAT: €4,250.00" }
          ]
        },
        {
          q: "Who approved the latest warehouse plan?",
          a: "Julien Faure approved version 3 on 8 October 2026[[1]]. It replaces version 2, which moved the loading bay[[2]].",
          sources: [
            { type: "mail", title: "Warehouse plan v3 — fine by me", meta: "Julien Faure · 8 October 2026", excerpt: "I approve v3, we can start inviting contractors." },
            { type: "doc", title: "Warehouse plan v2.pdf", meta: "Revision note", excerpt: "Loading bay moved to the north side." }
          ]
        },
        {
          absent: true,
          q: "What is Julien Faure's company registration number?",
          a: "I couldn't find this number in any of your emails or documents. I'd rather give you nothing than a made-up number.",
          searched: "3,412 emails · 865 documents · including the “Delaunay warehouse” folder",
          sources: []
        }
      ]
    },

    sort: {
      mails: [
        { from: "Julien Faure", subject: "Joinery quote — corrected version", snippet: "Here is the updated quote with the 5% discount…", folder: "Delaunay warehouse / Quotes", tag: "Quote" },
        { from: "Lambert Accounting", subject: "October 2026 invoice", snippet: "Please find attached our invoice no. 2026-311…", folder: "Suppliers / Lambert / 2026 / 10", tag: "Invoice" },
        { from: "Claire Morel", subject: "Site meeting on Thursday", snippet: "Could you confirm you'll be there Thursday at 9am…", folder: "Delaunay warehouse / Meetings", tag: "Meeting" },
        { from: "Vasseur brokers", subject: "Amendment to your policy", snippet: "Following our call, here is the amendment to sign…", folder: "Admin / Insurance", tag: "To sign" },
        { from: "Newsletter", subject: "This month's news", snippet: "Discover our seasonal offers…", folder: "Reading / Later", tag: "Info" }
      ],
      routine: {
        title: "Suggested routine",
        text: "Every month you file Lambert Accounting's invoices in the same place. Do it automatically?",
        rule: "When an invoice arrives from Lambert Accounting → file in Suppliers / Lambert / year / month",
        acceptedMsg: "Routine on. You'll find it under Routines, with its log.",
        refusedMsg: "Routine declined. It won't be suggested again."
      }
    },

    dossier: {
      name: "Delaunay warehouse",
      sub: "Warehouse renovation · opened 4 February 2026",
      tabs: { timeline: "Timeline", actors: "People", facts: "Key facts", versions: "Versions" },
      timeline: [
        { date: "4 Feb 2026", text: "First request from Claire Morel: renovating 800 m².", src: { type: "mail", title: "Warehouse project", meta: "Claire Morel · 4 February 2026", excerpt: "We'd like to renovate the warehouse on rue des Tanneurs, about 800 m²." } },
        { date: "12 Mar 2026", text: "Payment terms agreed: 45 days end of month.", src: { type: "mail", title: "Re: Payment terms", meta: "Claire Morel · 12 March 2026", excerpt: "Fine with 45 days end of month." } },
        { date: "2 Apr 2026", text: "Framework contract signed.", src: { type: "doc", title: "Delaunay framework contract.pdf", meta: "Page 9 · signatures", excerpt: "Signed in Lyon on 2 April 2026, in two copies." } },
        { date: "8 Oct 2026", text: "Plan v3 approved by Julien Faure.", src: { type: "mail", title: "Warehouse plan v3 — fine by me", meta: "Julien Faure · 8 October 2026", excerpt: "I approve v3." } },
        { date: "23 Oct 2026", text: "Site meeting scheduled at 9am.", src: { type: "mail", title: "Site meeting on Thursday", meta: "Claire Morel · 16 October 2026", excerpt: "Could you confirm you'll be there Thursday at 9am?" } }
      ],
      actors: [
        { name: "Claire Morel", role: "Client · Delaunay managing director", count: "41 emails" },
        { name: "Julien Faure", role: "Architect", count: "27 emails · 6 plans" },
        { name: "Lambert Accounting", role: "Accountants", count: "9 emails" },
        { name: "Vasseur brokers", role: "Insurance broker", count: "4 emails" }
      ],
      facts: [
        { label: "Floor area", value: "800 m²", src: { type: "mail", title: "Warehouse project", meta: "Claire Morel · 4 February 2026", excerpt: "about 800 m²" } },
        { label: "Approved budget", value: "€212,000 excl. VAT", src: { type: "doc", title: "Delaunay framework contract.pdf", meta: "Page 2 · clause 3", excerpt: "The total amount is set at €212,000 excl. VAT." } },
        { label: "Payment", value: "45 days end of month", src: { type: "doc", title: "Delaunay framework contract.pdf", meta: "Page 3 · clause 5.2", excerpt: "payable forty-five (45) days end of month" } },
        { label: "Planned completion", value: "15 March 2027", src: { type: "doc", title: "Works schedule v2.xlsx", meta: "Summary tab", excerpt: "Handover: 15/03/2027" } }
      ],
      versions: [
        { v: "v3", date: "6 Oct 2026", note: "Approved version. Extra office upstairs.", current: true },
        { v: "v2", date: "2 Sep 2026", note: "Loading bay moved to the north side." },
        { v: "v1", date: "18 Jun 2026", note: "First sketch." }
      ]
    },

    summary: {
      choose: "Document to summarise",
      docs: [
        {
          title: "Delaunay framework contract.pdf",
          meta: "14 pages · added 2 April 2026",
          points: [
            { text: "Total of €212,000 excl. VAT, reviewable once a year.", ref: "p. 2, cl. 3" },
            { text: "Payment at 45 days end of month; late fees at the statutory rate plus a margin.", ref: "p. 3, cl. 5" },
            { text: "Handover set for 15 March 2027.", ref: "p. 5, cl. 8" },
            { text: "Termination possible with three months' notice.", ref: "p. 7, cl. 12" },
            { text: "Ten-year liability insurance certificate due before work starts.", ref: "p. 8, cl. 14" }
          ],
          tasks: [
            { title: "Send the liability insurance certificate to Claire Morel", due: "before 2 Nov 2026" },
            { title: "Prepare the annual price review", due: "1 April 2027" }
          ]
        },
        {
          title: "“Warehouse plan” thread (23 messages)",
          meta: "18 June to 8 October 2026 · 4 people",
          points: [
            { text: "Three versions of the plan; v3 is approved.", ref: "email of 8 Oct" },
            { text: "The loading bay moves to the north side for truck access.", ref: "email of 2 Sep" },
            { text: "Claire Morel asks for an extra office upstairs.", ref: "email of 21 Sep" },
            { text: "Still open: the height of the sectional doors.", ref: "email of 7 Oct" },
            { text: "Next step: inviting contractors to tender.", ref: "email of 8 Oct" }
          ],
          tasks: [
            { title: "Settle the door height with Julien Faure", due: "before the 23 Oct meeting" },
            { title: "Invite contractors to tender", due: "end of October 2026" }
          ]
        }
      ]
    },

    deadlines: {
      summary: "{n} deadlines spotted this month",
      items: [
        { date: "23 Oct", title: "Site meeting, 9am", kind: "Meeting", src: { type: "mail", title: "Site meeting on Thursday", meta: "Claire Morel · 16 October 2026", excerpt: "Could you confirm you'll be there Thursday at 9am?" } },
        { date: "31 Oct", title: "Pay Lambert invoice 2026-311", kind: "Payment", urgent: true, src: { type: "doc", title: "Invoice 2026-311.pdf", meta: "Lambert Accounting", excerpt: "Payment due by: 31/10/2026" } },
        { date: "2 Nov", title: "Send the liability insurance certificate", kind: "Document due", src: { type: "doc", title: "Delaunay framework contract.pdf", meta: "Page 8 · clause 14", excerpt: "The certificate is given to the client before any work starts." } },
        { date: "30 Nov", title: "Last day to cancel the premises insurance", kind: "Notice", src: { type: "doc", title: "General terms.pdf", meta: "Page 11 · clause 18", excerpt: "two months' notice" } },
        { date: "30 Nov", title: "Collect Delaunay invoice 2026-041", kind: "Receivable", src: { type: "doc", title: "Invoice 2026-041.pdf", meta: "Issued 14 October 2026", excerpt: "Due: 30/11/2026" } }
      ]
    }
  },

  plugins: {
    title: "Plug-ins",
    eyebrow: "Plug-ins",
    h1: "It reads what you open to it, nothing more",
    lead: "Connect your mailboxes and file spaces. You choose which folders are read; {name} keeps them indexed and touches nothing else.",
    statusLabel: "Status",
    groups: { mail: "Email", files: "Files", soon: "In the works" },
    items: [
      { group: "mail", name: "Outlook", desc: "Emails and attachments, folders you choose.", status: "available" },
      { group: "mail", name: "Gmail", desc: "Emails and attachments, labels you choose.", status: "available" },
      { group: "files", name: "Google Drive", desc: "Documents, PDFs, spreadsheets, shared folders.", status: "available" },
      { group: "files", name: "Dropbox", desc: "Documents and team folders.", status: "available" },
      { group: "soon", name: "Calendar", desc: "Meetings and availability, to link meetings to cases.", status: "soon" },
      { group: "soon", name: "Audio recordings", desc: "Meeting minutes from an audio file.", status: "soon" },
      { group: "soon", name: "Your business tools", desc: "In-house software, document base, case management: custom connector.", status: "onRequest" }
    ],
    how: {
      title: "How connecting works",
      items: [
        { title: "You grant access", text: "From your account, read-only. You can revoke it at any time." },
        { title: "You set the scope", text: "Mailboxes, folders, labels. Everything else is neither read nor copied." },
        { title: "Indexing follows what's new", text: "Each new email or file is picked up with no action on your part." }
      ]
    },
    platform: {
      title: "Where to use it",
      web: "Web browser, on computer, tablet and phone.",
      pwa: "Install on your phone's home screen, without going through an app store."
    },
    request: {
      title: "Missing a plug-in?",
      text: "Tell us which tool you use. We build connectors in order of demand.",
      tool: "Tool to connect",
      toolPh: "Name of the tool or software",
      email: "Your email",
      submit: "Send request",
      done: "Request saved. Thanks, we'll get back to you."
    }
  },

  routines: {
    title: "Routines",
    eyebrow: "Routines",
    h1: "Your rules, applied without a second thought",
    lead: "A routine is a sentence: when this happens, if this condition is met, then do that. With your approval each time, or fully on its own.",
    anatomy: {
      title: "What a routine is made of",
      items: [
        { k: "Trigger", v: "An email arrives, a document is added, a time of day." },
        { k: "Condition", v: "The sender, a word in the subject, the attachment type." },
        { k: "Action", v: "File, create a task, summarise, draft a reply." },
        { k: "Approval", v: "You approve each action, or let it run." },
        { k: "Log", v: "Everything done, when and why, viewable and reversible." }
      ]
    },
    editor: {
      title: "Build a routine",
      sub: "Demo editor. Change the fields, then run a test on the sample mail.",
      when: "When",
      if: "if",
      contains: "contains",
      then: "then",
      into: "into",
      validation: "Ask for my approval before acting",
      triggers: { mail: "I receive an email", doc: "a document is added" },
      fields: { from: "the sender", subject: "the subject", attachment: "the attachment" },
      actions: { file: "file it", task: "create a task", summary: "summarise it" },
      defaultValue: "offer",
      defaultFolder: "Offers/{contact}/{YYYY}/{MM}",
      valuePh: "e.g. Lambert",
      folderPh: "e.g. Offers/{contact}/{YYYY}/{MM}",
      tokens: "Available tags: {YYYY} year, {MM} month, {contact} sender",
      preview: "Your routine",
      test: "Test on sample mail",
      logTitle: "Test log",
      noMatch: "No sample email matches. Try “offer”, “invoice” or “Lambert”.",
      matched: "{n} email(s) matched",
      waiting: "Waiting for your approval",
      doneAuto: "Done automatically",
      approve: "Approve",
      approved: "Approved",
      sample: [
        { from: "Bertin workshop", subject: "Price offer — shelving", date: "2026-10-03", attachment: "offer-shelving.pdf" },
        { from: "Lambert Accounting", subject: "September invoice", date: "2026-09-30", attachment: "invoice-2026-287.pdf" },
        { from: "Bertin workshop", subject: "New offer — mezzanine", date: "2026-10-14", attachment: "offer-mezzanine.pdf" },
        { from: "Lambert Accounting", subject: "October invoice", date: "2026-10-15", attachment: "invoice-2026-311.pdf" },
        { from: "Claire Morel", subject: "Site meeting on Thursday", date: "2026-10-16", attachment: "" }
      ],
      taskPrefix: "Task: handle",
      summaryPrefix: "Summary added for"
    },
    proposals: {
      title: "Routines suggested by {name}",
      sub: "It notices your habits and suggests rules. Nothing switches on without your consent.",
      items: [
        { text: "Every offer from Bertin workshop → file in Offers / Bertin / year / month.", why: "You've done it by hand 6 times since June." },
        { text: "Every supplier invoice → create a payment task on its due date.", why: "12 invoices received this quarter." },
        { text: "Every thread over 10 messages → offer me a summary.", why: "4 long threads this month." }
      ]
    },
    soon: {
      title: "Coming soon",
      items: [
        "Scheduled routines: a summary of unread email every evening at 6pm.",
        "A space to write your rules in full and share them with your team."
      ]
    }
  },

  fields: {
    title: "Fields",
    eyebrow: "Fields",
    h1: "The same assistant, fed with your profession's references",
    lead: "The core stays the same: your email, your documents, your cases. Each version adds the external sources your field needs, cited with the same rigour.",
    tabsLabel: "Fields",
    tabs: { legal: "Legal", research: "Research", business: "Business" },
    adds: "What this version adds",
    who: "For",
    tryIt: "Sample question",
    yourDocs: "Your documents",
    externalBase: "External reference",
    legal: {
      who: "Lawyers, in-house counsel, notaries, litigation teams.",
      adds: ["Up-to-date statutes and codes", "Case law", "Your templates for deeds and clauses", "Timeline and exhibits for each case"],
      q: "In the Morel file, is the non-compete clause valid?",
      a: "The clause bans any competing activity for 24 months in the Auvergne-Rhône-Alpes region[[1]], so it is limited in time and place. However, I find no financial compensation, either in the contract or in its two amendments[[2]]. French case law requires it for a non-compete clause to be valid[[3]]. Worth checking.",
      sources: [
        { type: "doc", title: "Morel employment contract.pdf", meta: "Page 6 · clause 9", excerpt: "For 24 months, the employee shall not engage in any competing activity in the Auvergne-Rhône-Alpes region." },
        { type: "doc", title: "Amendments 1 and 2.pdf", meta: "Search for “compensation”, “indemnity”", excerpt: "No matches." },
        { type: "external", title: "Cass. soc., 10 July 2002, no. 00-45.135", meta: "French case law", excerpt: "Cumulative validity conditions: legitimate business interests, limits in time and place, the specifics of the job, and financial compensation." }
      ]
    },
    research: {
      who: "Researchers, PhD students, labs, consultancies.",
      adds: ["Open scientific paper databases", "Your bibliography and reading notes", "Exchanges with your supervisor", "Citations in the style you choose"],
      q: "Which papers in my bibliography use stratified sampling, like my chapter 3?",
      a: "Three papers in your bibliography do: Arnaud and Chen (2023)[[1]], Lindqvist (2021)[[2]] and Okafor et al. (2024)[[3]]. Your supervisor also pointed you to the third one in June[[4]]. None works on the same population as you.",
      note: "Made-up references, for the demo.",
      sources: [
        { type: "doc", title: "Arnaud & Chen 2023.pdf", meta: "Section 2.3 · Methods", excerpt: "A stratified random sample of 1,240 households was drawn…" },
        { type: "doc", title: "Lindqvist 2021.pdf", meta: "Page 7", excerpt: "Strata were defined by region and income quintile." },
        { type: "external", title: "Okafor et al., 2024", meta: "Open paper database · abstract", excerpt: "We use proportional stratified sampling across 14 districts." },
        { type: "mail", title: "Reading for chapter 3", meta: "Prof. Delmas · 12 June 2026", excerpt: "Look at Okafor, their sampling design is close to yours." }
      ]
    },
    business: {
      who: "Quality, purchasing, compliance, operations.",
      adds: ["The standards and frameworks you add (quality, information security…)", "Your procedures and internal documentation", "Supplier and client contracts", "Custom frameworks specific to your sector"],
      q: "Does our purchasing procedure cover the supplier evaluation required by ISO 9001?",
      a: "Partly. The standard requires criteria for evaluating, selecting and monitoring external providers[[1]]. Your procedure does define selection[[2]], but I find no criteria for monitoring performance. The last internal audit report already flagged this gap[[3]].",
      sources: [
        { type: "external", title: "ISO 9001:2015 · § 8.4.1", meta: "Standard · control of external providers", excerpt: "The organization shall determine and apply criteria for the evaluation, selection, monitoring of performance, and re-evaluation of external providers." },
        { type: "doc", title: "PRO-PUR-02 Purchasing procedure.docx", meta: "Version 4 · § 3", excerpt: "Supplier selection: at least three quotes, scoring grid…" },
        { type: "doc", title: "Internal audit 2026.pdf", meta: "Page 4 · finding 3", excerpt: "No formal monitoring of supplier performance." }
      ]
    },
    custom: {
      title: "Your field isn't listed?",
      text: "Vocabulary, rules, document templates, connectors, frameworks: each version is built to measure.",
      cta: "Talk to the team"
    }
  },

  data: {
    title: "Your data",
    eyebrow: "Your data",
    h1: "Your data belongs to you. Here's what we do with it.",
    lead: "Every commitment on this page comes with a way to check it.",
    draft: "Before publishing, every sentence on this page must match a verified technical fact. Items in brackets are to be filled in; any claim that can't be proven is removed.",
    howCheck: "How to check",
    commitments: [
      { title: "Hosted in Europe", text: "Your data is hosted by {host}, in {hostCountry}.", check: "A published, up-to-date list of subprocessors and their countries. Certifications: {certs}." },
      { title: "AI hosted in Europe", text: "The AI models ({models}) run in {modelsCountry}. No data is sent to an AI service outside Europe.", check: "Every model used and where it is hosted appears in the subprocessor register." },
      { title: "Never sold", text: "Your data is never sold, rented or transferred.", check: "Written into the terms of use." },
      { title: "Never read, never reused", text: "Nobody looks at your data. It isn't used to train or improve the product.", check: "Your account's audit log shows every access to your data." },
      { title: "One exception, your choice", text: "If you flag an answer to help us fix a problem, only the flagged item is sent to us. It is anonymised, used for that fix, then deleted.", check: "Flagging is an explicit action, never ticked by default. It shows in your audit log with its deletion date." },
      { title: "A scope you set", text: "You choose which mailboxes and folders are read. Remove them at any time and their index is erased.", check: "The list of connected sources is visible in your settings." },
      { title: "Separated data", text: "Each customer's data is strictly isolated from everyone else's.", check: "Architecture description available on request." },
      { title: "Traceable answers", text: "Every answer cites its sources. No source, no answer. The assistant suggests, you approve.", check: "Open any cited source: you land on the original passage." }
    ],
    rgpd: {
      title: "Your rights",
      items: [
        { k: "Access", v: "Export all your data at any time." },
        { k: "Deletion", v: "Delete your account: your data and its indexes are erased." },
        { k: "Retention", v: "Retention period: {retention}." },
        { k: "Register", v: "Processing register and subprocessor list available." },
        { k: "Contact", v: "Data protection officer: {dpo}." }
      ]
    },
    stack: {
      title: "Where your data goes",
      steps: ["Your mailboxes and files", "Indexed at {host} ({hostCountry})", "AI models in {modelsCountry}", "Sourced answer, on your screen"],
      note: "No step leaves the European Union."
    }
  },

  start: {
    title: "Get started",
    eyebrow: "See it live · Get started",
    h1: "Choose how to start",
    lead: "A demo with us, access approved by the team, or instant sign-up. Everything is free during the test phase.",
    tabsLabel: "Paths",
    tabs: { demo: "See it live", request: "Request access", signup: "Sign up now", team: "Talk to the team" },
    demo: {
      title: "Book a 20-minute demo",
      text: "We show you the app on sample data, then answer your questions.",
      tz: "Times shown in your time zone: {tz}",
      pickDay: "Pick a day",
      pickSlot: "Pick a time",
      noSlot: "Pick a day first.",
      chosen: "Selected time",
      confirm: "Confirm booking",
      done: "Booked for {slot}. A confirmation with the video link goes to {email}."
    },
    request: {
      title: "Request access",
      text: "The team reviews your request and replies within {hours} hours. Best if you'd like help getting started.",
      submit: "Send request",
      done: "Request received. We'll reply to {email} within {hours} hours."
    },
    signup: {
      title: "Sign up now",
      text: "Create your account and connect your first sources in a few minutes.",
      submit: "Create my account",
      done: "Account ready. An activation link goes to {email}.",
      waitlist: "We're opening access in waves. You're on the waiting list; a link goes to {email} when it's your turn."
    },
    team: {
      title: "Talk to the team",
      text: "A custom need, a connector, a specific field, a question about your data: write to us. Reply within {hours} hours.",
      submit: "Send message",
      done: "Message received. We'll reply to {email} within {hours} hours."
    },
    form: {
      name: "Name",
      email: "Email",
      emailHint: "Work address preferred",
      org: "Organisation",
      optional: "optional",
      need: "What you need",
      needPh: "E.g. find the history of our client files, stop missing deadlines…",
      profile: "You are",
      profiles: ["A company or team", "Researcher or PhD student", "Individual", "Other"],
      message: "Message",
      consent: "I agree that {name} may use this information to answer my request, in line with the privacy policy.",
      consentErr: "Tick this box to send the form.",
      emailErr: "Enter a valid email address, for example name@company.com.",
      nameErr: "Enter your name.",
      needErr: "Describe what you need in one sentence.",
      fixErrors: "The form has errors. Fix the highlighted fields."
    }
  },

  pricing: {
    title: "Pricing",
    eyebrow: "Pricing",
    h1: "Free during the test phase",
    lead: "Every plan is free while the test phase lasts. We'll get in touch to hear about your experience.",
    banner: "Test phase: free access to every feature.",
    freeMonth: "First month free",
    priceNow: "€0",
    duringTest: "during the test phase",
    perMonth: "/ month",
    perUser: "/ user / month",
    later: "After the test phase",
    choose: "Get started",
    contact: "Talk to the team",
    plans: [
      { id: "personal", name: "Personal", for: "For running your personal life and paperwork.", price: "{pricePersonal}", unit: "perMonth", features: ["2 connected sources", "Unlimited sourced questions", "Tasks and deadlines", "Basic routines"] },
      { id: "student", name: "Student", for: "For students, PhD candidates and early-career researchers.", price: "{priceStudent}", unit: "perMonth", features: ["Everything in Personal", "Bibliography and reading notes", "Student proof required"] },
      { id: "business", name: "Business", for: "For teams that share cases.", price: "{priceBusiness}", unit: "perUser", featured: true, features: ["Unlimited sources", "Team-shared folders", "Advanced routines and log", "Audit log"] },
      { id: "custom", name: "Custom", for: "For a specific field, volume or connectors.", price: "On quote", unit: null, features: ["Field-specific version", "Custom connectors", "Your own vocabulary and templates", "Dedicated support"] }
    ],
    faq: {
      title: "Common questions",
      items: [
        { q: "What happens when the test phase ends?", a: "We'll tell you before anything changes. The first paid month stays free, whatever the plan." },
        { q: "Why would you contact me during the test?", a: "To learn what saves you time and what's missing. You can say no." },
        { q: "Can I leave with my data?", a: "Yes. Export your data at any time; deleting your account erases everything." }
      ]
    }
  },

  legal: {
    title: "Legal",
    h1: "Legal information",
    sections: [
      { id: "mentions", title: "Legal notice", body: "Publisher: {company}, {address}. Registration: {registration}. Publication director: {director}. Site hosting: {host}, {hostCountry}." },
      { id: "confidentialite", title: "Privacy policy", body: "Information entered in forms is used only to answer your request. It is hosted in Europe and kept for {retention}. It is never sold or passed to third parties. Contact: {dpo}." },
      { id: "rgpd", title: "GDPR", body: "You have the right to access, rectify, erase, restrict, port and object. Write to {dpo}. You may also contact your country's data protection authority." },
      { id: "cookies", title: "Cookies", body: "This site sets no advertising or audience-measurement cookies. Visit statistics are anonymous, cookie-free and hosted in the European Union. Only your language choice is remembered in your browser." }
    ]
  },

  themes: {
    title: "Palettes",
    h1: "Compare palettes",
    lead: "Internal page. The same screen, rendered with each palette defined in themes.css. Contrast is calculated automatically from the variables.",
    use: "Apply to site",
    active: "Active palette",
    pairs: {
      textBg: "Text / background",
      textSurface: "Text / surface",
      text2Bg: "Secondary text / background",
      primaryTextBg: "Headings and links / background",
      onPrimary: "Text / primary button",
      onAccent: "Text / action button",
      accentTextBg: "Action text / background"
    },
    pass: "Pass",
    fail: "Too low",
    rule: "Threshold: 4.5:1 for body text.",
    names: { a: "Trust blue", b: "Teal and clay", c: "Slate and coral", d: "Petrol and clay", e: "Soft autumn" },
    switcher: "Palette"
  },

  footer: {
    tagline: "The assistant that knows your email and documents, and proves it with every answer.",
    product: "Product",
    company: "{name}",
    legal: "Legal",
    links: { mentions: "Legal notice", privacy: "Privacy", rgpd: "GDPR", cookies: "Cookies", themes: "Palettes (internal)" },
    rights: "Site demo · phase 1",
    langLabel: "Site language"
  }
};

/* ------------------------------------------------------------------ */
/* APP DEMO (In action page) — all data is made up.                    */
/* Dates as YYYY-MM-DD; "today" sets the demo's current day.           */
/* ------------------------------------------------------------------ */
window.I18N.en.demo.app = {
  today: "2026-10-19",
  user: { initials: "CM", name: "Camille Martin" },
  rel: { today: "today", tomorrow: "tomorrow", yesterday: "yesterday", inDays: "in {n} days", overdue: "overdue by {n} day(s)", ago: "{n} days ago", now: "just now" },
  ui: {
    seeAll: "See all", open: "Open", closed: "Closed", upcoming: "Upcoming", late: "Overdue", done: "Done",
    markDone: "Mark as done", markUndone: "Reopen", more: "More actions", back: "Folders",
    noFolder: "No folder", allFolders: "All folders", allNatures: "All types", allDomains: "All fields",
    validate: "Approve", refuse: "Decline", validated: "Approved", refused: "Declined", undo: "Undo",
    demoOnly: "Demo: this action is disabled here. It works in the app.",
    cancel: "Cancel", add: "Add", create: "Create",
    note: "Personal note", noteInfo: "Only visible to you.", notePh: "An idea, a reminder, a list…",
    emptyReview: "Nothing to approve. The assistant and the overnight passes drop here what they suggest writing.",
    seeFolders: "See folders",
    sourceLink: "Source"
  },
  dashboard: { folders: "Recent folders", deadlines: "Deadlines", review: "To review" },
  assistant: {
    title: "My conversations", newConv: "New conversation", search: "Search by title…",
    intro: "Ask a question about your documents.", introInfo: "Answers cite their sources. No source, no answer.",
    placeholder: "Ask a question…", send: "Send", toSend: "to send", ctrl: "Ctrl", enter: "Enter",
    try: "Try for example:", you: "You", scope: "Searching",
    scopeAll: "all your email and documents",
    noMatch: "I found no passage answering this question in your email or documents. I'd rather not claim anything without a source.",
    noMatchSearched: "3,412 emails · 865 documents"
  },
  conversations: [
    { c: 0, folder: "delaunay", ago: 2 },
    { c: 1, folder: "assurances", ago: 3 },
    { c: 2, folder: null, ago: 3 },
    { c: 3, folder: "delaunay", ago: 4 },
    { c: 4, folder: null, ago: 5 }
  ],
  keywords: [
    ["payment", "terms", "delaunay", "pay", "days"],
    ["cancel", "insurance", "premises", "notice", "policy"],
    ["invoice", "invoiced", "bertin", "2025", "revenue"],
    ["approved", "plan", "warehouse", "version", "architect"],
    ["registration", "number", "faure", "company number"]
  ],
  folders: {
    title: "Folders", create: "Create folder", filter: { open: "Open", all: "Open and closed", closed: "Closed" }, search: "Title or reference",
    newName: "Folder name", newRef: "Reference", created: "Folder created",
    detailNote: "In this demo, the full memory (timeline, people, facts, versions) is detailed for “Delaunay warehouse”. Here is what {name} has already linked to this folder.",
    linkedDeadlines: "Linked deadlines", linkedDocs: "Documents", factUpdated: "updated"
  },
  domains: { business: "Business", legal: "Legal", research: "Research", personal: "Personal" },
  folderList: [
    { id: "delaunay", domain: "business", name: "Delaunay warehouse renovation", ref: "D-2611-07", contact: "Claire Morel", activity: "2026-10-18", due: "2026-10-23", docs: ["Delaunay_framework_contract.pdf", "Warehouse_plan_v3.pdf", "Works_schedule_v2.xlsx", "Invoice_2026-041.pdf", "Joinery_quote_v2.pdf", "Meeting_minutes_02-10.docx"], extra: 17 },
    { id: "lyonsud", domain: "legal", name: "Employment dispute Morel v. Arvel", ref: "RG 26/01842", contact: "Sophie Kahn, counsel", activity: "2026-10-16", due: "2026-10-14", docs: ["Morel_employment_contract.pdf", "Amendments_1_and_2.pdf", "Opposing_submissions.pdf", "Exhibit_list.docx", "Non-compete_case_law.pdf"], extra: 11 },
    { id: "these", domain: "research", name: "Thesis — chapter 3: sampling", ref: "THS-C3", contact: "Prof. Delmas", activity: "2026-10-15", docs: ["Arnaud_Chen_2023.pdf", "Lindqvist_2021.pdf", "Okafor_2024.pdf", "Reading_notes.md", "Chapter3_outline.docx", "Delmas_feedback.pdf"], extra: 13 },
    { id: "offres", domain: "business", name: "ISO 9001 certification — 2026 internal audit", ref: "QUA-ISO-26", contact: "Quality team", activity: "2026-10-13", due: "2026-11-20", docs: ["PRO-PUR-02_Purchasing_procedure.docx", "Internal_audit_2026.pdf", "Quality_action_plan.xlsx", "Quality_manual_v5.pdf"], extra: 8 },
    { id: "bertin", domain: "business", name: "Supplier Bertin workshop — fit-out", ref: "SUP-4381", contact: "Julien Faure", activity: "2026-10-15", due: "2027-02-17", docs: ["Offer_shelving.pdf", "Offer_mezzanine.pdf", "Supplier_warranty.pdf", "Supplier_sheet.pdf"], extra: 5 },
    { id: "etude", domain: "legal", name: "Commercial lease — rue des Tanneurs premises", ref: "LEASE-TAN-12", contact: "Les Tanneurs property co.", activity: "2026-10-09", due: "2026-10-27", docs: ["Commercial_lease_2018.pdf", "Renewal_proposal.pdf", "Rent_index_2026.xlsx"], extra: 3 },
    { id: "villeurb", domain: "research", name: "Paper “Stratified surveys” — journal submission", ref: "ART-2026-04", contact: "Co-authors", activity: "2026-10-06", due: "2026-11-06", docs: ["Manuscript_v4.docx", "Figures.zip", "Cover_letter.docx", "Reviewer_comments.pdf"], extra: 2 },
    { id: "assurances", domain: "personal", name: "Personal — insurance and contracts", ref: "PERSO-INS", activity: "2026-09-24", docs: ["Insurance_certificate_2026.pdf", "General_terms.pdf", "Amendment_2026.pdf", "Health_cover_table.pdf"] },
    { id: "tilleuls", domain: "personal", name: "Personal — buying a flat in Lyon 7th", ref: "PERSO-FLAT", contact: "Rivière, notary", activity: "2026-09-19", due: "2026-12-04", docs: ["Sale_agreement.pdf", "Mortgage_offer.pdf", "Energy_certificate.pdf"], extra: 6 }
  ],
  documents: {
    title: "Documents", upload: "Upload documents", filter: { active: "Active documents", archived: "Archived documents" },
    general: "General documents", byFolder: "Folder documents", docsCount: "{n} documents", andMore: "+ {n} more",
    cols: { title: "Title", category: "Category", version: "Current version", source: "Source", indexing: "Indexing", added: "Added", actions: "Actions" },
    open: "Open", summarize: "Summarise", indexed: "Indexed", indexing: "In progress", summaryOf: "Summary of", close: "Close summary",
    prev: "Previous", next: "Next"
  },
  docList: [
    { title: "Delaunay framework contract", file: "Delaunay_framework_contract.pdf", cat: "Contract", v: "v2", source: "Email", indexed: true, date: "2026-04-02", summary: 0, src: { type: "doc", title: "Delaunay_framework_contract.pdf", meta: "Page 3 · clause 5.2", excerpt: "Invoices are payable forty-five (45) days end of month from their date of issue." } },
    { title: "Warehouse plan v3", file: "Warehouse_plan_v3.pdf", cat: "Plan", v: "v3", source: "Email", indexed: true, date: "2026-10-06", summary: 1, src: { type: "doc", title: "Warehouse_plan_v3.pdf", meta: "Title block", excerpt: "Revision C — extra office upstairs, loading bay on the north side." } },
    { title: "General terms", file: "General_terms.pdf", cat: "Contract", v: "v1", source: "Upload", indexed: true, date: "2026-09-09", src: { type: "doc", title: "General_terms.pdf", meta: "Page 11 · clause 18", excerpt: "Cancellation at renewal requires two months' notice." } },
    { title: "Invoice 2026-311", file: "Invoice_2026-311.pdf", cat: "Invoice", v: "v1", source: "Email", indexed: false, date: "2026-10-19", src: { type: "doc", title: "Invoice_2026-311.pdf", meta: "Lambert Accounting", excerpt: "Payment due by: 30/10/2026" } },
    { title: "Arnaud & Chen 2023", file: "Arnaud_Chen_2023.pdf", cat: "Paper", v: "v1", source: "Upload", indexed: true, date: "2026-09-13", src: { type: "doc", title: "Arnaud_Chen_2023.pdf", meta: "Section 2.3", excerpt: "A stratified random sample of 1,240 households was drawn…" } },
    { title: "Purchasing procedure", file: "PRO-PUR-02_Purchasing_procedure.docx", cat: "Procedure", v: "v4", source: "Shared drive", indexed: true, date: "2026-09-02", src: { type: "doc", title: "PRO-PUR-02_Purchasing_procedure.docx", meta: "§ 3", excerpt: "Supplier selection: at least three quotes, scoring grid…" } }
  ],
  review: {
    title: "To review", count: "{n} suggestion(s)",
    natures: { filing: "Filing", deadline: "Deadline", task: "Task", fact: "Folder memory", routine: "Routine" },
    acceptedDeadline: "Deadline added to Deadlines.", acceptedFact: "Folder memory updated.", acceptedFiling: "Email filed.", acceptedTask: "Task created.", acceptedRoutine: "Routine on."
  },
  proposals: [
    { nature: "filing", folder: "delaunay", text: "File “Joinery quote — corrected version” in Delaunay warehouse / Quotes", why: "Email from Julien Faure · the quote cites reference D-2611-07.", mail: 0, target: "Delaunay warehouse / Quotes", src: { type: "mail", title: "Joinery quote — corrected version", meta: "Julien Faure · 19 October 2026", excerpt: "Ref. D-2611-07 — here is the updated quote with the 5% discount on frames." } },
    { nature: "filing", folder: "bertin", text: "File “New offer — mezzanine” in Offers / Bertin / 2026 / 10", why: "You've filed Bertin workshop offers this way since June.", mail: 4, target: "Offers / Bertin / 2026 / 10", src: { type: "mail", title: "New offer — mezzanine", meta: "Bertin workshop · 14 October 2026", excerpt: "Please find attached our offer for the steel mezzanine." } },
    { nature: "deadline", folder: "delaunay", text: "Add the deadline “Send the liability insurance certificate” on 2 November", why: "Framework contract, clause 14: due before work starts.", add: { date: "2026-11-02", title: "Send the liability insurance certificate to Claire Morel", folder: "delaunay" }, src: { type: "doc", title: "Delaunay_framework_contract.pdf", meta: "Page 8 · clause 14", excerpt: "The certificate is given to the client before any work starts." } },
    { nature: "task", folder: "bertin", text: "Create the task “Compare the mezzanine and shelving offers”", why: "Two offers from the same supplier, eleven days apart.", src: { type: "mail", title: "New offer — mezzanine", meta: "Bertin workshop · 14 October 2026", excerpt: "This offer can be combined with the one from 3 October." } },
    { nature: "fact", folder: "delaunay", text: "Update “Planned completion”: 29 March 2027 (instead of 15 March)", why: "Claire Morel reports a two-week delay.", factIndex: 3, factValue: "29 March 2027", src: { type: "mail", title: "Schedule — delay", meta: "Claire Morel · 17 October 2026", excerpt: "Handover moves back two weeks, to 29 March." } },
    { nature: "routine", folder: "bertin", text: "Every offer from Bertin workshop → file in Offers / Bertin / year / month", why: "You've done it by hand 6 times since June.", src: { type: "mail", title: "Price offer — shelving", meta: "Bertin workshop · 3 October 2026", excerpt: "Our price offer for the shelving." } }
  ],
  deadlines: {
    title: "Deadlines", add: "Add deadline",
    filter: { active: "Active entries", upcoming: "Upcoming", late: "Overdue", done: "Done" },
    newTitle: "Title", newDate: "Date", newFolder: "Folder", empty: "No deadlines in this view.", added: "Deadline added"
  },
  deadlineList: [
    { date: "2026-10-14", title: "File submissions with the employment tribunal", folder: "lyonsud", src: { type: "mail", title: "Procedural timetable", meta: "Court registry · 2 October 2026", excerpt: "The respondent's submissions are due by 14 October 2026 at the latest." } },
    { date: "2026-10-16", title: "Send the exhibit list to Sophie Kahn", folder: "lyonsud", src: { type: "mail", title: "Exhibits to disclose", meta: "Sophie Kahn · 9 October 2026", excerpt: "Please send me the full exhibit list before Friday." } },
    { date: "2026-10-22", title: "Send the revised chapter 3 to Prof. Delmas", folder: "these", src: { type: "mail", title: "Reading for chapter 3", meta: "Prof. Delmas · 9 October 2026", excerpt: "Send me the revised version before our meeting on the 22nd." } },
    { date: "2026-10-23", title: "Site meeting, 9am", folder: "delaunay", src: { type: "mail", title: "Site meeting on Friday", meta: "Claire Morel · 16 October 2026", excerpt: "Could you confirm you'll be there Friday 23rd at 9am?" } },
    { date: "2026-10-27", title: "Reply to the lease renewal proposal", folder: "etude", src: { type: "doc", title: "Renewal_proposal.pdf", meta: "Page 1", excerpt: "Please let us have your answer before 27 October 2026." } },
    { date: "2026-10-30", title: "Pay Lambert invoice 2026-311", folder: "delaunay", src: { type: "doc", title: "Invoice_2026-311.pdf", meta: "Lambert Accounting", excerpt: "Payment due by: 30/10/2026" } },
    { date: "2026-11-06", title: "Submit the paper to the journal", folder: "villeurb", src: { type: "mail", title: "Special issue — call for papers", meta: "Editorial board · 15 September 2026", excerpt: "Manuscripts are accepted until 6 November 2026." } },
    { date: "2026-11-20", title: "Close the ISO 9001 internal audit findings", folder: "offres", src: { type: "doc", title: "Internal_audit_2026.pdf", meta: "Page 4 · finding 3", excerpt: "Corrective action expected before 20 November 2026." } },
    { date: "2026-11-30", title: "Last day to cancel the premises insurance", folder: "assurances", src: { type: "doc", title: "General_terms.pdf", meta: "Page 11 · clause 18", excerpt: "two months' notice" } },
    { date: "2026-12-04", title: "Sign the sale deed at the notary's", folder: "tilleuls", src: { type: "mail", title: "Signing date", meta: "Rivière, notary · 25 September 2026", excerpt: "Signing of the deed is set for 4 December at 10am." } }
  ],
  mails: {
    title: "Mail", addBox: "Add a mailbox", manage: "Manage mail", search: "Subject, sender or text",
    filter: { all: "All threads", toFile: "To file", filed: "Filed" }, period: { all: "Any time", week: "Last 7 days" },
    auto: "Automated", proposal: "Suggestion: file in", filedIn: "Filed in", empty: "No email matches.", summary: "In short"
  },
  mailList: [
    { subject: "Joinery quote — corrected version", from: "Julien Faure", snippet: "Hi Camille, here is the updated quote with the 5% discount on frames, ref. D-2611-07. Lead times are unchanged.", date: "2026-10-19", proposal: 0, brief: "Corrected quote, 5% discount, same lead times." },
    { subject: "October 2026 invoice", from: "Lambert Accounting", snippet: "Please find attached our invoice no. 2026-311, payable by 30 October 2026. This message was sent automatically.", date: "2026-10-19", auto: true, filed: "delaunay", brief: "Invoice due by 30 October (deadline already created)." },
    { subject: "Schedule — delay", from: "Claire Morel", snippet: "Hello, the structural contractor reports a two-week delay. Handover moves to 29 March.", date: "2026-10-17", filed: "delaunay", brief: "Handover moved to 29 March 2027 (folder update suggested)." },
    { subject: "Your monthly statement is ready", from: "Horizon Health", snippet: "Your October reimbursement statement is available in your member area. This message was sent automatically.", date: "2026-10-18", auto: true, brief: "Notification, no action." },
    { subject: "New offer — mezzanine", from: "Bertin workshop", snippet: "Hello, please find attached our offer for the steel mezzanine. It can be combined with the one from 3 October.", date: "2026-10-14", proposal: 1, brief: "New offer, combinable with the shelving offer." },
    { subject: "Amendment to your policy", from: "Vasseur brokers", snippet: "Following our call, here is the amendment to sign for the extended premises cover.", date: "2026-10-12", filed: "assurances", brief: "Amendment to sign." },
    { subject: "Reading for chapter 3", from: "Prof. Delmas", snippet: "Look at Okafor et al., their sampling design is close to yours. Shall we talk Thursday?", date: "2026-10-09", filed: "these", brief: "Suggested reading: Okafor et al. 2024." },
    { subject: "This month's news", from: "Materials Plus", snippet: "Discover our seasonal offers on insulation and joinery. This message was sent automatically.", date: "2026-10-08", auto: true, brief: "Newsletter." }
  ]
};

/* Demo assistant: preset questions, steps, cited answer. */
window.I18N.en.demo.app.assistantUi = {
  stepsDone: "{n} steps in {t}", stepsRunning: "Searching…", absent: "Information not in your sources",
  pick: "Questions available in the demo", composePh: "Pick a question below", openDoc: "Open the cited passage",
  toggleSteps: "Show or hide the steps"
};
window.I18N.en.demo.app.viewer = {
  version: "Version", page: "Page {n} of {t}", found: "Passage found on page {n}", foundMail: "Passage found in the email",
  showFull: "Show the full quote", showLess: "Shorten the quote", download: "Download the original file",
  prev: "Previous page", next: "Next page", zoomIn: "Zoom in", zoomOut: "Zoom out", close: "Close",
  notShown: "Page {n}: content not reproduced in the demo.", from: "From", to: "To", date: "Date", subject: "Subject", mail: "Email"
};
window.I18N.en.demo.app.qa = [
  {
    q: "What payment terms did we give Delaunay?", folder: "delaunay", ago: 2,
    steps: [
      { t: "Analysing the question", d: "quick reasoning", s: 1.4 },
      { t: "Scope overview", d: "Delaunay warehouse folder", s: 2.1 },
      { t: "Listing sources", d: "email threads “Delaunay”: 7", s: 0.81 },
      { t: "Reading an email thread", d: "“Re: Payment terms”: 4 messages", s: 0.93 },
      { t: "Searching sources", d: "“Delaunay payment terms”: 8 excerpts", s: 6.3 },
      { t: "Evidence gathered", d: "8 excerpts and 2 documents", s: 1.1 },
      { t: "Writing the answer", d: "first word after 3.2 s", s: 9.8 }
    ],
    blocks: [
      { p: "Delaunay has 45 days end of month. Claire Morel agreed to it by email on 12 March 2026:" },
      { quote: "Fine with 45 days end of month from the next order, as we discussed on the phone.", s: 0 },
      { p: "The framework contract signed on 2 April 2026 repeats these terms in clause 5.2:" },
      { quote: "Invoices are payable forty-five (45) days end of month from their date of issue.", s: 1 },
      { p: "Applied to invoice 2026-041, issued on 14 October, payment is due by 30 November at the latest." }
    ],
    sources: [
      { type: "mail", title: "Re: Payment terms", from: "Claire Morel", to: "Camille Martin", date: "12 March 2026", before: ["Hi Camille,", "Thanks for your call this morning."], after: ["I'll let our accounts team know.", "Best regards,", "Claire Morel — Managing director, Delaunay"] },
      { type: "doc", title: "Delaunay framework contract", file: "Delaunay_framework_contract_signed.pdf", version: "v2", page: 3, pages: 14, heading: "Clause 5 — Payment terms", before: ["5.1 Prices exclude VAT. They may be reviewed once a year under clause 3."], after: ["5.3 Any late payment incurs interest at the statutory rate plus three points, without prior notice."] }
    ]
  },
  {
    q: "What's the last day to cancel the premises insurance?", folder: "assurances", ago: 3,
    steps: [
      { t: "Analysing the question", d: "quick reasoning", s: 1.2 },
      { t: "Scope overview", d: "all your email and documents", s: 2.6 },
      { t: "Listing sources", d: "documents “insurance”: 3", s: 0.64 },
      { t: "Searching sources", d: "“cancellation notice premises insurance”: 8 excerpts", s: 5.9 },
      { t: "Evidence gathered", d: "8 excerpts and 2 documents", s: 0.9 },
      { t: "Writing the answer", d: "first word after 2.7 s", s: 8.4 }
    ],
    blocks: [
      { p: "30 November 2026 at the latest. The policy ends on 31 January 2027:" },
      { quote: "Period of cover: 1 February 2026 to 31 January 2027.", s: 0 },
      { p: "The general terms require two months' notice:" },
      { quote: "Cancellation at renewal requires two months' notice, by registered letter or electronically.", s: 1 },
      { p: "This date is already in your deadlines, linked to the Insurance folder." }
    ],
    sources: [
      { type: "doc", title: "Insurance certificate 2026", file: "Insurance_certificate_2026.pdf", version: "v1", page: 1, pages: 2, heading: "Insurance certificate — Business multi-risk", before: ["Insured: Camille Martin, 12 rue des Tanneurs, 69001 Lyon.", "Policy no. MRP-448 213."], after: ["Cover: fire, water damage, theft, public liability."] },
      { type: "doc", title: "General terms", file: "General_terms_MRP.pdf", version: "v1", page: 11, pages: 36, heading: "Clause 18 — Term and cancellation", before: ["18.1 The policy runs for one year. It renews automatically at each anniversary."], after: ["18.3 The insurer may also cancel the policy in the same way, with the same notice."] }
    ]
  },
  {
    q: "Summarise the latest exchanges with Claire Morel", folder: "delaunay", ago: 3,
    steps: [
      { t: "Analysing the question", d: "deep reasoning", s: 2.0 },
      { t: "Scope overview", d: "Delaunay warehouse folder", s: 2.8 },
      { t: "Listing sources", d: "email threads “Claire Morel”: 6", s: 0.95 },
      { t: "Reading an email thread", d: "“Schedule — delay”: 1 message", s: 0.93 },
      { t: "Reading an email thread", d: "“Site meeting on Friday”: 2 messages", s: 0.026 },
      { t: "Reading an email thread", d: "“Warehouse plan — office”: 3 messages", s: 0.031 },
      { t: "Searching sources", d: "“Claire Morel recent requests”: 8 excerpts", s: 10.4 },
      { t: "Evidence gathered", d: "18 excerpts and 3 email threads", s: 1.3 },
      { t: "Writing the answer", d: "first word after 6.1 s", s: 14.2 }
    ],
    blocks: [
      { p: "Three points stand out from the latest exchanges with Claire Morel." },
      { p: "1. Handover moves back two weeks:" },
      { quote: "Handover moves back two weeks, to 29 March.", s: 0 },
      { p: "2. She is waiting for you to confirm the site meeting:" },
      { quote: "Could you confirm you'll be there Friday 23rd at 9am?", s: 1 },
      { p: "3. The extra office upstairs she asked for is included in plan v3:" },
      { quote: "We'd like to add an office upstairs, above the loading bay.", s: 2 }
    ].concat([{ p: "To do: reply about Friday's meeting. The schedule change is waiting for your approval in To review." }]),
    sources: [
      { type: "mail", title: "Schedule — delay", from: "Claire Morel", to: "Camille Martin", date: "17 October 2026", before: ["Hi Camille,", "The structural contractor reports a two-week delay on the slab."], after: ["The other trades are not affected.", "Claire"] },
      { type: "mail", title: "Site meeting on Friday", from: "Claire Morel", to: "Camille Martin, Julien Faure", date: "16 October 2026", before: ["Hello all,", "I suggest we meet on site before inviting contractors."], after: ["Please reply by Wednesday.", "Claire"] },
      { type: "mail", title: "Warehouse plan — office", from: "Claire Morel", to: "Julien Faure", date: "21 September 2026", before: ["Hi Julien,", "After talking it over with the logistics team:"], after: ["The space can come out of the storage area.", "Claire"] }
    ]
  },
  {
    q: "Who approved the latest warehouse plan?", folder: "delaunay", ago: 4,
    steps: [
      { t: "Analysing the question", d: "quick reasoning", s: 1.1 },
      { t: "Scope overview", d: "Delaunay warehouse folder", s: 1.9 },
      { t: "Listing sources", d: "versions of “Warehouse plan”: 3", s: 0.42 },
      { t: "Reading an email thread", d: "“Warehouse plan v3 — fine by me”: 1 message", s: 0.88 },
      { t: "Evidence gathered", d: "4 excerpts and 1 document", s: 0.7 },
      { t: "Writing the answer", d: "first word after 2.1 s", s: 6.3 }
    ],
    blocks: [
      { p: "Julien Faure, the architect, approved version 3 of the plan on 8 October 2026:" },
      { quote: "I approve v3, we can start inviting contractors.", s: 0 },
      { p: "This version adds an office upstairs and keeps the loading bay on the north side, as the plan's title block shows:" },
      { quote: "Revision C — extra office upstairs, loading bay on the north side.", s: 1 }
    ],
    sources: [
      { type: "mail", title: "Warehouse plan v3 — fine by me", from: "Julien Faure", to: "Camille Martin, Claire Morel", date: "8 October 2026", before: ["Hello,", "I've worked in Friday's comments."], after: ["I'll prepare the tender pack by the end of the month.", "Julien Faure — Architect"] },
      { type: "doc", title: "Warehouse plan v3", file: "Warehouse_plan_v3.pdf", version: "v3", page: 1, pages: 1, heading: "Title block — Delaunay warehouse, rue des Tanneurs", before: ["Revision A — 18/06/2026 — first sketch.", "Revision B — 02/09/2026 — loading bay moved."], after: ["Scale 1:100 — A1 sheet."] }
    ]
  },
  {
    q: "What is Julien Faure's company registration number?", folder: null, ago: 5, absent: true,
    steps: [
      { t: "Analysing the question", d: "quick reasoning", s: 0.9 },
      { t: "Searching sources", d: "“Julien Faure registration number”: 0 excerpts", s: 4.2 },
      { t: "Searching sources", d: "“Julien Faure company details”: 3 excerpts", s: 3.8 },
      { t: "Writing the answer", d: "first word after 1.9 s", s: 5.6 }
    ],
    blocks: [
      { p: "None of your emails or documents mention Julien Faure's company registration number. The sources give his name, role and address, never a registration, for example in his signature:" },
      { quote: "Julien Faure — Architect — 14 rue des Tanneurs, 69001 Lyon", s: 0 },
      { p: "I'd rather not suggest a number without a source. You can ask him, or check the official company register." }
    ],
    sources: [
      { type: "mail", title: "Warehouse plan v3 — fine by me", from: "Julien Faure", to: "Camille Martin, Claire Morel", date: "8 October 2026", before: ["I approve v3, we can start inviting contractors.", "Best,"], after: ["Tel. +33 4 00 00 00 00"] }
    ]
  }
];

/* Field-specific examples for the Assistant (legal, research, business). */
window.I18N.en.demo.app.qa.splice(4, 0,
  {
    q: "In the Morel dispute, is the non-compete clause valid?", folder: "lyonsud", ago: 1,
    steps: [
      { t: "Analysing the question", d: "deep reasoning", s: 2.4 },
      { t: "Scope overview", d: "Employment dispute Morel v. Arvel folder", s: 2.2 },
      { t: "Listing sources", d: "folder documents: 16", s: 0.71 },
      { t: "Searching sources", d: "“non-compete clause compensation”: 8 excerpts", s: 7.6 },
      { t: "Searching the legal database", d: "“non-compete clause validity”: 5 rulings", s: 4.9 },
      { t: "Evidence gathered", d: "13 excerpts, 2 documents and 1 ruling", s: 1.2 },
      { t: "Writing the answer", d: "first word after 4.4 s", s: 12.7 }
    ],
    blocks: [
      { p: "Probably not as it stands. The clause is limited in time and place:" },
      { quote: "For 24 months, the employee shall not engage in any competing activity in the Auvergne-Rhône-Alpes region.", s: 0 },
      { p: "However, I find no financial compensation, either in the contract or in its two amendments. French case law makes it a condition of validity:" },
      { quote: "A non-compete clause is lawful only if it is essential to protect the company's legitimate interests, limited in time and place, takes the specifics of the job into account, and requires the employer to pay the employee financial compensation.", s: 1 },
      { p: "Worth checking with Sophie Kahn before filing the submissions, overdue since 14 October." }
    ],
    sources: [
      { type: "doc", title: "Morel employment contract", file: "Morel_employment_contract.pdf", version: "v1", page: 6, pages: 9, heading: "Clause 9 — Non-compete", before: ["9.1 Given the sales director duties entrusted to the employee:"], after: ["9.2 The employer may waive this clause within fifteen days of the end of the contract."] },
      { type: "doc", title: "Cass. soc., 10 July 2002, no. 00-45.135", file: "Cass_soc_10-07-2002_00-45135.pdf", version: "legal database", page: 2, pages: 3, heading: "Grounds (unofficial translation)", before: ["Having regard to the fundamental principle of freedom to work and article L. 120-2 of the Labour Code;", "Whereas:"], after: ["By ruling as it did, the court of appeal breached the above principle and text."] }
    ]
  },
  {
    q: "Which papers in my bibliography use stratified sampling?", folder: "these", ago: 2,
    steps: [
      { t: "Analysing the question", d: "quick reasoning", s: 1.3 },
      { t: "Scope overview", d: "Thesis — chapter 3 folder", s: 1.8 },
      { t: "Listing sources", d: "bibliography papers: 19", s: 0.52 },
      { t: "Searching sources", d: "“stratified sampling”: 8 excerpts", s: 5.4 },
      { t: "Searching scientific databases", d: "“proportional stratified sampling districts”: 3 abstracts", s: 3.9 },
      { t: "Reading an email thread", d: "“Reading for chapter 3”: 2 messages", s: 0.61 },
      { t: "Evidence gathered", d: "11 excerpts, 3 papers and 1 email", s: 1.0 },
      { t: "Writing the answer", d: "first word after 3.0 s", s: 9.2 }
    ],
    blocks: [
      { p: "Three papers in your bibliography use stratified sampling. Arnaud and Chen (2023) draw a household sample:" },
      { quote: "A stratified random sample of 1,240 households was drawn from the regional register.", s: 0 },
      { p: "Lindqvist (2021) stratifies by region and income, and Okafor et al. (2024) use proportional stratification across 14 districts. Your supervisor pointed you to the last one:" },
      { quote: "Look at Okafor et al., their sampling design is close to yours.", s: 1 },
      { p: "None of the three works on the same population as your chapter 3. Made-up references, for the demo." }
    ],
    sources: [
      { type: "doc", title: "Arnaud & Chen 2023", file: "Arnaud_Chen_2023.pdf", version: "v1", page: 7, pages: 24, heading: "2.3 Sampling design", before: ["The survey covers twelve municipalities with contrasting income profiles."], after: ["Strata were defined by municipality size and median income."] },
      { type: "mail", title: "Reading for chapter 3", from: "Prof. Delmas", to: "Camille Martin", date: "9 October 2026", before: ["Hi Camille,", "I've read your outline, it's solid."], after: ["Shall we talk Thursday?", "M. Delmas"] }
    ]
  },
  {
    q: "Does our purchasing procedure meet ISO 9001 on supplier evaluation?", folder: "offres", ago: 3,
    steps: [
      { t: "Analysing the question", d: "deep reasoning", s: 2.1 },
      { t: "Scope overview", d: "ISO 9001 certification folder", s: 2.0 },
      { t: "Listing sources", d: "quality procedures: 12", s: 0.66 },
      { t: "Searching the standard", d: "“ISO 9001 § 8.4.1 external providers”: 2 excerpts", s: 3.1 },
      { t: "Searching sources", d: "“supplier evaluation performance monitoring”: 8 excerpts", s: 6.0 },
      { t: "Evidence gathered", d: "10 excerpts and 3 documents", s: 1.1 },
      { t: "Writing the answer", d: "first word after 3.6 s", s: 10.5 }
    ],
    blocks: [
      { p: "Only partly. The standard asks for criteria to select suppliers, but also to monitor them:" },
      { quote: "The organization shall determine and apply criteria for the evaluation, selection, monitoring of performance, and re-evaluation of external providers.", s: 0 },
      { p: "Your procedure covers selection, but nothing on performance monitoring. This year's internal audit already flagged the gap:" },
      { quote: "No formal monitoring of supplier performance.", s: 1 },
      { p: "Corrective action is due before 20 November; the deadline is in the folder." }
    ],
    sources: [
      { type: "doc", title: "ISO 9001:2015", file: "ISO_9001-2015_standard.pdf", version: "standard", page: 18, pages: 44, heading: "8.4.1 Control of externally provided processes, products and services — General", before: ["The organization shall ensure that externally provided processes, products and services conform to requirements."], after: ["The organization shall retain documented information of these activities and any necessary actions arising from the evaluations."] },
      { type: "doc", title: "Internal audit 2026", file: "Internal_audit_2026.pdf", version: "v2", page: 4, pages: 11, heading: "Finding 3 — Purchasing", before: ["Process audited: purchasing and subcontracting. Contact: purchasing manager."], after: ["Severity: minor. Corrective action expected before 20 November 2026."] }
    ]
  }
);

/* Fields: public databases connected live, and passive monitoring. */
(function (f) {
  f.legal.adds.unshift("Live connection and scanning of published statutes and case law, updated continuously");
  f.research.adds.unshift("Live connection and scanning of open paper databases: every new publication is checked against your folders");
  f.business.noLive = true;
  f.live = {
    status: "Connected live · last update today, 7:12am",
    title: "Passive monitoring",
    scan: "Live scan", scanned: "{n} new publications analysed today", matched: "{n} concern your folders",
    sub: "{name} matches every new publication against your folders. When one concerns a folder, it tells you, with the source and the reason.",
    concerns: "Concerns", why: "Why", add: "Add to folder", added: "Added to folder", ignore: "Dismiss", ignored: "Dismissed", news: "New",
    note: "Made-up examples, for the demo."
  };
  f.legal.watch = [
    { date: "16 Oct 2026", title: "Cass. soc., 14 October 2026 — non-compete clause without compensation", folder: "Employment dispute Morel v. Arvel", why: "Your folder challenges a 24-month clause with no financial compensation. This ruling confirms nullity in a similar case.", src: { type: "external", title: "Cass. soc., 14 October 2026 (made-up example)", meta: "Case law · published 16 October 2026", excerpt: "A non-compete clause without financial compensation is void; an employee who complied with it may claim damages." } },
    { date: "11 Oct 2026", title: "New commercial rent index published", folder: "Commercial lease — rue des Tanneurs premises", why: "The lease renewal proposal relies on the previous index. The new one changes the capped amount.", src: { type: "external", title: "Commercial rent index (made-up example)", meta: "Official publication · 11 October 2026", excerpt: "The Q2 2026 index is up 2.1% year on year." } }
  ];
  f.research.watch = [
    { date: "15 Oct 2026", title: "Diallo et al. (2026) — stratification and non-response in household surveys", folder: "Thesis — chapter 3: sampling", why: "The paper tackles the same question as your section 3.2 and cites Arnaud and Chen (2023), already in your bibliography.", src: { type: "external", title: "Diallo et al., 2026 (made-up example)", meta: "Open paper database · abstract · 15 October 2026", excerpt: "We compare post-stratification weights under differential non-response across 1,800 households." } },
    { date: "9 Oct 2026", title: "Call for papers: special issue on survey methods", folder: "Paper “Stratified surveys” — journal submission", why: "The theme matches your manuscript v4. Deadline: 6 November.", src: { type: "external", title: "Call for papers (made-up example)", meta: "Methodology journal · 9 October 2026", excerpt: "Manuscripts on sampling design and survey weighting are welcome until 6 November 2026." } }
  ];
})(window.I18N.en.fields);
