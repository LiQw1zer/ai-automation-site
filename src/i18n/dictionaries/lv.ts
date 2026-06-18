import type ru from "./ru";

const dict: typeof ru = {
  meta: {
    title: "AI boti biznesam 24/7 — Telegram un WhatsApp",
    description:
      "Lumeo AI — biznesa AI automatizācijas aģentūra. Izstrādājam viedus Telegram un WhatsApp botus: atbildam klientiem 24/7, vācam pieteikumus un paaugstinām biznesa efektivitāti.",
    ogTitle: "Lumeo AI — AI boti biznesam, kas strādā 24/7",
  },
  nav: {
    why: "Priekšrocības",
    services: "Pakalpojumi",
    process: "Kā strādājam",
    faq: "BUJ",
    contact: "Kontakti",
    cta: "Saņemt demo",
  },
  hero: {
    badge: "Biznesa AI automatizācija",
    title: "AI boti biznesam, kas strādā 24/7",
    subtitle:
      "Automatizējiet saziņu ar klientiem Telegram un WhatsApp. Nezaudējiet pieteikumus un ietaupiet darbinieku laiku.",
    ctaPrimary: "Saņemt demo",
    ctaSecondary: "Rakstīt Telegram",
    chat: {
      title: "Lumeo Bot",
      status: "tiešsaistē • atbild uzreiz",
      messages: [
        { from: "client", text: "Sveiki! Vai var pieteikties uz rītdienu?" },
        {
          from: "bot",
          text: "Sveiki! Jā, brīvs ir 11:00 un 15:00. Kurš laiks ir ērtāks?",
        },
        { from: "client", text: "Lai būtu 15:00" },
        {
          from: "bot",
          text: "Gatavs ✅ Pierakstīju jūs uz 15:00. Nosūtīt atgādinājumu stundu iepriekš?",
        },
      ],
    },
  },
  why: {
    title: "Kāpēc izvēlas Lumeo AI",
    subtitle: "Tehnoloģijas, kas strādā jūsu biznesa labā katru dienu.",
    items: [
      { icon: "⚡", title: "Atbild klientiem visu diennakti" },
      { icon: "🧠", title: "Izmanto mākslīgo intelektu" },
      { icon: "📈", title: "Palīdz palielināt pieteikumu skaitu" },
      { icon: "🔗", title: "Integrējas ar CRM un Google Sheets" },
      { icon: "💬", title: "Strādā Telegram un WhatsApp" },
      { icon: "🛠", title: "Pielāgojams jebkuram biznesam" },
    ],
  },
  services: {
    title: "Pakalpojumi",
    subtitle: "Izvēlieties formātu atbilstoši jūsu biznesa vajadzībām.",
    priceFrom: "no",
    cta: "Pasūtīt",
    items: [
      {
        title: "Telegram AI bots",
        price: "50€",
        desc: "Automātiskas atbildes, BUJ, pieteikumu vākšana un nodošana īpašniekam.",
      },
      {
        title: "WhatsApp AI bots",
        price: "70€",
        desc: "Klientu ziņu apstrāde, pieraksts uz pakalpojumiem un atbildes 24/7.",
      },
      {
        title: "Telegram + WhatsApp",
        price: "100€",
        desc: "Vienota pieteikumu apstrādes sistēma divās platformās.",
        featured: true,
      },
      {
        title: "Individuāls AI bots",
        price: "150€",
        desc: "Zināšanu bāzes pieslēgšana, integrācijas un papildu funkcijas.",
      },
    ],
  },
  process: {
    title: "Kā notiek darbs",
    subtitle: "Caurspīdīgs ceļš no pieteikuma līdz projekta palaišanai.",
    steps: [
      "Klients atstāj pieteikumu",
      "Pārrunājam biznesa uzdevumus",
      "Konfigurējam botu",
      "Parādām demo",
      "Palaižam projektu",
    ],
  },
  faq: {
    title: "Biežāk uzdotie jautājumi",
    subtitle: "Īsi par galveno.",
    items: [
      { q: "Cik ilgs ir palaišanas laiks?", a: "Parasti no 1 līdz 5 dienām." },
      {
        q: "Vai var mainīt bota atbildes?",
        a: "Jā, zināšanu bāze tiek atjaunināta jebkurā laikā.",
      },
      { q: "Vai bots strādā naktī?", a: "Jā, bots strādā 24/7." },
      {
        q: "Vai var apskatīt demo?",
        a: "Jā, demonstrācija tiek nodrošināta bez maksas.",
      },
    ],
  },
  contact: {
    title: "Sazinieties ar mums",
    subtitle:
      "Atstājiet pieteikumu — parādīsim bezmaksas bota demonstrāciju jūsu biznesam.",
    telegramLabel: "Telegram",
    emailLabel: "E-pasts",
    cta: "Saņemt bezmaksas demonstrāciju",
  },
  form: {
    title: "Atstājiet pieteikumu",
    subtitle: "Sazināsimies vienas darba dienas laikā.",
    name: "Vārds",
    namePlaceholder: "Kā jūs uzrunāt",
    contact: "Telegram, tālrunis vai e-pasts",
    contactPlaceholder: "@username vai +371...",
    message: "Ziņa",
    messagePlaceholder: "Īsi par jūsu biznesu un uzdevumu",
    submit: "Saņemt bezmaksas demonstrāciju",
    submitting: "Sūtām…",
    success: "Paldies! Pieteikums saņemts — sazināsimies pavisam drīz.",
    error: "Neizdevās nosūtīt. Mēģiniet vēlreiz vai rakstiet mums Telegram.",
  },
  footer: {
    tagline: "AI boti Telegram un WhatsApp, kas strādā 24/7.",
    rights: "Visas tiesības aizsargātas.",
    contacts: "Kontakti",
    navTitle: "Sadaļas",
  },
};

export default dict;
