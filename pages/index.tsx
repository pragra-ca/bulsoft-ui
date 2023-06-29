import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/common/Navbar'
import Layout from '@/components/common/Layout'
import HeroComponent from '@/components/common/HeroComponent'
import MarqueeComponent from '@/components/Marquee'
import CarouselComponent from '@/components/carouselComponent'
import ProcessComponent from '@/components/process'
import ManagementComponent from '@/components/management'
import Seo from '@/components/seo'
import AboutComponent from '@/components/about'
import TestingServicesComponent from '@/components/testingServices'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <div className="w-full bg-white">
        <Seo pageTitle='Home' />
        <HeroComponent />
        <MarqueeComponent />
        <AboutComponent/>
        <ProcessComponent />
        <ManagementComponent/>
        <TestingServicesComponent/>
        <CarouselComponent/>
      </div>
    </Layout>
  )
}
