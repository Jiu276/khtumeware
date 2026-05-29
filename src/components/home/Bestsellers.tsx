import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { getBestsellers } from "@/lib/catalog/products";

export function Bestsellers() {
  const items = getBestsellers();

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-20">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            Top Selling Products
          </h2>
          <p className="mt-2 text-neutral-600">
            Customer favorites across pulls, knobs, and bathroom hardware
          </p>
        </div>
        <Link
          href="/shop?filter=bestsellers"
          className="hidden text-sm font-semibold text-neutral-900 underline-offset-4 hover:underline sm:block"
        >
          Shop all bestsellers
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
