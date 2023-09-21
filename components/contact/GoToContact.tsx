import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { sendContactForm } from "@/lib/api";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

const GoToContact = () => {
  const router = useRouter();

  return (
    <div className="w-screen bg-darkblue  mx-auto max-w-7xl 2xl:container font-poppins">
      <div className="flex flex-col lg:flex-row py-4 md:py-20 md:px-6">
        <div className="lg:w-1/2 px-8 md:px-4 py-5 text-white m-auto">
          <p className="text-sm"> WHY CHOOSE US</p>
          <h1 className="text-4xl font-bold md:text-6xl py-4">
            Because we provide the most premium services.
          </h1>
          <p className="mt-4 lg:mt-8"></p>
        </div>

        <div className="w-96 lg:w-1/2 h-80 m-auto lg:m-0 lg:h-auto flex justify-center items-center bg-contact-bg bg-right bg-no-repeat bg-cover rounded-lg border border-black">
          <button
            type="submit"
            onClick={() => router.push("/contact")}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-800 text-white rounded-lg"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoToContact;
