import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import classNames from "@/helper/classHelper";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import Image from 'next/image';
import bulsoft from "@/public/logo/bulsoft.svg"
import {NavLinks} from "@/constants/NavInfo"
import Link from 'next/link';
import { useRouter } from 'next/router';

const MobileNavbar = () => {
    const router = useRouter()

  return (
    <Disclosure as="nav" className="block md:hidden bg-white shadow sticky top-0 z-50 ">
    {({ open }) => (
      <>
        <div className="mx-auto max-w-7xl font-poppins">
          <div className="w-full flex h-16 justify-between px-5" >
            <div className="w-full flex lg:justify-between ">
              <div className="flex items-center">
                <Image
                onClick={()=> router.push("/")}
                  className="block h-8 w-auto lg:hidden cursor-pointer"
                  src={bulsoft}
                  alt="bulsoft"
                />
               
              </div>
          
            </div>
          
            <div className="-mr-2 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <AiOutlineCloseCircle className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <FiMenu className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden bg-white">
          <div className="space-y-1 pb-3 pt-2">
            {
                  NavLinks && NavLinks.map((navItem)=> (
                     <Disclosure.Button 
                     as="h3"
                     key={navItem.name}
                     onClick={()=> router.push(navItem.route)}
                     className={`block capitalize ${navItem.route === router.asPath? 'border-l-4 border-indigo-500 bg-indigo-50 ': ''} py-2 pl-3 pr-4 text-base font-medium text-gray-500  hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}>
                       {navItem.name}
                     </Disclosure.Button>
                  ))
                }
            
          </div>
         
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
  )
}

export default MobileNavbar