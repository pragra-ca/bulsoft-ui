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
        <div  className={`flex min-h-screen flex-col items-center justify-between`}>
        {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout