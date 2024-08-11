'use client';
import React, { useState } from 'react';
import { RiMenu2Line, RiHome2Fill } from 'react-icons/ri';
import { IoCloseOutline} from 'react-icons/io5';
import { BiSolidFoodMenu } from 'react-icons/bi';
import { FaUsers, FaEnvelope } from 'react-icons/fa';
import { Link as ScrolLink } from 'react-scroll';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

const links = [
  {
    path: 'home',
    name: 'home',
    offset: 0,
    icon: <RiHome2Fill />,
  },
  {
    path: 'menu',
    name: 'menu',
    offset: 0,
    icon: <BiSolidFoodMenu />,
  },
  {
    path: 'about',
    name: 'about',
    offset: -50,
    icon: <FaUsers />,
  },
  {
    path: 'contact',
    name: 'contact',
    offset: 0,
    icon: <RiHome2Fill />,
  },
];

export const NavMobile = ({ containerStyle, iconStyle, linkStyle }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${containerStyle}`}>
      <div className='cursor-pointer outline-none '>
        <RiMenu2Line
          onClick={() => setIsOpen(!isOpen)}
          className='text-3xl hover:text-orange text-white transition-all duration-200'
        />

        <aside
          className={`${
            isOpen ? 'left-0' : 'left-full'
          } bg-black fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500 text-white`}
        >
          <div className='flex flex-col items-center justify-between h-full '>
            <div
              onClick={() => setIsOpen(false)}
              className='cursor-pointer absolute text-4xl text-white w-10 h-10 left-8 top-8 bg-green flex items-center justify-center'
            >
              <IoCloseOutline />
            </div>
            <Link href='/'>
              <Image src='/logo.svg' width={90} height={36} alt='' />
            </Link>

            <div className='flex flex-col gap-y-8'>
              {links.map((link, index) => {
                return (
                  <ScrolLink to={link.path} 
                  key={index} 
                  offset={link.offset} 
                  smooth={false}
                  onClick={() => setIsOpen(false)}
                  className='flex items-center gap-x-3'
                  >
                    <div className={`${iconStyle}`}>{link.icon}</div>
                    <div className={linkStyle}>{link.name}</div>
                  </ScrolLink>
                );
              })}
            </div>
            <ScrolLink to='reservation' smooth offset={-150}>
              <Button variant='orange'>Book a Table</Button>
            </ScrolLink>
          </div>
        </aside>
      </div>
    </div>
  );
};
