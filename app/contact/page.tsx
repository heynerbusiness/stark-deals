import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Stark",
  description:
    "Talk to Stark about your U.S. plans: market-entry readiness, a validation sprint, a soft landing in Southern California, or a visit / trade mission.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-widest mb-4">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 max-w-xl">
            Let’s Talk About Your U.S. Plans
          </h1>
          <p className="mt-5 text-lg text-slate-500 max-w-xl">
            Whether you are exploring the U.S. for the first time, planning
            your move, or already selling here and want a local presence —
            tell us where you stand and we will respond within one business
            day. German or English, whichever you prefer.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <aside className="flex flex-col gap-8">
            <div>
              <p className="text-sm font-semibold text-slate-900 uppercase tracking-widest">Response Time</p>
              <p className="mt-2 text-sm text-slate-500">
                We aim to respond to all enquiries within 1 business day.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 uppercase tracking-widest">Confidentiality</p>
              <p className="mt-2 text-sm text-slate-500">
                All enquiries are treated as confidential. We will not share
                your information without consent.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 uppercase tracking-widest">No Commitment</p>
              <p className="mt-2 text-sm text-slate-500">
                A readiness call carries no obligation — and if we are not
                the right help for your stage, we will say so and point you
                to who is.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
