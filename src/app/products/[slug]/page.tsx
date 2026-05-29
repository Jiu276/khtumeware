import { Suspense } from "react";
import { notFound } from "next/navigation";
import { PromoBar } from "@/components/layout/PromoBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductDetail } from "@/components/product/ProductDetail";
import { getProductBySlug } from "@/lib/catalog/products";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.seoTitle,
    description: product.seoDescription,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <PromoBar />
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Suspense>
          <ProductDetail product={product} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
