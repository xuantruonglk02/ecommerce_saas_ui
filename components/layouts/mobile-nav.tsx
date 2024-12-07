'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { getCurrentUser } from 'aws-amplify/auth';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HEADER_LINKS, HEADER_START_NOW } from '../config/header_links';

export default function MobileNav() {
  const pathname = usePathname();
  const routes = HEADER_LINKS;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getCurrentUser().then((data) => setIsLoggedIn(true));
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className='md:hidden'>
          <Menu className='h-5 w-5' />
          <span className='sr-only'>Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='w-[300px] sm:w-[350px]'>
        <SheetHeader className='flex flex-row items-center justify-between border-b pb-4'>
          <SheetTitle className='flex items-center gap-2'>
            <Image className='invert' src='/vercel.svg' alt='Vercel logomark' width={24} height={24} />
            <span>SaaS</span>
          </SheetTitle>
        </SheetHeader>
        <div className='flex flex-col gap-4 py-4'>
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'transition-colors hover:text-foreground/80 font-[family-name:var(--font-geist-sans)] text-base font-medium',
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
          <hr />
          <div className='mt-auto'>
            <Link href={HEADER_START_NOW}>
              <Button className='w-full'>Start Now!</Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
