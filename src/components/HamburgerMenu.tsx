'use client';
import Link from 'next/link';
import { useState } from 'react';

type HamburgerPropTypes = {
  links: {
    title: string;
    href: string;
  }[];
};

const HamburgerMenu: React.FC<HamburgerPropTypes> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <button
        onClick={clickHandler}
        className='relative z-10 flex flex-col items-center justify-center p-2'
        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        aria-expanded={isOpen}
      >
        <span
          className={`mt-1 block h-1 w-7 rounded-sm bg-neutral-900
                      transition-all duration-300 ease-out ${
                        isOpen ? 'translate-y-2 rotate-45' : '-translate-y-0.5'
                      }`}
        ></span>
        <span
          className={`mt-1 block h-1 w-7 rounded-sm bg-neutral-900
                      transition-all duration-300 ease-out ${
                        isOpen ? 'opacity-0' : 'opacity-100'
                      }`}
        ></span>
        <span
          className={`mt-1 block h-1 w-7 rounded-sm bg-neutral-900
                      transition-all duration-300 ease-out ${
                        isOpen ? '-translate-y-2 -rotate-45' : 'translate-y-0.5'
                      }`}
        ></span>
      </button>
      <ul
        className={`absolute left-0 top-0 z-0 mt-4 flex w-screen transform flex-col items-center gap-2 rounded-l bg-white p-4 text-center shadow-lg transition-all duration-500 ease-in-out ${
          isOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-5 opacity-0'
        }`}
      >
        {links.map((link) => {
          return (
            <li key={link.title}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HamburgerMenu;
