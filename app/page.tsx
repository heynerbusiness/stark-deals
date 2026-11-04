import Link from "next/link";

const pillars = [
  {
    label: "On the Ground in California",
    sub: "Based in Los Angeles — German-speaking, in the rooms and meetings with you, not advising from another continent.",
  },
  {
    label: "One Local Partner",
    sub: "One point of contact who coordinates the lawyers, accountants, banks and specialists you need — instead of you chasing twenty providers.",
  },
  {
    label: "Fixed-Fee Advisory",
    sub: "No commissions and no placement fees. You pay an agreed fee for advice and execution support — our only interest is that your entry works.",
  },
];

const phases = [
  {
    number: "01",
    title: "Assess",
    description:
      "A structured readiness check: Is the U.S. the right market, is Southern California the right entry point, and what will it realistically take? You get an honest go / no-go — including when the answer is “not yet”.",
  },
  {
    number: "02",
    title: "Validate",
    description:
      "Real conversations before real commitments: feedback from potential customers, partners and local experts, and a value proposition and story that work for American buyers — not a translated German pitch.",
  },
  {
    number: "03",
    title: "Land",
    description:
      "Your soft landing, coordinated end to end: company setup, banking, tax and immigration specialists, workspace and your first local presence — with licensed partners doing the regulated work, and us making sure it all happens in the right order.",
  },
  {
    number: "04",
    title: "Expand",
    description:
      "Business development on the ground: curated introductions to potential customers, partners and the local ecosystem, support for visits and trade missions, and an ongoing local presence while you grow — without heavy fixed overhead from day one.",
  },
];

const audiences = [
  {
    title: "Founders & growth-stage companies",
    text: "You have traction in Europe and want to test, win and serve your first U.S. customers — without relocating your whole company on day one.",
  },
  {
    title: "SMEs & Mittelstand companies",
    text: "You want a credible U.S. presence and local relationships, but not the cost and risk of building a full U.S. operation before the market is proven.",
  },
  {
    title: "Founders relocating to the U.S.",
    text: "You are moving yourself — and need local contacts, practical support and a network in Southern California from your first week, not your first year.",
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-widest mb-4">
            U.S. Market Entry · Southern California
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 leading-tight max-w-3xl">
            Land in the U.S. Expand with a local partner.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
            Stark helps German and European companies enter, establish and
            grow in the United States — with market-entry advice, local
            contacts and hands-on support on the ground in Southern
            California.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
            >
              Book a Readiness Call
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-8 py-3.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              How We Help
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {pillars.map((s) => (
            <div key={s.label} className="flex flex-col">
              <p className="text-lg font-semibold text-slate-900">{s.label}</p>
              <p className="mt-1 text-sm text-slate-500 leading-relaxed">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            A Proven Path: Land &amp; Expand
          </h2>
          <p className="mt-3 text-slate-500 max-w-xl">
            Four phases, in the right order — so you commit resources only
            when the previous step has proven itself.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            {phases.map((step) => (
              <div key={step.number} className="flex flex-col">
                <span className="text-4xl font-bold text-blue-100">{step.number}</span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Who This Is For</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {audiences.map((a) => (
              <div key={a.title} className="border border-slate-200 rounded-2xl p-8 hover:border-blue-200 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">{a.title}</h3>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-slate-900 px-8 py-3.5 text-sm font-medium text-white hover:bg-slate-700 transition-colors">
              Tell Us Where You Stand
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
