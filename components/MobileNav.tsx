'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

interface NavLink {
  name: string,
  path: string
}

const links: Array<NavLink> = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services'
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'work',
    path: '/work'
  },
  {
    name: 'contact',
    path: '/contact'
  }
]


const MobileNav = () => {
  const pathName = usePathname();

  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <div className='flex justify-center h-full items-center'>
          <nav className='flex flex-col justify-center items-center gap-8'>
            {links.map((link, index) => (
                <Link
                  href={link.path}
                  key={index}
                  className={`
            ${link.path === pathName && 'text-accent border-b-2 border-accent'}
            text-xl capitalize hover:text-accent transition-all`}>
                  {link.name}
                </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav;