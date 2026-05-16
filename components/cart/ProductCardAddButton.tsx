"use client";

import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { Button } from "@/components/ui/Button";

type ProductCardAddButtonProps = {
  productId: string;
};

export function ProductCardAddButton({
  productId,
}: ProductCardAddButtonProps) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  return (
    <Button
      aria-label={isAdded ? "Added to cart" : "Add to cart"}
      className="product-card__add-button"
      onClick={() => {
        addItem(productId);
        setIsAdded(true);
      }}
      type="button"
    >
      <span className="product-card__cart-icon" aria-hidden="true" />
      <span>{isAdded ? "Added" : "Add to cart"}</span>
    </Button>
  );
}
