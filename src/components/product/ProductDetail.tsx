"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { Product, ProductVariant } from "@/lib/catalog/products";
import { formatPrice } from "@/lib/catalog/products";
import { getFinish } from "@/lib/catalog/taxonomy";
import { useCart } from "@/lib/cart/CartContext";

export function ProductDetail({ product }: { product: Product }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { addItem } = useCart();

  const initialFinish = searchParams.get("finish");
  const [selected, setSelected] = useState<ProductVariant>(() => {
    if (initialFinish) {
      return (
        product.variants.find((v) => v.finish === initialFinish) ??
        product.variants[0]
      );
    }
    return product.variants[0];
  });
  const [qty, setQty] = useState(1);

  const finishName = useMemo(
    () => getFinish(selected.finish)?.name ?? selected.finish,
    [selected.finish]
  );

  const selectVariant = (variant: ProductVariant) => {
    setSelected(variant);
    router.replace(`/products/${product.slug}?finish=${variant.finish}`, {
      scroll: false,
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
      <nav className="mb-8 text-sm text-neutral-500">
        <Link href="/" className="hover:text-neutral-900">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-neutral-900">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-900">{product.designCode}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-100">
            <Image
              src={selected.image}
              alt={product.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex gap-3 overflow-x-auto">
            {[selected.image, ...product.gallery.filter((g) => g !== selected.image)].slice(0, 4).map((img) => (
              <div key={img} className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-neutral-200">
                <Image src={img} alt="" fill className="object-cover" sizes="80px" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-neutral-400">
            {product.designCode}
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            {product.title}
          </h1>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-2xl font-bold text-neutral-900">
              {formatPrice(selected.price)}
            </span>
            {selected.compareAtPrice && (
              <span className="text-lg text-neutral-400 line-through">
                {formatPrice(selected.compareAtPrice)}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-neutral-500">SKU: {selected.sku}</p>

          <div className="mt-8">
            <p className="text-sm font-semibold text-neutral-900">
              Finish: <span className="font-normal">{finishName}</span>
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.variants.map((v) => {
                const finish = getFinish(v.finish);
                const active = v.id === selected.id;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => selectVariant(v)}
                    title={finish?.name}
                    className={`h-9 w-9 rounded-full border-2 transition ${
                      active
                        ? "border-neutral-900 ring-2 ring-neutral-900 ring-offset-2"
                        : "border-neutral-200 hover:border-neutral-400"
                    }`}
                    style={{ backgroundColor: finish?.hex }}
                  />
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center rounded-lg border border-neutral-200">
              <button
                type="button"
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="px-3 py-2 text-lg text-neutral-600"
              >
                −
              </button>
              <span className="min-w-[2rem] text-center text-sm font-medium">{qty}</span>
              <button
                type="button"
                onClick={() => setQty(qty + 1)}
                className="px-3 py-2 text-lg text-neutral-600"
              >
                +
              </button>
            </div>
            <button
              type="button"
              onClick={() => addItem(product, selected, qty)}
              className="flex-1 rounded-lg bg-neutral-900 py-3.5 text-sm font-semibold text-white hover:bg-neutral-800"
            >
              Add to Cart
            </button>
          </div>

          <Link
            href="/checkout"
            className="mt-3 block w-full rounded-lg border border-neutral-900 py-3.5 text-center text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
          >
            Buy Now
          </Link>

          <dl className="mt-10 grid gap-3 border-t border-neutral-100 pt-8 text-sm">
            <Spec label="Material" value={product.material} />
            <Spec label="Style" value={product.style} />
            <Spec label="Shape" value={product.shape} />
            {product.holeCenters && <Spec label="Hole Centers" value={product.holeCenters} />}
            {product.overallLength && <Spec label="Overall Length" value={product.overallLength} />}
            {product.diameter && <Spec label="Diameter" value={product.diameter} />
            }
            <Spec label="Pack" value={product.packQuantity} />
            <Spec label="Installation" value={product.installationType} />
            <Spec label="Screws" value={product.includedScrews} />
            <Spec label="Application" value={product.application} />
          </dl>

          <div className="mt-6 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-8 text-sm leading-relaxed text-neutral-600">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <dt className="text-neutral-500">{label}</dt>
      <dd className="font-medium text-neutral-900">{value}</dd>
    </div>
  );
}
