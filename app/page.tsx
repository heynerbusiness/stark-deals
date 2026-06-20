import Link from "next/link";

const stats = [
  { label: "Commission-Based", sub: "No upfront fees — we earn when you close" },
  { label: "Multi-Industry", sub: "Tech, Real Estate, E-Commerce & more" },
  { label: "Confidential", sub: "All introductions are NDA-protected" },
];

const steps = [
  {
    number: "01",
    title: "Introduction",
    description:
      "We assess your capital needs or investment criteria and identify the right counterparties from our network.",
  },
  {
    number: "02",
    title: "Structuring",
    description:
      "We facilitate introductions, support negotiations, and help both sides reach a mutually beneficial structure.",
  },
  {
    number: "03",
    title: "Close",
    description:
      "We earn our commission only when the deal closes — our interests are fully aligned with yours.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-widest mb-4">
            Placement Agent
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 leading-tight max-w-3xl">
            We Connect Capital with Opportunity
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
            Stark Deals brokers financing deals and capital introductions between
            investors and startups or individuals seeking funding — commission-based,
            results-driven, and fully confidential.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
            >
              Start a Conversation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-8 py-3.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <p className="text-lg font-semibold text-slate-900">{s.label}</p>
              <p className="mt-1 text-sm text-slate-500">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            How It Works
          </h2>
          <p className="mt-3 text-slate-500 max-w-xl">
            A simple, transparent process designed to close deals efficiently.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col">
                <span className="text-4xl font-bold text-blue-100">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-slate-900 px-8 py-3.5 text-sm font-medium text-white hover:bg-slate-700 transition-colors"
            >
              Discuss Your Deal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
