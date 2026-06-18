import type { Dictionary } from "@/i18n/get-dictionary";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import Reveal from "@/components/Reveal";
import ChatMock from "@/components/ChatMock";

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      <p className="mt-4 text-muted">{subtitle}</p>
    </div>
  );
}

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="glow relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 md:pt-24 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted">
              <span className="h-2 w-2 rounded-full bg-brand-2" />
              {dict.hero.badge}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
              {dict.hero.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted lg:mx-0">
              {dict.hero.subtitle}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start sm:justify-center">
              <Button asChild size="lg">
                <a href="#contact">{dict.hero.ctaPrimary}</a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={siteConfig.telegramUrl} target="_blank" rel="noopener noreferrer">
                  {dict.hero.ctaSecondary}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={32}>
          <ChatMock chat={dict.hero.chat} />
        </Reveal>
      </div>
    </section>
  );
}

export function Why({ dict }: { dict: Dictionary }) {
  return (
    <section id="why" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading title={dict.why.title} subtitle={dict.why.subtitle} />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dict.why.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <Card className="h-full">
                <div className="text-3xl">{item.icon}</div>
                <CardTitle className="mt-4">{item.title}</CardTitle>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services({ dict }: { dict: Dictionary }) {
  return (
    <section id="services" className="scroll-mt-20 border-y border-white/10 bg-white/[0.02] py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading title={dict.services.title} subtitle={dict.services.subtitle} />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dict.services.items.map((item, i) => {
            const featured = "featured" in item && item.featured;
            return (
              <Reveal key={item.title} delay={(i % 4) * 0.06}>
                <Card
                  className={`relative flex h-full flex-col ${
                    featured ? "border-brand/60 ring-1 ring-brand/40" : ""
                  }`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-6 rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">
                      ★
                    </span>
                  )}
                  <CardTitle>{item.title}</CardTitle>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-sm text-muted">{dict.services.priceFrom}</span>
                    <span className="bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-2xl font-bold text-transparent">
                      {item.price}
                    </span>
                  </div>
                  <CardDescription className="mt-3 flex-1">{item.desc}</CardDescription>
                  <Button asChild variant={featured ? "default" : "secondary"} size="sm" className="mt-5 w-full">
                    <a href="#contact">{dict.services.cta}</a>
                  </Button>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Process({ dict }: { dict: Dictionary }) {
  return (
    <section id="process" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading title={dict.process.title} subtitle={dict.process.subtitle} />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {dict.process.steps.map((step, i) => (
            <Reveal key={step} delay={i * 0.07}>
              <div className="card h-full rounded-2xl p-6">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-2 font-bold text-white">
                  {i + 1}
                </div>
                <p className="mt-4 text-sm font-medium leading-relaxed text-white/90">{step}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
