import type { Metadata } from "next";
import DealCard from "@/components/DealCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio — Stark Deals",
  description:
    "Selected deal case studies from Stark Deals. All transactions are presented anonymously.",
};

const deals = [
  {
    sector: "B2B SaaS Startup",
    dealType: "Equity Capital Raise",
    sizeRange: "€2M – €4M",
    outcome: "Closed",
    note: "Series A round. Introduced to 3 strategic VC funds. NDA-protected.",
  },
  {
    sector: "Real Estate Developer",
    dealType: "Debt Financing",
    sizeRange: "€8M – €12M",
    outcome: "Closed",
    note: "Project finance for residential development. Private lender introduced.",
  },
  {
    sector: "E-Commerce Brand",
    dealType: "Bridge Loan",
    sizeRange: "€500K – €1M",
    outcome: "Closed",
    note: "Working capital facility ahead of inventory build-up. 6-month term.",
  },
  {
    sector: "SME Acquisition",
    dealType: "M&A Introduction",
    sizeRange: "€3M – €5M",
    outcome: "Closed",
    note: "Buy-side mandate. Strategic acquisition in logistics sector.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-widest mb-4">
            Track Record
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 max-w-2xl">
            Selected Deals
          </h1>
          <p className="mt-5 text-lg text-slate-500 max-w-2xl">
            All transactions are presented anonymously to protect client
            confidentiality. Further deal flow is available under NDA upon
            request.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deals.map((deal) => (
              <DealCard key={deal.sector} {...deal} />
            ))}
          </div>

          <div className="mt-14 border border-dashed border-slate-200 rounded-2xl p-8 text-center">
            <p className="text-slate-500 text-sm">
              Additional case studies and current mandates are available under
              NDA.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center rounded-full bg-blue-600 px-7 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
            >
              Request Deal Flow
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
