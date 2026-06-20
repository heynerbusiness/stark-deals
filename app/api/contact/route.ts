import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Email service not configured." }, { status: 503 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await request.json().catch(() => null);

  if (!body || !body.name || !body.email || !body.message || !body.dealType) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { name, email, phone, dealType, message } = body;

  try {
    await resend.emails.send({
      from: "Stark Deals Contact <onboarding@resend.dev>",
      to: ["lenniheyner@gmail.com"],
      replyTo: email,
      subject: `New Enquiry: ${dealType} — ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Deal Type: ${dealType}

Message:
${message}
      `.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
