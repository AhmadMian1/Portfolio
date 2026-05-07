import { NextResponse } from "next/server";
import { z } from "zod";
import { encodeToken } from "@/services/auth-api";

const startSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  role: z.enum(["CEO", "Ops", "IT", "Other"]),
  email: z.string().email(),
  niche: z.enum(["restaurant", "real-estate", "interior-design", "ecommerce", "rally"]),
  country: z.enum(["UAE", "Saudi", "Qatar", "Other"]),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const payload = startSchema.parse(json);

    // Placeholder flow: validate, persist in DB, send Brevo magic link, track PostHog, notify Telegram.
    const token = encodeToken(payload);

    return NextResponse.json({
      ok: true,
      token,
      redirectPath: `/demo/${token}`,
      message: "Personalized demo is ready.",
    });
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid onboarding payload" }, { status: 400 });
  }
}
