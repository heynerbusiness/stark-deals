type DealCardProps = {
  sector: string;
  dealType: string;
  sizeRange: string;
  outcome: string;
  note?: string;
};

export default function DealCard({
  sector,
  dealType,
  sizeRange,
  outcome,
  note,
}: DealCardProps) {
  return (
    <div className="border border-slate-200 rounded-2xl p-7 flex flex-col gap-4 hover:border-blue-200 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium text-blue-600 uppercase tracking-widest">
            {dealType}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">{sector}</h3>
        </div>
        <span className="flex-shrink-0 inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 border border-green-200">
          {outcome}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-slate-900">{sizeRange}</span>
      </div>

      {note && (
        <p className="text-xs text-slate-400 border-t border-slate-100 pt-4">
          {note}
        </p>
      )}
    </div>
  );
}
