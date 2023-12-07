import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { useState, useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import dynamic from 'next/dynamic';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const Sidebar = dynamic(() => import('@/components/Sidebar'), { ssr: false });

  return (
    <main className='relative p-4 bg-[#EFF5F9] min-h-screen flex flex-row'>
      <div className='sm:flex mr-10 relative'>
        <Sidebar />
      </div>

      <div className='flex-1 max-w-[1740px] mx-auto items-center justify-center'>
        <Navbar />
        <main>{children}</main>
        <Toaster />
      </div>
    </main>
  );
};

export default MainLayout;
