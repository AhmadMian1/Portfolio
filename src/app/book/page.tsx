import type { Metadata } from "next";
import { GlassCard } from "@/components/common/card";

export const metadata: Metadata = {
  title: "Book a Call | IT Solutions",
  description: "Book a discovery call with IT Solutions.",
};

export default function BookPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-black text-slate-100">Book a 30-min Discovery Call</h1>
        <p className="mt-3 text-sm text-slate-300">
          This page is ready for Cal.com embed. In personalized flow, email prefill comes from prospect onboarding.
        </p>
        <GlassCard className="mt-8">
          <div className="flex min-h-80 items-center justify-center rounded-xl border border-dashed border-white/15 bg-slate-900/40">
            <p className="text-sm text-slate-400">Cal.com iframe placeholder</p>
          </div>
        </GlassCard>
      </div>
    </main>
  );
}
