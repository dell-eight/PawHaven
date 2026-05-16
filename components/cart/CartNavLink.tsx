"use client";

import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";

type CartNavLinkProps = {
  className: string;
  icon?: boolean;
  onClick?: () => void;
};

export function CartNavLink({
  className,
  icon = false,
  onClick,
}: CartNavLinkProps) {
  const { totalQuantity } = useCart();
  const cartLabel =
    totalQuantity > 0 ? `Cart (${totalQuantity})` : "Cart";

  return (
    <Link
      className={className}
      href="/cart"
      aria-label={cartLabel}
      onClick={onClick}
    >
      {icon ? <span className="cart-link__icon" aria-hidden="true" /> : null}
      <span>{cartLabel}</span>
    </Link>
  );
}
