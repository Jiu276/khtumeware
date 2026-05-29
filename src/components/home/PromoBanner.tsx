import Link from "next/link";

export function PromoBanner() {
  return (
    <section className="bg-amber-50 py-12">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-800">
          Limited Offer
        </p>
        <h2 className="mt-2 text-2xl font-bold text-neutral-900 sm:text-3xl">
          Save 10% on All Products
        </h2>
        <p className="mt-2 text-neutral-600">
          Use code <strong className="font-mono text-neutral-900">KHT10</strong> at checkout
        </p>
        <Link
          href="/shop"
          className="mt-6 inline-flex rounded-lg bg-neutral-900 px-8 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
