import type ru from "./ru";

const dict: typeof ru = {
  meta: {
    title: "AI bots for business 24/7 — Telegram and WhatsApp",
    description:
      "Lumeo AI — AI automation agency for business. We build smart Telegram and WhatsApp bots: respond to customers 24/7, collect leads, and improve business efficiency.",
    ogTitle: "Lumeo AI — AI bots for business that work 24/7",
  },
  nav: {
    why: "Benefits",
    services: "Services",
    process: "How we work",
    faq: "FAQ",
    contact: "Contacts",
    cta: "Book a demo",
  },
  hero: {
    badge: "AI automation for business",
    title: "AI bots for business that work 24/7",
    subtitle:
      "Automate customer communication in Telegram and WhatsApp. Never miss leads and save your team time.",
    ctaPrimary: "Book a demo",
    ctaSecondary: "Contact on Telegram",
    chat: {
      title: "Lumeo Bot",
      status: "online • responds instantly",
      messages: [
        { from: "client", text: "Hello! Can I book an appointment for tomorrow?" },
        {
          from: "bot",
          text: "Hello! Yes, 11:00 and 15:00 are free. What time works best for you?",
        },
        { from: "client", text: "Let's do 15:00" },
        {
          from: "bot",
          text: "Done ✅ I booked you for 15:00. Shall I send a reminder an hour before?",
        },
      ],
    },
  },
  why: {
    title: "Why businesses choose Lumeo AI",
    subtitle: "Technologies that work for your business every day.",
    items: [
      { icon: "⚡", title: "Responds to customers around the clock" },
      { icon: "🧠", title: "Uses artificial intelligence" },
      { icon: "📈", title: "Helps increase the number of leads" },
      { icon: "🔗", title: "Integrates with CRM and Google Sheets" },
      { icon: "💬", title: "Works in Telegram and WhatsApp" },
      { icon: "🛠", title: "Customizable for any business" },
    ],
  },
  services: {
    title: "Services",
    subtitle: "Choose a format that fits your business needs.",
    priceFrom: "from",
    cta: "Order",
    items: [
      {
        title: "Telegram AI bot",
        price: "50€",
        desc: "Automatic replies, FAQ, lead collection, and handoff to the owner.",
      },
      {
        title: "WhatsApp AI bot",
        price: "70€",
        desc: "Processing customer messages, appointment booking, and 24/7 replies.",
      },
      {
        title: "Telegram + WhatsApp",
        price: "100€",
        desc: "A single system for handling leads on two platforms.",
        featured: true,
      },
      {
        title: "Custom AI bot",
        price: "150€",
        desc: "Knowledge base integration, connectors, and additional features.",
      },
    ],
  },
  process: {
    title: "How the work happens",
    subtitle: "A transparent path from request to launch.",
    steps: [
      "The client submits a request",
      "We discuss business goals",
      "We configure the bot",
      "We show a live demo",
      "We launch the project",
    ],
  },
  faq: {
    title: "Frequently asked questions",
    subtitle: "A quick overview of the essentials.",
    items: [
      { q: "How long does launch take?", a: "Usually from 1 to 5 days." },
      {
        q: "Can the bot answers be changed?",
        a: "Yes, the knowledge base can be updated at any time.",
      },
      { q: "Does the bot work at night?", a: "Yes, it works 24/7." },
      {
        q: "Can I see a demo?",
        a: "Yes, a demonstration is provided free of charge.",
      },
    ],
  },
  contact: {
    title: "Contact us",
    subtitle:
      "Leave a request — we will show you a free bot demo tailored to your business.",
    telegramLabel: "Telegram",
    emailLabel: "Email",
    cta: "Get a free demo",
  },
  form: {
    title: "Leave a request",
    subtitle: "We will get back to you within a working day.",
    name: "Name",
    namePlaceholder: "How should we address you",
    contact: "Telegram, phone or email",
    contactPlaceholder: "@username or +371...",
    message: "Message",
    messagePlaceholder: "A short note about your business and task",
    submit: "Get a free demo",
    submitting: "Sending…",
    success: "Thank you! Your request has been received — we will contact you very soon.",
    error: "Could not send. Please try again or write to us in Telegram.",
  },
  footer: {
    tagline: "AI bots for Telegram and WhatsApp that work 24/7.",
    rights: "All rights reserved.",
    contacts: "Contacts",
    navTitle: "Sections",
  },
};

export default dict;
