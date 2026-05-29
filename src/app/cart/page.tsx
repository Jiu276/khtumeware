import { Suspense } from "react";
import { PromoBar } from "@/components/layout/PromoBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartPage } from "@/components/cart/CartPage";

export const metadata = {
  title: "Shopping Cart",
};

export default function Cart() {
  return (
    <>
      <PromoBar />
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <CartPage />
      </main>
      <Footer />
    </>
  );
}
