import BlogsComponent from '@/components/blogs/Blogs'
import Layout from '@/components/common/Layout'
import React from 'react'

const Blogs = () => {
  return (
    <Layout>
        <div>
            <BlogsComponent/>
        </div>
    </Layout>
  )
}

export default Blogs