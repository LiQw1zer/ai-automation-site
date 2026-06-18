import type { Locale } from "./config";
import ru from "./dictionaries/ru";
import lv from "./dictionaries/lv";

export type Dictionary = typeof ru;

const dictionaries: Record<Locale, Dictionary> = { ru, lv };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
