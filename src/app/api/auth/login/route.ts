import { NextResponse } from "next/server";
import { z } from "zod";
import { getUser, validateUser } from "@/lib/mock-user-store";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(request: Request) {
  try {
    const payload = loginSchema.parse(await request.json());
    const email = payload.email.toLowerCase();
    const isValid = validateUser(email, payload.password);
    if (!isValid) {
      return NextResponse.json({ ok: false, message: "Invalid credentials. Please try again." }, { status: 401 });
    }

    const user = getUser(email);
    const response = NextResponse.json({
      ok: true,
      message: "Login successful.",
      redirectPath: "/",
    });

    response.cookies.set("portal_user", email, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    response.cookies.set("portal_name", user?.name ?? "User", {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid login payload." }, { status: 400 });
  }
}
