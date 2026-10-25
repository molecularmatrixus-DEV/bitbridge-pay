import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      storeName,
      websiteUrl,
      contactEmail,
      telegramHandle,
      whatsappNumber,
      industry,
      monthlyVolume,
      payoutPreference
    } = body;

    if (!storeName || !websiteUrl || !contactEmail || !industry) {
      return NextResponse.json(
        { error: "Missing required merchant application fields." },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.warn("Telegram bot credentials not configured in environment variables.");
      return NextResponse.json({ success: true, simulated: true });
    }

    const cleanTelegram = telegramHandle && telegramHandle.trim() !== ""
      ? telegramHandle.replace(/^@/, "")
      : "Not provided";

    const cleanWhatsapp = whatsappNumber && whatsappNumber.trim() !== ""
      ? whatsappNumber.trim()
      : "Not provided";

    const telegramMessage = `
⚡ <b>NEW BITBRIDGE PAY APPLICATION</b> ⚡
━━━━━━━━━━━━━━━━━━━━━━
🏢 <b>Merchant:</b> ${escapeHtml(storeName)}
🌐 <b>Store/URL:</b> ${escapeHtml(websiteUrl)}
📧 <b>Email:</b> ${escapeHtml(contactEmail)}
✈️ <b>Telegram:</b> ${cleanTelegram !== "Not provided" ? `@${escapeHtml(cleanTelegram)}` : "Not provided"}
📱 <b>WhatsApp:</b> ${escapeHtml(cleanWhatsapp)}
🏷️ <b>Category:</b> ${escapeHtml(industry)}
📊 <b>Monthly Vol:</b> ${escapeHtml(monthlyVolume || "Not specified")}
💰 <b>Payout Asset:</b> ${escapeHtml(payoutPreference || "USDT TRC20")}
⏰ <b>Submitted:</b> ${new Date().toUTCString()}
━━━━━━━━━━━━━━━━━━━━━━
📌 <i>SLA: Reply within 4–6 hours</i>
`.trim();

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: "HTML"
        })
      }
    );

    const telegramData = await telegramRes.json();

    if (!telegramRes.ok || !telegramData.ok) {
      console.error("Telegram API Error:", telegramData);
      return NextResponse.json(
        { error: "Failed to dispatch notification to Telegram." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Application submission error:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
