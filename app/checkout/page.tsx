'use client';

import CheckoutForm from '@/components/pages/checkout/checkout-form';
import { useSearchParams } from 'next/navigation';
import './checkout.css';

export default function Checkout() {
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan');

  return (
    <div className='w-100'>
      <div className='flex flex-row justify-center py-8' style={{ backgroundColor: 'rgb(82, 97, 128)' }}>
        <div className='plan-block mr-8 p-8'>
          {plan === 'basic' ? (
            <>
              <div className='plan-name'>Basic Plan</div>
              <div className='plan-price'>$5.00</div>
              <div className='plan-description'>
                Create and Customize up to 5 popups, Standard customer support, One Website
              </div>
            </>
          ) : (
            <>
              <div className='plan-name'>Pro Plan</div>
              <div className='plan-price'>$8.00</div>
              <div className='plan-description'>
                Create and customize 10 popups, Advanced analytics and reporting, A/B testing capabilities, Priority
                customer support, Up to 5 websites
              </div>
            </>
          )}
          <img
            src='https://d1wqzb5bdbcre6.cloudfront.net/8887dd6dcaccdd69f2798522097d6d08823379754b8661ce70c384abc913cb83/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a6446387855457474516a6c4a5432527962476f7a57584a5966475a7358327870646d5666596d517a644546535a6b6c6e5a545676533078504d7a4a615a4539565533413330306a685067354d5343'
            alt=''
            className=''
            style={{ maxWidth: '250px', marginLeft: 'auto' }}
          />
        </div>
        <CheckoutForm plan={plan as string} />
      </div>
    </div>
  );
}
