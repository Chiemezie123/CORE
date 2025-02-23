'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Bell from '@/assets/svg2/Bell';
import Contact from '@/assets/svg2/Contact';
import { sidebarModuleMenus, dashboardModuleMenus } from '@/constant/data';
import { Typography } from '@/components/typography';
import { Home } from '@/assets/svg2';
import { Input } from '@/components/input';
import Search from '@/assets/svg2/Search';
import back from '@/assets/svg/back.svg'
import rightAngle from '@/assets/svg/rightAngle.svg'
import requestIcon from '@/assets/svg/requestDetailIcon.svg'
import Image from 'next/image';

export default function NavBar() {
  const pathname = usePathname(); // Get the current path
  const router = useRouter();
  // Capitalize the first letter of the path
  function capitalizeFirstLetter(word: string | undefined) {
    if (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return '';
  }

  // Get the icon and title for the current path
  const getIconAndTitle = (pathname: string) => {
    // Combine both menu arrays
    const allMenus = [...dashboardModuleMenus, ...sidebarModuleMenus];

    // Find the matching menu item
    const matchedMenu = allMenus.find((item) => {
      // Direct match for "/dashboard"
      if (pathname === '/dashboard' && item.path === '/dashboard') {
        return true;
      }
      // Match nested paths (e.g., "/dashboard/account")
      return pathname.startsWith(item.path) && item.path !== '/dashboard';
    });

    // Return the icon and title (or default values if no match is found)
    return {
      icon: matchedMenu?.icon || <Home />, // Default icon
      title: matchedMenu?.title || 'Dashboard', // Default title
    };
  };

  // Get the icon and title for the current path
  const { icon, title } = getIconAndTitle(pathname);

  return (
    <div className="flex items-center justify-between h-[48px] self-stretch px-[19px] border-b border-[#DEDEDF] bg-white w-full">
      {/* Left Section: Icon and Path Name */}
      <div className="flex items-center gap-[12px]">
        {pathname !== "/dashboard/RequestDetails" ?
          <>
        <div>{icon}</div>
        <div>
          <Typography color="midnight-950" variant="c-m" font="Satoshi">
            {capitalizeFirstLetter(title)}
          </Typography>
        </div>
        </>
        :<>
         <Image onClick={() => router.back()} className='cursor-pointer' src={back} alt='back' width={8} height={8}/>
         <Typography className='text-[#475467]' color="midnight-950" variant="c-m" fontWeight='regular' font="Satoshi">
            Back
          </Typography>
         
          <Image  src={requestIcon} alt='back' width={15} height={15}/>
          <Image src={rightAngle} alt='back' width={5} height={5}/>
          <Typography className='text-[#475467]' color="midnight-950" variant="c-m" fontWeight='regular' font="Satoshi">
          Card Request
          </Typography>
          <Image src={rightAngle} alt='back' width={5} height={5}/>
          <Typography className='text-[#001735]' color="midnight-950" variant="c-m" fontWeight='medium' font="Satoshi">
          Request Details
          </Typography>
        </>}
      </div>

      {/* Right Section: Notification and Contact Icons */}
      <div className="flex items-center gap-[1rem]">
        <div>
          <Input name="search" placeholder="search" icon1={<Search />} />
        </div>
        <div className="flex p-[10px] items-start gap-2">
          <Bell />
        </div>
        <div className="rounded-[160px] bg-gray-100 w-8 h-8 flex items-center justify-center">
          <Contact />
        </div>
      </div>
    </div>
  );
}