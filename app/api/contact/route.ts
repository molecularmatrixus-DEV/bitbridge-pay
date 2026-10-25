import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, workEmail, subject, message } = body;

    if (!fullName || !workEmail || !message) {
      return NextResponse.json(
        { error: "Missing required contact form fields." },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.warn("Telegram bot credentials not configured in environment variables.");
      return NextResponse.json({ success: true, simulated: true });
    }

    const telegramMessage = `
📬 <b>NEW BITBRIDGE PAY CONTACT MESSAGE</b> 📬
━━━━━━━━━━━━━━━━━━━━━━
👤 <b>Name:</b> ${escapeHtml(fullName)}
📧 <b>Email:</b> ${escapeHtml(workEmail)}
🏷️ <b>Subject:</b> ${escapeHtml(subject || "General Inquiry")}
💬 <b>Message:</b>
${escapeHtml(message)}
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
        { error: "Failed to dispatch message to Telegram." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Contact submission error:", err);
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
