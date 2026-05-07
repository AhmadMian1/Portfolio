import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { GlassCard } from "@/components/common/card";
import { Navbar } from "@/components/layout/navbar";

export default async function PortalPage() {
  const cookieStore = await cookies();
  const email = cookieStore.get("portal_user")?.value;
  const name = cookieStore.get("portal_name")?.value ?? "User";

  if (!email) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar items={[]} showLogout brandHref="/portal" />
      <main className="px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-4xl font-black text-slate-100">Portal</h1>
            <Link href="/login" className="text-sm text-cyan-300 hover:text-cyan-200">
              Switch Account
            </Link>
          </div>
          <GlassCard>
            <p className="text-sm text-slate-400">Welcome back</p>
            <p className="mt-2 text-2xl font-bold text-slate-100">{name}</p>
            <p className="mt-1 text-sm text-slate-300">{email}</p>
            <p className="mt-4 text-sm text-slate-300">
              Account flow is now enforced as requested: user must sign up first, then login, then access portal.
            </p>
          </GlassCard>
        </div>
      </main>
    </div>
  );
}
