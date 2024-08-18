'use client'
import LandingContent from '@/components/landing-content';
import LandingHero from '@/components/landing-hero';
import LandingNavbar from '@/components/landing-navbar';

const LandingPage = () => {
  return (
    <>
      <LandingNavbar />
      <div className='md:h-4/6 h-full w-full'>
        <LandingHero />
      </div>
      <LandingContent />

    </>

  );
};

export default LandingPage;
