import React from "react";

const NewAboutUs = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-10 md:py-12 md:px-6 py-9 px-4">
      <div className="lg:w-10/12 w-full">
        <p className="font-normal text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer">
          About
        </p>
        <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">
          We are here to make great design accessible and delightfull for
          everyone
        </h2>
        <p className="font-normal text-base leading-6 text-gray-600 mt-6">
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

      <div className="lg:mt-14 sm:mt-10 mt-12">
        <img
          className="lg:block hidden w-full"
          src="https://i.ibb.co/GvwJnvn/Group-736.png"
          alt="Group of people Chilling"
        />
        <img
          className="lg:hidden sm:block hidden w-full"
          src="https://i.ibb.co/5sZTmHq/Rectangle-116.png"
          alt="Group of people Chilling"
        />
        <img
          className="sm:hidden block w-full"
          src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png"
          alt="Group of people Chilling"
        />
      </div>
    </div>
  );
};

export default NewAboutUs;
