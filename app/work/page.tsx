'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

interface I_projects {
  num: string,
  category: string,
  title: string,
  description: string,
  image: string,
  portfolioLink: string,
  githubLink?: string,
  stack: Array<string>
}


const projects: Array<I_projects> = [
  {
    num: '01',
    category: 'frontend',
    title: 'project1',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    image: '/assets profile.png',
    portfolioLink: 'https://google.com',
    stack: [
      'Html 5, CSS 3', 'TypeScript', 'TailwindCSS'
    ]
  },{
    num: '02',
    category: 'frontend',
    title: 'project1',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    image: '/assets profile.png',
    portfolioLink: 'https://google.com',
    stack: [
      'Html 5, CSS 3', 'TypeScript', 'TailwindCSS'
    ]
  },{
    num: '03',
    category: 'frontend',
    title: 'project1',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    image: '/assets profile.png',
    portfolioLink: 'https://google.com',
    stack: [
      'Html 5, CSS 3', 'TypeScript', 'TailwindCSS'
    ]
  },
]

const work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // Get current slide index
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 , transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
      className='min-h-[80vh] flex flex-col justify-center pu-12 xl:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>

          <div className='w-full xl:w-[50%] xl:h-[460px flex flex-col xl:justify-between order-2 xl:order-none'>

          
              <div className='flex flex-col gap-[30px] h-[50%]'>
                <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                  {project.num}
                </div>
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} project</h2>
                <p className='text-white/60'>{project.description}</p>
                <ul className='flex gap-4'>
                  {project.stack.map((item, index) => (
                    <li className='text-xl text-accent' key={index}>
                      {item}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  ))}
                </ul>

                <div className='border border-white/20'></div>
                <div>
                  <Link href={project.portfolioLink}>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <BsArrowUpRight className='text-white text-4x; group-hover:text-accent' />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {(project.githubLink) &&
                    <Link href={project.githubLink}>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                            <BsArrowUpRight className='text-white text-4x; group-hover:text-accent' />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Github project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  }
                </div>
              </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSlideChange} className='xl:h-[520px] mb-12'>
              {projects.map((project, index) => (
                <SwiperSlide key={index} className='w-full'>
                  <div className='h-[460px] relative gorup flex justify-center items-center bg-pink-50/20'>
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                    <div className='relative w-full h-full'>
                      <Image src={project.image} fill className='object-cover' alt=''></Image>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none' btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all' />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default work;