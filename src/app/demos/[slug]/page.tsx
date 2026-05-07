import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GlassCard } from "@/components/common/card";
import { nicheConfigs, pricingPlans } from "@/data/niches";

export const metadata: Metadata = {
  title: "Niche Demos | IT Solutions",
  description: "Industry-specific Odoo gallery demos for GCC SMBs.",
};

export function generateStaticParams() {
  return nicheConfigs.map((niche) => ({ slug: niche.slug }));
}

export default async function NicheDemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const niche = nicheConfigs.find((item) => item.slug === slug);
  if (!niche) notFound();

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <Link href="/login" className="text-sm text-slate-300 hover:text-cyan-300">
          ← Start personalized login
        </Link>
        <section
          className="mt-6 rounded-2xl border border-white/10 p-8"
          style={{
            background: `radial-gradient(circle at 20% 20%, ${niche.accent}33, transparent 34%), linear-gradient(180deg,#0f172a,#020617)`,
          }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-slate-300">{niche.name}</p>
          <h1 className="mt-3 text-4xl font-black text-slate-100">{niche.heroVerb}</h1>
          <p className="mt-2 text-sm text-slate-300">
            Public niche page for cold traffic. Personalized rendering unlocks after magic-link onboarding.
          </p>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2">
          <GlassCard>
            <h2 className="text-lg font-semibold text-slate-100">Supademo Embed</h2>
            <p className="mt-3 text-sm text-slate-300">Embed URL placeholder: {niche.demoUrl}</p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-lg font-semibold text-slate-100">Niche FAQ</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {niche.faq.map((question) => (
                <li key={question}>• {question}</li>
              ))}
            </ul>
          </GlassCard>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <GlassCard key={plan.name}>
              <p className="text-sm font-semibold text-cyan-300">{plan.name}</p>
              <p className="mt-2 text-2xl font-bold text-slate-100">${plan.monthlyUsd}/mo</p>
              <ul className="mt-3 space-y-1 text-xs text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </section>
      </div>
    </main>
  );
}
