import { NextResponse } from "next/server";
import { CONTACT_INFO, getBudgetLabel, SITE_NAME } from "@/lib/constants";

const WEB3FORMS_KEY =
  process.env.WEB3FORMS_ACCESS_KEY?.trim() ||
  "813ee6ac-5020-482d-a8b4-ed0b2953203b";

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
    const budgetLabel = getBudgetLabel(budget);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        name: name.trim(),
        email: email.trim(),
        company: company.trim(),
        budget: budgetLabel,
        message: message.trim(),
        from_name: SITE_NAME,
        replyto: email.trim(),
        subject: `[${SITE_NAME}] Inquiry baru dari ${name.trim()} (${company.trim()})`,
        to: CONTACT_INFO.email,
      }),
    });

    const result = (await response.json().catch(() => null)) as {
      success?: boolean;
      message?: string;
    } | null;

    if (!response.ok || !result?.success) {
      console.error("[Contact Form] Web3Forms error", result);
      return NextResponse.json(
        {
          error:
            result?.message ||
            "Pengiriman email gagal. Coba lagi dalam beberapa saat.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received. We'll be in touch soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact Form] Unexpected error", error);
    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}
