'use client';
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiArrowRight } from 'react-icons/fi';

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full flex">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span>Founding Software Engineer</span>
            <h1 className='h1'>Hello I'm <br />
              <span className='text-accent'>Bakari Morris</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>I excel at creating an engaging user experience.  </p>

            <div className="mb-8 xl:mb-0 mt-3 flex gap-6 items-center justify-start">
              <Button
                variant='outline'
                size='lg'
                className="uppercase flex items-center gap-2"
              >
                <span>Contact Me</span>
                <FiArrowRight className="text-xl"></FiArrowRight>
              </Button>

              <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
            </div>
          </div>
        </div>
        <div className="order--1 xl:order-none mb-8 xl:mb-0">
                <Photo />
              </div>
      </div>
    </section>
  );
}
