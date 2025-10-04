'use client';

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import StoryNav from '@/components/StoryNav';
import { ReactNode } from 'react';


interface I_info {
  fieldName: string,
  fieldValue: string
}
interface I_about {
  title: string,
  description: string,
  info: Array<I_info>
}


const about: I_about = {
  title: 'About me',
  description: 'I am a seasoned Full Stack Engineer with 8+ years of experience in designing & developing clean, innovative solutions. By leveraging data-driven strategies, I drive growth not only for myself but also for my teammates, creating a collaborative, high-performing culture.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Bakari Morris'
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+1) 917-409-6431'
    },
    {
      fieldName: 'Experience',
      fieldValue: '8+ years'
    },
    {
      fieldName: 'LinkedIn',
      fieldValue: 'linkedin.com/in/bakari-morris'
    },
    {
      fieldName: 'Email',
      fieldValue: 'bakari.morris@gmail.com'
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English'
    },

  ]
}
interface I_experience {
  icon: string,
  title: string,
  description: string,
  items: Array<I_experienceItems>
}

interface I_experienceItems {
  company: string,
  position: string,
  duration: string
}

const experience: I_experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: `I specialize in delivering exceptional user experiences across the entire stack.
  To me, great UX extends to the services powering the application. I focus on building efficient, blazing fast services, while ensuring that the front-end remains interactive and seamless.`,
  items: [
    {
      company: 'Lagless Hosting',
      position: 'Founder',
      duration: 'June 2023 - July 2025'
    },
    {
      company: 'WeWork',
      position: 'Lead Software Engineer',
      duration: 'July 2022 - June 2023'
    },
    {
      company: 'Nike',
      position: 'Senior Software Engineer - Contract',
      duration: 'April 2021 - May 2022'
    },
    {
      company: 'Invaluable',
      position: 'Lead Software Engineer - Contract',
      duration: 'August 2020 - March 2021'
    },
    {
      company: 'Aretove Inc.',
      position: 'Full Stack Developer',
      duration: 'September 2019 - March 2020'
    },
    {
      company: 'Conair Corporation',
      position: 'Full Stack Developer',
      duration: 'September 2018 - June 2019'
    },
    {
      company: 'ILoveKickboxing',
      position: 'Junior Web Developer',
      duration: 'June 2017 - June 2018'
    },
  ]
}

interface I_education {
  icon: string,
  title: string,
  description: string,
  items: Array<I_educationItems>
}

interface I_educationItems {
  institution: string,
  degree: string,
  duration: string
}

const education: I_education = {
  icon: '/assets/resume/cap/svg',
  title: 'My education',
  description: `I'm continuously investing in my own education, from courses, hackathons or attending conferences. The best way to learn in my opinion is through building, feel free to check out my work!`,
  items: [
    {
      institution: 'Western Governors University',
      degree: 'B.S: Software Development',
      duration: '2018-2021',
    },
    {
      institution: 'CompTIA',
      degree: 'Project +',
      duration: 'Certified',
    },
    {
      institution: 'CIW',
      degree: 'Site Development Associate, Advanced HTML5 & CSS3 Specialist',
      duration: 'Certified',
    },
    {
      institution: 'MIT OpenCourseWare',
      degree: 'Computer Science, Technical Leadership',
      duration: '2022-2024',
    }
  ]
}

interface I_skills {
  title: string,
  description: string,
  skillList: Array<I_skillsList>
}

interface I_skillsList {
  icon: ReactNode,
  name: string
}

const skills:I_skills = {
  title: 'My skills',
  description: `I love JavaScript & web technologies. I use plenty of other tech from LLMs to Web3 in personal projects. If you know about a really cool tool I'd love to hear about it!`,
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact />,
      name: 'React.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <FaFigma />,
      name: 'figma',
    },
  ]
}




const Resume = () => {
  return (
    <div className='flex justify-center'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
        }}
        className='min-h-[80vh] container flex items-center justify-center py-12'
      >
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value={'experience'}>Experience</TabsTrigger>
            <TabsTrigger value={'education'}>Education</TabsTrigger>
            <TabsTrigger value={'skills'}>Skills</TabsTrigger>
            <TabsTrigger value={'about'}>About me</TabsTrigger>
          </TabsList>

          <div className='min-h-[70vh] w-full'>
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='px-4 md:px-0'>{experience.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => (
                      <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] mmin-h-[60px] text-center lg:text-left'>{item.position}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center lg:pt-8 xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p>{education.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 gap-[30px]'>
                    {education.items.map((item, index) => (
                      <li key={index} className='bg-[#232329] min-h-[184px] py-6 sm:text-center px-6 sm:px-30 lg:px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.institution}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60 self-start'>{item.duration}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='skills' className='w-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 px-4 md:px-0'>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px]  bg-[#232329] flex justify-center items-center group lg:px-16'>
                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value='about' className='w-full text-center xl:text-left'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 px-4 md:px-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-w[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => (
                    <li key={index} className='flex items-center justify0center xl:justify-start gap-4'>
                      <span className='text-white/60'>{item.fieldName}:</span>
                      <span className='text-xl'>{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
        <StoryNav
          nextLink="/work"
          buttonStyling='mt-32'
        />
          </div>
        </Tabs>
      </motion.div>
    </div>
  )
}

export default Resume;