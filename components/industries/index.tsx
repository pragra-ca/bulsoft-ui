import React from 'react'
import TextCard from '../cards/TextCard'
import {TextCardData} from "@/constants/CardInfo"

const IndustriesComponent = () => {
  return (
    <div >
          <div>
            <h1 className="text-4xl text-center font-semibold mt-4 mb-2 px-2 py-2">We help your business grow faster</h1>
            <p className="text-md text-center   mt-1 mb-1 px-2 py-2">Get access to the best IT solution in order to leverage your business.</p>

        </div>

         <TextCard cardData={TextCardData}/>
    </div>
  )
}

export default IndustriesComponent