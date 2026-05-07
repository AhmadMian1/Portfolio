"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { GradientButton } from "@/components/common/button";
import { GlassCard } from "@/components/common/card";
import { accountAuthApi } from "@/services/account-auth-api";
import { trackEvent } from "@/services/analytics";

const signupSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type AuthFormProps = { mode: "login" | "signup" };

type SignupValues = z.infer<typeof signupSchema>;
type LoginValues = z.infer<typeof loginSchema>;

export function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isSignup = mode === "signup";
  const [feedback, setFeedback] = useState("");
  const form = useForm<SignupValues | LoginValues>({
    resolver: zodResolver(isSignup ? signupSchema : loginSchema),
    defaultValues: isSignup ? { name: "", email: "", password: "" } : { email: "", password: "" },
  });

  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = async (values: SignupValues | LoginValues) => {
    setFeedback("");
    try {
      if (isSignup) {
        const response = await accountAuthApi.signup(values as SignupValues);
        trackEvent("account_signup_submitted");
        setFeedback(response.message);
        router.push("/login?created=1");
        return;
      }
      const response = await accountAuthApi.login(values as LoginValues);
      trackEvent("account_login_submitted");
      setFeedback(response.message);
      router.push(response.redirectPath);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Authentication failed. Please try again.";
      setFeedback(message);
      trackEvent("account_auth_failed", { mode, message });
    }
  };

  return (
    <GlassCard className="w-full max-w-md">
      <h1 className="text-2xl font-bold text-slate-100">{isSignup ? "Create Account" : "Login"}</h1>
      <p className="mt-2 text-sm text-slate-400">
        {isSignup
          ? "Create your account first, then login to continue."
          : "Use your account credentials to continue to the home page."}
      </p>

      {!isSignup && searchParams.get("created") === "1" ? (
        <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-3 text-sm text-emerald-200">
          Account created. Please login now.
        </div>
      ) : null}

      <form className="mt-6 space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
        {isSignup ? (
          <input
            {...form.register("name")}
            placeholder="Full name"
            className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-400"
          />
        ) : null}
        <input
          {...form.register("email")}
          placeholder="Email"
          className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-400"
        />
        <input
          {...form.register("password")}
          type="password"
          placeholder="Password"
          className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-400"
        />

        <div className="space-y-1 text-xs text-rose-300">
          {Object.values(form.formState.errors).map((error) => (
            <p key={error.message}>{error.message}</p>
          ))}
        </div>

        <GradientButton className="w-full">
          {isSubmitting ? "Please wait..." : isSignup ? "Create Account" : "Login"}
        </GradientButton>
      </form>

      {feedback ? <p className="mt-4 text-sm text-emerald-300">{feedback}</p> : null}

      <p className="mt-6 text-sm text-slate-400">
        {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
        <Link href={isSignup ? "/login" : "/signup"} className="text-cyan-300 hover:text-cyan-200">
          {isSignup ? "Login" : "Create one"}
        </Link>
      </p>
    </GlassCard>
  );
}
