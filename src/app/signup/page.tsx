import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/auth-shell";

export const metadata: Metadata = {
  title: "Signup | IT Solutions",
  description: "Create an account for a personalized IT Solutions experience.",
};

export default function SignupPage() {
  return <AuthShell mode="signup" />;
}
