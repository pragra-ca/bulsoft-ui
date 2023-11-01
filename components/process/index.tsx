import Image from "next/image";
import React from "react";
import process from "@/public/backgroundImages/process.png";
import { useRouter } from "next/router";
const ProcessComponent = () => {
  const router = useRouter();

  return (
    <div className="md:w-2/3 m-auto px-3  mx-auto 2xl:container max-w-7xl font-poppins">
      <p className="text-processTop leading-5	 text-sm mt-4 uppercase font-medium	">
        Stockie Operation across the world
      </p>
      <h1 className="text-3xl lg:text-5xl font-semibold  mt-4 text-start mb-4">
        Management Service
      </h1>
      <p className="z-40 text-managementGrey leading-8	 font-medium	text-base	">
        The objective of Test management is to strategize and implement
        best-in-class testing practices throughout the new technology adoption
        lifecycle to achieve business and technology objectives. The key
        processes in overall test management process includes managing
        requirements and changes to scope, developing an optimal test strategy
        addressing the constraints in perspective, planning and directing
        resources appropriately, organizing test assets, and more significantly,
        defining, measuring and tracking testing activities to achieve project
        goals. With our state of art and tailor-made Test Management services,
        our clients can be sure of the application going live meets the business
        and quality expectations. The key to effective management lies in
        understanding goals, constraints, expectations and designing a test
        management strategy that balances and optimizes all stakeholders’ needs
        and priorities let it be business units or IT units.
      </p>

      <button
        className="bg-logoColor hover:bg-blue-700 cursor-pointer font-semibold	text-base	 py-2 px-4 my-4 rounded-2xl text-white"
        onClick={() => router.push("/contact")}
      >
        Get Started
      </button>
      <Image className="relative z-10 " src={process} alt="" />
    </div>
  );
};

export default ProcessComponent;
