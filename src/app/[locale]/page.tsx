import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Hero, Why, Services, Process } from "@/components/Sections";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <ParallaxBackground />
      <Header locale={locale} nav={dict.nav} />
      <main>
        <Hero dict={dict} />
        <Why dict={dict} />
        <Services dict={dict} />
        <Process dict={dict} />
        <Faq dict={dict.faq} />

        <section id="contact" className="scroll-mt-20 py-20">
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                {dict.contact.title}
              </h2>
              <p className="mt-4 max-w-md text-muted">{dict.contact.subtitle}</p>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={siteConfig.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex items-center gap-4 rounded-2xl p-4"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/20 text-xl">
                    💬
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-muted">
                      {dict.contact.telegramLabel}
                    </span>
                    <span className="font-medium text-white">@{siteConfig.telegram}</span>
                  </span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="card flex items-center gap-4 rounded-2xl p-4"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/20 text-xl">
                    ✉️
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-muted">
                      {dict.contact.emailLabel}
                    </span>
                    <span className="font-medium text-white">{siteConfig.email}</span>
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ContactForm dict={dict.form} />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer locale={locale} dict={dict.footer} nav={dict.nav} />
    </>
  );
}
