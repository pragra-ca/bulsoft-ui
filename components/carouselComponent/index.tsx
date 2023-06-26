import Image from 'next/image';
import React from 'react'
import AliceCarousel, { EventObject } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import carouselImage from "@/public/testimonials/carouselImage.png"
import star from "@/public/testimonials/star.svg"
import semicolon from "@/public/testimonials/semicolon.svg"

const carouselItems = [
  {
    id:1,
    name:"name",
    role: "Position",
    company: "bulsoft",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus a nisi maxime doloribus quisquam doloremque minus reiciendis voluptatem natus impedit sunt eveniet quidem nostrum asperiores, tenetur laborum corporis sequi nulla.",
    imageUrl: carouselImage,
    ratings: 5
  },
  {
    id:2,
    name:"name2",
    role: "Position",
    company: "pragra",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus a nisi maxime doloribus quisquam doloremque minus reiciendis voluptatem natus impedit sunt eveniet quidem nostrum asperiores, tenetur laborum corporis sequi nulla.",
    imageUrl: carouselImage,
    ratings: 5
  },
  {
    id:3,
    name:"name3",
    role: "Position",
    company: "company",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus a nisi maxime doloribus quisquam doloremque minus reiciendis voluptatem natus impedit sunt eveniet quidem nostrum asperiores, tenetur laborum corporis sequi nulla.",
    imageUrl: carouselImage,
    ratings: 5
  },
]


const CarouselComponent = () => {

  const items = carouselItems && carouselItems?.map((el:any)=> (
    <div className='w-full flex flex-col md:flex-row space-around '> 
   <div className='md:w-1/2 m-auto py-4'>
   <Image className='m-auto' src={el?.imageUrl} alt="img"/>
   </div>
    <div className='md:w-1/2 m-auto py-8 md:py-20 px-3 bg-gray-100'>
         <Image className='relative md:-top-10' src={semicolon} alt=""/>
        <div className='flex py-4'>
        <Image className='mt-4' src={star} alt=""/>
        <Image className='mt-4' src={star} alt=""/>
        <Image className='mt-4' src={star} alt=""/>
        <Image className='mt-4' src={star} alt=""/>
        <Image className='mt-4' src={star} alt=""/>
        </div>
         <div>
          <p>{el?.description}</p>
         </div>
         <div className='w-40 flex py-2 justify-between'>
           <span>
           <p className='py-2 text-lg font-bold capitalize'>{el?.name}</p>
           <p className='py-2 text-sm text-gray-700'>{el?.role}</p>
           </span>
           <span> <p className='py-2'>@{el?.company}</p></span>
         </div>
    </div>
     </div>
  ))

    // const handleDragStart = (e: any) => e.preventDefault();


  return (
    <div>
      <h2 className='text-4xl font-semibold px-3'>Check what out clients are saying</h2>
      <AliceCarousel autoPlay infinite mouseTracking  disableDotsControls ssrSilentMode autoPlayInterval={1000} animationDuration={2500} items={items} />
    </div>
  )
}

export default CarouselComponent