import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuthStore } from '@/store/authStore';
import Image from 'next/image';
import { useState } from 'react';
import Paypal from './paypal/paypal';
import Stripe from './stripe/stripe';

export default function CheckoutForm({ plan }: { plan: string }) {
  const user = useAuthStore((state) => state.user);
  const isLoggedIn = !!user.email;

  const [email, setEmail] = useState(user.email || '');
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(isLoggedIn);
  const [paymentMethod, setPaymentMethod] = useState('stripe');

  const confirmEmail = () => {
    setIsEmailConfirmed(true);
  };

  return (
    <Card className='w-[450px] py-4'>
      <CardContent>
        {isEmailConfirmed ? (
          <Tabs defaultValue='stripe' onValueChange={(value) => setPaymentMethod(value)} className='w-full'>
            <TabsList className='grid w-full grid-cols-2 h-100'>
              <TabsTrigger value='stripe' style={{height: '28px'}}>
                <Image src='/stripe.svg' alt='Stripe' width={56} height={24} />
              </TabsTrigger>
              <TabsTrigger value='paypal' style={{height: '28px'}}>
                <Image src='/paypal.svg' alt='Stripe' width={72} height={24} />
              </TabsTrigger>
            </TabsList>
            <TabsContent value='stripe'>
              <Stripe email={email} plan={plan} />
            </TabsContent>
            <TabsContent value='paypal'>
              <Paypal email={email} plan={plan} />
            </TabsContent>
          </Tabs>
        ) : (
          <form onSubmit={confirmEmail}>
            <Input
              className='mb-2'
              placeholder='Type your email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect='off'
            />
            <Button id='submit' style={{ width: '100%' }}>
              Next
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
