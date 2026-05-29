"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart/CartContext";
import { formatPrice } from "@/lib/catalog/products";
import { getFinish } from "@/lib/catalog/taxonomy";

export function CartPage() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();
  const shipping = subtotal >= 65 ? 0 : 12.99;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-neutral-900">Your cart is empty</h1>
        <p className="mt-2 text-neutral-600">Find your new cabinet hardware</p>
        <Link
          href="/shop"
          className="mt-8 inline-flex rounded-lg bg-neutral-900 px-8 py-3 text-sm font-semibold text-white"
        >
          Shop All
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
      <h1 className="text-2xl font-bold text-neutral-900">Cart</h1>
      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]">
        <ul className="divide-y divide-neutral-100">
          {items.map((item) => {
            const finish = getFinish(item.variant.finish);
            return (
              <li key={item.variant.id} className="flex gap-4 py-6">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-neutral-100">
                  <Image
                    src={item.variant.image}
                    alt={item.product.shortTitle}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <Link
                    href={`/products/${item.product.slug}?finish=${item.variant.finish}`}
                    className="font-medium text-neutral-900 hover:underline"
                  >
                    {item.product.shortTitle}
                  </Link>
                  <p className="text-sm text-neutral-500">
                    {finish?.name} · {item.variant.sku}
                  </p>
                  <div className="mt-3 flex items-center gap-4">
                    <div className="flex items-center rounded border border-neutral-200">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.variant.id, item.quantity - 1)
                        }
                        className="px-2 py-1"
                      >
                        −
                      </button>
                      <span className="px-2 text-sm">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.variant.id, item.quantity + 1)
                        }
                        className="px-2 py-1"
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.variant.id)}
                      className="text-xs text-neutral-500 hover:text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="font-semibold text-neutral-900">
                  {formatPrice(item.variant.price * item.quantity)}
                </p>
              </li>
            );
          })}
        </ul>

        <aside className="h-fit rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-neutral-900">Order Summary</h2>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-neutral-600">Subtotal</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-neutral-600">Shipping</dt>
              <dd>{shipping === 0 ? "Free" : formatPrice(shipping)}</dd>
            </div>
            <div className="flex justify-between border-t border-neutral-100 pt-2 text-base font-bold">
              <dt>Total</dt>
              <dd>{formatPrice(total)}</dd>
            </div>
          </dl>
          <p className="mt-3 text-xs text-neutral-500">
            Shipping & taxes calculated at checkout
          </p>
          <Link
            href="/checkout"
            className="mt-6 block w-full rounded-lg bg-neutral-900 py-3.5 text-center text-sm font-semibold text-white hover:bg-neutral-800"
          >
            Checkout
          </Link>
        </aside>
      </div>
    </div>
  );
}
