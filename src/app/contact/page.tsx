import { Suspense } from "react";
import { PromoBar } from "@/components/layout/PromoBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { inputClassName } from "@/components/checkout/FormField";

export const metadata = {
  title: "Support & Contact",
};

export default function ContactPage() {
  return (
    <>
      <PromoBar />
      <Suspense>
        <Header />
      </Suspense>
      <main className="mx-auto max-w-xl px-4 py-16 lg:px-6">
        <h1 className="text-3xl font-bold text-neutral-900">Support</h1>
        <p className="mt-2 text-neutral-600">
          B2C orders, B2B wholesale, and custom OEM inquiries
        </p>
        <form className="mt-10 space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input type="email" required className={`mt-1 ${inputClassName}`} />
          </div>
          <div>
            <label className="text-sm font-medium">Account type</label>
            <select className={`mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm`}>
              <option>Retail (B2C)</option>
              <option>Business (B2B Wholesale)</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea rows={5} required className={`mt-1 ${inputClassName}`} />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-neutral-900 py-3 text-sm font-semibold text-white"
          >
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
