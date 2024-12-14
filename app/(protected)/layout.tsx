'use client';

import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';

export default function PrivateLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  if (!user.email) {
    return router.push('/login');
  }

  return (
    <Suspense>
      <div className='min-h-screen w-full'>{children}</div>;
    </Suspense>
  );
}
