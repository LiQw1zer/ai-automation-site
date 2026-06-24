import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../globals.css";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { siteConfig } from "@/config/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  const title = `${siteConfig.brand} — ${dict.meta.title}`;
  const ogTitle = dict.meta.ogTitle;

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { ru: "/ru", lv: "/lv", en: "/en" },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.brand,
      title: ogTitle,
      description: dict.meta.description,
      url: `/${locale}`,
      locale: locale === "lv" ? "lv_LV" : locale === "en" ? "en_US" : "ru_RU",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: dict.meta.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale as Locale}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
