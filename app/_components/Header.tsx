import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const menuOptions = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" }
];

function Header() {
  return (
    <div className='flex justify-between items-center p-4'>
      {/* Logo Section */}
      <div className='flex items-center gap-1'>
        <Image src={'/logo.png'} alt='logo' width={30} height={30} />
        <h2 className='font-bold text-2xl'>Seelon</h2>
      </div>

      {/* Menu Section */}
      <div className='flex items-center gap-8'>
        {menuOptions.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <h2 className='text-lg hover:scale-105 transition-all hover:text-primary'>{menu.name}</h2>
          </Link>
        ))}
      </div>
      <Button>
        Get Started
      </Button>
    </div>
  );
}

export default Header;
