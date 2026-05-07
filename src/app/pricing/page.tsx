import type { Metadata } from "next";
import { GlassCard } from "@/components/common/card";
import { nicheConfigs, pricingPlans } from "@/data/niches";

export const metadata: Metadata = {
  title: "Pricing | IT Solutions",
  description: "Niche-aware Odoo gallery pricing for GCC SMBs.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-black text-slate-100">Pricing</h1>
        <p className="mt-3 text-sm text-slate-300">Currency and recommendation can be personalized by country and role after login.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <GlassCard key={plan.name}>
              <p className="text-sm font-semibold text-cyan-300">{plan.name}</p>
              <p className="mt-2 text-3xl font-bold text-slate-100">${plan.monthlyUsd}</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {nicheConfigs.map((niche) => (
            <span key={niche.slug} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-300">
              {niche.name}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
