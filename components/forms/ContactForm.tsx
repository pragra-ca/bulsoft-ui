import React from 'react'

const ContactForm = () => {
  return (
   <div className="h-screen">
     <div className='flex flex-col md:flex-row py-5 md:py-20 md:px-10'>
        <div className='md:w-1/2 px-4 py-8 lg:px-20 text-white m-auto'>
            <p className='text-sm '> WHY CHOOSE US</p>
            <h1 className='text-4xl font-bold md:text-6xl py-4'>Because we provide the most premium services.</h1>
            <p className='mt-4 lg:mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora possimus non pariatur, distinctio nostrum reiciendis aliquam. Officiis dolor magni vel est eum, repellendus doloribus quae ducimus. Animi amet excepturi dicta.</p>
        </div>
        <div  className='w-full md:w-1/2  py-8  m-auto flex flex-col gap-5 text-white text-lg'>
           
                <div className='flex flex-col px-8 md:px-0'>
                 {/* <label>Name</label> */}
                 <input className=' px-4 py-3 bg-gray-600' type="text" placeholder='Name'/>
                </div>
                <div className='flex flex-col px-8 md:px-0'>
                 {/* <label>Email Address</label> */}
                 <input  className='px-4 py-3 bg-gray-600' type="text" placeholder='Email Address'/>
                </div>
                <div className='flex flex-col px-8 md:px-0'>
                 {/* <label>Contact No</label> */}
                 <input  className='px-4 py-3 bg-gray-600' type="text" placeholder='Contact No'/>
                </div>
                <div className='flex flex-col px-8 md:px-0'>
                 {/* <label>Message</label> */}
                 <input  className='px-4 py-3 bg-gray-600' type="text" placeholder='Message'/>
                </div>
                <div className='flex flex-col px-8 md:px-0'>
                 {/* <label>Message</label> */}
                 <button  className='px-4 py-3 bg-gray-600 hover:bg-blue-800 rounded-lg'>Submit</button>
                </div>
            </div>
        
    </div>
   </div>
  )
}

export default ContactForm