import { Suspense } from "react";
import Link from "next/link";
import { PromoBar } from "@/components/layout/PromoBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/lib/catalog/products";
import { filterProducts, parseCollectionPath } from "@/lib/catalog/filters";
import { getFinish } from "@/lib/catalog/taxonomy";

interface CollectionPageProps {
  params: Promise<{ segments: string[] }>;
}

export async function generateMetadata({ params }: CollectionPageProps) {
  const { segments } = await params;
  const finish = segments[1] ? getFinish(segments[1]) : null;
  const title = finish
    ? `${finish.name} Cabinet Hardware`
    : segments[0]?.replace(/-/g, " ") ?? "Collection";
  return {
    title: title.charAt(0).toUpperCase() + title.slice(1),
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { segments } = await params;
  const filters = parseCollectionPath(segments);
  const items = filterProducts(products, filters);
  const finish = filters.finish ? getFinish(filters.finish) : null;
  const title = finish
    ? `${finish.name} Hardware`
    : (segments[0] ?? "Collection").replace(/-/g, " ");

  return (
    <>
      <PromoBar />
      <Suspense>
        <Header />
      </Suspense>
      <main className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <nav className="mb-4 text-sm text-neutral-500">
          <Link href="/" className="hover:text-neutral-900">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-neutral-900">Shop</Link>
        </nav>
        <div className="flex items-center gap-3">
          {finish && (
            <span
              className="h-8 w-8 rounded-full border border-neutral-200"
              style={{ backgroundColor: finish.hex }}
            />
          )}
          <h1 className="text-3xl font-bold capitalize tracking-tight text-neutral-900">
            {title}
          </h1>
        </div>
        <p className="mt-2 text-neutral-600">{items.length} products</p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
