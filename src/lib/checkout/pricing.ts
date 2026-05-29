import type { CartItem, CustomerType } from "./types";

export function getItemPrice(item: CartItem, customerType: CustomerType): number {
  if (customerType === "business" && item.wholesalePrice != null) {
    return item.wholesalePrice;
  }
  return item.unitPrice;
}

export function calculateSubtotal(
  items: CartItem[],
  customerType: CustomerType
): number {
  return items.reduce(
    (sum, item) => sum + getItemPrice(item, customerType) * item.quantity,
    0
  );
}

export function formatUSD(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
