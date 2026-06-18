import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const name = String(data?.name ?? "").trim().slice(0, 200);
    const contact = String(data?.contact ?? "").trim().slice(0, 200);
    const message = String(data?.message ?? "").trim().slice(0, 2000);

    if (!name || !contact) {
      return NextResponse.json({ ok: false, error: "missing fields" }, { status: 400 });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const text =
      `🟣 <b>Новая заявка — Lumeo AI</b>\n\n` +
      `👤 <b>Имя:</b> ${escapeHtml(name)}\n` +
      `📨 <b>Контакт:</b> ${escapeHtml(contact)}\n` +
      (message ? `📝 <b>Сообщение:</b> ${escapeHtml(message)}` : "");

    if (!token || !chatId) {
      // Telegram не настроен — логируем, чтобы заявка не потерялась локально.
      console.warn("[contact] TELEGRAM_BOT_TOKEN/TELEGRAM_CHAT_ID не заданы. Заявка:", {
        name,
        contact,
        message,
      });
      return NextResponse.json({ ok: true, delivered: false });
    }

    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    if (!tgRes.ok) {
      const detail = await tgRes.text();
      console.error("[contact] Telegram API error:", detail);
      return NextResponse.json({ ok: false, error: "delivery failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch {
    return NextResponse.json({ ok: false, error: "bad request" }, { status: 400 });
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
