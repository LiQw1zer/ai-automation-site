import type { Dictionary } from "@/i18n/get-dictionary";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Reveal from "@/components/Reveal";

export default function Faq({ dict }: { dict: Dictionary["faq"] }) {
  return (
    <section id="faq" className="scroll-mt-20 border-y border-white/10 bg-white/[0.02] py-20">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{dict.title}</h2>
            <p className="mt-4 text-muted">{dict.subtitle}</p>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <Accordion type="single" collapsible className="mt-10 flex flex-col gap-3">
            {dict.items.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
