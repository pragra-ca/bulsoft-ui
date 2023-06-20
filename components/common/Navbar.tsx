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
const Navbar = () => {

    const router = useRouter()

    return (
        <Disclosure as="nav" className="bg-white shadow sticky top-0 z-50">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                  <div className="flex">
                    <div className="flex flex-shrink-0 items-center">
                      <Image
                        className="block h-8 w-auto lg:hidden"
                        src={bulsoft}
                        alt="bulsoft"
                      />
                      <Image
                        className="hidden h-8 w-auto lg:block"
                        src={bulsoft}
                        alt="bulsoft"
                      />
                    </div>
                    <div className="hidden sm:ml-12 md:ml-24 lg:ml-60 sm:flex sm:space-x-8">
                      {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  
                      {
                        NavLinks && NavLinks.map((navItem)=> (
                           <h2  className={`capitalize inline-flex items-center ${navItem.route === router.asPath? 'border-b-2 border-indigo-500': ''} px-1 pt-1 text-sm  font-bold text-gray-900 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}>
                             <Link href={navItem.route}>
                             {navItem.name}
                            </Link>
                           </h2>
                        ))
                      }
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    
    
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
    
              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pb-3 pt-2">
                  {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                  {
                        NavLinks && NavLinks.map((navItem)=> (
                           <Disclosure.Button 
                           as="h3"
                           onClick={()=> router.push(navItem.route)}
                           className={`block capitalize ${navItem.route === router.asPath? 'border-l-4 border-indigo-500 bg-indigo-50 ': ''} py-2 pl-3 pr-4 text-base font-medium text-gray-500  hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}>
                             {/* <Link className='w-full' href={navItem.route}> */}
                             {navItem.name}
                            {/* </Link> */}
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

export default Navbar