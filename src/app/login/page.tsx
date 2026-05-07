import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/auth-shell";

export const metadata: Metadata = {
  title: "Login | IT Solutions",
  description: "Sign in to access your personalized IT Solutions experience.",
};

export default function LoginPage() {
  return <AuthShell mode="login" />;
}
