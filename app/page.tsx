'use client';

import outputs from '@/amplify_outputs.json';
import gradientTop from '@/assets/images/gradient-background-top.png';
import Benefits from '@/components/pages/home/benefits';
import ConversionStrategy from '@/components/pages/home/conversion';
import FAQ from '@/components/pages/home/faq';
import { Hero } from '@/components/pages/home/hero';
import HowItWorks from '@/components/pages/home/howItWork';
import Pricing from '@/components/pages/home/pricing';
import { VideoShowcase } from '@/components/pages/home/videoShowcase';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import Image from 'next/image';

Amplify.configure(outputs);

export default function App() {
  return (
    <div>
      <Image
        width={1512}
        height={550}
        className='absolute left-1/2 top-0 -z-10 -translate-x-1/2'
        src={gradientTop}
        alt=''
        role='presentation'
        priority
      />
      <Hero />
      <VideoShowcase />
      <ConversionStrategy />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <FAQ />
      {/* <LastHero /> */}
    </div>
  );
}
