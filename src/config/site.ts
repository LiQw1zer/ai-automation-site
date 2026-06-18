// Единый конфиг бренда и контактов. Меняйте значения здесь.
export const siteConfig = {
  brand: "Lumeo AI",
  url: "https://ai-automation-site-zeta.vercel.app", // ← домен сайта (для SEO/OG)
  email: "liqw1zerfn@gmail.com",
  telegram: "Orbitaru7", // username без @
  get telegramUrl() {
    return `https://t.me/${this.telegram}`;
  },
} as const;

export type SiteConfig = typeof siteConfig;
