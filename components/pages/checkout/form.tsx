import { Schema } from "@/amplify/data/resource";
import { Button } from "@/components/ui/button";
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { generateClient } from "aws-amplify/api";
import { useRouter } from "next/navigation";
import { useState } from 'react';

const client = generateClient<Schema>();

export default function CheckoutForm({ email, plan, isLoggedIn, dpmCheckerLink }: { email: string, plan: string, isLoggedIn: boolean, dpmCheckerLink: string }) {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    stripe.confirmPayment({
      elements,
      confirmParams: {},
      redirect: 'if_required',
    })
      .then((data) => {
        if (data.error) {
          if (data.error.type === 'card_error' || data.error.type === 'validation_error') {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setMessage(data.error.message as any);
          } else {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setMessage('An unexpected error occurred.');
          }
        } else {
          client.models.UserPlan.list({ filter: { email: { eq: email } }})
            .then((data) => new Promise((resolve, reject) => {
              if (data.data.length) {
                client.models.UserPlan.update({ id: data.data[0].id, plan: plan })
                  .then(resolve)
                  .catch(reject);
              } else {
                client.models.UserPlan.create({ email: email, plan: plan })
                  .then(resolve)
                  .catch(reject);
              }
            }))
            .then((data) => router.push(`/thankyou${isLoggedIn ? '?loggedIn=ok' : ''}`))
            .catch((error) => setMessage(error.message || 'Got error. Please try again.'));
        }
      }).finally(() => setIsLoading(false));
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
          <span id='button-text'>{isLoading ? <div className='spinner' id='spinner'></div> : 'Pay now'}</span>
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
