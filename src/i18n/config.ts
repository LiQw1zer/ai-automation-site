export const locales = ["ru", "lv", "en"] as const;
export const defaultLocale = "ru";

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const localeNames: Record<Locale, string> = {
  ru: "RU",
  lv: "LV",
  en: "EN",
};
