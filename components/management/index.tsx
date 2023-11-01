import {useRouter} from "next/router";
import React from "react";

const ManagementComponent = () => {
    const router = useRouter();

    return (
        <div className="relative 2xl:container max-w-7xl  h-[400px] font-poppins mx-auto items-center bg-management-bg bg-cover">
            <div className="absolute w-full h-[400px]  brightness-50  bg-handShake bg-center bg-cover bg-no-repeat	 m-auto"></div>

            <div className="absolute w-full h-[400px] text-center flex flex-col justify-center align-center  items-center mx-auto">
                <h1 className="text-4xl text-center text-white font-bold mx-auto mt-4 mb-2 px-2 py-2">
                    Push your product to next level
                </h1>
                <p className="text-md text-center text-white font-bold   mb-2  px-2 py-2">
                    Get access to the best IT solution in order to leverage your
                    business.
                </p>
                <div>
                    <button
                        className="bg-logoColor hover:bg-blue-700 text-center  mt-4  py-2 px-4 my-4 cursor-pointer rounded-2xl text-white"
                        onClick={() => router.push("/contact")}
                    >
                        Get Started
                    </button>
                </div>
            </div>

            <br className="" />
        </div>
    );
};

export default ManagementComponent;
