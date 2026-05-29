import { Suspense } from "react";
import { PromoBar } from "@/components/layout/PromoBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShopFilters } from "@/components/shop/ShopFilters";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/lib/catalog/products";
import { filterProducts, parseShopSearchParams } from "@/lib/catalog/filters";

export const metadata = {
  title: "Shop All Hardware",
  description: "Browse cabinet pulls, knobs, bathroom and door hardware by finish, material, and style.",
};

interface ShopPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;
  const filters = parseShopSearchParams(params);
  let items = filterProducts(products, filters);

  if (params.filter === "bestsellers") {
    items = items.filter((p) => p.bestseller);
  }

  return (
    <>
      <PromoBar />
      <Suspense>
        <Header />
      </Suspense>
      <main className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
          Shop All
        </h1>
        <p className="mt-2 text-neutral-600">
          {items.length} products · Filter by finish, category, material & room
        </p>
        <div className="mt-10 grid gap-10 lg:grid-cols-[240px_1fr]">
          <Suspense>
            <ShopFilters />
          </Suspense>
          {items.length === 0 ? (
            <p className="py-20 text-center text-neutral-500">
              No products match your filters.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
