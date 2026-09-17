// i18n.js — Carté bilingual layer (FR/EN). Vanilla JS, no deps. Works for both
// plain HTML pages (data-i18n attributes) and React/JSX (window.t()).
//
// Usage in HTML:
//   <span data-i18n="hero.h1"></span>              text content
//   <span data-i18n-html="hero.h1_html"></span>    innerHTML (for spans with <em>)
//   <input data-i18n-attr="placeholder:form.name">
//   <a data-i18n-attr="aria-label:nav.menu">
// Usage in JSX:  t('hero.cta') / I18n.t('hero.cta')

(function () {
  const STRINGS = {
    fr: {
      wl: {
        eyebrow: 'Liste d\'attente',
        h2: 'Soyez prévenu·e au lancement',
        lede: 'Carté arrive bientôt. Laissez votre e-mail — vous serez parmi les premiers informés, avec une offre de lancement.',
        placeholder: 'Votre adresse e-mail',
        btn: 'Me prévenir',
        done: 'Merci ! Vous êtes sur la liste. À très vite.',
        privacy: 'Pas de spam. Désinscription en un clic.',
      },
      meta: {
        title: 'Carté — La carte de visite virtuelle, repensée.',
        desc: "Une carte digitale aussi soignée qu'une carte gravée. Partagez-la d'un scan ou sur WhatsApp, sans application pour vos contacts. Design-first, pensée pour l'Afrique.",
      },
      nav: {
        features: 'Fonctionnalités',
        how: 'Comment ça marche',
        pricing: 'Tarifs',
        faq: 'FAQ',
        signin: 'Se connecter',
        cta: 'Créer ma carte',
      },
      hero: {
        eyebrow: 'Carte de visite virtuelle',
        h1_html: 'Votre carte de visite,<br><em>repensée.</em>',
        lede_html: "Une carte digitale aussi soignée qu'une carte gravée. Partagez-la d'un scan ou sur WhatsApp — elle s'ouvre sur n'importe quel téléphone, <b>sans application, même en 3G</b>.",
        cta_primary: 'Créer ma carte gratuitement →',
        cta_ghost: 'Voir une démo',
        trust_1: 'Gratuit sans CB',
        trust_2: 'iOS & Android',
        trust_3: 'Pensé pour l\'Afrique · FR & EN',
      },
      logos: { adopted: 'Adoptée par' },
      features: {
        eyebrow: 'Pourquoi Carté',
        h2_html: 'Le seul produit qui mise<br>vraiment sur le <em>design</em>.',
        lede: 'Les concurrents sont fonctionnels mais fades. Carté est la première carte virtuelle pensée pour le networking africain — belle, légère, et qui marche sur tous les téléphones.',
        f1_t: "Design d'abord",
        f1_d: 'Quatre ambiances typées, trois typographies, quatre dispositions — toutes les combinaisons restent soignées.',
        f2_t: 'Sans application',
        f2_d: 'Vos contacts ouvrent votre carte dans leur navigateur. iPhone, Android, connexion lente — partout, instantanément.',
        f3_t: 'QR à vos couleurs',
        f3_d: 'Le QR code reprend votre palette et porte vos initiales — fini le carré noir générique.',
        f4_t: 'Statistiques claires',
        f4_d: "Vues, scans, contacts enregistrés, sources de partage. Et un annuaire pour les équipes.",
      },
      how: {
        eyebrow: 'En 3 étapes',
        h2: 'Comment ça marche',
        lede: 'De zéro à une carte partagée en moins de deux minutes. Vraiment.',
        s1_t: 'Créez votre compte',
        s1_d: 'Un assistant en quatre étapes vous fait choisir votre style, vos infos, et vous donne une carte prête à partager.',
        s2_t: 'Personnalisez dans le Studio',
        s2_d: 'Ambiance, couleur, typo, disposition, mouvement — composez votre carte avec un aperçu live à chaque réglage.',
        s3_t: "Partagez d'un scan",
        s3_d: 'QR aux couleurs de votre marque, lien WhatsApp, ou tag NFC. Les coordonnées sont enregistrées en un geste.',
      },
      show: {
        eyebrow: 'Les ambiances',
        h2_html: 'Quatre identités,<br>une infinité de combinaisons.',
        lede: 'Chaque ambiance compose avec votre couleur, votre typographie et votre disposition pour donner une carte qui vous ressemble — toujours.',
        a1_t: 'Papier', a1_d: 'éditorial · serif',
        a2_t: 'Aurora', a2_d: 'dark · glass',
        a3_t: 'Bloc',   a3_d: 'couleur · audacieux',
        a4_t: 'Ardoise', a4_d: 'technique · mat',
      },
      pricing: {
        eyebrow: 'Tarifs',
        h2: 'Honnête. Sans surprise.',
        lede: 'Le gratuit est vraiment utilisable. Le payant ouvre les fonctions avancées — payez par Mobile Money ou carte.',
        most: 'Le plus choisi',
        per_month_s: '/ mois', per_year_s: '/ an', annual_label: 'Paiement annuel', annual_save: 'Le meilleur prix', annual_eq: 'soit ≈ 2 080 FCFA / mois', annual_renew: 'Renouvelé chaque année',
        free_t: 'Gratuit',
        free_p_html: '0 FCFA<small>/ pour toujours</small>',
        free_d: 'Tout ce qu\'il faut pour démarrer.',
        free_f1: 'Une carte, un lien public',
        free_f2: 'QR code & vCard universels',
        free_f3: '3 ambiances de base',
        free_f4: 'Statistiques 7 jours',
        free_cta: 'Commencer gratuitement',
        pro_t: 'Pro',
        pro_p_html: '3 000 FCFA<small>/ mois · ~5 €</small>',
        pro_d: 'Pour les indépendants & freelances.',
        pro_f1: 'Cartes illimitées',
        pro_f2: 'Toutes les ambiances & dispositions',
        pro_f3: 'Couverture photo & mouvement',
        pro_f4: 'QR à vos couleurs, lien personnalisé',
        pro_f5: 'Statistiques illimitées',
        pro_cta: 'Passer en Pro',
        ent_t: 'Entreprise',
        ent_p: 'Sur devis',
        ent_d: 'Pour les équipes & agences.',
        ent_f1: 'Tout du plan Pro',
        ent_f2: 'Marque verrouillée (logo, couleurs)',
        ent_f3: "Annuaire d'équipe & SSO",
        ent_f4: 'Cartes NFC personnalisées',
        ent_f5: 'Support prioritaire FR & EN',
        ent_cta: "Parler à l'équipe",
      },
      tm: {
        q1: '« Enfin une carte virtuelle qui ne ressemble pas à un formulaire. Mes clients la commentent. »',
        n1: 'Awa Diallo',
        r1: 'Architecte · Studio Awa, Dakar',
        q2: "« On a déployé Carté à toute l'équipe en une après-midi. La marque reste cohérente partout, sans qu'on ait à surveiller. »",
        n2: 'Tunde Adeyemi',
        r2: 'CEO · Atelier Lagos',
        q3: '« Enfin un outil pensé pour nous : Mobile Money, FR et EN, et rapide même quand le réseau est lent. »',
        n3: 'Wanjiru Kamau',
        r3: 'Consultante · Nairobi',
      },
      faq: {
        eyebrow: 'FAQ',
        h2: 'Questions fréquentes',
        q1: "Mes contacts doivent-ils installer une application ?",
        a1: "Non. La carte s'ouvre dans le navigateur, sur iPhone comme sur Android. Aucune installation, aucun compte requis de leur côté.",
        q2: "« Ajouter aux contacts » fonctionne-t-il sur Android ?",
        a2: "Oui. Le bouton génère un fichier vCard (.vcf), reconnu nativement par iOS et Android. Le contact est ajouté en un geste.",
        q3: "Puis-je modifier ma carte après l'avoir publiée ?",
        a3: "À tout moment, depuis le Studio. Les changements sont instantanés — votre QR et votre lien pointent toujours vers la version à jour.",
        q4: "Mes données sont-elles hébergées en Europe ?",
        a4: "La démo actuelle ne collecte aucune donnée : tout reste dans votre navigateur. À l'ouverture du service complet, vos données seront hébergées dans l'Union européenne (RGPD), exportables et supprimables à tout moment.",
        q5: "Que faut-il pour passer en plan Entreprise ?",
        a5: "Un échange de 20 minutes avec notre équipe pour cadrer vos besoins (équipe, intégrations, NFC), puis un devis sur mesure. Aucun engagement avant validation.",
      },
      final: {
        h2_html: 'Une carte qu\'on a envie de <em>donner</em>.',
        lede: 'Créez la vôtre en moins de deux minutes — gratuitement, sans carte bancaire.',
        cta_primary: 'Créer ma carte',
        cta_ghost: 'Voir une démo',
      },
      footer: {
        tag: 'La carte de visite virtuelle pensée pour les professionnels africains.',
        h_product: 'Produit', h_resources: 'Ressources', h_company: 'Société',
        product: ['Fonctionnalités', 'Studio', 'Espace entreprise', 'Tarifs'],
        resources: ["Mode d'emploi", "Centre d'aide", 'Blog', 'Changelog'],
        company: ['À propos', 'Contact', 'Confidentialité', 'Mentions légales'],
        copyright: '© 2026 Carté. Tous droits réservés.',
        place: 'Conçu avec soin, de Dakar à Nairobi.',
      },

      // Public card (cards A/B/C) — shared UI chrome
      card: {
        save: 'Enregistrer le contact',
        save_long: 'Ajouter à mes contacts',
        exchange: 'Échanger nos coordonnées',
        scan_label: 'Scannez la carte',
        scan_title: 'Scannez ma carte',
        scan_follow: 'Scannez pour me suivre',
        save_sheet_title_role_sep: ' · ',
        save_sheet_btn: 'Ajouter à mes contacts',
        save_sheet_done: 'Contact enregistré',
        save_fields: { phone: 'Téléphone', email: 'E-mail', site: 'Site', location: 'Localisation' },
        ex_title: 'Partagez vos coordonnées',
        ex_sub:   'Awa vous recontactera.',
        ex_name:  'Nom complet',
        ex_email: 'E-mail',
        ex_company: 'Société (optionnel)',
        ex_send:  'Envoyer',
        ex_done_t: 'Coordonnées envoyées',
        ex_done_d: 'Awa recevra vos informations.',
        // Aurora quick actions
        qa_call: 'Appeler', qa_mail: 'E-mail', qa_site: 'Site', qa_rdv: 'RDV',
        qa_instagram: 'Instagram', qa_linkedin: 'LinkedIn', qa_share: 'Partager',
        // Édition
        ed_phone: 'Téléphone', ed_email: 'E-mail', ed_site: 'Site',
        // Bloc
        bl_call: 'Appeler', bl_mail: 'E-mail', bl_site: 'Site web',
        bl_loc:  'Localisation', bl_save: 'Ajouter à mes contacts',
      },

      // App shell
      app: {
        tab_home: 'Accueil', tab_studio: 'Studio', tab_team: 'Équipe', tab_edit: 'Modifier',
        // Dashboard
        greet: 'Bonjour, {name}',
        home: 'Accueil',
        card_published: 'Carte publiée',
        kpi_views: 'Vues (30 j)',
        kpi_scans: 'Scans QR',
        kpi_saves: 'Contacts enreg.',
        kpi_ex: 'Échanges reçus',
        sec_trend: 'Vues de la carte',
        today: 'aujourd\'hui',
        vs_lw: 'vs sem. dern.',
        sec_sources: 'Sources de partage',
        src_qr: 'QR code', src_link: 'WhatsApp / lien', src_nfc: 'Tag NFC',
        sec_recent: 'Contacts récents',
        see_all: 'Tout voir',
        ago_h: 'il y a {n} h', ago_d: 'il y a {n} j', ago_yesterday: 'hier',
        // Company
        co_header: 'Carté · Entreprise',
        co_brand: 'Marque de l\'équipe',
        co_brand_lock: 'Thème, couleurs et logo {bold} — chaque carte d\'équipe en hérite automatiquement.',
        co_brand_lock_bold: 'verrouillés',
        co_ambiance: 'Ambiance', co_accent: 'Accent',
        co_team_n: 'Équipe · {n} actifs',
        co_invite: '+ Inviter',
        co_invited: 'Invité·e',
        co_views: 'vues',
        co_total_t: 'Vues cumulées de l\'équipe',
        reset: 'Réinitialiser la démo',
      },

      // Onboarding
      ob: {
        welcome_h1_html: 'Votre carte de visite, repensée.',
        welcome_lede: "Une carte digitale aussi soignée qu'une carte gravée. Partagez-la d'un scan, sans application pour vos contacts.",
        welcome_f1: 'Partage instantané par QR, lien ou NFC',
        welcome_f2: 'Vos contacts vous enregistrent en un geste',
        welcome_f3: 'Des modèles vraiment beaux, à votre marque',
        welcome_cta: 'Créer ma carte',
        already: 'Déjà un compte ?',
        signin: 'Se connecter',
        kind_h: "C'est pour qui ?", kind_sub: 'On adapte Carté à votre usage.',
        kind_indi_t: 'Pour moi', kind_indi_d: 'Indépendant, freelance, perso',
        kind_team_t: 'Pour mon équipe', kind_team_d: 'Marque commune, cartes liées',
        info_h: 'Vos informations', info_sub: "L'essentiel — vous compléterez après.",
        info_name: 'Nom complet', info_role_solo: 'Métier', info_role_team: 'Poste · Société',
        amb_h: 'Choisissez une ambiance', amb_sub: 'Vous pourrez tout affiner dans le Studio.',
        continue: 'Continuer', create_card: 'Créer ma carte ✦',
      },

      // Studio editor (highlights only — section labels)
      studio: {
        title: 'Studio', preview: 'Aperçu', preview_live: 'Aperçu live',
        publish: 'Publier ma carte', published: 'Carte publiée',
        sec_amb: 'Ambiance', sec_color: "Couleur d'accent",
        sec_typo: 'Typographie', sec_layout: 'Disposition',
        sec_motion: 'Mouvement', sec_shape: 'Forme',
        sec_info: 'Informations', sec_contact: 'Coordonnées', sec_social: 'Réseaux',
        typo_ed_t: 'Éditorial', typo_ed_s: 'serif',
        typo_mod_t: 'Moderne', typo_mod_s: 'grotesk',
        typo_tech_t: 'Technique', typo_tech_s: 'mono',
        lay_center: 'Centré', lay_ed: 'Éditorial', lay_bento: 'Bento', lay_full: 'Plein écran',
        mo_static: 'Statique', mo_soft: 'Doux', mo_anim: 'Animé',
        sh_sharp: 'Vif', sh_soft: 'Doux', sh_round: 'Rond',
        cover_hint: "Disposition « Plein écran » : ouvrez l'aperçu et glissez votre propre photo de couverture dans la carte.",
        f_name: 'Nom complet', f_role: 'Métier', f_company: 'Société', f_tagline: 'Accroche',
        f_phone: 'Téléphone', f_email: 'E-mail', f_site: 'Site web',
        f_location: 'Localisation',
        f_instagram: 'Instagram', f_linkedin: 'LinkedIn',
      },

      // Lang switcher
      lang: { fr: 'FR', en: 'EN', aria: 'Changer de langue' },
    },

    en: {
      wl: {
        eyebrow: 'Waitlist',
        h2: 'Be the first to know at launch',
        lede: 'Carté is coming soon. Drop your email — you\'ll be among the first to know, with a launch offer.',
        placeholder: 'Your email address',
        btn: 'Notify me',
        done: 'Thanks! You\'re on the list. See you soon.',
        privacy: 'No spam. Unsubscribe in one click.',
      },
      meta: {
        title: 'Carté — The virtual business card, rethought.',
        desc: 'A digital card as crafted as an engraved one. Share it with one scan — no app for your contacts. Design-first.',
      },
      nav: {
        features: 'Features', how: 'How it works', pricing: 'Pricing', faq: 'FAQ',
        signin: 'Sign in', cta: 'Create my card',
      },
      hero: {
        eyebrow: 'Virtual business card',
        h1_html: 'Your business card,<br><em>rethought.</em>',
        lede_html: 'A digital card as crafted as an engraved one. Share it with a scan or on WhatsApp — it opens on any phone, <b>no app, even on 3G</b>.',
        cta_primary: 'Create my card free →',
        cta_ghost: 'See a demo',
        trust_1: 'Free, no credit card',
        trust_2: 'iOS & Android',
        trust_3: 'Built for Africa · FR & EN',
      },
      logos: { adopted: 'Trusted by' },
      features: {
        eyebrow: 'Why Carté',
        h2_html: 'The only product that<br>truly bets on <em>design</em>.',
        lede: 'Competitors are functional but bland. Carté is the first virtual card built for African networking — beautiful, lightweight, works on every phone.',
        f1_t: 'Design first',
        f1_d: 'Four distinctive moods, three typefaces, four layouts — every combination stays beautifully composed.',
        f2_t: 'No app',
        f2_d: 'Your contacts open your card in their browser. iPhone, Android, slow connections — everywhere, instantly.',
        f3_t: 'QR in your colors',
        f3_d: 'The QR code uses your palette and carries your initials — no more generic black square.',
        f4_t: 'Clear analytics',
        f4_d: 'Views, scans, saved contacts, share sources. And a team directory for companies.',
      },
      how: {
        eyebrow: 'In 3 steps',
        h2: 'How it works',
        lede: 'From zero to a shared card in under two minutes. Really.',
        s1_t: 'Create your account',
        s1_d: 'A four-step assistant lets you pick your style, your info, and gives you a card ready to share.',
        s2_t: 'Personalize in the Studio',
        s2_d: 'Mood, color, type, layout, motion — compose your card with a live preview at every tweak.',
        s3_t: 'Share with a scan',
        s3_d: 'A branded QR, a WhatsApp-ready link, or an NFC tag. Contacts are saved with a single tap.',
      },
      show: {
        eyebrow: 'The moods',
        h2_html: 'Four identities,<br>endless combinations.',
        lede: 'Each mood composes with your color, your typography and your layout to deliver a card that looks like you — every time.',
        a1_t: 'Paper', a1_d: 'editorial · serif',
        a2_t: 'Aurora', a2_d: 'dark · glass',
        a3_t: 'Bloc',   a3_d: 'colorful · bold',
        a4_t: 'Slate',  a4_d: 'technical · matte',
      },
      pricing: {
        eyebrow: 'Pricing',
        h2: 'Honest. No surprises.',
        lede: 'The free plan is genuinely usable. Paid unlocks the advanced bits — pay by Mobile Money or card.',
        most: 'Most popular',
        per_month_s: '/ month', per_year_s: '/ year', annual_label: 'Annual billing', annual_save: 'Best value', annual_eq: '≈ 2,080 FCFA / month', annual_renew: 'Renews every year',
        free_t: 'Free',
        free_p_html: '0 FCFA<small>/ forever</small>',
        free_d: 'Everything you need to get going.',
        free_f1: 'One card, one public link',
        free_f2: 'Universal QR & vCard',
        free_f3: '3 starter moods',
        free_f4: '7-day analytics',
        free_cta: 'Start free',
        pro_t: 'Pro',
        pro_p_html: '3,000 FCFA<small>/ month · ~€5</small>',
        pro_d: 'For freelancers & solo professionals.',
        pro_f1: 'Unlimited cards',
        pro_f2: 'All moods & layouts',
        pro_f3: 'Cover photo & motion',
        pro_f4: 'Branded QR, custom link',
        pro_f5: 'Unlimited analytics',
        pro_cta: 'Get Pro',
        ent_t: 'Enterprise',
        ent_p: 'On request',
        ent_d: 'For teams & agencies.',
        ent_f1: 'Everything in Pro',
        ent_f2: 'Locked brand (logo, colors)',
        ent_f3: 'Team directory & SSO',
        ent_f4: 'Custom NFC cards',
        ent_f5: 'Priority support in FR & EN',
        ent_cta: 'Talk to sales',
      },
      tm: {
        q1: '"At last a virtual card that doesn\'t look like a form. My clients comment on it."',
        n1: 'Awa Diallo', r1: 'Architect · Studio Awa, Dakar',
        q2: '"We rolled Carté out to the whole team in an afternoon. The brand stays consistent everywhere, with zero policing."',
        n2: 'Tunde Adeyemi', r2: 'CEO · Atelier Lagos',
        q3: '"At last a tool built for us: Mobile Money, FR and EN, and fast even on a slow network."',
        n3: 'Wanjiru Kamau', r3: 'Consultant · Nairobi',
      },
      faq: {
        eyebrow: 'FAQ', h2: 'Frequently asked',
        q1: 'Do my contacts need to install an app?',
        a1: 'No. The card opens in the browser on iPhone and Android. No install, no account on their side.',
        q2: 'Does "Save to contacts" work on Android?',
        a2: 'Yes. The button generates a vCard (.vcf) file, natively recognized on iOS and Android. One tap and they\'re saved.',
        q3: 'Can I edit my card after publishing?',
        a3: 'Anytime, from the Studio. Changes are instant — your QR and your link always point to the latest version.',
        q4: 'Is my data hosted in Europe?',
        a4: 'The current demo collects no data: everything stays in your browser. When the full service launches, your data will be hosted in the European Union (GDPR), exportable and deletable at any time.',
        q5: 'What\'s needed to move to the Enterprise plan?',
        a5: 'A 20-minute call with our team to scope your needs (team size, integrations, NFC), then a tailored quote. No commitment before signing off.',
      },
      final: {
        h2_html: 'A card you actually want to <em>hand out</em>.',
        lede: 'Create yours in under two minutes — free, no credit card.',
        cta_primary: 'Create my card', cta_ghost: 'See a demo',
      },
      footer: {
        tag: 'The virtual business card built for African professionals.',
        h_product: 'Product', h_resources: 'Resources', h_company: 'Company',
        product: ['Features', 'Studio', 'Enterprise', 'Pricing'],
        resources: ['User guide', 'Help center', 'Blog', 'Changelog'],
        company: ['About', 'Contact', 'Privacy', 'Legal'],
        copyright: '© 2026 Carté. All rights reserved.',
        place: 'Crafted with care, from Dakar to Nairobi.',
      },

      card: {
        save: 'Save contact',
        save_long: 'Add to my contacts',
        exchange: 'Share contacts',
        scan_label: 'Scan the card',
        scan_title: 'Scan my card',
        scan_follow: 'Scan to follow',
        save_sheet_title_role_sep: ' · ',
        save_sheet_btn: 'Add to my contacts',
        save_sheet_done: 'Contact saved',
        save_fields: { phone: 'Phone', email: 'Email', site: 'Website', location: 'Location' },
        ex_title: 'Share your contact info',
        ex_sub:   'Awa will get back to you.',
        ex_name:  'Full name',
        ex_email: 'Email',
        ex_company: 'Company (optional)',
        ex_send:  'Send',
        ex_done_t: 'Details sent',
        ex_done_d: 'Awa will receive your info.',
        qa_call: 'Call', qa_mail: 'Email', qa_site: 'Site', qa_rdv: 'Meet',
        qa_instagram: 'Instagram', qa_linkedin: 'LinkedIn', qa_share: 'Share',
        ed_phone: 'Phone', ed_email: 'Email', ed_site: 'Site',
        bl_call: 'Call', bl_mail: 'Email', bl_site: 'Website',
        bl_loc:  'Location', bl_save: 'Add to my contacts',
      },

      app: {
        tab_home: 'Home', tab_studio: 'Studio', tab_team: 'Team', tab_edit: 'Edit',
        greet: 'Hi, {name}',
        home: 'Home',
        card_published: 'Card published',
        kpi_views: 'Views (30 d)',
        kpi_scans: 'QR scans',
        kpi_saves: 'Saved contacts',
        kpi_ex: 'Contacts received',
        sec_trend: 'Card views',
        today: 'today',
        vs_lw: 'vs last week',
        sec_sources: 'Share sources',
        src_qr: 'QR code', src_link: 'WhatsApp / link', src_nfc: 'NFC tag',
        sec_recent: 'Recent contacts',
        see_all: 'See all',
        ago_h: '{n} h ago', ago_d: '{n} d ago', ago_yesterday: 'yesterday',
        co_header: 'Carté · Enterprise',
        co_brand: 'Team brand',
        co_brand_lock: 'Theme, colors and logo are {bold} — every team card inherits them automatically.',
        co_brand_lock_bold: 'locked',
        co_ambiance: 'Mood', co_accent: 'Accent',
        co_team_n: 'Team · {n} active',
        co_invite: '+ Invite',
        co_invited: 'Invited',
        co_views: 'views',
        co_total_t: 'Team views (total)',
        reset: 'Reset the demo',
      },

      ob: {
        welcome_h1_html: 'Your business card, rethought.',
        welcome_lede: 'A digital card as crafted as an engraved one. Share it with a scan, no app for your contacts.',
        welcome_f1: 'Instant share via QR, link or NFC',
        welcome_f2: 'Contacts save you with a single tap',
        welcome_f3: 'Beautifully crafted templates, on-brand',
        welcome_cta: 'Create my card',
        already: 'Already have an account?', signin: 'Sign in',
        kind_h: 'Who is it for?', kind_sub: 'Carté adapts to your use.',
        kind_indi_t: 'For me', kind_indi_d: 'Solo, freelancer, personal',
        kind_team_t: 'For my team', kind_team_d: 'Shared brand, linked cards',
        info_h: 'Your information', info_sub: 'The essentials — finish later.',
        info_name: 'Full name', info_role_solo: 'Job', info_role_team: 'Title · Company',
        amb_h: 'Pick a mood', amb_sub: "You'll fine-tune everything in the Studio.",
        continue: 'Continue', create_card: 'Create my card ✦',
      },

      studio: {
        title: 'Studio', preview: 'Preview', preview_live: 'Live preview',
        publish: 'Publish my card', published: 'Card published',
        sec_amb: 'Mood', sec_color: 'Accent color',
        sec_typo: 'Typography', sec_layout: 'Layout',
        sec_motion: 'Motion', sec_shape: 'Shape',
        sec_info: 'Information', sec_contact: 'Contact', sec_social: 'Socials',
        typo_ed_t: 'Editorial', typo_ed_s: 'serif',
        typo_mod_t: 'Modern', typo_mod_s: 'grotesk',
        typo_tech_t: 'Technical', typo_tech_s: 'mono',
        lay_center: 'Centered', lay_ed: 'Editorial', lay_bento: 'Bento', lay_full: 'Full bleed',
        mo_static: 'Static', mo_soft: 'Soft', mo_anim: 'Animated',
        sh_sharp: 'Sharp', sh_soft: 'Soft', sh_round: 'Round',
        cover_hint: 'Full-bleed layout: open the preview and drop your own cover photo onto the card.',
        f_name: 'Full name', f_role: 'Job', f_company: 'Company', f_tagline: 'Tagline',
        f_phone: 'Phone', f_email: 'Email', f_site: 'Website',
        f_location: 'Location',
        f_instagram: 'Instagram', f_linkedin: 'LinkedIn',
      },

      lang: { fr: 'FR', en: 'EN', aria: 'Change language' },
    },

    // ── Hausa ──────────────────────────────────────────────────────
    // Missing keys fall back to FR automatically.
    ha: {
      wl: {
        eyebrow: 'Jerin jira',
        h2: 'Ka kasance na farko da zai sani',
        lede: 'Carté na zuwa nan ba da jimawa ba. Bar imel ɗinka — za ka kasance cikin na farko da za su sani, da tayin ƙaddamarwa.',
        placeholder: 'Adireshin imel ɗinka',
        btn: 'Sanar da ni',
        done: 'Na gode! Kana cikin jerin. Sai an jima.',
        privacy: 'Babu spam. Cire rajista da danna ɗaya.',
      },
      meta: {
        title: 'Carté — Katin kasuwanci na dijital, an sabunta shi.',
        desc: 'Kati na dijital mai kyau. Raba shi da scan ɗaya ko ta WhatsApp — ba app ga abokanka. An gina don Afirka.',
      },
      nav: { features: 'Fasaloli', how: 'Yadda yake aiki', pricing: 'Farashi', faq: 'Tambayoyi', signin: 'Shiga', cta: 'Ƴirƴiri katina' },
      hero: {
        eyebrow: 'Katin kasuwanci na dijital',
        h1_html: 'Katin kasuwancinka,<br><em>an sabunta shi.</em>',
        lede_html: 'Kati na dijital mai kyau kamar wanda aka zana. Raba shi da scan ɗaya ko ta WhatsApp — yana buɗewa a kowace waya, <b>ba sai an sauke app ba, ko da 3G</b>.',
        cta_primary: 'Ƴirƴiri katina kyauta →',
        cta_ghost: 'Duba misali',
        trust_1: 'Kyauta, ba katin banki',
        trust_2: 'iOS & Android',
        trust_3: 'An gina don Afirka · FR & EN',
      },
      logos: { adopted: 'Waɗanda suka amince' },
      features: {
        eyebrow: 'Me yasa Carté',
        h2_html: 'Kayan aiki ɗaya tilo da<br>ya damu da <em>kyau</em>.',
        lede: 'Sauran suna aiki amma ba su da kyau. Carté shine katin dijital na farko da aka gina don haɗin gwiwar Afirka — kyakkyawa, mai sauƴi, yana aiki a kowace waya.',
        f1_t: 'Kyau da farko',
        f1_d: 'Salo huɗu, rubutu uku, shimfiɗa huɗu — kowane haɗi yana da kyau.',
        f2_t: 'Ba app',
        f2_d: "Abokanka suna buɗe katinka a browser. iPhone, Android, ko da intanet a hankali — ko'ina, nan take.",
        f3_t: 'QR da launukanka',
        f3_d: "QR ɗin yana ɗaukar launukanka da haruffanka — ba baƴar murabba'i na kowa ba.",
        f4_t: 'Ƴididdiga bayyanannu',
        f4_d: 'Kallo, scan, lambobin da aka adana, hanyoyin rabawa. Da jerin ƴungiya ga kamfanoni.',
      },
      how: {
        eyebrow: 'Mataki 3', h2: 'Yadda yake aiki',
        lede: 'Daga sifili zuwa katin da aka raba cikin ƴasa da minti biyu. Da gaske.',
        s1_t: 'Buɗe asusunka', s1_d: 'Mataimaki mai matakai huɗu zai zaƁi salonka da bayananka, ya ba ka kati shirye don rabawa.',
        s2_t: 'Gyara a cikin Studio', s2_d: 'Yanayi, launi, rubutu, shimfiɗa — gyara katinka tare da duba kai tsaye.',
        s3_t: 'Raba da scan ɗaya', s3_d: 'QR da launukanka, hanyar WhatsApp, ko NFC. Ana adana bayanai da taƁa ɗaya.',
      },
      show: {
        eyebrow: 'Salon gani',
        h2_html: 'Halaye huɗu,<br>haɗi marasa iyaka.',
        lede: 'Kowane salo yana haɗa launinka, rubutunka da shimfiɗarka don ba ka kati irin naka — koyaushe.',
        a1_t: 'Takarda', a1_d: 'edita · serif',
        a2_t: 'Aurora', a2_d: 'duhu · gilashi',
        a3_t: 'Bloc', a3_d: 'launi · ƴarfi',
        a4_t: 'Allo', a4_d: 'fasaha · mat',
      },
      pricing: {
        eyebrow: 'Farashi', h2: 'Gaskiya. Ba abin mamaki.',
        lede: 'Kyauta tana da amfani sosai. Biya yana buɗe ƴarin fasaloli — biya ta Mobile Money ko kati.',
        most: 'Mafi shahara',
        per_month_s: '/ wata', per_year_s: '/ shekara', annual_label: 'Biya na shekara', annual_save: 'Mafi kyau', annual_eq: '≈ 2 080 FCFA / wata', annual_renew: 'Ana sabuntawa kowace shekara',
        free_t: 'Kyauta', free_p_html: '0 FCFA<small>/ har abada</small>', free_d: 'Duk abin da kake buƴata don farawa.',
        free_f1: 'Kati ɗaya, hanya ɗaya', free_f2: 'QR & vCard na duniya', free_f3: 'Salo 3 na farko', free_f4: 'Ƴididdiga kwana 7', free_cta: 'Fara kyauta',
        pro_t: 'Pro', pro_p_html: '3 000 FCFA<small>/ wata · ~5 €</small>', pro_d: 'Don masu zaman kansu.',
        pro_f1: 'Kati marasa iyaka', pro_f2: 'Duk salo & shimfiɗa', pro_f3: 'Hoton bango & motsi', pro_f4: 'QR da launukanka, hanya ta musamman', pro_f5: 'Ƴididdiga marasa iyaka', pro_cta: 'Sami Pro',
        ent_t: 'Kamfani', ent_p: 'A tambaya', ent_d: 'Don ƴungiyoyi & hukumomi.',
        ent_f1: 'Duk na Pro', ent_f2: 'Alamar kamfani (tambari, launuka)', ent_f3: 'Jerin ƴungiya & SSO', ent_f4: 'Katin NFC na musamman', ent_f5: 'Tallafi cikin FR & EN', ent_cta: 'TuntuƁi ƴungiyar',
      },
      tm: {
        q1: '« A ƴarshe kati na dijital da ba ya kama da fom. Abokan cinikina suna yaba shi. »',
        q2: '« Mun kafa Carté ga dukan ƴungiyar cikin yamma ɗaya. Alamar tana nan daidai a duk wuri. »',
        q3: '« A ƴarshe kayan aiki da aka yi mana: Mobile Money, FR da EN, kuma mai sauri ko da intanet a hankali. »',
      },
      faq: {
        eyebrow: 'Tambayoyi', h2: 'Tambayoyin da aka saba',
        q1: 'Shin abokaina suna buƴatar sauke app?',
        a1: "A'a. Katin yana buɗewa a browser, a iPhone da Android. Ba sauke komai, ba asusu.",
        q2: 'Shin « Adana lamba » yana aiki a Android?',
        a2: 'Eh. MaƁallin yana ƴirƴirar fayil ɗin vCard (.vcf) da iOS da Android ke ganewa. TaƁa ɗaya kawai.',
        q3: 'Zan iya gyara katina bayan na wallafa?',
        a3: 'A kowane lokaci, daga Studio. Canje-canje nan take ne — QR da hanyarka koyaushe suna nuna sabuwar siga.',
        q4: 'Ina ake ajiye bayanaina?',
        a4: 'Demo na yanzu ba ya tattara bayanai: komai yana zama a browser ɗinka. Idan cikakken sabis ya buɗe, za a ajiye bayanai a Tarayyar Turai (GDPR).',
        q5: 'Me ake buƴata don shirin Kamfani?',
        a5: 'Tattaunawa na minti 20 da ƴungiyarmu, sai farashi na musamman. Babu alkawari kafin amincewa.',
      },
      final: {
        h2_html: 'Kati da kake son <em>bayarwa</em>.',
        lede: 'Ƴirƴiri naka cikin ƴasa da minti biyu — kyauta, ba katin banki.',
        cta_primary: 'Ƴirƴiri katina', cta_ghost: 'Duba misali',
      },
      footer: {
        tag: 'Katin kasuwanci na dijital da aka gina don ƴwararrun Afirka.',
        h_product: 'Kayayyaki', h_resources: 'Albarkatu', h_company: 'Kamfani',
        product: ['Fasaloli', 'Studio', 'Kamfani', 'Farashi'],
        resources: ['Jagora', 'Cibiyar taimako', 'Blog', 'Canje-canje'],
        company: ['Game da mu', 'TuntuƁa', 'Sirri', 'Doka'],
        copyright: '© 2026 Carté. Duk haƴƴoƴi na ajiye.',
        place: 'An ƴera shi da kulawa, daga Dakar zuwa Nairobi.',
      },
      card: {
        save: 'Adana lamba', save_long: 'Saka cikin lambobina', exchange: 'Mu musanya bayanai',
        scan_label: 'Duba katin', scan_title: 'Duba katina', scan_follow: 'Duba don bin ni',
        save_sheet_btn: 'Saka cikin lambobina', save_sheet_done: 'An adana lamba',
        save_fields: { phone: 'Waya', email: 'Imel', site: 'Yanar gizo', location: 'Wuri' },
        ex_title: 'Raba bayananka', ex_sub: 'Awa za ta tuntuƁe ka.',
        ex_name: 'Cikakken suna', ex_email: 'Imel', ex_company: 'Kamfani (na zaƁi)', ex_send: 'Aika',
        ex_done_t: 'An aika bayanai', ex_done_d: 'Awa za ta karƁi bayananka.',
        qa_call: 'Kira', qa_mail: 'Imel', qa_site: 'Gizo', qa_rdv: 'Ganawa', qa_share: 'Raba',
        ed_phone: 'Waya', ed_email: 'Imel', ed_site: 'Gizo',
        bl_call: 'Kira', bl_mail: 'Imel', bl_site: 'Yanar gizo', bl_loc: 'Wuri', bl_save: 'Saka cikin lambobina',
      },
      app: {
        tab_home: 'Gida', tab_studio: 'Studio', tab_team: 'Ƴungiya', tab_edit: 'Gyara',
        greet: 'Sannu, {name}', home: 'Gida', card_published: 'An wallafa kati',
        kpi_views: 'Kallo (kwana 30)', kpi_scans: 'Scan na QR', kpi_saves: 'Lambobin da aka adana', kpi_ex: 'Bayanan da aka karƁa',
        sec_trend: 'Kallon kati', today: 'yau', vs_lw: 'da makon jiya',
        sec_sources: 'Hanyoyin rabawa', src_qr: 'QR code', src_link: 'WhatsApp / hanya', src_nfc: 'NFC',
        sec_recent: 'Sababbin lambobi', see_all: 'Duba duka',
        ago_h: 'awa {n} da suka wuce', ago_d: 'kwana {n} da suka wuce', ago_yesterday: 'jiya',
        co_header: 'Carté · Kamfani', co_brand: 'Alamar ƴungiya',
        co_brand_lock: 'Salo, launuka da tambari {bold} — kowane katin ƴungiya yana gādon su kai tsaye.',
        co_brand_lock_bold: 'an kulle', co_ambiance: 'Salo', co_accent: 'Launi',
        co_team_n: 'Ƴungiya · {n} masu aiki', co_invite: '+ Gayyata', co_invited: 'An gayyata',
        co_views: 'kallo', co_total_t: 'Jimlar kallon ƴungiya',
      },
      ob: {
        welcome_h1_html: 'Katin kasuwancinka, an sabunta shi.',
        welcome_lede: 'Kati na dijital mai kyau. Raba shi da scan ɗaya, ba app ga abokanka.',
        welcome_f1: 'Rabawa nan take ta QR, hanya ko NFC',
        welcome_f2: 'Abokanka suna adana ka da taƁa ɗaya',
        welcome_f3: 'Zane-zane masu kyau, da alamarka',
        welcome_cta: 'Ƴirƴiri katina', already: 'Kana da asusu?', signin: 'Shiga',
        kind_h: 'Don wa ne?', kind_sub: 'Muna daidaita Carté da bukatarka.',
        kind_indi_t: 'Don ni', kind_indi_d: 'Mai zaman kansa, freelance',
        kind_team_t: 'Don ƴungiyata', kind_team_d: 'Alama ɗaya, katuna masu alaƴa',
        info_h: 'Bayananka', info_sub: 'Mafi mahimmanci — za ka kammala daga baya.',
        info_name: 'Cikakken suna', info_role_solo: "Sana'a", info_role_team: 'Matsayi · Kamfani',
        amb_h: 'ZaƁi salo', amb_sub: 'Za ka iya gyara komai a Studio.',
        continue: 'Ci gaba', create_card: 'Ƴirƴiri katina ✦',
      },
      studio: {
        title: 'Studio', preview: 'Duba', preview_live: 'Duba kai tsaye',
        publish: 'Wallafa katina', published: 'An wallafa kati',
        sec_amb: 'Salo', sec_color: 'Launi', sec_typo: 'Rubutu', sec_layout: 'Shimfiɗa',
        sec_motion: 'Motsi', sec_shape: 'Siffa', sec_info: 'Bayanai', sec_contact: 'Lambobi', sec_social: 'Sada zumunta',
        typo_ed_t: 'Edita', typo_mod_t: 'Zamani', typo_tech_t: 'Fasaha',
        lay_center: 'Tsakiya', lay_ed: 'Edita', lay_bento: 'Bento', lay_full: 'Cikakke',
        mo_static: 'Tsaye', mo_soft: 'Laushi', mo_anim: 'Motsi',
        sh_sharp: 'Kaifi', sh_soft: 'Laushi', sh_round: 'Zagaye',
        cover_hint: 'Shimfiɗa « Cikakke »: buɗe duba ka ja hotonka a kan katin.',
        f_name: 'Cikakken suna', f_role: "Sana'a", f_company: 'Kamfani', f_tagline: 'Taken',
        f_phone: 'Waya', f_email: 'Imel', f_site: 'Yanar gizo', f_location: 'Wuri',
      },
      lang: { aria: 'Canza harshe' },
    },

    // ── Yoruba ──────────────────────────────────────────────────
    yo: {
      wl: {
        eyebrow: 'Àkójọ ìdúró',
        h2: 'Jẹ́ àkọ́kọ́ láti mọ̀ nígbà ìfilọ́lẹ̀',
        lede: 'Carté ń bọ̀ láìpẹ́. Fi ímeèlì rẹ sílẹ̀ — wàá wà lára àwọn àkọ́kọ́ tó máa mọ̀, pẹ̀lú ìpèsè ìfilọ́lẹ̀.',
        placeholder: 'Àdírẹ́sì ímeèlì rẹ',
        btn: 'Sọ fún mi',
        done: 'O ṣeun! O wà lórí àkójọ. Ó dìgbà.',
        privacy: 'Kò sí spam. Yọ orúkọ sílẹ̀ pẹ̀lú ìtẹ̀ kan.',
      },
      meta: {
        title: 'Carté — Káàdì iṣẹ́ oní-díjítà, a tún un ṣe.',
        desc: 'Káàdì díjítà tó lẹ́wa. Pín in pẹ̀lú scan kan tàbí lórí WhatsApp — láìsí app fún àwọn alábàárin rẹ. A kọ́ fún Áfríkà.',
      },
      nav: { features: 'Àwọn ẹ̀yà', how: 'Bí ó ṣe ń ṣiṣẹ́', pricing: 'Iye owó', faq: 'FAQ', signin: 'Wọlé', cta: 'Ṣẹ̀dá káàdì mi' },
      hero: {
        eyebrow: 'Káàdì iṣẹ́ oní-díjítà',
        h1_html: 'Káàdì iṣẹ́ rẹ,<br><em>a tún un ṣe.</em>',
        lede_html: 'Káàdì díjítà tó dára bí èyí tí a tẹ̀. Pín in pẹ̀lú scan kan tàbí lórí WhatsApp — ó ń ṣí lórí gbogbo fóònù, <b>láìsí app, kódà lórí 3G</b>.',
        cta_primary: 'Ṣẹ̀dá káàdì mi lọ́fẹ̀ẹ́ →',
        cta_ghost: 'Wo àpẹẹrẹ',
        trust_1: 'Ọ̀fẹ́, láìsí káàdì banki',
        trust_2: 'iOS & Android',
        trust_3: 'A kọ́ fún Áfríkà · FR & EN',
      },
      logos: { adopted: 'Àwọn tó gbà á' },
      features: {
        eyebrow: 'Kí ló dé Carté',
        h2_html: 'Ọjà kan ṣoṣo tó fi<br><em>ẹwà</em> ṣáájú.',
        lede: 'Àwọn mìíràn ń ṣiṣẹ́ ṣùgbọ́n wọn kò lẹ́wa. Carté ni káàdì díjítà àkọ́kọ́ tí a kọ́ fún ìbáṣepọ̀ Áfríkà — ẹlẹ́wa, fẹ́rẹ́, ó ń ṣiṣẹ́ lórí gbogbo fóònù.',
        f1_t: 'Ẹwà ṣáájú',
        f1_d: 'Àyíká mẹ́rin, ìkọ̀wé mẹ́ta, ìtò mẹ́rin — gbogbo àkópọ̀ máa ń dára.',
        f2_t: 'Láìsí app',
        f2_d: 'Àwọn alábàárin rẹ ń ṣí káàdì rẹ nínú browser. iPhone, Android, kódà nẹ́tíwọ̀kì tó lọ́ra — níbi gbogbo, lẹ́sẹ̀kẹsẹ̀.',
        f3_t: 'QR ní àwọ̀ rẹ',
        f3_d: 'QR náà ń lo àwọ̀ rẹ àti àmì orúkọ rẹ — kò sí onígun dúdú lásán mọ́.',
        f4_t: 'Ìṣirò tó ṣe kedere',
        f4_d: 'Ìwò, scan, olubasọrọ tí a fipamọ́, àwọn ọ̀nà pínpín. Àti àkójọ ẹgbẹ́ fún ilé-iṣẹ́.',
      },
      how: {
        eyebrow: 'Ìgbésẹ̀ 3', h2: 'Bí ó ṣe ń ṣiṣẹ́',
        lede: 'Láti òfo dé káàdì tí a pín ní ìṣẹ́jú méjì. Lóòótọ́.',
        s1_t: 'Ṣẹ̀dá àkáǹtì rẹ', s1_d: 'Olùrànlọ́wọ́ ìgbésẹ̀ mẹ́rin yóò jẹ́ kí o yan ara rẹ, àlàyé rẹ, kí o sì ní káàdì tó ṣetán.',
        s2_t: 'Ṣe àtúnṣe nínú Studio', s2_d: 'Àyíká, àwọ̀, ìkọ̀wé, ìtò — ṣe káàdì rẹ pẹ̀lú àwòrán tó ń yí padà lẹ́sẹ̀kẹsẹ̀.',
        s3_t: 'Pín pẹ̀lú scan kan', s3_d: 'QR ní àwọ̀ rẹ, ọ̀nà WhatsApp, tàbí NFC. A ń fi olubasọrọ pamọ́ pẹ̀lú ìfọwọ́kan kan.',
      },
      show: {
        eyebrow: 'Àwọn àyíká',
        h2_html: 'Ìdánimọ̀ mẹ́rin,<br>àkópọ̀ àìlópin.',
        lede: 'Àyíká kọ̀ọ̀kan ń darapọ̀ mọ́ àwọ̀ rẹ, ìkọ̀wé rẹ àti ìtò rẹ láti fún ọ ní káàdì tó dà bí ìwọ — nígbà gbogbo.',
        a1_t: 'Bébà', a1_d: 'olóòtú · serif',
        a2_t: 'Aurora', a2_d: 'dúdú · gíláàsì',
        a3_t: 'Bloc', a3_d: 'aláwọ̀ · onígboyà',
        a4_t: 'Sílétì', a4_d: 'ìmọ̀-ẹ̀rọ · mátì',
      },
      pricing: {
        eyebrow: 'Iye owó', h2: 'Òtítọ́. Kò sí ìyàlẹ́nu.',
        lede: 'Ọ̀fẹ́ náà wúlò gan-an. Sísanwó ń ṣí àwọn ẹ̀yà tó ga — sanwó nípasẹ̀ Mobile Money tàbí káàdì.',
        most: 'Èyí tí wọ́n yàn jù',
        per_month_s: '/ oṣù', per_year_s: '/ ọdún', annual_label: 'Sisanwó ọdoodún', annual_save: 'Iye tó dára jù', annual_eq: '≈ 2 080 FCFA / oṣù', annual_renew: 'Ó ń tún ṣe lọ́dọọdún',
        free_t: 'Ọ̀fẹ́', free_p_html: '0 FCFA<small>/ títí láé</small>', free_d: 'Gbogbo ohun tí o nílò láti bẹ̀rẹ̀.',
        free_f1: 'Káàdì kan, ọ̀nà kan', free_f2: 'QR & vCard àgbáyé', free_f3: 'Àyíká 3 àkọ́kọ́', free_f4: 'Ìṣirò ọjọ́ 7', free_cta: 'Bẹ̀rẹ̀ lọ́fẹ̀ẹ́',
        pro_t: 'Pro', pro_p_html: '3 000 FCFA<small>/ oṣù · ~5 €</small>', pro_d: 'Fún àwọn òṣìṣẹ́ aládàáni.',
        pro_f1: 'Káàdì àìlópin', pro_f2: 'Gbogbo àyíká & ìtò', pro_f3: 'Fọ́tò ìbòrí & ìṣíkiri', pro_f4: 'QR ní àwọ̀ rẹ, ọ̀nà àkànṣe', pro_f5: 'Ìṣirò àìlópin', pro_cta: 'Gba Pro',
        ent_t: 'Ilé-iṣẹ́', ent_p: 'Béèrè iye', ent_d: 'Fún àwọn ẹgbẹ́ & àjọ.',
        ent_f1: 'Gbogbo Pro', ent_f2: 'Àmì tí a tì (lógò, àwọ̀)', ent_f3: 'Àkójọ ẹgbẹ́ & SSO', ent_f4: 'Káàdì NFC àkànṣe', ent_f5: 'Ìrànlọ́wọ́ ní FR & EN', ent_cta: 'Bá ẹgbẹ́ wa sọ̀rọ̀',
      },
      tm: {
        q1: '« Nígbẹ̀yìn, káàdì díjítà tí kò dà bí fọ́ọ̀mù. Àwọn oníbàárà mi ń yìn ín. »',
        q2: '« A gbé Carté kalẹ̀ fún gbogbo ẹgbẹ́ ní ọ̀sán kan. Àmì wa dúró ṣinṣin níbi gbogbo. »',
        q3: '« Nígbẹ̀yìn, irinṣẹ́ tí a ṣe fún wa: Mobile Money, FR àti EN, ó sì yára kódà lórí nẹ́tíwọ̀kì tó lọ́ra. »',
      },
      faq: {
        eyebrow: 'FAQ', h2: 'Àwọn ìbéèrè loorekoore',
        q1: 'Ṣé àwọn alábàárin mi gbọ́dọ̀ fi app sórí ẹ̀rọ?',
        a1: 'Rárá. Káàdì náà ń ṣí nínú browser, lórí iPhone àti Android. Kò sí ìfisórí, kò sí àkáǹtì.',
        q2: 'Ṣé « Fi pamọ́ sí olubasọrọ » ń ṣiṣẹ́ lórí Android?',
        a2: 'Bẹ́ẹ̀ ni. Bọ́tìnnì náà ń ṣẹ̀dá fáìlì vCard (.vcf) tí iOS àti Android mọ̀. Ìfọwọ́kan kan ṣoṣo.',
        q3: 'Ṣé mo lè ṣàtúnṣe káàdì mi lẹ́yìn títẹ̀jáde?',
        a3: 'Nígbàkigbà, láti Studio. Àyípadà máa ń ṣẹlẹ̀ lẹ́sẹ̀kẹsẹ̀ — QR àti ọ̀nà rẹ máa ń tọ́ka sí ẹ̀dà tuntun.',
        q4: 'Níbo ni a ti ń tọ́jú dátà mi?',
        a4: 'Demo yìí kò gba dátà kankan: gbogbo rẹ̀ wà nínú browser rẹ. Nígbà tí iṣẹ́ kíkun bá bẹ̀rẹ̀, a ó tọ́jú dátà ní European Union (GDPR).',
        q5: 'Kí ni ó nílò fún ètò Ilé-iṣẹ́?',
        a5: 'Ìjíròrò ìṣẹ́jú 20 pẹ̀lú ẹgbẹ́ wa, lẹ́yìn náà iye owó àkànṣe. Kò sí àdéhùn ṣáájú ìfọwọ́sí.',
      },
      final: {
        h2_html: 'Káàdì tí o fẹ́ láti <em>fúnni</em>.',
        lede: 'Ṣẹ̀dá tìrẹ ní ìṣẹ́jú méjì — lọ́fẹ̀ẹ́, láìsí káàdì banki.',
        cta_primary: 'Ṣẹ̀dá káàdì mi', cta_ghost: 'Wo àpẹẹrẹ',
      },
      footer: {
        tag: 'Káàdì iṣẹ́ díjítà tí a kọ́ fún àwọn akọ́ṣẹ́mọṣẹ́ Áfríkà.',
        h_product: 'Ọjà', h_resources: 'Ohun èlò', h_company: 'Ilé-iṣẹ́',
        product: ['Àwọn ẹ̀yà', 'Studio', 'Ilé-iṣẹ́', 'Iye owó'],
        resources: ['Ìtọ́sọ́nà', 'Ibùdó ìrànlọ́wọ́', 'Blog', 'Àyípadà'],
        company: ['Nípa wa', 'Olubasọrọ', 'Àṣírí', 'Òfin'],
        copyright: '© 2026 Carté. Gbogbo ẹ̀tọ́ wà ní ìpamọ́.',
        place: 'A ṣe é pẹ̀lú ìtọ́jú, láti Dakar dé Nairobi.',
      },
      card: {
        save: 'Fi olubasọrọ pamọ́', save_long: 'Fi kún àwọn olubasọrọ mi', exchange: 'Ẹ jẹ́ ká pààrọ̀ àlàyé',
        scan_label: 'Ṣe scan káàdì náà', scan_title: 'Ṣe scan káàdì mi', scan_follow: 'Ṣe scan láti tẹ̀lé mi',
        save_sheet_btn: 'Fi kún àwọn olubasọrọ mi', save_sheet_done: 'A ti fi pamọ́',
        save_fields: { phone: 'Fóònù', email: 'Ímeèlì', site: 'Wẹ́bùsáìtì', location: 'Ibùdó' },
        ex_title: 'Pín àlàyé rẹ', ex_sub: 'Awa yóò kàn sí ọ.',
        ex_name: 'Orúkọ kíkun', ex_email: 'Ímeèlì', ex_company: 'Ilé-iṣẹ́ (àṣàyàn)', ex_send: 'Fi ránṣẹ́',
        ex_done_t: 'A ti fi àlàyé ránṣẹ́', ex_done_d: 'Awa yóò gba àlàyé rẹ.',
        qa_call: 'Pè', qa_mail: 'Ímeèlì', qa_site: 'Sáìtì', qa_rdv: 'Ìpàdé', qa_share: 'Pín',
        ed_phone: 'Fóònù', ed_email: 'Ímeèlì', ed_site: 'Sáìtì',
        bl_call: 'Pè', bl_mail: 'Ímeèlì', bl_site: 'Wẹ́bùsáìtì', bl_loc: 'Ibùdó', bl_save: 'Fi kún àwọn olubasọrọ mi',
      },
      app: {
        tab_home: 'Ilé', tab_studio: 'Studio', tab_team: 'Ẹgbẹ́', tab_edit: 'Ṣàtúnṣe',
        greet: 'Báwo, {name}', home: 'Ilé', card_published: 'A ti tẹ káàdì jáde',
        kpi_views: 'Ìwò (ọjọ́ 30)', kpi_scans: 'Scan QR', kpi_saves: 'Olubasọrọ tí a pamọ́', kpi_ex: 'Àlàyé tí a gbà',
        sec_trend: 'Ìwò káàdì', today: 'lónìí', vs_lw: 'sí ọ̀sẹ̀ tó kọjá',
        sec_sources: 'Àwọn ọ̀nà pínpín', src_qr: 'QR code', src_link: 'WhatsApp / ọ̀nà', src_nfc: 'NFC',
        sec_recent: 'Olubasọrọ tuntun', see_all: 'Wo gbogbo rẹ̀',
        ago_h: 'wákàtí {n} sẹ́yìn', ago_d: 'ọjọ́ {n} sẹ́yìn', ago_yesterday: 'lánàá',
        co_header: 'Carté · Ilé-iṣẹ́', co_brand: 'Àmì ẹgbẹ́',
        co_brand_lock: 'Àyíká, àwọ̀ àti lógò ti {bold} — gbogbo káàdì ẹgbẹ́ ń jogún wọn fúnra rẹ̀.',
        co_brand_lock_bold: 'wà ní títì', co_ambiance: 'Àyíká', co_accent: 'Àwọ̀',
        co_team_n: 'Ẹgbẹ́ · {n} ń ṣiṣẹ́', co_invite: '+ Pè wá', co_invited: 'A ti pè',
        co_views: 'ìwò', co_total_t: 'Àpapọ̀ ìwò ẹgbẹ́',
      },
      ob: {
        welcome_h1_html: 'Káàdì iṣẹ́ rẹ, a tún un ṣe.',
        welcome_lede: 'Káàdì díjítà tó lẹ́wa. Pín in pẹ̀lú scan kan, láìsí app fún àwọn alábàárin rẹ.',
        welcome_f1: 'Pínpín lẹ́sẹ̀kẹsẹ̀ nípa QR, ọ̀nà tàbí NFC',
        welcome_f2: 'Wọ́n ń fi ọ́ pamọ́ pẹ̀lú ìfọwọ́kan kan',
        welcome_f3: 'Àwọn àwòṣe ẹlẹ́wa, ní àmì rẹ',
        welcome_cta: 'Ṣẹ̀dá káàdì mi', already: 'O ní àkáǹtì tẹ́lẹ̀?', signin: 'Wọlé',
        kind_h: 'Fún ta ni?', kind_sub: 'A ó ṣe Carté ní ìbámu pẹ̀lú rẹ.',
        kind_indi_t: 'Fún èmi', kind_indi_d: 'Aládàáni, freelance',
        kind_team_t: 'Fún ẹgbẹ́ mi', kind_team_d: 'Àmì kan náà, káàdì tó so pọ̀',
        info_h: 'Àlàyé rẹ', info_sub: 'Ohun pàtàkì — o lè parí lẹ́yìn.',
        info_name: 'Orúkọ kíkun', info_role_solo: 'Iṣẹ́', info_role_team: 'Ipò · Ilé-iṣẹ́',
        amb_h: 'Yan àyíká kan', amb_sub: 'O lè ṣàtúnṣe ohun gbogbo nínú Studio.',
        continue: 'Tẹ̀síwájú', create_card: 'Ṣẹ̀dá káàdì mi ✦',
      },
      studio: {
        title: 'Studio', preview: 'Àwòrán', preview_live: 'Àwòrán lẹ́sẹ̀kẹsẹ̀',
        publish: 'Tẹ káàdì mi jáde', published: 'A ti tẹ̀ ẹ́ jáde',
        sec_amb: 'Àyíká', sec_color: 'Àwọ̀', sec_typo: 'Ìkọ̀wé', sec_layout: 'Ìtò',
        sec_motion: 'Ìṣíkiri', sec_shape: 'Ìrísí', sec_info: 'Àlàyé', sec_contact: 'Olubasọrọ', sec_social: 'Àjọlò',
        typo_ed_t: 'Olóòtú', typo_mod_t: 'Òde-òní', typo_tech_t: 'Ìmọ̀-ẹ̀rọ',
        lay_center: 'Àárín', lay_ed: 'Olóòtú', lay_bento: 'Bento', lay_full: 'Kíkun',
        mo_static: 'Dúró', mo_soft: 'Rírọ̀', mo_anim: 'Yíyí',
        sh_sharp: 'Mímú', sh_soft: 'Rírọ̀', sh_round: 'Yíká',
        cover_hint: 'Ìtò « Kíkun »: ṣí àwòrán kí o sì fa fọ́tò tirẹ sórí káàdì.',
        f_name: 'Orúkọ kíkun', f_role: 'Iṣẹ́', f_company: 'Ilé-iṣẹ́', f_tagline: 'Gbólóhùn',
        f_phone: 'Fóònù', f_email: 'Ímeèlì', f_site: 'Wẹ́bùsáìtì', f_location: 'Ibùdó',
      },
      lang: { aria: 'Yí èdè padà' },
    },
  };

  // ── Resolve a dotted key against the dict ───────────────────
  function lookup(dict, key) {
    return key.split('.').reduce((o, k) => (o == null ? o : o[k]), dict);
  }

  // ── Public API ──────────────────────────────────────────────
  const KEY = 'carte-lang';
  const SUPPORTED = ['fr', 'en', 'ha', 'yo'];
  const FALLBACK = 'fr';

  function detect() {
    try { const s = localStorage.getItem(KEY); if (SUPPORTED.includes(s)) return s; } catch (e) {}
    const nav = (navigator.language || 'fr').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(nav) ? nav : FALLBACK;
  }

  const I18n = {
    lang: detect(),
    listeners: [],
    t(key, vars) {
      let v = lookup(STRINGS[this.lang], key);
      if (v == null) v = lookup(STRINGS[FALLBACK], key);
      if (v == null) return key;
      if (vars && typeof v === 'string') {
        Object.keys(vars).forEach(k => { v = v.split('{' + k + '}').join(vars[k]); });
      }
      return v;
    },
    setLang(lang) {
      if (!SUPPORTED.includes(lang) || lang === this.lang) return;
      this.lang = lang;
      try { localStorage.setItem(KEY, lang); } catch (e) {}
      document.documentElement.lang = lang;
      this.applyDOM();
      this.listeners.forEach(fn => { try { fn(lang); } catch (e) {} });
    },
    onChange(fn) { this.listeners.push(fn); return () => { this.listeners = this.listeners.filter(f => f !== fn); }; },
    applyDOM() {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const v = this.t(el.getAttribute('data-i18n'));
        if (typeof v === 'string') el.textContent = v;
      });
      document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const v = this.t(el.getAttribute('data-i18n-html'));
        if (typeof v === 'string') el.innerHTML = v;
      });
      document.querySelectorAll('[data-i18n-attr]').forEach(el => {
        const spec = el.getAttribute('data-i18n-attr');
        spec.split(';').forEach(pair => {
          const [attr, key] = pair.split(':').map(s => s.trim());
          if (!attr || !key) return;
          const v = this.t(key);
          if (typeof v === 'string') el.setAttribute(attr, v);
        });
      });
      // title + meta description on the page
      const t = this.t('meta.title');
      if (typeof t === 'string' && document.title) document.title = t;
      const md = document.querySelector('meta[name="description"]');
      const d = this.t('meta.desc');
      if (md && typeof d === 'string') md.setAttribute('content', d);

      // active state on switchers
      document.querySelectorAll('[data-lang-btn]').forEach(b => {
        b.setAttribute('aria-pressed', b.getAttribute('data-lang-btn') === this.lang ? 'true' : 'false');
        b.classList.toggle('on', b.getAttribute('data-lang-btn') === this.lang);
      });
    },
    // Mount a switcher into any element with class .lang-switch (or a custom selector)
    mountSwitcher(rootSelector) {
      const roots = document.querySelectorAll(rootSelector || '.lang-switch');
      roots.forEach(root => {
        if (root.dataset.i18nMounted) return;
        root.dataset.i18nMounted = '1';
        const LABELS = { fr: ['FR', 'Français'], en: ['EN', 'English'], ha: ['HA', 'Hausa'], yo: ['YO', 'Yorùbá'] };
        root.innerHTML = SUPPORTED.map((l) =>
          `<button type="button" data-lang-btn="${l}" aria-label="${LABELS[l][1]}">${LABELS[l][0]}</button>`
        ).join('');
        root.addEventListener('click', (e) => {
          const b = e.target.closest('[data-lang-btn]');
          if (b) this.setLang(b.getAttribute('data-lang-btn'));
        });
      });
    },
    init() {
      document.documentElement.lang = this.lang;
      this.mountSwitcher();
      this.applyDOM();
    },
  };

  window.I18n = I18n;
  window.t = (k, v) => I18n.t(k, v);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => I18n.init());
  } else {
    I18n.init();
  }
})();
