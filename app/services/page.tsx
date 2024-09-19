'use client';

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';
import StoryNav from '@/components/StoryNav';
export interface IServiceProps {
}

interface IServices {
  num: string,
  title: string,
  description: string,
  href: string
}

const services:Array<IServices> = [
  {
    num: '01',
    title: 'Web Development',
    description: "I've been doing this a long time, I made my first website when I was 12 years old and have a good eye for great design & common pitfalls in software engineering. Click on the link above to see some of the work I have completed.",
    href: '/work'
  }, {
    num: '02',
    title: 'UI/UX Design',
    description: "I'm very comfortable opening up Figma getting inspired and working on something that really inspires me! I have designed many websites over the years and most recently ideate with myself & my co-founder.",
    href: '/work'
  }, {
    num: '03',
    title: 'Technical Leadership',
    description: "I love understanding how to lead engineering teams. I love great literature on the topic & have worked to the goals between product and my engineering teams.",
    href: ''
  }, {
    num: '04',
    title: 'Systems Design',
    description: 'Something about being excellent at designing efficient, high availability systems. I love working on the back and front end , check out the literature!',
    href: ''
  },
]



const Services = (props: IServiceProps) => {
  return (
    <>
    <section className='min-h-[80vh] px-10 flex flex-col justify-center py-12 xl:py-0'>
      <motion.div initial={{opacity: 0}} animate={{
        opacity: 1,
        transition: {
          delay: 2.4, duration: 0.4, ease: 'easeIn'
        }
      }}
      className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
      {services.map((service, index) => {
          return <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
            <div className='w-full flex justify-between items-center'>
              <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
              <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all flex justify-center items-center hover:-rotate-45'>
                <BsArrowDownRight className='text-primary text-3xl'/>
              </Link>
            </div>
            <h2 className='text-[42px] ont-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
            <p className='text-white/60'>{service.description}</p>
            <div className='border-b border:white/20 w-full'></div>
          </div>
        })}
      </motion.div>
      
    </section>
    <StoryNav
      nextLink="/resume"
      />
    </>
  );
}

export default Services;