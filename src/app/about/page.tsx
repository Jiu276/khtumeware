import { Suspense } from "react";
import Link from "next/link";
import { PromoBar } from "@/components/layout/PromoBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "About KhtumeWare",
};

export default function AboutPage() {
  return (
    <>
      <PromoBar />
      <Suspense>
        <Header />
      </Suspense>
      <main className="mx-auto max-w-3xl px-4 py-16 lg:px-6">
        <h1 className="text-3xl font-bold text-neutral-900">About KhtumeWare</h1>
        <p className="mt-6 leading-relaxed text-neutral-600">
          KhtumeWare is a professional brand specializing in cabinet handles and
          home hardware for global B2C and B2B customers. We combine modern
          design, zinc alloy and stainless steel quality, and easy installation
          for kitchens, bathrooms, wardrobes, and commercial projects.
        </p>
        <p className="mt-4 leading-relaxed text-neutral-600">
          Our product taxonomy follows industry-standard finish, size, and material
          tags — from brushed brass and matte black pulls to bathroom accessories
          and heavy-duty hooks. Wholesale pricing and NET 30 terms available for
          verified business accounts.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-lg bg-neutral-900 px-6 py-3 text-sm font-semibold text-white"
        >
          Contact Sales
        </Link>
      </main>
      <Footer />
    </>
  );
}
