import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/common/Navbar'
import Layout from '@/components/common/Layout'
import HeroComponent from '@/components/common/HeroComponent'
import MarqueeComponent from '@/components/Marquee'
import CarouselComponent from '@/components/carouselComponent'
import ProcessComponent from '@/components/process'
import ManagementComponent from '@/components/management'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <div className="w-full bg-white">
        <HeroComponent />
        <MarqueeComponent />
        <ProcessComponent />
        <ManagementComponent/>
        <CarouselComponent/>
      </div>
    </Layout>
  )
}
