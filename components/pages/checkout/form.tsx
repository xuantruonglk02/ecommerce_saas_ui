import { Button } from "@/components/ui/button";
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function CheckoutForm({ dpmCheckerLink }: { dpmCheckerLink: string }) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const searchParams = useSearchParams();
  const plan = searchParams.get('plan');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/thankyou?plan=${plan}`,
      },
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setMessage(error.message as any);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setMessage('An unexpected error occurred.' as any);
    }

    setIsLoading(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const paymentElementOptions: any = {
    layout: 'accordion',
  };

  return (
    <>
      <form id='payment-form' onSubmit={handleSubmit}>
        <PaymentElement id='payment-element' options={paymentElementOptions} />
        <Button disabled={isLoading || !stripe || !elements} id='submit' className='mt-4' style={{width: '100%'}}>
          <span id='button-text'>{!isLoading ? <div className='spinner' id='spinner'></div> : 'Pay now'}</span>
        </Button>
        {message && <div id='payment-message'>{message}</div>}
      </form>
      {/* <div id='dpm-annotation'>
        <p>
          Payment methods are dynamically displayed based on customer location, order amount, and currency.&nbsp;
          <a href={dpmCheckerLink} target='_blank' rel='noopener noreferrer' id='dpm-integration-checker'>
            Preview payment methods by transaction
          </a>
        </p>
      </div> */}
    </>
  );
}
