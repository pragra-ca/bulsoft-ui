import Image from 'next/image'
import React from 'react'
import process from "@/public/backgroundImages/process.png"
const ProcessComponent = () => {
  return (
    <div className="md:w-2/3 m-auto px-3">

      <p className="text-blue-700 text-md mt-4 uppercase ">Stockie Operation across the world</p>
      <h1 className="text-2xl font-bold  mt-4 text-start mb-4">Management Service</h1>
      <p className='z-40'>Lorem lorem lorem lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos necessitatibus consequuntur maxime iusto officia veritatis mollitia! Ipsum iure nulla tempora magnam vel sed, perspiciatis similique in, voluptates impedit assumenda quas! sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa quod commodi consequatur. Optio veritatis rem ducimus deserunt impedit, quod ullam doloremque aspernatur nam quo libero error, vitae debitis nisi? amet consectetur, adipisicing elit. At, laudantium saepe sequi, consectetur facere molestiae voluptatibus quis debitis incidunt quod omnis alias expedita in illo accusamus assumenda dignissimos veniam voluptate.</p>
   
      <button className="bg-blue-700 py-2 px-4 my-4 rounded-2xl text-white">Get Started</button>
      <Image className='relative z-10 -top-20' src={process} alt=""/>

    </div>
  )
}

export default ProcessComponent