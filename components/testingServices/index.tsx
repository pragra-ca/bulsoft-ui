import React from "react";
import FlexCard from "../cards/FlexCard";
import { TestingCardData } from "@/constants/CardInfo";
const TestingServicesComponent = () => {
  return (
    <div className="mx-auto 2xl:container max-w-7xl font-poppins">
      <div className="m-auto md:w-1/2 px-6 py-4">
        <h1 className="font-semibold	 text-2xl lg:text-5xl	 py-2 text-center text-black">
          APPLICATION TESTING
        </h1>
        <p className="text-gray-700 text-center lg:text-xl	 py-2 ">
          Bulsoft provides range of application testing services to ensure
          complete coverage of quality of your application. Our consultant are
          expert all application testing domains.
        </p>
      </div>

      <div>
        <FlexCard cardData={TestingCardData} />
      </div>
    </div>
  );
};

export default TestingServicesComponent;
