"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { siteConfig } from "@/config/site";
import LangSwitcher from "./LangSwitcher";

export default function Header({
  locale,
  nav,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
}) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#why", label: nav.why },
    { href: "#services", label: nav.services },
    { href: "#process", label: nav.process },
    { href: "#faq", label: nav.faq },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href={`/${locale}`} className="flex items-center gap-2 font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-2 font-bold text-white">
            L
          </span>
          <span>{siteConfig.brand}</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitcher current={locale} />
          <a
            href="#contact"
            className="hidden rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 sm:inline-block"
          >
            {nav.cta}
          </a>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 md:hidden"
          >
            <span className="text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-white/80">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-1 transition hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-brand px-4 py-2 text-center font-medium text-white"
            >
              {nav.cta}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
