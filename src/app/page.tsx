import { Suspense } from "react";
import { PromoBar } from "@/components/layout/PromoBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { PromoBanner } from "@/components/home/PromoBanner";
import { Bestsellers } from "@/components/home/Bestsellers";
import { ShopByFinish } from "@/components/home/ShopByFinish";
import { ShopByCategory } from "@/components/home/ShopByCategory";
import { BrandStory } from "@/components/home/BrandStory";
import { Testimonials } from "@/components/home/Testimonials";
import { TrustBadges } from "@/components/home/TrustBadges";

export default function HomePage() {
  return (
    <>
      <PromoBar />
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <PromoBanner />
        <Bestsellers />
        <ShopByFinish />
        <ShopByCategory />
        <BrandStory />
        <Testimonials />
        <TrustBadges />
      </main>
      <Footer />
    </>
  );
}
