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
    description: "With years of experience that started when I built my first website at 12, I’ve developed a good eye for exceptional design and a strong user-first approach. If you're seeking someone who can take your project from concept to completion with little direction, I'm your go-to expert.",
    href: '/work'
  }, {
    num: '02',
    title: 'UI/UX Design',
    description: "I thrive in collaborative environments, diving into Figma to create designs that inspire. With extensive experience in designing websites and partnering closely with designers and product teams, I’m skilled at transforming ideas into user-centric products that captivate and delight.",
    href: '/work'
  }, {
    num: '03',
    title: 'Technical Leadership',
    description: "I'm passionate about simply making my team better! I enjoy studying servant leadership and seeing the tangible impact of strong mentorship. My focus is on aligning product and engineering goals in every project, ensuring we work on the most impactful areas. By fostering meaningful collaboration, I believe we can deliver high-quality solutions quickly, all while maintaining a strong commitment to engineering excellence.",
    href: 'https://www.notion.so/Technical-Debt-3c96ba40d2ce439ab7ff46293d6e9a7c'
  }, {
    num: '04',
    title: 'Systems Design',
    description: 'My experience extends well beyond theoretical interview conversations. I’ve designed and implemented large-scale, distributed systems for both my own company and major enterprises. I take pride in building reliable, high-performance systems that can scale to support millions of users. Whether working in the cloud, on local hardware, or hybrid systems, I deliver efficient solutions that delights users.',
    href: '/work'
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