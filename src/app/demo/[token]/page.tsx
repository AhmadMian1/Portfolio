import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GlassCard } from "@/components/common/card";
import { authApi } from "@/services/auth-api";

export const metadata: Metadata = {
  title: "Personalized Demo | IT Solutions",
  description: "Personalized Odoo gallery experience based on your onboarding details.",
};

export default async function DemoPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const prospect = await authApi.getProspectFromToken(token);
  if (!prospect) notFound();

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <Link href="/login" className="text-sm text-slate-300 hover:text-cyan-300">
          ← Back to login
        </Link>

        <section
          className="mt-6 rounded-2xl border border-white/10 p-8"
          style={{
            background: `radial-gradient(circle at 20% 20%, ${prospect.accent}33, transparent 34%), linear-gradient(180deg,#0f172a,#020617)`,
          }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-slate-300">{prospect.niche.replace("-", " ")}</p>
          <h1 className="mt-3 text-3xl font-black text-slate-100 md:text-5xl">
            Welcome {prospect.name}. Here is what running {prospect.company} on Odoo looks like.
          </h1>
          <p className="mt-3 text-sm text-slate-300">{prospect.heroVerb} with a workflow tuned for {prospect.country} operations.</p>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-3">
          <GlassCard>
            <p className="text-xs uppercase text-slate-400">Pilots Delivered</p>
            <p className="mt-2 text-2xl font-bold text-slate-100">{prospect.niche === "restaurant" ? "38" : "24"}+</p>
          </GlassCard>
          <GlassCard>
            <p className="text-xs uppercase text-slate-400">Avg Implementation</p>
            <p className="mt-2 text-2xl font-bold text-slate-100">{prospect.country === "UAE" ? "12 days" : "16 days"}</p>
          </GlassCard>
          <GlassCard>
            <p className="text-xs uppercase text-slate-400">Recommended Tier</p>
            <p className="mt-2 text-2xl font-bold text-slate-100">{prospect.role === "CEO" ? "Growth" : "Starter"}</p>
          </GlassCard>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2">
          <GlassCard>
            <h2 className="text-lg font-semibold text-slate-100">Interactive Demo Slot</h2>
            <p className="mt-3 text-sm text-slate-300">
              Supademo embed placeholder for <span className="text-cyan-300">{prospect.niche.replace("-", " ")}</span>. Replace
              this panel with iframe content in production.
            </p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-lg font-semibold text-slate-100">Book Discovery Call</h2>
            <p className="mt-3 text-sm text-slate-300">
              Cal.com embed placeholder prefilled with <span className="text-cyan-300">{prospect.email}</span>.
            </p>
          </GlassCard>
        </section>
      </div>
    </main>
  );
}
