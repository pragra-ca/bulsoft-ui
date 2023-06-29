import React from 'react'
import {footerLinks as navigation} from "@/constants/FooterInfo"
import Image from 'next/image'
import IconHelper from '@/helper/iconHelper'
import Link from 'next/link'
import { useRouter } from 'next/router'

 const Footer = () => {
  // console.log(navigation.footerLogo.socialLink);
  const router = useRouter();
  return (
    <footer className="bg-white mt-4" aria-labelledby="footer-heading">
    <h2 id="footer-heading" className="sr-only">
      Footer
    </h2>
    <div className="mx-auto font-poppins max-w-7xl px-6 pb-8 pt-10 lg:px-8 ">
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="space-y-8">
          <Image
            className="w-30 cursor-pointer"
            src={navigation.footerLogo.logo}
            alt="Company name"
            onClick={()=>router.push('/')}
          />
       
          <div className="flex space-x-4  pl-4">
            {navigation?.footerLogo?.socialLink?.map((item:any,index:number) => (
              <Link key={index} href={item.route} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.title}</span>
              { <span className="text-socialLogoColor hover:text-gray-600">{IconHelper(item.icon)}</span>}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div className="w-full grid grid-cols-2 gap-5 justify-around">
            <div className="ml-4 md:ml-0">
              <h3 className="text-xl	font-bold	 leading-6 text-black">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.title}>
                    <Link href={item.route} className="font-medium text-base	leading-6 text-gray-600 hover:text-gray-900">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold leading-6 text-black">Resources</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.resources.map((item) => (
                  <li key={item.title}>
                    <Link href={item.route} className="font-medium text-base	leading-6 text-gray-600 hover:text-gray-900">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-1 md:gap-8">

          <div className="mt-10 xl:mt-0">
            <h3 className="text-xl font-bold leading-6 text-black">Join to our newsletter</h3>
           
            <form className="mt-6 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                placeholder="Enter your email"
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center  bg-logoColor px-3 py-2 text-sm font-medium	 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="mt-2 md:mt-5 font-medium text-base leading-6 text-gray-500">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
          </div>
          </div>
        </div>
      </div>
      <div className="mt-16 border-t-4 border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
        <p className="text-xs leading-5 text-center text-gray-500">&copy; Bulsoft 2022. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer