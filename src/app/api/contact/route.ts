import { NextResponse } from "next/server";

/**
 * Contact form API route — placeholder for email integration.
 *
 * To enable email delivery, integrate with one of:
 *
 * 1. Resend (recommended for Vercel):
 *    npm install resend
 *    Set RESEND_API_KEY in .env.local
 *
 *    import { Resend } from 'resend';
 *    const resend = new Resend(process.env.RESEND_API_KEY);
 *    await resend.emails.send({
 *      from: 'onboarding@resend.dev',
 *      to: 'hello@meridiandigital.com',
 *      subject: `New inquiry from ${name} (${company})`,
 *      html: `<p>...</p>`,
 *    });
 *
 * 2. Nodemailer (SMTP):
 *    npm install nodemailer
 *    Configure SMTP credentials in .env.local
 *
 *    import nodemailer from 'nodemailer';
 *    const transporter = nodemailer.createTransport({ ... });
 *    await transporter.sendMail({ ... });
 */

interface ContactPayload {
  name: string;
  company: string;
  email: string;
  budget?: string;
  message: string;
}

function validatePayload(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") return false;
  const data = body as Record<string, unknown>;
  return (
    typeof data.name === "string" &&
    data.name.trim().length > 0 &&
    typeof data.company === "string" &&
    data.company.trim().length > 0 &&
    typeof data.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
    typeof data.message === "string" &&
    data.message.trim().length > 0
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!validatePayload(body)) {
      return NextResponse.json(
        { error: "Please fill in all required fields with valid data." },
        { status: 400 }
      );
    }

    const { name, company, email, budget, message } = body;

    // Placeholder: log submission (replace with Resend/Nodemailer in production)
    console.log("[Contact Form Submission]", {
      name,
      company,
      email,
      budget: budget || "Not specified",
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate email send delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received. We'll be in touch soon.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}
