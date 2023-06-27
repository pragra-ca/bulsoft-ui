import React from 'react'
import IconHelper from "@/helper/iconHelper"
interface TextCardProp {
    cardData: ItemType[]
}
interface ItemType {
    title: string,
    shortDescription: string
    icon?: string |SVGElement;
}

const TextCard = ({cardData}: TextCardProp) => {
  return (
    <div className='w-full bg-gray-50 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-around px-8 py-4'>
        {cardData && cardData?.map((el:ItemType,index:number)=> (
            <div key={index} className=' px-6 py-4 bg-white rounded-lg'>
             <span className='mt-2 mb-4 text-4xl text-blue-700'>{IconHelper(el.icon)}</span>

             <h3 className='text-lg text-black font-semibold mt-4 mb-2'>{el.title}</h3>
             <p className='text-sm text-gray-700 '>{el.shortDescription}</p>
            </div>
        ))}
    </div>
  )
}

export default TextCard