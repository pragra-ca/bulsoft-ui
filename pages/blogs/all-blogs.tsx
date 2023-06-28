import AllBlogsComponent from '@/components/blogs/AllBlogs'
import Layout from '@/components/common/Layout'
import Seo from '@/components/seo'
import React from 'react'

const AllBlogs = () => {
  return (
    <Layout>
        <div>
        <Seo pageTitle='All-Blogs' />
           <AllBlogsComponent />
        </div>
    </Layout>
  )
}

export default AllBlogs