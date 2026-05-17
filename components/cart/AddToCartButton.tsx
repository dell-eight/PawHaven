"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/components/cart/CartProvider";

type AddToCartButtonProps = {
  productId: string;
};

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [status, setStatus] = useState("Cart is local until checkout is configured.");

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
