'use client';

import { getCurrentUser } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import { Suspense, useEffect } from 'react';

export default function PrivateLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();

  useEffect(() => {
    getCurrentUser().catch((error) => router.push('/login'));
  }, []);

  return (
    <Suspense>
      <div className='min-h-screen w-full'>{children}</div>;
    </Suspense>
  );
}
