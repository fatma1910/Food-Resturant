'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Nav } from './Nav';
import { NavMobile } from './NavMobile';
import { Button } from './ui/button';

export const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${
        active ? 'bg-black-hover/50 py-4' : 'bg-none py-8'
      } fixed top-0 max-w-full z-50 left-0 right-0 transition-all duration-200`}
    >
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <Image src='/logo.svg' width={75} height={30} alt='Logo' />
          </Link>
          <Nav containerStyles='hidden xl:flex gap-x-12 text-white' linkStyles='capitalize' />
          <ScrollLink to='reservation' smooth={true}>
            <Button variant='orange' size='sm'>
              Book a table
            </Button>
          </ScrollLink>
          <NavMobile containerStyle='xl:hidden' iconStyle='text-3xl' linkStyle='uppercase' />
        </div>
      </div>
    </header>
  );
};
