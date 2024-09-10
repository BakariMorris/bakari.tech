'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Nav from '@/components/Nav';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white bg-pink-50/20'>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className='text-4xl font-semibold'>Bakari
            <span className='text-accent'>.</span>
          </h1>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href='/contact'>
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile navigation */}
        <div className="xl:hidden">
          <MobileNav />
          {/* <Link href='/contact'>
            <Button>Hire Me</Button>
          </Link> */}
        </div>
        </div>
    </header>
  )
}

export default Header;