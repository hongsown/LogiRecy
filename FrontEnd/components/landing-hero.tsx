
import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';
import TypewriterComponent from 'typewriter-effect';
import { Button } from './ui/button';
import Image from 'next/image';
const LandingHero = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className='dark:text-white font-bold text-center space-y-5 relative z-0 p-7 h-full md:mx-8 '>
      <div className=' top-0 right-0 w-full h-full -z-10 rounded-[48px] overflow-hidden hidden dark:block absolute'>
        <Image src='/hero-bg.svg' layout='fill' objectFit='cover' alt='bgHero' />
      </div>

      <div className='flex items-center justify-between flex-col md:flex-row-reverse h-full'>
        <div className='md:w-3/12 mb-5  h-full '>
          <Image src='/grab-logo.svg' width={250} height={234} alt='logoGrab' />
        </div>
        <div className='md:w-9/12 w-full flex flex-col gap-5 h-full'>
          <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold'>
            <h1 className=' text-white'>The Best App For </h1>
            <div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-2 h-[120px] md:h-full text-6xl' >
              <TypewriterComponent
                options={{
                  strings: [
                    'Detect Waste',
                    'Dictionary About Waste',
                    'Recycling Plant Near You',
                    'Environmental News Updates',
                  ],

                  autoStart: true,
                  loop: true,

                }}
              />
            </div>
          </div>
          <Link href={isSignedIn ? '/dashboard' : '/'}>
            <Button
              variant='premium'
              className='md:text-lg p-4 md:p-6 rounded-full font-semibold '
            >
              Try It Now
            </Button>
          </Link>

          <p className='text-zinc-400 text-xl md:text-2xl font-normal'>
            Easy to use, just take a photo and get the result
          </p>
        </div>

      </div>

    </div>
  );
};

export default LandingHero;
