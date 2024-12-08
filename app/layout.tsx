'use client';

import outputs from '@/amplify_outputs.json';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import { Toaster } from '@/components/ui/toaster';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import localFont from 'next/font/local';
import { Suspense } from 'react';
import './globals.css';

Amplify.configure(outputs);

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
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Authenticator.Provider>
          <Header />
            <Suspense>
              {children}
            </Suspense>
          <Footer />
          <Toaster />
        </Authenticator.Provider>
      </body>
    </html>
  );
}
