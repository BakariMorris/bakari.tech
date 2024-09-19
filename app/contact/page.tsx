'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface I_info {
  icon: ReactNode,
  title: string,
  description: string
}

const info: Array<I_info> = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+1) 917-409-6431'
  }, {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'bakari.morris@gmail.com'
  }, {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Brooklyn, NY'
  },
]

const Contact = () => {
  return (
    <motion.section initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
      className='py-6'>
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent'>Let's work together</h3>
              <p className='text-white/60'>
                Feel free to reach out! You can expect a response in 1-2 days. I look forward to hearing about what you're working on!
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type='firstname' placeholder='First Name'></Input>
                <Input type='lastName' placeholder='Last Name'></Input>
                <Input type='email' placeholder='Email address'></Input>
                <Input type='phone' placeholder='Phone Number'></Input>
              </div>
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a service' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value='est'>Full TIme</SelectItem>
                    <SelectItem value='lance'>Freelance</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className='h-[200px]'
                placeholder='Type your message here.'
              ></Textarea>
              <Button size='lg' className='max-w-40'>Send message</Button>
            </form>
          </div>
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => (
                <li key={index} className='flex items-center gap-6'>
                  <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                    <div className='text-[28px]'>{item.icon}</div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-white/60'>{item.title}</p>
                    <h3 className='text-xl'>{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact;