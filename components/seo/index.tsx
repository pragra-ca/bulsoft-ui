import Head from 'next/head';
import React from 'react'

interface SeoType {
    pageTitle: string;
    keywords?: string;
    meta?: string | any;
}

const Seo = ({pageTitle, keywords, meta}: SeoType) => {
  return (
    <Head>
    <title>
      {pageTitle &&
        `${pageTitle} || bulsoft`}
    </title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
  </Head>
  )
}

export default Seo