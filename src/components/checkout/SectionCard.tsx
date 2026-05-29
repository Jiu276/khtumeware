interface SectionCardProps {
  title: string;
  step?: number;
  description?: string;
  children: React.ReactNode;
}

export function SectionCard({
  title,
  step,
  description,
  children,
}: SectionCardProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-start gap-3">
        {step != null && (
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-700 text-xs font-semibold text-white">
            {step}
          </span>
        )}
        <div>
          <h2 className="text-base font-semibold text-slate-900">{title}</h2>
          {description && (
            <p className="mt-0.5 text-sm text-slate-500">{description}</p>
          )}
        </div>
      </div>
      {children}
    </section>
  );
}
