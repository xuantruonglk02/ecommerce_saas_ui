'use client'

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function Thankyou() {
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan');

  React.useEffect(() => {
    fetch('/api/checkout/tracking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan }),
    });
  });

  return (
    <div className='flex flex-col min-h-[60vh]'>
      <div className='flex-grow flex flex-col items-center justify-center'>
        <p className='bg-white text-black font-bold text-2xl px-6 py-4'>Thank you for your subscription!</p>
        <Link href={'/'}>
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
