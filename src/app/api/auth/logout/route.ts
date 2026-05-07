import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ ok: true, message: "Logged out." });
  response.cookies.set("portal_user", "", { httpOnly: true, path: "/", maxAge: 0 });
  response.cookies.set("portal_name", "", { httpOnly: true, path: "/", maxAge: 0 });
  return response;
}
