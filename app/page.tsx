'use client';
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import StoryNav from "@/components/StoryNav";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiArrowRight } from 'react-icons/fi';

export default function Home() {
  return (
    <>
    <section className="h-full mt-10">
      <div className="container mx-auto h-full flex flex-col lg:flex-row lg:justify-between sm:justify-end xl:pb-8">
        <div className="flex flex-col xl:flex-row items-center  xl:pt-8 xl:pb-24 order-2 lg:order-none lg:pr-10">
          <div className='text-center flex flex-col md:text-left  order-2 xl:order-none'>
            <span className="order-2 md:order-1">Founding Software Engineer</span>
            <h1 className='h1 mx-2 md:mx-0 order-1 md:order-2'>Hello I&apos;m <br />
              <span className='text-accent'>Bakari Morris</span>
            </h1>
            <p className=' mt-8 md:mt-0 mx-8 md:mx-0 max-w-[500px] order-3 mb-9 text-white/80'>I’m passionate about crafting seamless and engaging user experiences. Every line of code I write is driven by a love for innovation and design. Please explore my work on this site & GitHub—where my code speaks for itself.</p>

            <div className="mb-8 md:px-0 order-4 xl:mb-0 mt-3 flex flex-col md:flex-row gap-3 md:gap-6 items-center lg:justify-start md:justify-center">
              <Link href='/contact'>
                <Button
                  variant='outline'
                  size='lg'
                  className="uppercase flex items-center gap-2 mb-3 md:mb-0"
                >
                  <span>Contact Me</span>
                  <FiArrowRight className="text-xl"></FiArrowRight>
                </Button>
              </Link>

              <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
            </div>
          </div>
        </div>
        <div className="flex order-1 xl:order-none mb-8 xl:mb-0 lg:order-none justify-center">
          <Photo />
        </div>
      </div>
      <Stats />
    </section>
    
    <StoryNav 
    nextLink="/services.html"
    buttonStyling='lg:mt-32'
  />
  </>
  );
}
