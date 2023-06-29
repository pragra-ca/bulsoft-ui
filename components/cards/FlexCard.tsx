import Image, { StaticImageData } from 'next/image';
import React from 'react'
import leftborder from "@/public/cardImages/leftborder.png"
import rightborder from "@/public/cardImages/rightborder.png"

interface CardType {
    title: string;
    shortDescription: string;
    image: string | StaticImageData;
}
interface FlexCardType {
    cardData : CardType[];
}

const FlexCard = ({cardData}:FlexCardType) => {
  return (
    <div className='lg:w-10/12 m-auto'>
        {cardData && cardData?.map((item:CardType,index:number)=> {
            if(index % 2 === 0) {
                return <div className='flex flex-col lg:flex-row space-around mt-8 md:mt-6' key={index}>
                        <div className=' lg:w-1/2 px-8 md:px-4 md:py-10 lg:py-0  m-auto flex'>
                            <span className='text-2xl font-semibold text-logoColor px-2 md:px-4 border-2 border-transparent border-r-blue-700'>{index+1}</span>
                            <span>
                                <h2 className='text-2xl font-semibold text-logoColor py-4 px-6'>{item?.title}</h2>
                                <p className="font-normal lg:text-xl px-6">{item?.shortDescription} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam modi laudantium mollitia nemo unde est in eveniet cupiditate quis dolor. Nisi rerum ducimus dolorum quia dolores provident suscipit, minima facilis!</p>
                            </span>
                        </div>
                        <div  className='lg:w-1/2 mt-8 md:mt-4 mb-4 flex justify-center'>
                        <div className=' mt-8 md:mt-4 mb-4'>
                            <Image className='absolute z-20' src={item?.image} alt=""/>
                            <Image className='relative  md:left-5 top-5 z-10 ' src={rightborder} alt=""/>
                        </div>
                        </div>
                </div>
            }
            else {
                return <div className='flex flex-col lg:flex-row space-around mt-8 md:mt-6' key={index}>

                     <div  className='lg:w-1/2 mt-4 mb-4 md:py-10 lg:py-0 flex justify-center'>
                     <div  className='mt-4 mb-4 md:py-10 lg:py-0'>
                     <Image  className='absolute z-20' src={item?.image} alt=""/>
                     <Image className='relative md:right-5 top-5 z-10 ' src={leftborder} alt=""/>
                     </div>
                     </div>
                        <div className='lg:w-1/2 px-8 mt-8 md:px-4 md:mt-auto m-auto flex'>
                            <span>
                                <h2 className='text-2xl font-semibold text-logoColor py-4 px-6'>{item?.title}</h2>
                                <p className="font-normal lg:text-xl px-6">{item?.shortDescription} Lorem ipsum dolor sit amet consecteturiis laudantium est adipisci molestiae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, rerum in nam architecto quo beatae! Doloremque, soluta itaque, cumque quo impedit dolores earum fuga corrupti magnam, quis eius praesentium iure? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam modi laudantium mollitia nemo unde est in eveniet cupiditate quis dolor. Nisi rerum ducimus dolorum quia dolores provident suscipit, minima facilis!</p>
                            </span>
                            <span className='text-2xl font-semibold text-logoColor px-2 md:px-4  border-2 border-transparent border-l-blue-700'>{index+1}</span>

                        </div>
                </div>
            }
        })}
    </div>
  )
}

export default FlexCard