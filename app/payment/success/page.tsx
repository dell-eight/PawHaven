import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Payment Confirmation",
  description:
    "Payment confirmation page for PawHaven orders processed through PayMongo.",
  robots: {
    follow: false,
    index: false,
  },
};

type PaymentSuccessPageProps = {
  searchParams: Promise<{
    session_id?: string;
  }>;
};

export default async function PaymentSuccessPage({
  searchParams,
}: PaymentSuccessPageProps) {
  const { session_id: sessionId } = await searchParams;

  return (
    <main>
      <PageHeader
        eyebrow="Payment"
        title="Payment received or being verified"
        description="Your payment was completed through PayMongo. We are confirming your order."
      />
      <Section tone="white">
        <div className="policy-support">
          <div>
            <p className="eyebrow">What happens next</p>
            <h2>Please save your payment reference.</h2>
            <p>
              PawHaven will use the PayMongo session reference to confirm the
              order once payment and order handling are reviewed.
            </p>
            {sessionId ? (
              <p>
                Session reference: <strong>{sessionId}</strong>
              </p>
            ) : null}
            <p>
              You should receive a payment confirmation from PayMongo if
              receipts are enabled in your PayMongo checkout settings.
            </p>
          </div>
          <ButtonLink href="/contact">Contact PawHaven</ButtonLink>
        </div>
      </Section>
    </main>
  );
}
