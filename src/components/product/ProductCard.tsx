"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/catalog/products";
import {
  formatPrice,
  getDefaultVariant,
  getLowestPrice,
  getProductUrl,
} from "@/lib/catalog/products";
import { getFinish } from "@/lib/catalog/taxonomy";
import { useCart } from "@/lib/cart/CartContext";

interface ProductCardProps {
  product: Product;
  showQuickBuy?: boolean;
}

export function ProductCard({ product, showQuickBuy = true }: ProductCardProps) {
  const { addItem } = useCart();
  const defaultVariant = getDefaultVariant(product);
  const lowest = getLowestPrice(product);
  const maxCompare = Math.max(
    ...product.variants.map((v) => v.compareAtPrice ?? v.price)
  );
  const savePct =
    maxCompare > lowest
      ? Math.round(((maxCompare - lowest) / maxCompare) * 100)
      : 0;

  return (
    <article className="group flex flex-col">
      <Link href={getProductUrl(product)} className="relative block overflow-hidden rounded-xl bg-neutral-100">
        <div className="aspect-square relative">
          <Image
            src={defaultVariant.image}
            alt={product.shortTitle}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width:768px) 50vw, 25vw"
          />
          {savePct > 0 && (
            <span className="absolute left-3 top-3 rounded bg-amber-600 px-2 py-0.5 text-[11px] font-semibold text-white">
              Save up to {savePct}%
            </span>
          )}
        </div>
      </Link>

      <div className="mt-3 flex flex-1 flex-col">
        <p className="text-[11px] font-medium uppercase tracking-wide text-neutral-400">
          {product.designCode}
        </p>
        <Link
          href={getProductUrl(product)}
          className="mt-1 line-clamp-2 text-sm font-medium leading-snug text-neutral-900 hover:underline"
        >
          {product.shortTitle}
        </Link>
        <p className="mt-2 text-sm font-semibold text-neutral-900">
          From {formatPrice(lowest)}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.variants.slice(0, 6).map((v) => {
            const finish = getFinish(v.finish);
            return (
              <Link
                key={v.id}
                href={getProductUrl(product, v)}
                title={finish?.name}
                className="h-5 w-5 rounded-full border border-neutral-200 ring-offset-1 transition hover:ring-2 hover:ring-neutral-400"
                style={{ backgroundColor: finish?.hex }}
              />
            );
          })}
          {product.variants.length > 6 && (
            <span className="self-center text-[10px] text-neutral-400">
              +{product.variants.length - 6}
            </span>
          )}
        </div>

        {showQuickBuy && (
          <button
            type="button"
            onClick={() => addItem(product, defaultVariant)}
            className="mt-4 w-full rounded-lg border border-neutral-900 py-2.5 text-xs font-semibold uppercase tracking-wide text-neutral-900 opacity-0 transition group-hover:opacity-100 hover:bg-neutral-900 hover:text-white sm:opacity-100"
          >
            Quick Add
          </button>
        )}
      </div>
    </article>
  );
}
