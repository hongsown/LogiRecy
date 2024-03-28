'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MAX_FREE_COUNTS } from '@/constants';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { useProModal } from '@/hooks/use-pro-modal';
import { redirect } from 'next/navigation';
import Link from 'next/link';
interface FreeCounterProps {
  apiLimitCount: number;
  isPro: boolean;
}

const FreeCounter = ({
  apiLimitCount = 0,
  isPro = false,
}: FreeCounterProps) => {
  const [mounted, setMounted] = useState(false);
  const proModal = useProModal();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  if (isPro) return null;
  return (
    <div className='px-3'>
      <Card className='border-0 bg-white/10'>
        <CardContent className='py-6'>
          {/* <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              {apiLimitCount}/{MAX_FREE_COUNTS} Free Generations
            </p>
            <Progress
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
              className="h-3"
            />
          </div> */}
          <Link href='/'>
            <Button className='w-full' variant='premium'>
              Back To Home
              <Home className=' w-4 h-4 ml-2' />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;
