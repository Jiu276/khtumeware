import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[520px] overflow-hidden bg-neutral-900 lg:min-h-[600px]">
      <Image
        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1920&q=80"
        alt="Modern kitchen with cabinet hardware"
        fill
        priority
        className="object-cover opacity-60"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/50 to-transparent" />
      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-20 lg:min-h-[600px] lg:px-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400">
          Cabinet Hardware & Home Fixtures
        </p>
        <h1 className="mt-4 max-w-xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Upgrade Your Cabinets in Style
        </h1>
        <p className="mt-4 max-w-md text-lg text-neutral-300">
          Premium handles & hardware — install in minutes. Wholesale & retail
          available worldwide.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/shop?filter=bestsellers"
            className="rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
          >
            Shop Best Sellers
          </Link>
          <Link
            href="/shop"
            className="rounded-lg border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Shop All
          </Link>
        </div>
      </div>
    </section>
  );
}
