import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Stark",
  description:
    "U.S. market-entry advisory, validation sprints, soft landing & business hub, and local business development for German and European companies — fixed-fee, no commissions.",
};

const services = [
  {
    title: "Market Entry Advisory",
    description:
      "An honest, structured assessment before you spend real money: market and entry-point fit, the realistic cost and timeline of a U.S. presence, and the sequence that avoids the expensive mistakes European companies typically make in year one.",
    bullets: [
      "U.S. readiness check and go / no-go assessment",
      "Entry strategy: where, how and in what order",
      "Budget and timeline planning for the first 12 months",
      "U.S. value proposition and storytelling review",
    ],
  },
  {
    title: "Validation Sprint",
    description:
      "Two to four weeks of real market feedback before you commit: we arrange and join conversations with potential customers, partners and local experts, and turn what we hear into a clear decision and next-step plan.",
    bullets: [
      "Curated expert, partner and customer conversations",
      "Market and competitor orientation on the ground",
      "Feedback report with an honest recommendation",
      "Refined pitch and materials for U.S. audiences",
    ],
  },
  {
    title: "Soft Landing & Business Hub",
    description:
      "Your operational bridge into the U.S.: a credible local presence and one partner who coordinates everything around your setup — while licensed specialists handle the regulated work (legal, tax, immigration).",
    bullets: [
      "Coordination of incorporation, banking and accounting partners",
      "Introductions to immigration, tax and legal specialists",
      "Workspace, meetings and local presence in Southern California",
      "Practical relocation support for founders on the ground",
    ],
  },
  {
    title: "Business Development & Network",
    description:
      "Once you have landed, we help you build the relationships that make a market: curated introductions, accompanied visits and trade missions, and ongoing local representation while your U.S. business grows.",
    bullets: [
      "Curated introductions to potential customers and partners",
      "Access to the Southern California founder and business ecosystem",
      "One-week visit and trade-mission programs",
      "Ongoing local presence and follow-up after your visit",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-widest mb-4">What We Do</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 max-w-2xl">Our Services</h1>
          <p className="mt-5 text-lg text-slate-500 max-w-2xl">
            Advisory and hands-on local support for your U.S. entry — for a
            fixed fee agreed in writing before we start. No commissions, no
            success fees on financing, no placement.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((s) => (
              <div key={s.title} className="border border-slate-200 rounded-2xl p-8 hover:border-blue-200 transition-colors">
                <h2 className="text-xl font-semibold text-slate-900">{s.title}</h2>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">{s.description}</p>
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

      <section className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">How We Charge</h2>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Stark works as an advisor, not a broker. Engagements are
              fixed-fee projects or a monthly retainer, agreed in writing
              before work begins. We do not earn commissions on deals,
              financing or investments — so our advice stays independent of
              whether any particular transaction happens.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">What We Don’t Do</h2>
            <p className="mt-4 text-slate-500 leading-relaxed">
              We are not a placement agent or broker-dealer, and we do not
              raise capital or arrange financing. We also do not provide
              legal, tax or immigration advice — for those, we introduce you
              to licensed U.S. specialists and coordinate with them on your
              behalf.
            </p>
          </div>
          <div>
            <Link href="/contact" className="inline-flex items-center rounded-full bg-blue-600 px-8 py-3.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors">
              Book a Readiness Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
