import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import {
  monday,
  morpheus,
  openzepplin,
  oracle,
  protonet,
  samsung,
  segment,
} from "@/public/marqueeImages";

const MarqueeComponent = () => {
  return (
    <div className=" -mt-24 py-10">
      <div className="py-5 font-poppins max-w-7xl 2xl:container mx-auto">
        <h2 className="text-center text-blue-800 text-lg  mb-4 py-4">
          Business trust us for their testing need.
        </h2>
        <Marquee autoFill pauseOnHover>
          <div className="w-full grid grid-cols-7 gap-5 md:gap-12">
            <Image className="ml-5" src={morpheus} alt="" />
            <Image src={monday} alt="" />
            <Image src={openzepplin} alt="" />
            <Image className="pt-1" src={oracle} alt="" />
            <Image src={protonet} alt="" />
            <Image src={samsung} alt="" />
            <Image src={segment} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeComponent;
