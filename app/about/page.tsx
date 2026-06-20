import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Stark Deals",
  description:
    "Learn about Stark Deals — who we are, what we stand for, and why we built a commission-based placement agent focused on deal execution.",
};

const values = [
  {
    title: "Alignment",
    description:
      "We only earn when your deal closes. Our success-fee model means we are fully aligned with your outcome from day one.",
  },
  {
    title: "Confidentiality",
    description:
      "Every engagement is protected by NDA. We do not disclose counterparties, deal details, or client identities without explicit consent.",
  },
  {
    title: "Discretion",
    description:
      "We operate quietly and efficiently. No press releases, no noise — just direct, targeted introductions that move deals forward.",
  },
  {
    title: "Network-First",
    description:
      "Our value is our network. We only introduce parties we believe have a genuine fit, protecting the integrity of every relationship.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-widest mb-4">
            Who We Are
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 max-w-2xl">
            About Stark Deals
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Our Story
            </h2>
            <div className="mt-5 space-y-4 text-slate-500 leading-relaxed">
              <p>
                Stark Deals was founded on a simple observation: the hardest
                part of closing a deal is finding the right counterparty. Great
                deals fall through not because the fundamentals are wrong, but
                because the right people never meet.
              </p>
              <p>
                We built Stark Deals to solve this problem — acting as a
                placement agent that bridges the gap between capital providers
                and those who need it. Our role is to make targeted, qualified
                introductions that give deals the best possible chance of
                closing.
              </p>
              <p>
                We work across industries and deal types, from early-stage
                startup funding to real estate financing and M&A transactions.
                Every engagement is commission-based — we invest our time and
                network because we believe in the deal.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Our Mission
            </h2>
            <p className="mt-5 text-slate-500 leading-relaxed">
              To remove friction from deal-making by connecting the right
              people, at the right time, with the right structure — quietly,
              efficiently, and with full alignment of interests.
            </p>

            <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <p className="text-sm font-semibold text-slate-900 uppercase tracking-widest">
                By the numbers
              </p>
              <div className="mt-4 grid grid-cols-2 gap-6">
                {[
                  ["Multi-sector", "Tech, RE, E-Commerce & more"],
                  ["Success-fee only", "No upfront retainers"],
                  ["NDA-protected", "All introductions are confidential"],
                  ["Pan-European", "Active deal flow across markets"],
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

      {/* Values */}
      <section className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold text-slate-900">
            What We Stand For
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="flex flex-col">
                <h3 className="text-base font-semibold text-slate-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-12 inline-flex items-center rounded-full bg-blue-600 px-8 py-3.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Work With Us
          </Link>
        </div>
      </section>
    </>
  );
}
