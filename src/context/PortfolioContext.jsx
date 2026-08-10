import React, { createContext, useContext, useState, useEffect } from 'react';

const PortfolioContext = createContext();

export const ALL_CURRENCIES = [
  { code: 'EUR', symbol: '€', label: 'EUR (€) - Euro', rateMultiplier: 1 },
  { code: 'USD', symbol: '$', label: 'USD ($) - US Dollar', rateMultiplier: 1.08 },
  { code: 'GBP', symbol: '£', label: 'GBP (£) - British Pound', rateMultiplier: 0.85 },
  { code: 'INR', symbol: '₹', label: 'INR (₹) - Indian Rupee', rateMultiplier: 90 },
  { code: 'CAD', symbol: 'CA$', label: 'CAD ($) - Canadian Dollar', rateMultiplier: 1.46 },
  { code: 'AUD', symbol: 'A$', label: 'AUD ($) - Australian Dollar', rateMultiplier: 1.63 },
  { code: 'CHF', symbol: 'CHF', label: 'CHF (Fr) - Swiss Franc', rateMultiplier: 0.95 },
  { code: 'JPY', symbol: '¥', label: 'JPY (¥) - Japanese Yen', rateMultiplier: 162 },
  { code: 'AED', symbol: 'AED', label: 'AED (د.إ) - UAE Dirham', rateMultiplier: 3.96 },
  { code: 'SGD', symbol: 'SG$', label: 'SGD ($) - Singapore Dollar', rateMultiplier: 1.45 },
  { code: 'MYR', symbol: 'RM', label: 'MYR (RM) - Malaysian Ringgit', rateMultiplier: 5.08 },
  { code: 'NZD', symbol: 'NZ$', label: 'NZD ($) - New Zealand Dollar', rateMultiplier: 1.78 },
  { code: 'BRL', symbol: 'R$', label: 'BRL (R$) - Brazilian Real', rateMultiplier: 5.85 },
  { code: 'ZAR', symbol: 'R', label: 'ZAR (R) - South African Rand', rateMultiplier: 19.8 },
  { code: 'MXN', symbol: 'MX$', label: 'MXN ($) - Mexican Peso', rateMultiplier: 18.2 },
  { code: 'CNY', symbol: '¥', label: 'CNY (¥) - Chinese Yuan', rateMultiplier: 7.78 },
  { code: 'SEK', symbol: 'kr', label: 'SEK (kr) - Swedish Krona', rateMultiplier: 11.4 }
];

export const ALL_LANGUAGES = [
  { code: 'en', name: 'English', label: 'English (EN)' },
  { code: 'it', name: 'Italiano', label: 'Italiano (IT)' },
  { code: 'de', name: 'Deutsch', label: 'Deutsch (DE)' },
  { code: 'fr', name: 'Français', label: 'Français (FR)' },
  { code: 'es', name: 'Español', label: 'Español (ES)' },
  { code: 'hi', name: 'हिन्दी', label: 'हिन्दी (HI)' },
  { code: 'nl', name: 'Nederlands', label: 'Nederlands (NL)' },
  { code: 'pt', name: 'Português', label: 'Português (PT)' },
  { code: 'ru', name: 'Русский', label: 'Русский (RU)' },
  { code: 'ja', name: '日本語', label: '日本語 (JA)' },
  { code: 'zh', name: '中文', label: '中文 (ZH)' },
  { code: 'ko', name: '한국어', label: '한국어 (KO)' },
  { code: 'ar', name: 'العربية', label: 'العربية (AR)' },
  { code: 'tr', name: 'Türkçe', label: 'Türkçe (TR)' },
  { code: 'pl', name: 'Polski', label: 'Polski (PL)' },
  { code: 'sv', name: 'Svenska', label: 'Svenska (SV)' },
  { code: 'no', name: 'Norsk', label: 'Norsk (NO)' },
  { code: 'da', name: 'Dansk', label: 'Dansk (DA)' },
  { code: 'fi', name: 'Suomi', label: 'Suomi (FI)' },
  { code: 'el', name: 'Ελληνικά', label: 'Ελληνικά (EL)' },
  { code: 'cs', name: 'Čeština', label: 'Čeština (CS)' },
  { code: 'hu', name: 'Magyar', label: 'Magyar (HU)' },
  { code: 'ro', name: 'Română', label: 'Română (RO)' },
  { code: 'uk', name: 'Українська', label: 'Українська (UK)' },
  { code: 'id', name: 'Bahasa Indonesia', label: 'Bahasa Indonesia (ID)' },
  { code: 'ms', name: 'Bahasa Melayu', label: 'Bahasa Melayu (MS)' },
  { code: 'th', name: 'ไทย', label: 'ไทย (TH)' },
  { code: 'vi', name: 'Tiếng Việt', label: 'Tiếng Việt (VI)' },
  { code: 'he', name: 'עברית', label: 'עברית (HE)' }
];

const TRANSLATIONS = {
  en: {
    navHome: 'home',
    navWork: 'portfolio',
    navServices: 'services',
    navPricing: 'pricing',
    navAbout: 'about',
    navContact: 'contact',
    startProject: "let's talk",
    heroStatus: 'available for select projects — Parma, Italy',
    heroCrafting: 'Crafting',
    heroDigital: 'Digital',
    heroExperiences: 'Experiences',
    heroSubhead: 'Web design agency led by Vedant Joliya. We design & engineer bespoke Framer websites, custom UI/UX systems, and deliver end-to-end Google indexing.',
    viewWork: 'view work',
    metricLiveApps: 'Live Framer Apps',
    metricBespokeUi: 'Bespoke UI/UX',
    metricResponse: 'Proposal Response',
    metricPricing: 'Regional Pricing',
    googleBadge: 'end-to-end Google engineering',
    googleTitle: 'From wireframe to Google Search.',
    googleSub: 'Every site includes Google Search Console setup, sitemap.xml indexing, OpenGraph schema, and 95+ Lighthouse scores.',
    exploreServices: 'explore services',
    selectedWork: 'selected work',
    ourPortfolio: 'Our Portfolio',
    viewAll: 'view all',
    preview: 'preview',
    liveSite: 'live site',
    readyToBuild: 'Ready to build your website?',
    customQuoteSub: 'Get your custom quote within 24 hours. Directly managed by Vedant Joliya.',
    startProjectBtn: 'start a project',
    exploreOurWork: 'explore our work',
    workPageSub: 'Our experience is built on collaborations with brands across industries — partnerships founded on ongoing dialogue and shared goals.',
    whatWeDo: 'what we do',
    servicesTitle: 'Services',
    servicesSub: 'Our distinctive value lies in the harmony between content, UI/UX systems, and high-performance technical engineering.',
    needCustom: 'Need a custom solution?',
    pricingBadge: 'transparent pricing',
    pricingTitle: 'Pricing',
    location: 'Location',
    essential: 'essential',
    mostPopular: 'most popular',
    enterprise: 'enterprise',
    oneTimeAllInclusive: 'one-time · all-inclusive',
    oneTimeCms: 'one-time · full CMS included',
    tailoredPlatform: 'tailored full-scale platform',
    requestSinglePlan: 'Request Essential Plan',
    requestGrowthPlan: 'Request Growth Plan',
    requestEnterprisePlan: 'Request Enterprise Plan',
    faqTitle: 'FAQ',
    aboutStudio: 'about the studio',
    workWithMe: 'work with me',
    startProjectWithVedant: 'Start a project with Vedant',
    directCollab: 'Direct collaboration. No agencies. No middlemen. 24-hour proposal response.',
    techStack: 'tech stack & tools',
    education: 'education',
    experience: 'experience',
    periodMsc: 'Sept 2025 — Present',
    periodBsc: 'Aug 2022 — April 2025',
    aboutBio1: 'When you hire VedsWeb, you work directly with the founder. There are no middle managers — every wireframe, every line of code, every Google Search Console property is crafted directly by the lead engineer.',
    aboutBio2: "Currently pursuing a Master's in Data Science for Management at the University of Parma, Italy. This intersection of data analytics and web engineering means every digital product is built with measurable performance goals, not just aesthetics.",
    degreeMsc: "MSc Data Science for Management",
    instMsc: "University of Parma, Italy",
    descMsc: "Advanced studies in data analytics, machine learning, and strategic management.",
    degreeBsc: "Bachelor of IT Engineering",
    instBsc: "Gujarat Technological University (GTU)",
    descBsc: "Core foundation in software development, database systems, and web technologies.",
    expRole1: "Founder & Lead Engineer",
    expCompany1: "VedsWeb Studio",
    expPeriod1: "2026 — Present",
    expDesc1: "Founded and operating a bespoke web design agency. Delivering end-to-end Framer & React web applications, custom UI/UX design systems, and Google Search indexing for global clients.",
    expRole2: "Web Design Freelancer",
    expCompany2: "Freelance",
    expPeriod2: "2024 — 2025",
    expDesc2: "Designed and built custom websites for small businesses and startups. Specialized in responsive design, Figma prototyping, and performance optimization.",

    planSingleTitle: "Single Page Package",
    planSingleSub: "Ideal for landing pages, product launches & portfolio sites.",
    planSingleF1: "Single page responsive web application",
    planSingleF2: "Custom Figma UI/UX layout & styling",
    planSingleF3: "Google Search Console indexing & sitemap.xml",
    planSingleF4: "Lighthouse Core Web Vitals score 95+",
    planSingleF5: "Mobile, Tablet & Desktop multi-viewport support",
    planSingleF6: "1 month post-launch technical support",

    planMultiTitle: "Standard Multi-Page",
    planMultiSub: "Complete web application for growing businesses & agencies.",
    planMultiF1: "2 to 4 fully custom responsive pages",
    planMultiF2: "Custom Framer / React CMS for content management",
    planMultiF3: "Advanced Google SEO & OpenGraph schema setup",
    planMultiF4: "Interactive contact forms & booking triggers",
    planMultiF5: "Google Analytics (GA4) integration",
    planMultiF6: "Priority 24/7 technical support",

    planEntTitle: "Enterprise Platform",
    planEntSub: "Tailored digital platforms for high-scale brands & e-commerce.",
    planEntF1: "5+ custom pages or full web platform",
    planEntF2: "E-commerce payment gateway integration (Stripe)",
    planEntF3: "Custom admin dashboard & database architecture",
    planEntF4: "Multi-language & regional currency engine",
    planEntF5: "Custom API integrations & webhooks",
    planEntF6: "Dedicated ongoing maintenance",

    projDesc1: "Bespoke portfolio website designed for a luxury European architectural studio with high-resolution image galleries and smooth scroll transitions.",
    projDesc2: "Interactive web application featuring bean origin selection, menu showcase, and online reservation flow built with Framer.",
    projDesc3: "High-performance digital showroom with interactive 360-degree vehicle customizer and instant booking engine.",
    projDesc4: "Clean medical portal with online appointment booking system, treatment price calculator, and patient review showcase.",
    projDescDefault: "Bespoke culinary experience platform designed with high-end typography, subtle animations, and immersive layout architectures.",

    srvDesignTitle: 'Web Design',
    srvDesignTag: 'Bespoke UI/UX & Figma design systems.',
    srvDesignDesc: 'Custom Figma wireframes, layout grids, interactive prototypes, user research, and typography tokens — all built for maximum conversion and brand consistency.',
    srvDesignD1: 'User research & competitor benchmark analysis',
    srvDesignD2: 'Custom Figma component libraries & design tokens',
    srvDesignD3: 'Mobile & desktop high-fidelity prototypes',
    srvDesignD4: 'Micro-animations & interaction design specs',
    srvDevTitle: 'Web Development',
    srvDevTag: 'Production-ready Framer & React applications.',
    srvDevDesc: 'We engineer pixel-perfect, responsive web applications on Framer and React that load fast, look stunning on every device, and are built for long-term scalability.',
    srvDevD1: 'Custom Framer & React web app development',
    srvDevD2: 'Responsive multi-device viewport optimization',
    srvDevD3: 'Micro-interaction & scroll animation engineering',
    srvDevD4: 'Performance-first code architecture',
    srvSeoTitle: 'SEO',
    srvSeoTag: 'End-to-end Google Search indexing.',
    srvSeoDesc: 'We work with an integrated approach that begins with a thorough technical analysis of the site to eliminate issues that hinder indexing, and build your search visibility from the ground up.',
    srvSeoD1: 'Google Search Console & sitemap.xml setup',
    srvSeoD2: 'OpenGraph & JSON-LD schema structured data',
    srvSeoD3: 'Lighthouse Core Web Vitals optimization (95+)',
    srvSeoD4: 'Google Analytics (GA4) & conversion tracking',
    srvEcomTitle: 'eCommerce',
    srvEcomTag: 'Tailor-made online shops & custom platforms.',
    srvEcomDesc: 'Strategy, technology, and results: your tailor-made online shop. We build secure, high-converting e-commerce platforms with custom checkout flows and product showcases.',
    srvEcomD1: 'Stripe & PayPal payment gateway integration',
    srvEcomD2: 'Custom product showcase & catalog management',
    srvEcomD3: 'Custom CMS dashboard for content management',
    srvEcomD4: 'Customer order flows & cart optimization',
    srvHostTitle: 'Hosting & Domain',
    srvHostTag: 'Cloud hosting, DNS, and continuous support.',
    srvHostDesc: 'Worry-free cloud hosting deployment, custom domain connection, SSL encryption, and continuous maintenance so you can focus on growing your business.',
    srvHostD1: 'DNS domain & SSL certificate configuration',
    srvHostD2: 'Cloud hosting with 99.9% uptime guarantee',
    srvHostD3: '1 month free post-launch updates & support',
    srvHostD4: 'Performance audits & monthly health checks',
    faqQ1: 'What does "web agency" mean?',
    faqA1: 'A web agency is a company that provides digital services like web design, development, SEO optimization, and digital marketing to help businesses establish and grow their online presence.',
    faqQ2: 'How do you choose the best web agency?',
    faqA2: 'Look for a proven portfolio of live projects, transparent pricing, technical expertise in modern frameworks, and a direct communication style. At VedsWeb, you work directly with the founder.',
    faqQ3: 'How much does a website built by a web agency cost?',
    faqA3: 'Costs vary by scope. Single-page sites start at €399, multi-page at €899, and enterprise platforms at €1,499+. All prices adapt to your regional currency automatically.',
    faqQ4: 'Is Google Search indexing included?',
    faqA4: 'Yes! Every VedsWeb package includes full Google Search Console setup, sitemap.xml generation, OpenGraph meta tags, schema structured data, and Lighthouse speed optimization.',
    faqQ5: 'How long does it take to build a website?',
    faqA5: 'Single-page projects: 3-5 business days. Multi-page: 7-10 days. Enterprise platforms are scoped individually. Turnaround is fast because you work directly with the lead engineer.',
    scopeSingle: 'Single Page Website',
    scopeMulti: '2 – 4 Pages Website',
    scopePlatform: '5+ Pages / Platform',
    scopeRedesign: 'UI/UX Redesign',
    scopeSeo: 'Google SEO & Indexing',
    inquiryBriefInfo: 'Your email app has opened with the project brief directed to',
    emailNote: 'opens your email client',
    requestProposalTitle: "Let's talk ↗",
    requestProposalSub: 'Ready to build something? Submit your project details and receive a custom proposal within 24 hours.',
    formFullName: 'Full Name',
    formEmail: 'Email Address',
    formScope: 'Project Scope',
    formBudget: 'Estimated Budget',
    formBrief: 'Project Brief',
    formSubmit: 'SEND PROPOSAL INQUIRY',
    inquirySent: 'inquiry sent',
    submitAnother: 'submit another',
    footerRights: 'VedsWeb Studio by Vedant Joliya',
    footerPages: 'Pages',
    footerStudioDesk: 'Studio Desk'
  },
  it: {
    navHome: 'home',
    navWork: 'portfolio',
    navServices: 'servizi',
    navPricing: 'prezzi',
    navAbout: 'chi siamo',
    navContact: 'contatti',
    startProject: 'parliamo',
    heroStatus: 'disponibile per progetti selezionati — Parma, Italia',
    heroCrafting: 'Creazione',
    heroDigital: 'Digitale',
    heroExperiences: 'Esperienze',
    heroSubhead: 'Studio di web design guidato da Vedant Joliya. Progettiamo siti web Framer su misura, sistemi UI/UX e indicizzazione Google completa.',
    viewWork: 'vedi lavori',
    metricLiveApps: 'App Framer Online',
    metricBespokeUi: 'UI/UX Su Misura',
    metricResponse: 'Risposta in 24h',
    metricPricing: 'Prezzi Regionali',
    googleBadge: 'ingegneria Google completa',
    googleTitle: 'Dal wireframe a Google Search.',
    googleSub: 'Ogni sito include configurazione Google Search Console, mappa sitemap.xml, tag OpenGraph e punteggio Lighthouse 95+.',
    exploreServices: 'esplora servizi',
    selectedWork: 'progetti selezionati',
    ourPortfolio: 'Il Nostro Portfolio',
    viewAll: 'vedi tutti',
    preview: 'anteprima',
    liveSite: 'sito live',
    readyToBuild: 'Pronto a creare il tuo sito web?',
    customQuoteSub: 'Ricevi un preventivo personalizzato entro 24 ore. Gestito direttamente da Vedant Joliya.',
    startProjectBtn: 'inizia un progetto',
    exploreOurWork: 'esplora il nostro lavoro',
    workPageSub: 'La nostra esperienza si basa sulla collaborazione con marchi di diversi settori.',
    whatWeDo: 'cosa facciamo',
    servicesTitle: 'Servizi',
    servicesSub: 'Il nostro valore risiede nell\'armonia tra contenuto, sistemi UI/UX e ingegneria ad alte prestazioni.',
    needCustom: 'Serve una soluzione su misura?',
    pricingBadge: 'prezzi trasparenti',
    pricingTitle: 'Prezzi',
    location: 'Posizione',
    essential: 'essenziale',
    mostPopular: 'più popolare',
    enterprise: 'enterprise',
    oneTimeAllInclusive: 'una tantum · tutto incluso',
    oneTimeCms: 'una tantum · CMS completo incluso',
    tailoredPlatform: 'piattaforma su misura',
    requestSinglePlan: 'Richiedi Piano Essenziale',
    requestGrowthPlan: 'Richiedi Piano Growth',
    requestEnterprisePlan: 'Richiedi Piano Enterprise',
    faqTitle: 'Domande Frequenti',
    aboutStudio: 'lo studio',
    workWithMe: 'lavora con me',
    startProjectWithVedant: 'Inizia un progetto con Vedant',
    directCollab: 'Collaborazione diretta. Senza intermediari. Risposta in 24 ore.',
    techStack: 'tecnologie & strumenti',
    education: 'istruzione',
    experience: 'esperienza',
    periodMsc: 'Sett 2025 — Presente',
    periodBsc: 'Ago 2022 — Aprile 2025',
    aboutBio1: 'Quando ti affidi a VedsWeb, lavori direttamente con il fondatore. Non ci sono intermediari: ogni wireframe, ogni riga di codice e ogni proprietà di Google Search Console è curata direttamente dal lead engineer.',
    aboutBio2: 'Attualmente frequento il Master in Data Science for Management presso l\'Università di Parma. Questa unione tra data analytics e web engineering garantisce che ogni prodotto digitale sia sviluppato con obiettivi di performance misurabili.',
    degreeMsc: 'Master in Data Science for Management',
    instMsc: 'Università di Parma, Italia',
    descMsc: 'Studi avanzati in analisi dati, machine learning e gestione strategica.',
    degreeBsc: 'Laurea in Ingegneria Informatica',
    instBsc: 'Gujarat Technological University (GTU)',
    descBsc: 'Fondamenta in sviluppo software, sistemi di database e tecnologie web.',
    expRole1: 'Fondatore & Lead Engineer',
    expCompany1: 'VedsWeb Studio',
    expPeriod1: '2026 — Presente',
    expDesc1: 'Fondatore e gestore di uno studio di web design su misura. Sviluppo di applicazioni web Framer & React, sistemi UI/UX e indicizzazione Google per clienti internazionali.',
    expRole2: 'Freelance Web Designer',
    expCompany2: 'Freelance',
    expPeriod2: '2024 — 2025',
    expDesc2: 'Progettazione e realizzazione di siti web su misura per piccole imprese e startup. Specializzato in design reattivo, prototipazione Figma e ottimizzazione delle prestazioni.',

    planSingleTitle: "Pacchetto Monopagina",
    planSingleSub: "Ideale per landing page, lanci di prodotti e siti portfolio.",
    planSingleF1: "Applicazione web reattiva monopagina",
    planSingleF2: "Layout e stile UI/UX Figma personalizzato",
    planSingleF3: "Indicizzazione Google Search Console e sitemap.xml",
    planSingleF4: "Punteggio Lighthouse Core Web Vitals 95+",
    planSingleF5: "Supporto multi-viewport per mobile, tablet e desktop",
    planSingleF6: "1 mese di supporto tecnico post-lancio",

    planMultiTitle: "Standard Multipagina",
    planMultiSub: "Applicazione web completa per aziende in crescita e agenzie.",
    planMultiF1: "Da 2 a 4 pagine reattive completamente personalizzate",
    planMultiF2: "CMS Framer / React personalizzato per la gestione dei contenuti",
    planMultiF3: "SEO avanzato Google e configurazione schema OpenGraph",
    planMultiF4: "Moduli di contatto interattivi e trigger di prenotazione",
    planMultiF5: "Integrazione Google Analytics (GA4)",
    planMultiF6: "Supporto tecnico prioritario h24",

    planEntTitle: "Piattaforma Enterprise",
    planEntSub: "Piattaforme digitali su misura per brand in crescita ed e-commerce.",
    planEntF1: "5+ pagine personalizzate o piattaforma web completa",
    planEntF2: "Integrazione gateway di pagamento e-commerce (Stripe)",
    planEntF3: "Dashboard admin personalizzata e architettura database",
    planEntF4: "Motore multilingua e valuta regionale",
    planEntF5: "Integrazioni API personalizzate e webhook",
    planEntF6: "Manutenzione continua dedicata",

    projDesc1: "Sito web portfolio su misura progettato per uno studio di architettura di lusso europeo con gallerie di immagini ad alta risoluzione e transizioni di scorrimento fluide.",
    projDesc2: "Applicazione web interattiva con selezione dell'origine del caffè, menu e flusso di prenotazione online realizzato con Framer.",
    projDesc3: "Showroom digitale ad alte prestazioni con personalizzatore di veicoli interattivo a 360 gradi e motore di prenotazione istantanea.",
    projDesc4: "Portale medico essenziale con sistema di prenotazione visite online, calcolatore dei costi di trattamento e recensioni clienti.",
    projDescDefault: "Piattaforma culinaria su misura progettata con tipografia di alto livello, animazioni raffinate e layout immersivo.",

    srvDesignTitle: 'Web Design',
    srvDesignTag: 'Sistemi UI/UX & design system Figma su misura.',
    srvDesignDesc: 'Wireframe Figma personalizzati, griglie di layout, prototipi interattivi, ricerca utenti e token tipografici — progettati per la massima conversione e coerenza del brand.',
    srvDesignD1: 'Ricerca utenti e analisi di benchmark della concorrenza',
    srvDesignD2: 'Librerie di componenti Figma e design token su misura',
    srvDesignD3: 'Prototipi ad alta fedeltà per dispositivi mobili e desktop',
    srvDesignD4: 'Micro-animazioni e specifiche di interaction design',
    srvDevTitle: 'Sviluppo Web',
    srvDevTag: 'Applicazioni Framer & React pronte per la produzione.',
    srvDevDesc: 'Ingegnerizziamo applicazioni web Framer e React reattive e veloci, progettate per garantire scalabilità e prestazioni eccellenti su ogni dispositivo.',
    srvDevD1: 'Sviluppo web app personalizzate in Framer e React',
    srvDevD2: 'Ottimizzazione reattiva per ogni viewport',
    srvDevD3: 'Ingegneria delle micro-interazioni e animazioni di scorrimento',
    srvDevD4: 'Architettura del codice orientata alle prestazioni',
    srvSeoTitle: 'SEO',
    srvSeoTag: 'Indicizzazione Google Search completa.',
    srvSeoDesc: 'Approccio integrato che inizia con un\'analisi tecnica completa del sito per eliminare i problemi che ostacolano l\'indicizzazione e costruire la visibilità sui motori di ricerca.',
    srvSeoD1: 'Configurazione Google Search Console e sitemap.xml',
    srvSeoD2: 'Dati strutturati OpenGraph e schema JSON-LD',
    srvSeoD3: 'Ottimizzazione Core Web Vitals e punteggi Lighthouse (95+)',
    srvSeoD4: 'Integrazione Google Analytics (GA4) e tracciamento conversioni',
    srvEcomTitle: 'eCommerce',
    srvEcomTag: 'Negozi online e piattaforme su misura.',
    srvEcomDesc: 'Strategia, tecnologia e risultati: il tuo negozio online su misura. Realizziamo piattaforme e-commerce sicure e ad alta conversione con checkout personalizzati.',
    srvEcomD1: 'Integrazione gateway di pagamento Stripe e PayPal',
    srvEcomD2: 'Vetrina prodotti personalizzata e gestione catalogo',
    srvEcomD3: 'Dashboard CMS personalizzata per la gestione dei contenuti',
    srvEcomD4: 'Flussi di ordine cliente e ottimizzazione del carrello',
    srvHostTitle: 'Hosting & Dominio',
    srvHostTag: 'Hosting cloud, DNS e supporto continuo.',
    srvHostDesc: 'Configurazione hosting cloud senza pensieri, collegamento dominio personalizzato, crittografia SSL e manutenzione continua per far crescere la tua attività.',
    srvHostD1: 'Configurazione dominio DNS e certificato SSL',
    srvHostD2: 'Hosting cloud con garanzia di uptime del 99.9%',
    srvHostD3: '1 mese di aggiornamenti gratuiti e supporto post-lancio',
    srvHostD4: 'Audit delle prestazioni e controlli di salute mensili',
    faqQ1: 'Cosa significa "agenzia web"?',
    faqA1: 'Un\'agenzia web fornisce servizi digitali come web design, sviluppo, ottimizzazione SEO e marketing digitale per aiutare le aziende a crescere online.',
    faqQ2: 'Come scegliere la migliore agenzia web?',
    faqA2: 'Cerca un portfolio di progetti live, prezzi trasparenti, competenze tecniche moderne e comunicazione diretta. In VedsWeb lavori direttamente con il fondatore.',
    faqQ3: 'Quanto costa un sito web realizzato da un\'agenzia?',
    faqA3: 'I costi variano in base all\'ambito. I siti monopagina partono da €399, i multipagina da €899 e le piattaforme enterprise da €1.499+. Tutti i prezzi si adattano alla valuta locale.',
    faqQ4: 'L\'indicizzazione Google Search è inclusa?',
    faqA4: 'Sì! Ogni pacchetto VedsWeb include la configurazione completa di Google Search Console, generazione sitemap.xml, tag OpenGraph, dati strutturati e velocizzazione Lighthouse.',
    faqQ5: 'Quanto tempo occorre per realizzare un sito web?',
    faqA5: 'Siti monopagina: 3-5 giorni lavorativi. Multipagina: 7-10 giorni. Piattaforme enterprise valuate individualmente. Consegna rapida grazie al contatto diretto con il lead engineer.',
    scopeSingle: 'Sito Monopagina',
    scopeMulti: 'Sito 2 – 4 Pagine',
    scopePlatform: '5+ Pagine / Piattaforma',
    scopeRedesign: 'Redesign UI/UX',
    scopeSeo: 'SEO & Indicizzazione Google',
    inquiryBriefInfo: 'La tua applicazione email è stata aperta con il brief indirizzato a',
    emailNote: 'apre il tuo client email',
    requestProposalTitle: 'Parliamo ↗',
    requestProposalSub: 'Pronto a costruire qualcosa? Invia i dettagli del progetto e ricevi una proposta entro 24 ore.',
    formFullName: 'Nome Completo',
    formEmail: 'Indirizzo Email',
    formScope: 'Ambito del Progetto',
    formBudget: 'Budget Stimato',
    formBrief: 'Dettagli Progetto',
    formSubmit: 'INVIA RICHIESTA PROPOSTA',
    inquirySent: 'richiesta inviata',
    submitAnother: 'invia un\'altra',
    footerRights: 'VedsWeb Studio di Vedant Joliya',
    footerPages: 'Pagine',
    footerStudioDesk: 'Contatti Studio'
  }
};

const BASE_RATES_EUR = {
  singlePage: 399,
  multiPageStandard: 899,
  multiPageEnterprise: 1499
};

const INITIAL_PROJECTS = [
  {
    id: 'proj-1',
    title: 'Minimalist Architecture Studio',
    category: 'Framer Architecture Portfolio',
    descriptionKey: 'projDesc1',
    description: 'Bespoke portfolio website designed for a luxury European architectural studio with high-resolution image galleries and smooth scroll transitions.',
    demoUrl: 'https://vedsweb-architect.framer.website/',
    devices: ['desktop', 'tablet', 'mobile']
  },
  {
    id: 'proj-2',
    title: 'Modern Coffee Roastery & Cafe',
    category: 'Framer E-Commerce & Cafe App',
    descriptionKey: 'projDesc2',
    description: 'Interactive web application featuring bean origin selection, menu showcase, and online reservation flow built with Framer.',
    demoUrl: 'https://vedsweb-coffee.framer.website/',
    devices: ['desktop', 'tablet', 'mobile']
  },
  {
    id: 'proj-3',
    title: 'Executive Automotive Showroom',
    category: 'Framer Automotive Showcase',
    descriptionKey: 'projDesc3',
    description: 'High-performance digital showroom with interactive 360-degree vehicle customizer and instant booking engine.',
    demoUrl: 'https://vedsweb-car.framer.website/',
    devices: ['desktop', 'tablet', 'mobile']
  },
  {
    id: 'proj-4',
    title: 'High-Precision Dental Clinic',
    category: 'Framer Medical & Clinic Portal',
    descriptionKey: 'projDesc4',
    description: 'Clean medical portal with online appointment booking system, treatment price calculator, and patient review showcase.',
    demoUrl: 'https://vedsweb-dentist.framer.website/',
    devices: ['desktop', 'tablet', 'mobile']
  }
];

export const PortfolioProvider = ({ children }) => {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('vedsweb_projects_v3');
    return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
  });

  const [currency, setCurrency] = useState('EUR');
  const [language, setLanguage] = useState('it');
  const [detectedCountry, setDetectedCountry] = useState('Italy');
  const [detectedLanguageLabel, setDetectedLanguageLabel] = useState('Italiano (IT)');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    return localStorage.getItem('vedsweb_admin_auth') === 'true';
  });

  const t = (key) => {
    const currentDict = TRANSLATIONS[language] || TRANSLATIONS.it || TRANSLATIONS.en;
    return currentDict[key] || TRANSLATIONS.en[key] || key;
  };

  const pricing = {
    singlePage: {
      title: t('planSingleTitle'),
      subtitle: t('planSingleSub'),
      features: [
        t('planSingleF1'),
        t('planSingleF2'),
        t('planSingleF3'),
        t('planSingleF4'),
        t('planSingleF5'),
        t('planSingleF6')
      ]
    },
    multiPageStandard: {
      title: t('planMultiTitle'),
      subtitle: t('planMultiSub'),
      features: [
        t('planMultiF1'),
        t('planMultiF2'),
        t('planMultiF3'),
        t('planMultiF4'),
        t('planMultiF5'),
        t('planMultiF6')
      ]
    },
    multiPageEnterprise: {
      title: t('planEntTitle'),
      subtitle: t('planEntSub'),
      features: [
        t('planEntF1'),
        t('planEntF2'),
        t('planEntF3'),
        t('planEntF4'),
        t('planEntF5'),
        t('planEntF6')
      ]
    }
  };

  useEffect(() => {
    const browserLang = (navigator.language || navigator.userLanguage || 'en-US').toLowerCase();
    const foundLang = ALL_LANGUAGES.find(l => browserLang.startsWith(l.code));
    if (foundLang) {
      setLanguage(foundLang.code);
      setDetectedLanguageLabel(`${foundLang.name} (${foundLang.code.toUpperCase()})`);
    }

    const detectRegion = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        if (res.ok) {
          const data = await res.json();
          if (data.country_name) {
            setDetectedCountry(`${data.city ? data.city + ', ' : ''}${data.country_name}`);
          }

          const countryCode = data.country_code;
          if (countryCode === 'IT') {
            setLanguage('it');
            setCurrency('EUR');
          } else if (countryCode === 'DE' || countryCode === 'AT' || countryCode === 'CH') {
            setLanguage('de');
            setCurrency(countryCode === 'CH' ? 'CHF' : 'EUR');
          } else if (countryCode === 'FR' || countryCode === 'BE') {
            setLanguage('fr');
            setCurrency('EUR');
          } else if (countryCode === 'ES' || countryCode === 'MX' || countryCode === 'AR') {
            setLanguage('es');
            setCurrency(countryCode === 'MX' ? 'MXN' : 'EUR');
          } else if (countryCode === 'IN') {
            setLanguage('hi');
            setCurrency('INR');
          } else if (countryCode === 'GB' || countryCode === 'UK') {
            setLanguage('en');
            setCurrency('GBP');
          } else if (countryCode === 'US' || countryCode === 'CA' || countryCode === 'AU') {
            setLanguage('en');
            setCurrency(countryCode === 'CA' ? 'CAD' : countryCode === 'AU' ? 'AUD' : 'USD');
          } else if (countryCode === 'JP') {
            setLanguage('ja');
            setCurrency('JPY');
          } else if (countryCode === 'CN') {
            setLanguage('zh');
            setCurrency('CNY');
          } else if (countryCode === 'RU') {
            setLanguage('ru');
            setCurrency('EUR');
          } else if (countryCode === 'BR') {
            setLanguage('pt');
            setCurrency('BRL');
          }
        }
      } catch (err) {
        console.log('IP Detection fallback to default');
      }
    };
    detectRegion();
  }, []);

  useEffect(() => {
    const checkAdminRoute = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/admin' || path.endsWith('/admin') || hash === '#admin' || hash === '#/admin') {
        setIsAdminOpen(true);
      }
    };
    checkAdminRoute();
    window.addEventListener('popstate', checkAdminRoute);
    window.addEventListener('hashchange', checkAdminRoute);
    return () => {
      window.removeEventListener('popstate', checkAdminRoute);
      window.removeEventListener('hashchange', checkAdminRoute);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('vedsweb_projects_v3', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('vedsweb_admin_auth', isAdminLoggedIn ? 'true' : 'false');
  }, [isAdminLoggedIn]);

  const getFormattedPrice = (tierKey) => {
    const baseEUR = BASE_RATES_EUR[tierKey] || 399;
    const currObj = ALL_CURRENCIES.find(c => c.code === currency) || ALL_CURRENCIES[0];
    const rawAmount = Math.round(baseEUR * currObj.rateMultiplier);
    return `${currObj.symbol}${rawAmount.toLocaleString()}`;
  };

  const addProject = (newProj) => {
    const proj = {
      ...newProj,
      id: `proj-${Date.now()}`,
      devices: ['desktop', 'tablet', 'mobile']
    };
    setProjects(prev => [proj, ...prev]);
  };

  const editProject = (id, updatedProj) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...updatedProj } : p));
  };

  const deleteProject = (id) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const resetData = () => {
    setProjects(INITIAL_PROJECTS);
    localStorage.removeItem('vedsweb_projects_v3');
  };

  const contactInfo = {
    phone: '+39 3516785413',
    phoneFormatted: '+39 3516785413',
    email: 'contactsvedant@gmail.com',
    location: 'Parma, Emilia-Romagna, Italy'
  };

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        pricing,
        currency,
        setCurrency,
        allCurrencies: ALL_CURRENCIES,
        language,
        setLanguage,
        allLanguages: ALL_LANGUAGES,
        t,
        getFormattedPrice,
        detectedCountry,
        detectedLanguageLabel,
        isAdminOpen,
        setIsAdminOpen,
        isAdminLoggedIn,
        setIsAdminLoggedIn,
        addProject,
        editProject,
        deleteProject,
        resetData,
        selectedProject,
        setSelectedProject,
        contactInfo
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
