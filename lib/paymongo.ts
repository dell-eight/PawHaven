import { isPublicProduct, products } from "@/data/products";

export const paymongoPaymentMethodTypes = [
  "gcash",
  "paymaya",
  "card",
  "qrph",
] as const;

export type CheckoutCartItem = {
  productId: string;
  quantity: number;
};

export type CheckoutCustomer = {
  email?: string;
  name?: string;
};

type PaymongoLineItem = {
  amount: number;
  currency: "PHP";
  description: string;
  name: string;
  quantity: number;
};

export function pesosToCentavos(amount: number) {
  return Math.round(amount * 100);
}

export function buildCheckoutLineItems(cartItems: CheckoutCartItem[]) {
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    throw new Error("Cart is empty.");
  }

  const lineItems: PaymongoLineItem[] = cartItems.map((item) => {
    const product = products.find(
      (catalogProduct) => catalogProduct.id === item.productId,
    );

    if (!product || !isPublicProduct(product)) {
      throw new Error("Cart includes a product that is no longer available.");
    }

    if (!Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > 99) {
      throw new Error("Cart includes an invalid quantity.");
    }

    if (!Number.isFinite(product.price) || product.price <= 0) {
      throw new Error("Cart includes a product with an invalid price.");
    }

    return {
      amount: pesosToCentavos(product.price),
      currency: "PHP",
      description: product.shortDescription,
      name: product.name,
      quantity: item.quantity,
    };
  });

  return lineItems;
}

export function getOrderTotalCentavos(lineItems: PaymongoLineItem[]) {
  return lineItems.reduce(
    (total, item) => total + item.amount * item.quantity,
    0,
  );
}
