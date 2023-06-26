import Image, { StaticImageData } from 'next/image'
import React from 'react'

const ImageHeroComponent = ({heroImage,title}:any) => {
  return (
       <div className={`w-screen h-96  ${heroImage ? heroImage: ''} bg-no-repeat bg-cover flex items-stretch `}>
         {/* <Image className='w-screen' src={heroImage} alt="" /> */}
         <h2 className='ml-12 self-center text-white font-bold text-4xl lg:text-6xl '>{title? title : ''}</h2>
       </div>
  )
}

export default ImageHeroComponent