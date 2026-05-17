"use client";

import Link from "next/link";
import { useState } from "react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { useCart } from "@/components/cart/CartProvider";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { getCategoryName } from "@/data/categories";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/pricing";

export function CartPageClient() {
  const { clearCart, items, removeItem, setQuantity } = useCart();
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [checkoutError, setCheckoutError] = useState("");
  const [isRedirecting, setIsRedirecting] = useState(false);
  const cartProducts = items
    .map((item) => {
      const product = products.find(
        (catalogProduct) => catalogProduct.id === item.productId,
      );

      return product ? { ...item, product } : null;
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const subtotal = cartProducts.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  async function handleCheckout() {
    if (cartProducts.length === 0 || isRedirecting) {
      return;
    }

    setCheckoutError("");
    setIsRedirecting(true);

    try {
      const response = await fetch("/api/paymongo/create-checkout", {
        body: JSON.stringify({
          customer: {
            email: customerEmail,
            name: customerName,
          },
          items: cartProducts.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
          })),
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const payload = await response.json();

      if (!response.ok || typeof payload.checkoutUrl !== "string") {
        throw new Error(
          payload.error ??
            "We couldn't start checkout. Please try again or contact support.",
        );
      }

      window.location.assign(payload.checkoutUrl);
    } catch (error) {
      setCheckoutError(
        error instanceof Error
          ? error.message
          : "We couldn't start checkout. Please try again or contact support.",
      );
      setIsRedirecting(false);
    }
  }

  if (cartProducts.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is waiting for something cozy, practical, and pet-parent approved.</h2>
        <p>
          Browse PawHaven essentials for cleaner spaces, easier walks, cozy
          corners, and everyday pet-care routines.
        </p>
        <p className="cart-summary__checkout-note">
          PawHaven is currently preparing its full checkout experience. Product
          pages are available for browsing while payment and fulfillment details
          are finalized.
        </p>
        <ButtonLink href="/shop">Continue Shopping</ButtonLink>
      </div>
    );
  }

  return (
    <div className="cart-layout">
      <div className="cart-items" aria-label="Cart items">
        {cartProducts.map((item) => (
          <article className="cart-item" key={item.productId}>
            <Link
              className="cart-item__media"
              href={`/products/${item.product.slug}`}
            >
              <ProductVisual product={item.product} size="cart" />
            </Link>

            <div className="cart-item__body">
              <div>
                <p className="cart-item__category">
                  {getCategoryName(item.product.category)}
                </p>
                <h2>
                  <Link href={`/products/${item.product.slug}`}>
                    {item.product.name}
                  </Link>
                </h2>
                <p>{item.product.shortDescription}</p>
              </div>

              <div className="cart-item__controls">
                <div className="quantity-control" aria-label="Quantity controls">
                  <button
                    onClick={() =>
                      setQuantity(item.productId, item.quantity - 1)
                    }
                    type="button"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      setQuantity(item.productId, item.quantity + 1)
                    }
                    type="button"
                  >
                    +
                  </button>
                </div>

                <button
                  className="cart-item__remove"
                  onClick={() => removeItem(item.productId)}
                  type="button"
                >
                  Remove
                </button>
              </div>
            </div>

            <div className="cart-item__price">
              <span>{formatPrice(item.product.price)}</span>
              <strong>
                {formatPrice(item.product.price * item.quantity)}
              </strong>
            </div>
          </article>
        ))}
      </div>

      <aside className="cart-summary" aria-label="Cart summary">
        <h2>Order summary</h2>
        <div className="cart-summary__row">
          <span>Subtotal</span>
          <strong>{formatPrice(subtotal)}</strong>
        </div>
        <p className="cart-summary__note">
          Estimated shipping details are being finalized with the checkout and
          fulfillment flow.
        </p>
        <div className="cart-summary__customer">
          <label htmlFor="checkout-name">Name optional</label>
          <input
            autoComplete="name"
            id="checkout-name"
            name="name"
            onChange={(event) => setCustomerName(event.target.value)}
            placeholder="Your name"
            type="text"
            value={customerName}
          />
          <label htmlFor="checkout-email">Email optional</label>
          <input
            autoComplete="email"
            id="checkout-email"
            name="email"
            onChange={(event) => setCustomerEmail(event.target.value)}
            placeholder="you@example.com"
            type="email"
            value={customerEmail}
          />
        </div>
        <Button
          disabled={isRedirecting}
          fullWidth
          onClick={handleCheckout}
          type="button"
        >
          {isRedirecting ? "Redirecting to secure checkout..." : "Checkout"}
        </Button>
        <p className="cart-summary__checkout-note">
          Payments are securely processed through PayMongo. Available payment
          methods may include GCash, Maya, cards, QRPh, and other
          PayMongo-supported options depending on checkout availability.
        </p>
        {checkoutError ? (
          <p className="cart-summary__error" role="alert">
            {checkoutError}
          </p>
        ) : null}
        <div className="cart-summary__actions">
          <ButtonLink href="/shop" fullWidth variant="secondary">
            Continue Shopping
          </ButtonLink>
          <button className="cart-summary__clear" onClick={clearCart} type="button">
            Clear cart
          </button>
        </div>
      </aside>
    </div>
  );
}
