import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { fetchUserAttributes } from 'aws-amplify/auth';
import React from 'react';
import Completed from './completed';
import Form from './form';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function Stripe(props: { plan: string }) {
  const [clientSecret, setClientSecret] = React.useState('');
  const [dpmCheckerLink, setDpmCheckerLink] = React.useState('');
  const [confirmed, setConfirmed] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isEmailConfirmed, setIsEmailConfirmed] = React.useState(false);

  React.useEffect(() => {
    setConfirmed(new URLSearchParams(window.location.search).get('payment_intent_client_secret') as unknown as boolean);
    fetchUserAttributes().then((data) => {
      setEmail(data.email as string);
      setIsLoggedIn(true);
      setIsEmailConfirmed(true);
      createPaymentIntent();
    });
  }, []);

  const createPaymentIntent = () => {
    fetch('/api/checkout/stripe/payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, plan: props.plan }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        setDpmCheckerLink(data.dpmCheckerLink);
      });
  }

  const confirmEmail = () => {
    setIsEmailConfirmed(true);
    createPaymentIntent();
  }

  const options: StripeElementsOptions  = {
    clientSecret,
    appearance: {
      theme: 'stripe',
    },
  };

  return (
    <div>
      {!isLoggedIn && !isEmailConfirmed && (
        <form onSubmit={confirmEmail}>
          <Input
            className="mb-2"
            placeholder='Type your email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoCapitalize='none'
            autoComplete='email'
            autoCorrect='off'
          />
          <Button id="submit" style={{width:'100%'}}>Next</Button>
        </form>
      )}
      {email && clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          {confirmed ? <Completed /> : <Form email={email} plan={props.plan} isLoggedIn={isLoggedIn} dpmCheckerLink={dpmCheckerLink} />}
        </Elements>
      )}
    </div>
  );
}
