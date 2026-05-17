import type { Metadata } from "next";
import { CartPageClient } from "@/components/cart/CartPageClient";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Your PawHaven Cart",
  description:
    "Review your PawHaven cart. Checkout is disabled until payment integration is configured.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CartPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Cart"
        title="Your PawHaven Cart"
        description="Review cozy, practical pet essentials before checkout is connected."
      />
      <Section tone="white">
        <CartPageClient />
      </Section>
    </main>
  );
}
