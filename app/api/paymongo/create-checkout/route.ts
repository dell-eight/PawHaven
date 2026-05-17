import { NextResponse } from "next/server";
import {
  buildCheckoutLineItems,
  getOrderTotalCentavos,
  paymongoPaymentMethodTypes,
  type CheckoutCartItem,
  type CheckoutCustomer,
} from "@/lib/paymongo";

const paymongoCheckoutUrl = "https://api.paymongo.com/v1/checkout_sessions";

type CreateCheckoutRequestBody = {
  customer?: CheckoutCustomer;
  items?: CheckoutCartItem[];
};

function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

function getPaymongoSecretKey() {
  return process.env.PAYMONGO_SECRET_KEY;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitizeCustomer(customer?: CheckoutCustomer) {
  if (!customer) {
    return undefined;
  }

  const name = customer.name?.trim();
  const email = customer.email?.trim();

  return {
    ...(name ? { name: name.slice(0, 120) } : {}),
    ...(email && isValidEmail(email) ? { email } : {}),
  };
}

function createReferenceNumber() {
  return `PH-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

export async function POST(request: Request) {
  let body: CreateCheckoutRequestBody;

  try {
    body = (await request.json()) as CreateCheckoutRequestBody;
  } catch {
    return NextResponse.json(
      { error: "Invalid checkout request. Please refresh your cart and try again." },
      { status: 400 },
    );
  }

  try {
    const lineItems = buildCheckoutLineItems(body.items ?? []);
    const totalCentavos = getOrderTotalCentavos(lineItems);
    const secretKey = getPaymongoSecretKey();

    if (!secretKey) {
      return NextResponse.json(
        {
          error:
            "Checkout is not configured yet. Please add PAYMONGO_SECRET_KEY on the server.",
        },
        { status: 500 },
      );
    }

    const siteUrl = getSiteUrl();
    const referenceNumber = createReferenceNumber();
    const customer = sanitizeCustomer(body.customer);

    const response = await fetch(paymongoCheckoutUrl, {
      body: JSON.stringify({
        data: {
          attributes: {
            cancel_url: `${siteUrl}/payment/cancel`,
            customer_email: customer?.email,
            customer_name: customer?.name,
            description: `PawHaven order ${referenceNumber}`,
            line_items: lineItems,
            metadata: {
              order_reference: referenceNumber,
              source: "pawhaven-nextjs",
              total_centavos: String(totalCentavos),
            },
            payment_method_types: [...paymongoPaymentMethodTypes],
            success_url: `${siteUrl}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
          },
        },
      }),
      headers: {
        Authorization: `Basic ${Buffer.from(`${secretKey}:`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const payload = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          error:
            "We couldn't start checkout. Please try again or contact support.",
        },
        { status: response.status },
      );
    }

    const checkoutUrl = payload?.data?.attributes?.checkout_url;
    const checkoutSessionId = payload?.data?.id;

    if (typeof checkoutUrl !== "string" || !checkoutUrl) {
      return NextResponse.json(
        {
          error:
            "We couldn't start checkout. Please try again or contact support.",
        },
        { status: 502 },
      );
    }

    // TODO(owner): Persist referenceNumber, checkoutSessionId, cart items, and pending_payment status in a database before accepting live orders.
    return NextResponse.json({
      checkoutUrl,
      checkoutSessionId,
      referenceNumber,
      totalCentavos,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "We couldn't start checkout. Please try again or contact support.";

    return NextResponse.json({ error: message }, { status: 400 });
  }
}
