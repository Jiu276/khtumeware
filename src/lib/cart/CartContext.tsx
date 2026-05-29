"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { Product, ProductVariant } from "@/lib/catalog/products";
import { getDefaultVariant } from "@/lib/catalog/products";

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (product: Product, variant?: ProductVariant, qty?: number) => void;
  removeItem: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const value = useMemo<CartContextValue>(() => {
    const addItem = (
      product: Product,
      variant = getDefaultVariant(product),
      qty = 1
    ) => {
      setItems((prev) => {
        const existing = prev.find((i) => i.variant.id === variant.id);
        if (existing) {
          return prev.map((i) =>
            i.variant.id === variant.id
              ? { ...i, quantity: i.quantity + qty }
              : i
          );
        }
        return [...prev, { product, variant, quantity: qty }];
      });
    };

    const removeItem = (variantId: string) => {
      setItems((prev) => prev.filter((i) => i.variant.id !== variantId));
    };

    const updateQuantity = (variantId: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(variantId);
        return;
      }
      setItems((prev) =>
        prev.map((i) =>
          i.variant.id === variantId ? { ...i, quantity } : i
        )
      );
    };

    return {
      items,
      count: items.reduce((n, i) => n + i.quantity, 0),
      subtotal: items.reduce(
        (sum, i) => sum + i.variant.price * i.quantity,
        0
      ),
      addItem,
      removeItem,
      updateQuantity,
      clearCart: () => setItems([]),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
