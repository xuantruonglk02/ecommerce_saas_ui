import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(request: Request) {
  const body = await request.json();
  const { email, plan } = body;

  const payload: Stripe.PaymentIntentCreateParams = {
    amount: calculateOrderAmount(plan),
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    },
  };

  if (email) {
    payload.receipt_email = email;
  }

  console.log(payload)

  const paymentIntent = await stripe.paymentIntents.create(payload);

  return NextResponse.json({
    clientSecret: paymentIntent.client_secret,
    dpmCheckerLink: `https://dashboard.stripe.com/settings/payment_methods/review?transaction_id=${paymentIntent.id}`,
  });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
function calculateOrderAmount(plan: string) {
  return plan === 'basic' ? 500 : 800;
}
