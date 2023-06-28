import MarqueeComponent from '@/components/Marquee'
import AboutComponent from '@/components/about'
import Layout from '@/components/common/Layout'
import Seo from '@/components/seo'
import React from 'react'

const About = () => {
  return (
    <Layout>
       <div>
       <Seo pageTitle='About us' />
       <AboutComponent />
        <MarqueeComponent />
       </div>
    </Layout>
  )
}

export default About