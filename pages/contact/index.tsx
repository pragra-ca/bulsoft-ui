import Layout from '@/components/common/Layout'
import ContactComponent from '@/components/contact'
import Seo from '@/components/seo'
import React from 'react'

const Contact = () => {
  return (
  <Layout>
      <div>
      <Seo pageTitle='Contact Us' />
        <ContactComponent/>
      </div>
  </Layout>
  )
}

export default Contact