import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import classNames from "@/helper/classHelper";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import bulsoft from "@/public/logo/bulsoft.svg";
import { NavLinks } from "@/constants/NavInfo";
import Link from "next/link";
import { useRouter } from "next/router";
import MobileNavbar from "./MobileNavbar";
const Navbar = () => {
  const router = useRouter();

  return (
    <Disclosure as="nav" className="bg-white shadow sticky top-0 z-50 ">
      {({ open }) => (
        <>
          <MobileNavbar />

          <div className="hidden md:flex w-full mx-auto  h-16 justify-between  max-w-7xl 2xl:container font-poppins">
            <div className="w-1/4 flex px-4 justify-between items-center ml-5">
              <Image
                onClick={() => router.push("/")}
                className="hidden h-12 w-auto md:block cursor-pointer"
                src={bulsoft}
                alt="bulsoft"
              />
            </div>

            <div className="w-3/4 hidden sm:ml-4 md:ml-12 lg:ml-60 mr-10 sm:flex justify-around sm:space-x-10 md:space-x-auto">
              {NavLinks &&
                NavLinks.map((navItem) => (
                  <h2
                    key={navItem.name}
                    className={`capitalize inline-flex items-center ${
                      navItem.route === router.asPath
                        ? "border-b-2 border-indigo-500"
                        : ""
                    }  pt-1 text-sm  font-bold text-gray-900 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
                  >
                    <Link href={navItem.route}>{navItem.name}</Link>
                  </h2>
                ))}
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
