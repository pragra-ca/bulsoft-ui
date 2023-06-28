import React, { ReactElement } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProp {
    children: ReactElement
}

const Layout = ({children}:LayoutProp) => {
  return (
    <div>
        <Navbar/>
        <main  className={`flex  flex-col items-center justify-between`}>
        {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout