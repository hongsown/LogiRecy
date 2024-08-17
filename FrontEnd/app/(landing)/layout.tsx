const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='h-full dark:bg-[#111827] bg-white overflow-auto relative'>
      <div className='h-full'>{children}</div>
    </main>
  );
};

export default LandingLayout;
