'use client';
import { logo, sun } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { navlinks } from '../constants';
import { useRouter } from 'next/navigation';



const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }: any) => (
  <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-white'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {!isActive ? (
      <Image src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <Image src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
    )}
  </div>
)

const Sidebar = () => {

  const router = useRouter();
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className='flex justify-between items-center flex-col sticky top-5 h-[93vh]'>
      <Link href='/'>
      <Icon styles="w-[62px] h-[62px] bg-white shadow-xl shadow-sky-500/50" imgUrl={logo} />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-white shadow-xl shadow-sky-500/50 rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon 
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if(!link.disabled) {
                  setIsActive(link.name);
                  router.push(link.link);
                }
              }}
            />
          ))}
        </div>

        <Icon styles=" shadow-secondary" imgUrl={sun} />
      </div>
    </div>
  );
};

export default Sidebar;
