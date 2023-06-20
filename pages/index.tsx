import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/common/Navbar'
import Layout from '@/components/common/Layout'
import HeroComponent from '@/components/common/HeroComponent'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <div className="w-full bg-white">
        <HeroComponent />
      </div>
    </Layout>
  )
}
