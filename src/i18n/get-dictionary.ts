import type { Locale } from "./config";
import ru from "./dictionaries/ru";
import lv from "./dictionaries/lv";
import en from "./dictionaries/en";

export type Dictionary = typeof ru;

const dictionaries: Record<Locale, Dictionary> = { ru, lv, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
