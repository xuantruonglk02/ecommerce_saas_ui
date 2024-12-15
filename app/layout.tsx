'use client';

import { Schema } from '@/amplify/data/resource';
import outputs from '@/amplify_outputs.json';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import { Toaster } from '@/components/ui/toaster';
import { useAuthStore } from '@/store/authStore';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';
import localFont from 'next/font/local';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import './globals.css';

Amplify.configure(outputs);

const client = generateClient<Schema>();

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const loadLoggedUser = useAuthStore((state) => state.loadLoggedUser);
  const setUser = useAuthStore((state) => state.setUser);
  const logout = useAuthStore((state) => state.logout);

  loadLoggedUser();

  Hub.listen('auth', ({ payload }) => {
    switch (payload.event) {
      case 'signedIn':
        console.log('user have been signedIn successfully.');
        fetchUserAttributes().then(async (data) => {
          let plan;
          try {
            const userPlan = await client.models.UserPlan.list({ filter: { email: { eq: data.email }}});
            plan = userPlan.data.length ? userPlan.data[0].plan as string : undefined;
          } catch (error) {
            console.error(error);
          }
          setUser({
            email: data.email as string,
            plan,
          });
        });
        break;
      case 'signedOut':
        console.log('user have been signedOut successfully.');
        logout();
        break;
      case 'tokenRefresh':
        console.log('auth tokens have been refreshed.');
        break;
      case 'tokenRefresh_failure':
        console.log('failure while refreshing auth tokens.');
        break;
      case 'signInWithRedirect':
        console.log('signInWithRedirect API has successfully been resolved.');
        break;
      case 'signInWithRedirect_failure':
        console.log('failure while trying to resolve signInWithRedirect API.');
        break;
      case 'customOAuthState':
        console.log('custom state returned from CognitoHosted UI');
        break;
    }
  });

  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Authenticator.Provider>
          <Header />
          <Suspense>{children}</Suspense>
          <Footer />
          <Toaster />
        </Authenticator.Provider>
      </body>
    </html>
  );
}
