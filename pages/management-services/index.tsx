import ImageHeroComponent from '@/components/common/HeroComponent/ImageHeroComponent'
import Layout from '@/components/common/Layout'
import ManagementComponent from '@/components/management'
import React from 'react'
import managementHero from "@/public/heroImages/managementHero.jpg"
import ProcessComponent from '@/components/process'
import Seo from '@/components/seo'
const ManagementServices = () => {
  return (
    <Layout>
    <div>
    <Seo pageTitle='Management Services' />
        <ImageHeroComponent heroImage={'bg-management-hero'} title="Management Services"/>
        <ProcessComponent/>
        <ManagementComponent/>
    </div>
    </Layout>
  )
}

export default ManagementServices