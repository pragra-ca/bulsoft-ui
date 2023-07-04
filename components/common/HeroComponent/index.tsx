import React from 'react'
import homeHero from "@/public/heroImages/homeHero.png"
import Image from 'next/image'
import { useRouter } from 'next/router'

const HeroComponent = () => {
  const router = useRouter()
  return (
   
         <div className="relative bg-hero-back bg-no-repeat mx-auto 2xl:container max-w-7xl py-4 lg:pt-15  px-4 sm:px-6">
     
        <div className=" grid lg:grid-cols-2 lg:gap-x-10 justify-center md:justify-between   pb-24 pt-10 lg:col-span-7 xl:col-span-6">
          <div className="mx-auto md:max-w-2xl lg:max-w-3xl lg:mx-0 ">
           
            
            <h1 className="mt-20 text-5xl md:text-6xl leading-12 font-semibold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
             Providing Quality Solutions for Your Business.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 ">
              Anim aute id mag adsfasdf asdfasdf adsfa sdfasf adsgasdfasd asdfasdfna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <button
                className=" bg-herobuttonBack  px-3.5 py-2.5 lg:px-8 lg:py-4 text-sm lg:text-xl font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={()=> router.push('/contact')}
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
    
  )
}

export default HeroComponent