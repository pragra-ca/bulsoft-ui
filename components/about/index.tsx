import Image from 'next/image'
import React from 'react'
import people from "@/public/aboutPage/people.png"
const AboutComponent = () => {
  return (
    <div className="flex flex-col md:flex-row ">
        <div className="md:w-1/2">
            <Image className='w-full h-screen m-auto' src={people} alt="" />
        </div>

        <div className="md:w-1/2 bg-darkblue py-4 text-white">
              <h1 className='text-2xl px-4 lg:px-10 mt-4 text-start' > ~ WHO WE ARE</h1>
              <br/>
              <h1 className='text-4xl font-bold px-4 lg:px-10 text-start'>Bulsoft at a Glance</h1>
              <br/>
              <p className='text-md px-4 lg:px-10 py-2 text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi magnam accusantium debitis voluptas optio rem similique doloremque explicabo quis quas et earum molestias voluptate deleniti, possimus assumenda architecto illum minus?</p>
        </div>
    </div>
  )
}

export default AboutComponent