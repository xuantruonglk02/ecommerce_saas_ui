import { Schema } from '@/amplify/data/resource';
import { useToast } from '@/hooks/use-toast';
import { useAuthStore } from '@/store/authStore';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { generateClient } from 'aws-amplify/api';
import { useRouter } from 'next/navigation';

const client = generateClient<Schema>();

export default function Paypal({ email, plan }: { email: string, plan: string }) {
  const router = useRouter();
  const { toast } = useToast();
  const setPlan = useAuthStore((state) => state.setPlan);
  
  const paypalCreateOrder = async () => {
    return new Promise((resolve, reject) =>
      fetch('/api/checkout/paypal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, plan }),
      })
        .then((res) => res.json())
        .then((data) => {
          resolve(data.orderExternalId);
        })
        .catch((error) => {
          toast({ title: error.message });
          reject(error);
        })
    );
  }

  const paypalCaptureOrder = async (orderId: string) => {
    return new Promise((resolve, reject) =>
      fetch('/api/checkout/tracking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId }),
      })
        .then((data) => {
          toast({
            title: 'Success',
            description: orderId,
          });
          resolve(data);
        })
        .catch((error) => {
          toast({ title: error.message });
        })
    );
  }

  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
        currency: 'USD',
        intent: 'capture'
      }}
    >
      <PayPalButtons
        style={{
          color: 'gold',
          shape: 'rect',
          label: 'pay',
          height: 50
        }}
        createOrder={async (data, actions) => {
          let orderId = await paypalCreateOrder();
          return orderId as string;
        }}
        onApprove={async (data, actions) => {
          try {
            await paypalCaptureOrder(data.orderID);
            const plans = await client.models.UserPlan.list({ filter: { email: { eq: email } }});
            if (plans.data.length) {
              await client.models.UserPlan.update({ id: plans.data[0].id, plan: plan });
              setPlan(plan);
            } else {
              await client.models.UserPlan.create({ email: email, plan: plan });
              setPlan(plan);
            }
            router.push(`/thankyou`);
          } catch (error: any) {
            toast({ title: error.message || 'Got error. Please try again.' });
          }
        }}
      />
    </PayPalScriptProvider>
  );
}
