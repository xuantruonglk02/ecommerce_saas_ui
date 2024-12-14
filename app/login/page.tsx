'use client';

import { components, formFields } from '@/components/pages/auth/authenticator-components';
import { useAuthStore } from '@/store/authStore';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useRouter } from 'next/navigation';
import './login.css';

export default function Login() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  if (user.email) {
    return router.push('/');
  }

  return <Authenticator socialProviders={['google']} formFields={formFields} components={components} />;
}
