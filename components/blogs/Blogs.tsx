import React from 'react'
import {posts, posts2} from "@/constants/CardInfo"
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
const BlogsComponent = () => {
    const router = useRouter()
  return (
    <div>
        <div className='bg-white py-12 font-poppins'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto px-15 lg:mx-0 flex flex-col md:flex-row justify-between'>
          <h2 className='w-3/4 md:w-auto m-auto text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4'>
            Our Latest Blog Posts
          </h2>
          <button className='w-auto m-auto bg-logoColor hover:bg-blue-700 text-white  py-3 px-6 rounded text-base bg-[#5D5FEF]'
           onClick={()=> router.push('/blogs/all-blogs')}
          >
            See All Blog Posts
          </button>
        </div>
        <div className='mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10  sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {posts && posts.map((post) => (
            <article
              key={post.id}
              className='flex max-w-xl flex-col items-start justify-between'
            >
              <div className='relative mt-8 flex items-center gap-x-4 pb-1 mx-auto'>
                <Image
                  src={post.author.imageUrl}
                  alt=''
                  className='h-270 w-387 bg-gray-50'
                />
              </div>

              <div className='flex items-center gap-x-4 text-xs px-5'>
                <time
                  dateTime={post.datetime}
                  className='text-gray-500'
                >
                  {post.date}
                </time>
                <Link
                  href={post.category.href}
                  className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
                >
                  {post.category.title}
                </Link>
              </div>
              <div className='group relative px-5'>
                <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                  <Link href={post.href}>
                    <span className='absolute inset-0' />
                    {post.title}
                  </Link>
                </h3>
                <p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'>
                  {post.description}
                </p>
              </div>
            </article>
          ))}

          <div>
            {posts2 && posts2.map((post) => (
              <article
                key={post.id}
                className='flex justify-between gap-x-2 border-b border-gray-200 pb-4'
              >
                <div className='w-3/12  flex items-center justify-center mt-5'>
                  <div className='relative  '>
                    <Image
                      src={post.author.imageUrl}
                      alt=''
                      className=' bg-gray-50'
                    />
                  </div>
                </div>
                <div className='w-9/12'>
                  <div className='flex items-center gap-x-4 text-xs mt-8'>
                    <time
                      dateTime={post.datetime}
                      className='text-gray-500'
                    >
                      {post.date}
                    </time>
                    <Link
                      href={post.category.href}
                      className='relative z-10 rounded-full bg-gray-50 px-3  font-medium text-gray-600 hover:bg-gray-100'
                    >
                      {post.category.title}
                    </Link>
                  </div>
                  <div className='group relative'>
                    <h3 className='mt-1 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                      <Link href={post.href}>
                        <span className='absolute inset-0' />
                        {post.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BlogsComponent