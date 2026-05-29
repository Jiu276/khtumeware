import type { CartItem } from "./types";

export const mockCartItems: CartItem[] = [
  {
    id: "1",
    name: "DESIGN3768 Contemporary Cabinet Handles",
    sku: "KH-PULL-128-MB",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=200&q=80",
    quantity: 4,
    unitPrice: 37.99,
    wholesalePrice: 31.5,
  },
  {
    id: "2",
    name: "DESIGN1192 Cabinet Knobs",
    sku: "KH-KNOB-32-BG",
    image:
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=200&q=80",
    quantity: 6,
    unitPrice: 26.99,
    wholesalePrice: 22.0,
  },
];

export const countries = [
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "GB", name: "United Kingdom" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "AU", name: "Australia" },
  { code: "JP", name: "Japan" },
  { code: "MX", name: "Mexico" },
  { code: "BR", name: "Brazil" },
  { code: "IN", name: "India" },
];
