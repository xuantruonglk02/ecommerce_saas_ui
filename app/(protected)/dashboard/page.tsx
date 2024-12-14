'use client';

import type { Schema } from "@/amplify/data/resource";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Spinner from "@/components/ui/spinner";
import { useToast } from "@/hooks/use-toast";
import { useAuthStore } from "@/store/authStore";
import { generateClient } from "aws-amplify/data";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const client = generateClient<Schema>();

export default function Dashboard() {
  const router = useRouter();
  const { toast } = useToast();
  const user = useAuthStore((state) => state.user);

  const [strategies, setStrategies] = useState<Array<Schema["Strategy"]["type"]>>([]);
  const [strategyName, setStrategyName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!user.plan) {
    return router.push('/#pricing');
  }

  function listStrategies() {
    client.models.Strategy.observeQuery().subscribe({
      next: (data) => setStrategies([...data.items]),
    });
  }

  useEffect(() => {
    listStrategies();
  }, []);

  function createStrategy() {
    setIsLoading(true);
    client.models.Strategy.create({
      label: strategyName,
      value: strategyName,
    })
      .then((data) => {
        toast({
          title: 'Strategy created',
          description: `${strategyName}`,
        });
        setStrategyName('');
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <div className='w-full max-w-xl mx-auto space-y-8 pt-20'>
      <div className='space-y-2'>
        <h1 className='text-4xl font-bold tracking-tight'>Your Popups and Strategies</h1>
        <p className='text-xl text-muted-foreground'>Welcome {user.email + (user.plan ? `, ${user.plan}` : '')}</p>
      </div>

      <p className='text-lg'>Create a new strategy or choose one</p>

      <div className='space-y-6'>
        <div className='space-y-2 w-fit'>
          <label className='text-sm font-medium pr-16'>Choose a Strategy:</label>
          <Select>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Select a strategy' />
            </SelectTrigger>
            <SelectContent>
              {strategies.map((strategy, index) => (
                <SelectItem key={index} value={strategy.value as string}>
                  {strategy.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className='space-y-2'>
          <label className='text-sm font-medium'>New Strategy Name:</label>
          <Input
            placeholder='Strategy Name'
            value={strategyName}
            onChange={(e) => setStrategyName(e.target.value)}
            className='w-full'
          />
        </div>

        <div className='w-full flex flex-row items-center justify-center'>
          <Button
            className='bg-black hover:bg-black/80 mt-4'
            size='lg'
            disabled={isLoading}
            onClick={createStrategy}
          >
            <span>Create Strategy</span>
            {isLoading && <Spinner />}
          </Button>
        </div>
      </div>
    </div>
  );
}
