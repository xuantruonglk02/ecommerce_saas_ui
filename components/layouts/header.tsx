'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getCurrentUser } from 'aws-amplify/auth';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HEADER_LINKS, HEADER_REMOVE_PAGES, HEADER_START_NOW } from '../config/header_links';
import MobileNav from './mobile-nav';

function removeHeader(path: string, rm_path: Array<string>): boolean {
  for (let index = 0; index < rm_path.length; index++) {
    const element = rm_path[index];
    if (path.includes(element)) {
      return true;
    }
  }
  return false;
}

export default function Header() {
  const pathname = usePathname();
  const routes = HEADER_LINKS;
  const isHidden = removeHeader(pathname, HEADER_REMOVE_PAGES);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getCurrentUser().then((data) => setIsLoggedIn(true));
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-20 py-1 flex items-center justify-center ${
        isHidden ? 'hidden' : ''
      }`}
    >
      <div className='container flex h-14 items-center justify-between'>
        <Link href='/' className='mr-6 flex items-center space-x-2'>
          <Image className='invert' src='/vercel.svg' alt='Vercel logomark' width={24} height={24} />
          <span className='hidden font-bold sm:inline-block'>SaaS</span>
        </Link>
        <nav className='hidden md:flex items-center space-x-8 text-sm'>
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'transition-colors hover:text-foreground hover:underline underline-offset-8',
                pathname === route.href ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              {route.label}
            </Link>
          ))}
          {isLoggedIn ? (
            <>
              <Link
                href='/dashboard'
                className={cn(
                  'transition-colors hover:text-foreground hover:underline underline-offset-8',
                  pathname === '/dashboard' ? 'text-foreground' : 'text-foreground/60'
                )}
              >
                Dashboard
              </Link>
              <Link
                href='/logout'
                className={cn(
                  'transition-colors hover:text-foreground hover:underline underline-offset-8',
                  'text-foreground/60'
                )}
              >
                Logout
              </Link>
            </>
          ) : (
            <Link
              href='/login'
              className={cn(
                'transition-colors hover:text-foreground hover:underline underline-offset-8',
                'text-foreground/60'
              )}
            >
              Login
            </Link>
          )}
        </nav>
        <Link href={HEADER_START_NOW}>
          <Button className='w-full hidden md:block'>Start Now!</Button>
        </Link>
        <MobileNav />
      </div>
    </header>
  );
}
