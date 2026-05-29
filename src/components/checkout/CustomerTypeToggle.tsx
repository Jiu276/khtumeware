import type { CustomerType } from "@/lib/checkout/types";

interface CustomerTypeToggleProps {
  value: CustomerType;
  onChange: (type: CustomerType) => void;
}

export function CustomerTypeToggle({ value, onChange }: CustomerTypeToggleProps) {
  return (
    <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1">
      <button
        type="button"
        onClick={() => onChange("retail")}
        className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
          value === "retail"
            ? "bg-white text-teal-800 shadow-sm ring-1 ring-slate-200"
            : "text-slate-600 hover:text-slate-900"
        }`}
      >
        Retail (B2C)
      </button>
      <button
        type="button"
        onClick={() => onChange("business")}
        className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
          value === "business"
            ? "bg-white text-teal-800 shadow-sm ring-1 ring-slate-200"
            : "text-slate-600 hover:text-slate-900"
        }`}
      >
        Business (B2B)
      </button>
    </div>
  );
}
