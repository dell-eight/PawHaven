"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/components/cart/CartProvider";

type AddToCartButtonProps = {
  productId: string;
};

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [status, setStatus] = useState(
    "Add to cart is available while PawHaven prepares its full checkout experience.",
  );

  return (
    <div className="product-purchase">
      <Button
        fullWidth
        onClick={() => {
          addItem(productId);
          setStatus("Added to your PawHaven cart.");
        }}
        type="button"
      >
        Add to Cart
      </Button>
      <p>{status}</p>
    </div>
  );
}
