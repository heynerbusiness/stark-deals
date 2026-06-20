import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Stark Deals",
  description:
    "Get in touch with Stark Deals to discuss your capital raise, financing need, or investment mandate.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-widest mb-4">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 max-w-xl">
            Let&apos;s Talk About Your Deal
          </h1>
          <p className="mt-5 text-lg text-slate-500 max-w-xl">
            Whether you are raising capital, seeking financing, or looking to
            deploy capital — reach out and we will respond within one business
            day.
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
              <p className="text-sm font-semibold text-slate-900 uppercase tracking-widest">
                Response Time
              </p>
              <p className="mt-2 text-sm text-slate-500">
                We aim to respond to all enquiries within 1 business day.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900 uppercase tracking-widest">
                Confidentiality
              </p>
              <p className="mt-2 text-sm text-slate-500">
                All enquiries are treated as confidential. We will not share
                your information without consent.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900 uppercase tracking-widest">
                No Commitment
              </p>
              <p className="mt-2 text-sm text-slate-500">
                An initial conversation carries no obligation. We will assess
                whether there is a fit before any agreement is made.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
