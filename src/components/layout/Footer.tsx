import Link from "next/link";
import { MAIN_CATEGORIES } from "@/lib/catalog/taxonomy";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-900 text-neutral-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-sm font-bold text-neutral-900">
              KH
            </span>
            <span className="text-lg font-semibold text-white">KhtumeWare</span>
          </div>
          <p className="text-sm leading-relaxed text-neutral-400">
            Professional cabinet handles and home hardware. Durable, affordable,
            designed to elevate everyday living.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Shop
          </h3>
          <ul className="space-y-2 text-sm">
            {MAIN_CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/shop?category=${c.slug}`}
                  className="hover:text-white"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/shipping" className="hover:text-white">Shipping Policy</Link></li>
            <li><Link href="/returns" className="hover:text-white">Returns & Refunds</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Region
          </h3>
          <p className="mb-3 text-sm text-neutral-400">
            Shipping available in the US & UK
          </p>
          <select className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-white">
            <option>United States (USD$)</option>
            <option>United Kingdom (USD$)</option>
          </select>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Visa", "MC", "Amex", "PayPal", "Apple Pay"].map((p) => (
              <span
                key={p}
                className="rounded border border-neutral-700 px-2 py-1 text-[10px] font-medium uppercase text-neutral-400"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800 px-4 py-6 text-center text-xs text-neutral-500 lg:px-6">
        © {new Date().getFullYear()} KhtumeWare. All rights reserved. ·{" "}
        <Link href="/privacy" className="hover:text-neutral-300">Privacy</Link>
        {" · "}
        <Link href="/terms" className="hover:text-neutral-300">Terms</Link>
      </div>
    </footer>
  );
}
