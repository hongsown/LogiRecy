
import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';
import TypewriterComponent from 'typewriter-effect';
import { Button } from './ui/button';
const LandingHero = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className='dark:text-white font-bold text-center space-y-5 relative z-0 bg-hero-pattern mt-[72px] p-7'>
      <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold'>
        <h1 className=' text-white'>The Best App For </h1>
        <div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-2' >
          <TypewriterComponent
            options={{
              strings: [
                'Detect Waste.',
                'Dictionary About Waste.',
                'Recycling Plant Near You.',
                'News About the Environment.',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <div>
        <Link href={isSignedIn ? '/dashboard' : '/'}>
          <Button
            variant='premium'
            className='md:text-lg p-4 md:p-6 rounded-full font-semibold'
          >
            Try It Now
          </Button>
        </Link>
      </div>
      <div className='text-zinc-400 text-xs md:text-sm font-normal'>
        Easy to use, just take a photo and get the result
      </div>
    </div>
  );
};

export default LandingHero;
