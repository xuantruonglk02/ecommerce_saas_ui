'use client';

import { components, formFields } from '@/components/pages/auth/authenticator-components';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Hub } from 'aws-amplify/utils';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import './login.css';
import { getCurrentUser } from 'aws-amplify/auth';

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    getCurrentUser().then((data) => router.push('/'));

    const unsubscribe = Hub.listen('auth', ({ payload: { event } }) => {
      if (event === 'signedIn') {
        router.push('/dashboard');
      }
    });
    return unsubscribe;
  }, []);

  return (
    <Authenticator
      socialProviders={['google']}
      formFields={formFields}
      components={components}
    />
  );
}
