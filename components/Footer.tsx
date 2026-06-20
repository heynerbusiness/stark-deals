import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="text-lg font-semibold text-slate-900">Stark Deals</p>
          <p className="mt-1 text-sm text-slate-500 max-w-xs">
            Connecting capital with opportunity. Commission-based placement and
            deal brokering.
          </p>
        </div>

        <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          {[
            ["Services", "/services"],
            ["Portfolio", "/portfolio"],
            ["About", "/about"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Stark Deals. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            This website does not constitute financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
