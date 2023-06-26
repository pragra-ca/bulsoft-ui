import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";
import {monday, morpheus, openzepplin, oracle, protonet, samsung, segment} from "@/public/marqueeImages"

const MarqueeComponent = () => {
  return (
   <div className="py-5">
    <h2 className="text-center text-lg font-bold mb-2 py-4">Over 32+ software businesses growing with Bulsoft</h2>
     <Marquee autoFill pauseOnHover>
        <div  className="w-full grid grid-cols-7 gap-5 md:gap-12">
        <Image className="md:ml-5" src={morpheus} alt=""/>
        <Image src={monday} alt=""/>
        <Image src={openzepplin} alt=""/>
        <Image src={oracle} alt=""/>
        <Image src={protonet} alt=""/>
        <Image src={samsung} alt=""/>
        <Image src={segment} alt=""/>
        </div>
    </Marquee>
   </div>
    
  )
}

export default MarqueeComponent