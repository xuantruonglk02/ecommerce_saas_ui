'use client';

import '@aws-amplify/ui-react/styles.css';
import { signOut } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    signOut().then((data) => router.push('/'));
  }, []);

  return <></>;
}
