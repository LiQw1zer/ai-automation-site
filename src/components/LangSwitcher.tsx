"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeNames, locales, type Locale } from "@/i18n/config";

export default function LangSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();

  function pathFor(locale: Locale) {
    const segments = pathname.split("/");
    segments[1] = locale; // первый сегмент — локаль
    return segments.join("/") || `/${locale}`;
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-sm">
      {locales.map((locale) => {
        const active = locale === current;
        return (
          <Link
            key={locale}
            href={pathFor(locale)}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-3 py-1 font-medium transition ${
              active
                ? "bg-brand text-white"
                : "text-white/60 hover:text-white"
            }`}
          >
            {localeNames[locale]}
          </Link>
        );
      })}
    </div>
  );
}
