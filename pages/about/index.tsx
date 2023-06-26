import MarqueeComponent from '@/components/Marquee'
import AboutComponent from '@/components/about'
import Layout from '@/components/common/Layout'
import React from 'react'

const About = () => {
  return (
    <Layout>
       <div>
       <AboutComponent />
        <MarqueeComponent />
       </div>
    </Layout>
  )
}

export default About