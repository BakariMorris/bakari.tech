'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface IPageProps {
  children: React.ReactNode
}

const PageTransition = (props: IPageProps) => {
  const pathName = usePathname();
  return (
    <AnimatePresence>
      <div key={pathName}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { delay: 1, duration: 0.4, ease: 'easeInOut' } }}
          className='h-screen w-screen fixed bg-primary top-0 pointer-events-none'
        >
        </motion.div>
        {props.children}
      </div>
    </AnimatePresence>
  )
}


export default PageTransition;