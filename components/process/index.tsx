import Image from 'next/image'
import React from 'react'
import process from "@/public/backgroundImages/process.png"
const ProcessComponent = () => {
  return (
    <div className="md:w-2/3 m-auto px-3  mx-auto 2xl:container max-w-7xl font-poppins">

      <p className="text-processTop leading-5	 text-sm mt-4 uppercase font-medium	">Stockie Operation across the world</p>
      <h1 className="text-3xl lg:text-5xl font-semibold  mt-4 text-start mb-4">Management Service</h1>
      <p className='z-40 text-managementGrey leading-8	 font-medium	text-base	'>Lorem lorem lorem lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos necessitatibus consequuntur maxime iusto officia veritatis mollitia! Ipsum iure nulla tempora magnam vel sed, perspiciatis similique in, voluptates impedit assumenda quas! sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa quod commodi consequatur. Optio veritatis rem ducimus deserunt impedit, quod ullam doloremque aspernatur nam quo libero error, vitae debitis nisi? amet consectetur, adipisicing elit. At, laudantium saepe sequi, consectetur facere molestiae voluptatibus quis debitis incidunt quod omnis alias expedita in illo accusamus assumenda dignissimos veniam voluptate.</p>
   
      <button className="bg-logoColor font-semibold	text-base	 py-2 px-4 my-4 rounded-2xl text-white">Get Started</button>
      <Image className='relative z-10 -top-20' src={process} alt=""/>

    </div>
  )
}

export default ProcessComponent