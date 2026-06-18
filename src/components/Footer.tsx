import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { siteConfig } from "@/config/site";

export default function Footer({
  locale,
  dict,
  nav,
}: {
  locale: Locale;
  dict: Dictionary["footer"];
  nav: Dictionary["nav"];
}) {
  const year = 2026;
  const links = [
    { href: "#why", label: nav.why },
    { href: "#services", label: nav.services },
    { href: "#process", label: nav.process },
    { href: "#faq", label: nav.faq },
  ];

  return (
    <footer className="border-t border-white/10 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-2 font-bold text-white">
              L
            </span>
            {siteConfig.brand}
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted">{dict.tagline}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white/80">{dict.navTitle}</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white/80">{dict.contacts}</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a
                href={siteConfig.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                Telegram: @{siteConfig.telegram}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-5 text-sm text-white/40">
        © {year} {siteConfig.brand}. {dict.rights} · {locale.toUpperCase()}
      </div>
    </footer>
  );
}
