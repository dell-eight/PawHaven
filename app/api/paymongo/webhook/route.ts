import { NextResponse } from "next/server";

const handledEventTypes = new Set([
  "checkout_session.payment.paid",
  "payment.paid",
  "payment.failed",
]);

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid webhook payload." }, { status: 400 });
  }

  const event = payload as {
    data?: {
      attributes?: {
        data?: unknown;
        livemode?: boolean;
        type?: string;
      };
      id?: string;
      type?: string;
    };
  };
  const eventType = event.data?.attributes?.type;

  if (!eventType || !handledEventTypes.has(eventType)) {
    return NextResponse.json({ received: true });
  }

  // TODO(owner): Add PayMongo webhook signature verification and persist order status updates in a database.
  // TODO(owner): For checkout_session.payment.paid/payment.paid, mark matching order as paid after verification.
  // TODO(owner): For payment.failed, mark matching order as payment_failed and notify support/customer if appropriate.
  console.info("Received PayMongo webhook event", {
    eventId: event.data?.id,
    eventType,
    livemode: event.data?.attributes?.livemode,
  });

  return NextResponse.json({ received: true });
}
