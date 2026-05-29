export type CustomerType = "retail" | "business";

export type PaymentMethod =
  | "card"
  | "paypal"
  | "bank_transfer"
  | "invoice";

export interface CartItem {
  id: string;
  name: string;
  sku: string;
  image: string;
  quantity: number;
  unitPrice: number;
  wholesalePrice?: number;
}

export interface CheckoutFormState {
  customerType: CustomerType;
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  taxId: string;
  poNumber: string;
  phone: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  paymentMethod: PaymentMethod;
  notes: string;
}

export const defaultFormState: CheckoutFormState = {
  customerType: "retail",
  email: "",
  firstName: "",
  lastName: "",
  company: "",
  taxId: "",
  poNumber: "",
  phone: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  postalCode: "",
  country: "US",
  paymentMethod: "card",
  notes: "",
};
