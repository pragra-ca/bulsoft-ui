import React from "react";
import homeHero from "@/public/heroImages/homeHero.png";
import Image from "next/image";
import { useRouter } from "next/router";

const HeroComponent = () => {
  const router = useRouter();
  return (
    <>
      <div className="relative bg-hero-back bg-no-repeat pt-4 md:pt-16 px-4 sm:px-6">
        <div className="flex flex-col gap-y-4 gap-x-4 lg:flex-row justify-center max-w-7xl mb-12 2xl:container px-8 lg:pt-8 mx-auto">
          <div className="lg:w-1/2 flex items-center justify-center md:justify-between">
            <div className="mx-auto text-center md:text-left">
              <h1 className="lg:mt-20 text-3xl md:text-5xl lg:text-6xl leading-12 font-semibold tracking-tight text-gray-900">
                Quality{" "}
                <span className="text-blue-800 font-extrabold">Redefined</span>.
              </h1>

              <h2 className="text-2xl py-2 pt-4 leading-12">
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

          <div className="lg:w-1/2 relative  brightness-50">
            <Image
              className="object-cover m-auto w-full lg:relative  flex justify-center align-center "
              src={homeHero}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="relative -top-20 lg:-top-10 xl:-top-24  2xl:-top-20  mb-12 lg:px-8">
        <div className="max-w-7xl 2xl:container z-50 leading-6 rounded-lg bg-blue-900 px-8 py-2 md:py-6 lg:py-12 mx-auto">
          <div className="flex sm:flex-col md:flex-row gap-2 justify-around">
            <h2 className="text-lg lg:text-3xl leading-6 lg:leading-10 text-white">
              Enhance your customer happiness index with our services
            </h2>
            <button className="bg-white px-1 md:px-2 lg:px-8 py-1 md:py-2 lg:py-4"  onClick={() => router.push("/contact")}>Connect with Us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroComponent;
