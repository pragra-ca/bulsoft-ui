import AllBlogsComponent from '@/components/blogs/AllBlogs'
import Layout from '@/components/common/Layout'
import React from 'react'

const AllBlogs = () => {
  return (
    <Layout>
        <div>
           <AllBlogsComponent />
        </div>
    </Layout>
  )
}

export default AllBlogs