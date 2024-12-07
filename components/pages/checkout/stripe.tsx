import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Completed from './completed';
import Form from './form';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function Stripe() {
  const [clientSecret, setClientSecret] = React.useState('');
  const [dpmCheckerLink, setDpmCheckerLink] = React.useState('');
  const [confirmed, setConfirmed] = React.useState(false);

  React.useEffect(() => {
    setConfirmed(new URLSearchParams(window.location.search).get('payment_intent_client_secret') as unknown as boolean);
  });

  React.useEffect(() => {
    fetch('/api/checkout/stripe/payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ id: 'subscription' }] }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        setDpmCheckerLink(data.dpmCheckerLink);
      });
  }, []);

  const options = {
    clientSecret,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          {confirmed ? <Completed /> : <Form dpmCheckerLink={dpmCheckerLink} />}
        </Elements>
      )}
    </div>
  );
}
