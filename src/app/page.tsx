import ConnectButton from '@/components/walletConnector';
import Image from 'next/image';
import Link from 'next/link';

import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className='relative sm:-8 p-4 bg-[#EFF5F9] min-h-screen flex flex-row'>
      <div className='sm:flex hidden mr-10 relative'>
        <Sidebar />
      </div>

      <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
        <Navbar />
      </div>
     {/* <ConnectButton /> */}
    </main>
  );
}
