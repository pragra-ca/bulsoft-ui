import ImageHeroComponent from '@/components/common/HeroComponent/ImageHeroComponent'
import Layout from '@/components/common/Layout'
import TestingServicesComponent from '@/components/testingServices'
import React from 'react'

const TestingServices = () => {
  return (
    <Layout>
        <div>
            <ImageHeroComponent heroImage={'bg-testingservices-hero'} title={'Testing Services'}/>
            <TestingServicesComponent />
        </div>
    </Layout>
  )
}

export default TestingServices