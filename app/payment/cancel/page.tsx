import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Payment Not Completed",
  description:
    "Payment was not completed. Return to your PawHaven cart to try checkout again.",
  robots: {
    follow: false,
    index: false,
  },
};

export default function PaymentCancelPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Payment"
        title="Payment was not completed"
        description="No payment was completed through PayMongo. Your cart is still available if you want to try again."
      />
      <Section tone="white">
        <div className="policy-support">
          <div>
            <p className="eyebrow">Try again when ready</p>
            <h2>You can return to your cart.</h2>
            <p>
              If checkout did not open correctly, please try again or contact
              PawHaven support for help.
            </p>
          </div>
          <ButtonLink href="/cart">Return to Cart</ButtonLink>
        </div>
      </Section>
    </main>
  );
}
