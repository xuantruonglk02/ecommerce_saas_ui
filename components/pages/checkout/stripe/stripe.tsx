import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import React from 'react';
import Completed from './completed';
import Form from './form';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function Stripe({ email, plan }: { email: string, plan: string }) {
  const [clientSecret, setClientSecret] = React.useState('');
  const [dpmCheckerLink, setDpmCheckerLink] = React.useState('');
  const [confirmed, setConfirmed] = React.useState(false);

  React.useEffect(() => {
    setConfirmed(
      (new URLSearchParams(window.location.search).get('payment_intent_client_secret') as unknown) as boolean
    );

    createPaymentIntent();
  }, []);

  const createPaymentIntent = () => {
    fetch('/api/checkout/stripe/payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, plan }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        setDpmCheckerLink(data.dpmCheckerLink);
      });
  };

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: 'stripe',
    },
  };

  return (
    <>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          {confirmed ? <Completed /> : <Form email={email} plan={plan} dpmCheckerLink={dpmCheckerLink} />}
        </Elements>
      )}
    </>
  );
}
