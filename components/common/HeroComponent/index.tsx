import React from "react";
import homeHero from "@/public/heroImages/homeHero.png";
import Image from "next/image";
import { useRouter } from "next/router";

const HeroComponent = () => {
  const router = useRouter();
  return (
    <>
      <div className="relative bg-hero-back bg-no-repeat py-32 px-4 sm:px-6">
        <div className="max-w-7xl mb-12 2xl:container px-8 pt-8 mx-auto">
          <div className="grid lg:grid-cols-2 lg:gap-x-10 justify-center md:justify-between   pb-24 pt-10 lg:col-span-7 xl:col-span-6">
            <div className="mx-auto md:max-w-2xl lg:max-w-3xl lg:mx-0 ">
              <h1 className="mt-20 text-5xl md:text-6xl leading-12 font-semibold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                Quality{" "}
                <span className="text-blue-800 font-extrabold">Redefined</span>.
              </h1>

              <h2 className="text-2xl md:text-2xl py-2 px-2 leading-12">
                Our full spectrum of QA services give you peace of mind.
              </h2>

              <p className="mt-6 text-lg leading-12 text-gray-600 ">
                We recognize the importance of product quality for both
                businesses and consumers. Our test-suite is specifically
                designed to offer a comprehensive perspective on all
                quality-related operations
              </p>
            </div>
          </div>

          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <Image
              className=" bg-white m-auto h-full lg:mt-10 flex justify-center align-center "
              src={homeHero}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="relative -mt-8 mb-12 px-8">
        <div className="max-w-7xl 2xl:container z-50 lead rounded-lg bg-blue-900 px-8 py-12 mx-auto">
          <div className="flex sm:flex-col md:flex-row  justify-around">
            <h2 className="text-3xl leading-10 text-white">
              Enhance your customer happiness index with our services
            </h2>
            <button className="bg-white px-8 py-4">Connect with Us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroComponent;
