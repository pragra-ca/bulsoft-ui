import Image from "next/image";
import React from "react";
import people from "@/public/aboutPage/people.png";
const AboutComponent = () => {
  return (
    <div className="2xl:container max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row mx-auto font-poppins">
      <div className="md:w-1/2">
        <Image className="w-full" src={people} alt="" />
      </div>

      <div className="md:w-1/2 md:pl-6 bg-blue-800 py-12 text-white">
        <h1 className="text-2xl  px-4 lg:px-10 mt-4 text-start"> WHO WE ARE</h1>
        <br />
        <h1 className="text-4xl lg:text-5xl font-medium	 px-4 lg:px-10 text-start">
          Bulsoft at a Glance
        </h1>
        <br />
        <p className="text-md lg:text-xl font-normal	 px-4 lg:px-10 py-2 text-start">
          Bulsoft is a leading testing service provider specializing in all
          types of testing and with core focus on BFSI & telecom markets.
          Bulsoft is the preferred partner for many companies in financial
          services and telecom segments. With many years of multiple field
          engagements in matured markets to draw upon, Bulsoft's Independent
          Validation & Testing Solutions & Services is designed to enable
          organizations to achieve critical application quality threshold, while
          doing so at minimal cost, time & future maintenance.
        </p>
      </div>
    </div>
    </div>
  );
};

export default AboutComponent;
