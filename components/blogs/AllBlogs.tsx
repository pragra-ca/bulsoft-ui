import Image from 'next/image'
import React from 'react'
import blogsHero from "@/public/heroImages/blogsHero.png"
import { allBlogs } from '@/constants/CardInfo'
const AllBlogsComponent = () => {
  return (
    <div className="font-poppins">
        <div className="md:w-3/4 pb-8 border-black border-b-2 m-auto">
            <Image className='m-auto' src={blogsHero} alt="" />
            <h2 className="text-4xl font-bold text-center md:w-3/4 m-auto py-5 px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias omnis recusandae sapiente! Perferendis, vel.</h2>

            <p className='text-gray-600 text-sm md:text-lg text-center px-4 '>Stay updated with our top quality articles</p>
        </div>

        <div>
            <h2 className="text-3xl font-semibold text-center md:w-3/4 m-auto py-5 px-4">All Articles</h2>
        </div>

        <div className=' w-2/3 grid grid-cols-1 md:grid-cols-2 justify-around gap-5 m-auto'>
            {allBlogs && allBlogs?.map((post)=> (
                <article
                key={post.id}
                className='flex max-w-xl flex-col  justify-between'
              >
                <div className='relative mt-8 flex items-center gap-x-4 pb-1 mx-auto'>
                  <Image
                    src={post.author.imageUrl}
                    alt=''
                    className='h-270 w-387 bg-gray-50'
                  />
                </div>

                <div className='md:w-3/4 group relative  m-auto'>
                  <h3 className='mt-3  text-lg  font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                    <a href={post.href}>
                      <span className='absolute inset-0' />
                      {post.title}
                    </a>
                  </h3>
                 
                </div>
              </article>
            ))}
        </div>
    </div>
  )
}

export default AllBlogsComponent