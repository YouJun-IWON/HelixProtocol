import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='relative p-4 bg-[#EFF5F9] min-h-screen flex flex-row'>
      <div className='sm:flex mr-10 relative'>
        <Sidebar />
      </div>

      <div className='flex-1 max-w-[1740px] mx-auto items-center justify-center'>
        <Navbar />
        <main>{children}</main>
      </div>
    </main>
  );
};

export default MainLayout;
