"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm({ dict }: { dict: Dictionary["form"] }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      track("lead");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card rounded-2xl p-8 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand/20 text-2xl text-brand-2">
          ✓
        </div>
        <p className="mt-4 text-white/85">{dict.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card rounded-2xl p-6 md:p-8">
      <div className="grid gap-4">
        <label className="block">
          <span className="mb-1.5 block text-sm text-muted">{dict.name}</span>
          <Input name="name" required placeholder={dict.namePlaceholder} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-muted">{dict.contact}</span>
          <Input name="contact" required placeholder={dict.contactPlaceholder} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-muted">{dict.message}</span>
          <Textarea name="message" rows={4} placeholder={dict.messagePlaceholder} />
        </label>
      </div>

      {status === "error" && <p className="mt-4 text-sm text-red-400">{dict.error}</p>}

      <Button type="submit" disabled={status === "submitting"} className="mt-6 w-full" size="lg">
        {status === "submitting" ? dict.submitting : dict.submit}
      </Button>
    </form>
  );
}
