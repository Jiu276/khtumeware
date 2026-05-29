import type { CustomerType, PaymentMethod } from "@/lib/checkout/types";
import { SectionCard } from "./SectionCard";
import { FormField, inputClassName } from "./FormField";

interface PaymentSectionProps {
  customerType: CustomerType;
  paymentMethod: PaymentMethod;
  onPaymentMethodChange: (method: PaymentMethod) => void;
}

const retailMethods: { id: PaymentMethod; label: string; desc: string }[] = [
  { id: "card", label: "Credit / Debit Card", desc: "Visa, Mastercard, Amex" },
  { id: "paypal", label: "PayPal", desc: "Pay with PayPal balance or card" },
];

const businessMethods: { id: PaymentMethod; label: string; desc: string }[] = [
  { id: "card", label: "Credit / Debit Card", desc: "Instant payment" },
  { id: "paypal", label: "PayPal", desc: "Business PayPal account" },
  {
    id: "bank_transfer",
    label: "Bank Transfer (Wire)",
    desc: "USD wire — order ships after confirmation",
  },
  {
    id: "invoice",
    label: "Pay by Invoice (NET 30)",
    desc: "Approved business accounts only",
  },
];

export function PaymentSection({
  customerType,
  paymentMethod,
  onPaymentMethodChange,
}: PaymentSectionProps) {
  const methods =
    customerType === "business" ? businessMethods : retailMethods;

  return (
    <SectionCard
      step={3}
      title="Payment"
      description="Choose how you'd like to pay. Card data will be handled by Stripe."
    >
      <div className="space-y-2">
        {methods.map((method) => (
          <label
            key={method.id}
            className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors ${
              paymentMethod === method.id
                ? "border-teal-600 bg-teal-50/50 ring-1 ring-teal-600/30"
                : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <input
              type="radio"
              name="paymentMethod"
              value={method.id}
              checked={paymentMethod === method.id}
              onChange={() => onPaymentMethodChange(method.id)}
              className="mt-1 h-4 w-4 border-slate-300 text-teal-700 focus:ring-teal-600"
            />
            <div>
              <span className="text-sm font-medium text-slate-900">
                {method.label}
              </span>
              <p className="text-xs text-slate-500">{method.desc}</p>
            </div>
          </label>
        ))}
      </div>

      {paymentMethod === "card" && <CardPaymentPlaceholder />}
      {paymentMethod === "paypal" && <PayPalPlaceholder />}
      {paymentMethod === "bank_transfer" && <BankTransferInfo />}
      {paymentMethod === "invoice" && <InvoiceInfo />}
    </SectionCard>
  );
}

function CardPaymentPlaceholder() {
  return (
    <div className="mt-5 space-y-4 rounded-lg border border-dashed border-slate-300 bg-slate-50/80 p-5">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
        Stripe Payment Element (placeholder)
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Card number" htmlFor="cardNumber" required>
          <input
            id="cardNumber"
            type="text"
            placeholder="4242 4242 4242 4242"
            className={inputClassName}
            disabled
          />
        </FormField>
        <FormField label="Cardholder name" htmlFor="cardName" required>
          <input
            id="cardName"
            type="text"
            placeholder="Name on card"
            className={inputClassName}
            disabled
          />
        </FormField>
        <FormField label="Expiry" htmlFor="expiry" required>
          <input
            id="expiry"
            type="text"
            placeholder="MM / YY"
            className={inputClassName}
            disabled
          />
        </FormField>
        <FormField label="CVC" htmlFor="cvc" required>
          <input
            id="cvc"
            type="text"
            placeholder="123"
            className={inputClassName}
            disabled
          />
        </FormField>
      </div>
      <p className="text-xs text-slate-500">
        Connect Stripe to replace this block with the secure Payment Element.
      </p>
    </div>
  );
}

function PayPalPlaceholder() {
  return (
    <div className="mt-5 flex flex-col items-center gap-3 rounded-lg border border-dashed border-slate-300 bg-slate-50/80 p-8">
      <div className="rounded-lg bg-[#0070BA] px-8 py-3 text-sm font-semibold text-white opacity-90">
        Pay with PayPal
      </div>
      <p className="text-center text-xs text-slate-500">
        PayPal Smart Buttons will render here after SDK integration.
      </p>
    </div>
  );
}

function BankTransferInfo() {
  return (
    <div className="mt-5 rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
      <p className="font-medium text-slate-900">Wire transfer instructions</p>
      <ul className="mt-2 space-y-1 text-xs text-slate-600">
        <li>
          <span className="font-medium">Bank:</span> Example International Bank
        </li>
        <li>
          <span className="font-medium">SWIFT:</span> EXMPUS33
        </li>
        <li>
          <span className="font-medium">Account:</span> ****4821 (USD)
        </li>
        <li>
          <span className="font-medium">Reference:</span> Your order number
          (shown after submit)
        </li>
      </ul>
      <p className="mt-3 text-xs text-amber-700">
        Order will be processed once payment is confirmed (1–3 business days).
      </p>
    </div>
  );
}

function InvoiceInfo() {
  return (
    <div className="mt-5 rounded-lg border border-teal-200 bg-teal-50/60 p-4 text-sm">
      <p className="font-medium text-teal-900">NET 30 payment terms</p>
      <p className="mt-1 text-xs text-teal-800">
        Your order will be placed on account. A proforma invoice will be emailed
        within 24 hours. Shipment begins after credit approval.
      </p>
    </div>
  );
}
