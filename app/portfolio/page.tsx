import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Who We Help — Stark",
  description:
    "Typical situations we support: German and European founders, growth companies and Mittelstand businesses entering the U.S. market — validation, soft landing and local business development.",
};

const scenarios = [
  {
    profile: "B2B software company, Germany",
    stage: "First U.S. customers in sight",
    need: "Strong inbound interest from the U.S., but no local presence and no feel for how American buyers evaluate and buy.",
    support: "Validation sprint with customer and expert conversations, U.S. positioning, then a soft landing once demand is proven.",
  },
  {
    profile: "Mittelstand manufacturer, Europe",
    stage: "Exploring a U.S. presence",
    need: "Wants U.S. customers and service partners without committing to a full subsidiary, team and office before the market is tested.",
    support: "Readiness assessment, partner and customer introductions on the ground, coordinated setup with legal and tax specialists.",
  },
  {
    profile: "Founder relocating, Germany",
    stage: "Moving to California",
    need: "Relocating personally and professionally at the same time — needs local contacts, practical orientation and a network from week one.",
    support: "Soft-landing coordination, introductions into the local founder and business ecosystem, ongoing local partner support.",
  },
  {
    profile: "Growth-stage consumer brand, Europe",
    stage: "Testing U.S. demand",
    need: "Selling online into the U.S. already, unsure whether a local presence, partners or retail relationships are the right next step.",
    support: "Market validation on the ground, partner conversations, and an honest recommendation on the next step — including “not yet”.",
  },
];

const network = [
  "Founders and operators in Southern California",
  "German-American business community and chambers",
  "Immigration, corporate and tax attorneys",
  "CPAs, banks and incorporation specialists",
  "Workspace, relocation and local service providers",
  "Industry experts, mentors and potential customers",
];

export default function WhoWeHelpPage() {
  return (
    <>
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-widest mb-4">Who We Help</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 max-w-2xl">
            Typical Situations We Support
          </h1>
          <p className="mt-5 text-lg text-slate-500 max-w-2xl">
            These are illustrative client situations, not named case
            studies — our clients’ entries are their stories to tell. If one
            of them looks like yours, we should talk.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scenarios.map((s) => (
              <div key={s.profile} className="border border-slate-200 rounded-2xl p-7 flex flex-col gap-4 hover:border-blue-200 transition-colors">
                <div>
                  <p className="text-xs font-medium text-blue-600 uppercase tracking-widest">{s.stage}</p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">{s.profile}</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{s.need}</p>
                <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  <span className="font-medium text-slate-900">How Stark helps: </span>
                  {s.support}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold text-slate-900">The Network You Land In</h2>
          <p className="mt-3 text-slate-500 max-w-xl">
            A market entry is only as good as the people you can reach in
            your first ninety days. We open the doors we have — and say
            honestly where we don’t.
          </p>
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {network.map((n) => (
              <li key={n} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500" />
                {n}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="mt-12 inline-flex items-center rounded-full bg-blue-600 px-8 py-3.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors">
            Book a Readiness Call
          </Link>
        </div>
      </section>
    </>
  );
}
