import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Stark",
  description:
    "Stark (STARK Advisory LLC) is a U.S. market-entry advisory based in Los Angeles, founded by a German founder who has built companies on both sides of the Atlantic.",
};

const values = [
  {
    title: "Honest Go / No-Go",
    description:
      "If the U.S. does not make sense for you yet, we will tell you — before you have spent the money. A clear “not yet” is worth more than an expensive lesson.",
  },
  {
    title: "On the Ground",
    description:
      "We are based in Southern California and in the meetings with you. Market entry fails on local detail, not on strategy slides — so we work where your customers are.",
  },
  {
    title: "Independent Advice",
    description:
      "Fixed fees, no commissions. We earn the same whether or not a deal, a lease or an investment happens afterwards — which keeps our advice on your side of the table.",
  },
  {
    title: "Network With Care",
    description:
      "Our value is our network, on both sides of the Atlantic. We only make introductions where we believe there is a genuine fit — for both sides.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-widest mb-4">Who We Are</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 max-w-2xl">About Stark</h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Our Story</h2>
            <div className="mt-5 space-y-4 text-slate-500 leading-relaxed">
              <p>
                Stark is the market-entry practice of STARK Advisory LLC,
                based in Los Angeles. It was founded by Lennart Heyner, a
                German founder who co-built a consumer-products company in
                Germany (Crafting Future, exited to RECUP in 2023) and now
                lives and works in Southern California.
              </p>
              <p>
                The pattern he kept seeing: strong European companies
                underestimating the same things — how different U.S. buyers
                decide, how much depends on local relationships, and how
                expensive it is to coordinate lawyers, accountants, banks
                and landlords from six or nine time zones away.
              </p>
              <p>
                Stark exists to close that gap: a German-speaking partner on
                the ground who knows both business cultures, coordinates the
                specialists you need, and helps you land first — and expand
                once the ground is proven.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Our Mission</h2>
            <p className="mt-5 text-slate-500 leading-relaxed">
              To make the United States reachable for German and European
              companies — with an honest assessment, a structured landing
              and local relationships that last — instead of expensive
              trial and error.
            </p>
            <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <p className="text-sm font-semibold text-slate-900 uppercase tracking-widest">At a glance</p>
              <div className="mt-4 grid grid-cols-2 gap-6">
                {[
                  ["Based in", "Los Angeles, California"],
                  ["Focus", "Germany & Europe → USA"],
                  ["Working languages", "German & English"],
                  ["Model", "Fixed-fee advisory — no commissions"],
                ].map(([label, sub]) => (
                  <div key={label}>
                    <p className="text-sm font-medium text-slate-900">{label}</p>
                    <p className="mt-0.5 text-xs text-slate-500">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold text-slate-900">What We Stand For</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="flex flex-col">
                <h3 className="text-base font-semibold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="mt-12 inline-flex items-center rounded-full bg-blue-600 px-8 py-3.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors">
            Work With Us
          </Link>
        </div>
      </section>
    </>
  );
}
