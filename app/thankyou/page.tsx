'use client';

import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store/authStore';
import Link from 'next/link';

export default function Thankyou() {
  const user = useAuthStore((state) => state.user);
  const loggedIn = !!user.email;

  return (
    <div className='flex flex-col min-h-[60vh]'>
      <div className='flex-grow flex flex-col items-center justify-center'>
        <p className='bg-white text-black font-bold text-2xl px-6 py-4'>Thank you for your subscription!</p>
        {loggedIn ? (
          <Link href={'/dashboard'}>
            <Button>Go to Dashboard</Button>
          </Link>
        ) : (
          <Link href={'/login'}>
            <Button>Go to login</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
