"use client";

import { useState } from "react";
import Link from "next/link";
import { CustomerTypeToggle } from "./CustomerTypeToggle";
import { OrderSummary } from "./OrderSummary";
import { PaymentSection } from "./PaymentSection";
import { SectionCard } from "./SectionCard";
import { FormField, inputClassName, selectClassName } from "./FormField";
import { mockCartItems, countries } from "@/lib/checkout/mock-data";
import {
  defaultFormState,
  type CheckoutFormState,
  type CustomerType,
  type PaymentMethod,
} from "@/lib/checkout/types";

export function CheckoutPage() {
  const [form, setForm] = useState<CheckoutFormState>(defaultFormState);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof CheckoutFormState>(
    key: K,
    value: CheckoutFormState[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleCustomerTypeChange = (type: CustomerType) => {
    setForm((prev) => ({
      ...prev,
      customerType: type,
      paymentMethod:
        type === "retail" && (prev.paymentMethod === "bank_transfer" || prev.paymentMethod === "invoice")
          ? "card"
          : prev.paymentMethod,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
          <svg className="h-8 w-8 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Order received</h1>
        <p className="mt-2 text-slate-600">
          This is a UI preview. Connect Stripe / PayPal webhooks to process real
          payments.
        </p>
        <Link
          href="/checkout"
          onClick={() => setSubmitted(false)}
          className="mt-8 inline-block text-sm font-medium text-teal-700 hover:text-teal-800"
        >
          Back to checkout
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-800 text-sm font-bold text-white">
              KH
            </span>
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              KhtumeWare
            </span>
          </Link>
          <nav className="flex items-center gap-4 text-sm text-slate-600">
            <Link href="/" className="hover:text-slate-900">
              Continue shopping
            </Link>
            <span className="hidden text-slate-300 sm:inline">|</span>
            <span className="hidden font-medium text-teal-800 sm:inline">
              Secure Checkout
            </span>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-10">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Checkout</h1>
            <p className="mt-1 text-sm text-slate-600">
              Complete your order — retail or business pricing
            </p>
          </div>
          <CustomerTypeToggle
            value={form.customerType}
            onChange={handleCustomerTypeChange}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            <div className="space-y-6">
              <SectionCard
                step={1}
                title="Contact & Shipping"
                description="Where should we send your order?"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField label="Email" htmlFor="email" required>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={inputClassName}
                      placeholder="you@company.com"
                    />
                  </FormField>
                  <FormField label="Phone" htmlFor="phone" required>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className={inputClassName}
                      placeholder="+1 (555) 000-0000"
                    />
                  </FormField>
                  <FormField label="First name" htmlFor="firstName" required>
                    <input
                      id="firstName"
                      type="text"
                      required
                      value={form.firstName}
                      onChange={(e) => update("firstName", e.target.value)}
                      className={inputClassName}
                    />
                  </FormField>
                  <FormField label="Last name" htmlFor="lastName" required>
                    <input
                      id="lastName"
                      type="text"
                      required
                      value={form.lastName}
                      onChange={(e) => update("lastName", e.target.value)}
                      className={inputClassName}
                    />
                  </FormField>
                </div>

                {form.customerType === "business" && (
                  <div className="mt-4 grid gap-4 border-t border-slate-100 pt-4 sm:grid-cols-2">
                    <FormField label="Company name" htmlFor="company" required>
                      <input
                        id="company"
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) => update("company", e.target.value)}
                        className={inputClassName}
                      />
                    </FormField>
                    <FormField
                      label="Tax ID / VAT"
                      htmlFor="taxId"
                      hint="For customs and invoicing"
                    >
                      <input
                        id="taxId"
                        type="text"
                        value={form.taxId}
                        onChange={(e) => update("taxId", e.target.value)}
                        className={inputClassName}
                      />
                    </FormField>
                    <FormField label="Purchase order (PO)" htmlFor="poNumber">
                      <input
                        id="poNumber"
                        type="text"
                        value={form.poNumber}
                        onChange={(e) => update("poNumber", e.target.value)}
                        className={inputClassName}
                        placeholder="Optional"
                      />
                    </FormField>
                  </div>
                )}

                <div className="mt-4 grid gap-4">
                  <FormField label="Address" htmlFor="address1" required>
                    <input
                      id="address1"
                      type="text"
                      required
                      value={form.address1}
                      onChange={(e) => update("address1", e.target.value)}
                      className={inputClassName}
                    />
                  </FormField>
                  <FormField label="Apartment, suite, etc." htmlFor="address2">
                    <input
                      id="address2"
                      type="text"
                      value={form.address2}
                      onChange={(e) => update("address2", e.target.value)}
                      className={inputClassName}
                    />
                  </FormField>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <FormField label="City" htmlFor="city" required>
                      <input
                        id="city"
                        type="text"
                        required
                        value={form.city}
                        onChange={(e) => update("city", e.target.value)}
                        className={inputClassName}
                      />
                    </FormField>
                    <FormField label="State / Province" htmlFor="state">
                      <input
                        id="state"
                        type="text"
                        value={form.state}
                        onChange={(e) => update("state", e.target.value)}
                        className={inputClassName}
                      />
                    </FormField>
                    <FormField label="Postal code" htmlFor="postalCode" required>
                      <input
                        id="postalCode"
                        type="text"
                        required
                        value={form.postalCode}
                        onChange={(e) => update("postalCode", e.target.value)}
                        className={inputClassName}
                      />
                    </FormField>
                  </div>
                  <FormField label="Country" htmlFor="country" required>
                    <select
                      id="country"
                      required
                      value={form.country}
                      onChange={(e) => update("country", e.target.value)}
                      className={selectClassName}
                    >
                      {countries.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </FormField>
                </div>
              </SectionCard>

              <SectionCard
                step={2}
                title="Order notes"
                description="Optional instructions for your shipment"
              >
                <textarea
                  id="notes"
                  rows={3}
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  className={inputClassName}
                  placeholder="Delivery instructions, dock hours, etc."
                />
              </SectionCard>

              <PaymentSection
                customerType={form.customerType}
                paymentMethod={form.paymentMethod}
                onPaymentMethodChange={(m: PaymentMethod) =>
                  update("paymentMethod", m)
                }
              />

              <div className="lg:hidden">
                <SubmitBlock paymentMethod={form.paymentMethod} />
              </div>
            </div>

            <div className="space-y-6">
              <OrderSummary
                items={mockCartItems}
                customerType={form.customerType}
              />
              <div className="hidden lg:block">
                <SubmitBlock paymentMethod={form.paymentMethod} />
              </div>
            </div>
          </div>
        </form>
      </main>

      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} KhtumeWare · B2B & B2C Global Trade
      </footer>
    </div>
  );
}

function SubmitBlock({ paymentMethod }: { paymentMethod: PaymentMethod }) {
  const label =
    paymentMethod === "invoice"
      ? "Place order on account"
      : paymentMethod === "bank_transfer"
        ? "Submit order & get wire details"
        : "Place order & pay";

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <button
        type="submit"
        className="w-full rounded-lg bg-teal-800 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
      >
        {label}
      </button>
      <p className="mt-3 text-center text-xs text-slate-500">
        By placing your order, you agree to our Terms of Service and Privacy
        Policy.
      </p>
    </div>
  );
}
