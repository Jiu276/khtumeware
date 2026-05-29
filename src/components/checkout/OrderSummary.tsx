import Image from "next/image";
import type { CartItem, CustomerType } from "@/lib/checkout/types";
import {
  calculateSubtotal,
  formatUSD,
  getItemPrice,
} from "@/lib/checkout/pricing";

interface OrderSummaryProps {
  items: CartItem[];
  customerType: CustomerType;
}

const SHIPPING_THRESHOLD = 150;
const SHIPPING_FEE = 12.99;
const TAX_RATE = 0.08;

export function OrderSummary({ items, customerType }: OrderSummaryProps) {
  const subtotal = calculateSubtotal(items, customerType);
  const shipping = subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + shipping + tax;

  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-6">
      <h2 className="text-base font-semibold text-slate-900">Order Summary</h2>
      {customerType === "business" && (
        <p className="mt-1 text-xs font-medium text-teal-700">
          Wholesale pricing applied
        </p>
      )}

      <ul className="mt-5 divide-y divide-slate-100">
        {items.map((item) => (
          <li key={item.id} className="flex gap-3 py-4 first:pt-0 last:pb-0">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-slate-100 bg-slate-50">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-slate-900">
                {item.name}
              </p>
              <p className="text-xs text-slate-500">SKU: {item.sku}</p>
              <p className="mt-1 text-xs text-slate-500">Qty: {item.quantity}</p>
            </div>
            <p className="shrink-0 text-sm font-medium text-slate-900">
              {formatUSD(getItemPrice(item, customerType) * item.quantity)}
            </p>
          </li>
        ))}
      </ul>

      <dl className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-sm">
        <div className="flex justify-between text-slate-600">
          <dt>Subtotal</dt>
          <dd className="font-medium text-slate-900">{formatUSD(subtotal)}</dd>
        </div>
        <div className="flex justify-between text-slate-600">
          <dt>Shipping</dt>
          <dd className="font-medium text-slate-900">
            {shipping === 0 ? (
              <span className="text-teal-700">Free</span>
            ) : (
              formatUSD(shipping)
            )}
          </dd>
        </div>
        <div className="flex justify-between text-slate-600">
          <dt>Estimated tax</dt>
          <dd className="font-medium text-slate-900">{formatUSD(tax)}</dd>
        </div>
        <div className="flex justify-between border-t border-slate-100 pt-3 text-base">
          <dt className="font-semibold text-slate-900">Total</dt>
          <dd className="font-bold text-slate-900">{formatUSD(total)}</dd>
        </div>
      </dl>

      {subtotal < SHIPPING_THRESHOLD && (
        <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">
          Add {formatUSD(SHIPPING_THRESHOLD - subtotal)} more for free shipping
        </p>
      )}

      <ul className="mt-5 space-y-2 text-xs text-slate-500">
        <li className="flex items-center gap-2">
          <LockIcon />
          Secure SSL checkout
        </li>
        <li className="flex items-center gap-2">
          <TruckIcon />
          Ships within 2–5 business days
        </li>
      </ul>
    </aside>
  );
}

function LockIcon() {
  return (
    <svg className="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg className="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>
  );
}
