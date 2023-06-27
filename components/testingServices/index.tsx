import React from 'react'
import FlexCard from '../cards/FlexCard'
import {TestingCardData} from "@/constants/CardInfo"
const TestingServicesComponent = () => {
  return (
    <div>
        <div className="m-auto md:w-1/2 px-6 py-4">
            <h1 className='font-bold text-2xl py-2 text-center'>APPLICATION TESTING</h1>
            <p className='text-gray-700'>Bulsoft Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laboriosam illum quisquam, unde molestiae a accusantium quo nihil. Ex temporibus distinctio esse dignissimos rerum sapiente voluptatem, incidunt dolores ipsa suscipit?</p>
        </div>

        <div>
            <FlexCard cardData={TestingCardData}/>
        </div>
    </div>
  )
}

export default TestingServicesComponent