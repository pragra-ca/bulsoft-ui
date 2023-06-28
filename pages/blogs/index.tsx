import BlogsComponent from '@/components/blogs/Blogs'
import Layout from '@/components/common/Layout'
import Seo from '@/components/seo'
import React from 'react'

const Blogs = () => {
  return (
    <Layout>
        <div>
        <Seo pageTitle='Blogs' />
            <BlogsComponent/>
        </div>
    </Layout>
  )
}

export default Blogs