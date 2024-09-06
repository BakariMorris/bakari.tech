'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

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
  }
  , {
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

interface INavProps {
}

const Nav: React.FunctionComponent<INavProps> = (props) => {

    const pathName = usePathname();
  return (
    <nav className='flex gap-8'>
      {links.map((navLink: NavLink, index: number) => (
        <Link href={navLink.path} key={index} className={`${(navLink.path === pathName) && 'text-accent border-b-2 border-accent'} captitalize font-medium transition-all hover:text-accent`}>
          {navLink.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
