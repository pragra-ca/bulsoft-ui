import ImageHeroComponent from '@/components/common/HeroComponent/ImageHeroComponent'
import Layout from '@/components/common/Layout'
import ManagementComponent from '@/components/management'
import React from 'react'
import managementHero from "@/public/heroImages/managementHero.jpg"
import ProcessComponent from '@/components/process'
const ManagementServices = () => {
  return (
    <Layout>
    <div>
        <ImageHeroComponent heroImage={'bg-management-hero'}/>
        <ProcessComponent/>
        <ManagementComponent/>
    </div>
    </Layout>
  )
}

export default ManagementServices