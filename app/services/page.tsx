import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Stark Deals",
  description:
    "Capital raising, debt & equity deal brokering, and M&A introductions. Commission-based placement services.",
};

const services = [
  {
    title: "Capital Raising",
    description:
      "We help startups and growing companies access the capital they need — whether equity, debt, or hybrid instruments. We leverage our investor network to make targeted introductions that match your stage, sector, and funding requirements.",
    bullets: [
      "Seed & early-stage equity raises",
      "Growth-stage funding rounds",
      "Venture debt and revenue-based financing",
      "Bridge financing",
    ],
  },
  {
    title: "Debt & Loan Brokering",
    description:
      "We connect businesses and individuals seeking debt financing with the right lenders — from private credit funds to family offices and alternative lenders.",
    bullets: [
      "Real estate & project finance",
      "Working capital facilities",
      "Mezzanine and subordinated debt",
      "Restructuring introductions",
    ],
  },
  {
    title: "M&A Introductions",
    description:
      "We facilitate buy-side and sell-side introductions for acquisitions, strategic partnerships, and asset sales — operating quietly and efficiently under NDA.",
    bullets: [
      "Sell-side mandates",
      "Buy-side sourcing",
      "Strategic partnership introductions",
      "Asset sale facilitation",
    ],
  },
  {
    title: "Advisory & Structuring",
    description:
      "Beyond introductions, we help both parties understand deal structures, typical terms, and market expectations — ensuring negotiations start on the right footing.",
    bullets: [
      "Term sheet guidance",
      "Deal structure advisory",
      "Market benchmarking",
      "Negotiation support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 max-w-2xl">
            Our Services
          </h1>
          <p className="mt-5 text-lg text-slate-500 max-w-2xl">
            We operate as a pure placement agent — commission-based, with no
            upfront retainers. Our incentive is simple: we get paid when your
            deal closes.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((s) => (
              <div
                key={s.title}
                className="border border-slate-200 rounded-2xl p-8 hover:border-blue-200 transition-colors"
              >
                <h2 className="text-xl font-semibold text-slate-900">
                  {s.title}
                </h2>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                  {s.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission model */}
      <section className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold text-slate-900">
            Our Commission Model
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl leading-relaxed">
            Stark Deals operates on a success-fee basis. There are no upfront
            retainers or advisory fees. A commission is earned as a percentage
            of the total deal volume, agreed in writing before any introduction
            is made. This ensures our interests are fully aligned with yours.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-blue-600 px-8 py-3.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Discuss Your Deal
          </Link>
        </div>
      </section>
    </>
  );
}
