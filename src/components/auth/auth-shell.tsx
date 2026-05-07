import Link from "next/link";
import { AuthForm } from "@/components/auth/auth-form";

export function AuthShell({ mode }: { mode: "login" | "signup" }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-14">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(129,140,248,0.18),transparent_30%),linear-gradient(180deg,#020617,#0f172a)]" />
      <div className="mx-auto mb-10 max-w-5xl">
        <Link href="/" className="text-sm text-slate-300 hover:text-cyan-300">
          ← Back to Portfolio
        </Link>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2">
        <section>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">IT Solutions</p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-slate-100 md:text-5xl">
            {mode === "login" ? "Login and Enter the Portal" : "Create Your Account First"}
          </h2>
          <p className="mt-4 max-w-md text-sm text-slate-400 md:text-base">
            {mode === "login"
              ? "Step 2 of 2: login with your registered credentials to access the portal."
              : "Step 1 of 2: create your account, then continue to login and access your portal."}
          </p>
        </section>
        <section className="flex justify-center md:justify-end">
          <AuthForm mode={mode} />
        </section>
      </div>
    </main>
  );
}
