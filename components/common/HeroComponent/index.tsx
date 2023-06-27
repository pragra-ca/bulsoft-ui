import React from 'react'
import homeHero from "@/public/heroImages/homeHero.png"
import Image from 'next/image'

const HeroComponent = () => {
  return (
   
         <div className="relative bg-hero-back bg-no-repeat">
      <div className="w-full lg:grid lg:grid-cols-2 lg:gap-x-8 md:justify-between">
        <div className="md:px-12 ml-12 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-12 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
           
            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
            
            </div>
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <button
                className=" bg-black px-3.5 py-2.5 lg:px-8 lg:py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </button>
              
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            className="  bg-white m-auto lg:mt-10 flex justify-center align-center "
            src={homeHero}
            alt=""
          />
        </div>
      </div>
    </div>
    
  )
}

export default HeroComponent