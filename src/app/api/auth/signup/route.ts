import { NextResponse } from "next/server";
import { z } from "zod";
import { createUser } from "@/lib/mock-user-store";

const signupSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(request: Request) {
  try {
    const payload = signupSchema.parse(await request.json());
    const created = createUser({
      name: payload.name,
      email: payload.email.toLowerCase(),
      password: payload.password,
    });

    if (!created) {
      return NextResponse.json({ ok: false, message: "Account already exists. Please login." }, { status: 409 });
    }

    return NextResponse.json({ ok: true, message: "Account created successfully. Please login now." });
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid signup payload." }, { status: 400 });
  }
}
