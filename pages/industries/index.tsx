import ImageHeroComponent from '@/components/common/HeroComponent/ImageHeroComponent'
import Layout from '@/components/common/Layout'
import React from 'react'
import industriesHero from "@/public/heroImages/industriesHero.jpg"
import IndustriesComponent from '@/components/industries'
import Seo from '@/components/seo'
const Industries = () => {
  return (
    <Layout>
        <div>
        <Seo pageTitle='Industries' />
            <ImageHeroComponent heroImage={'bg-industries-hero'} title='Industries'/>
            <IndustriesComponent />
        </div>
    </Layout>
  )
}

export default Industries