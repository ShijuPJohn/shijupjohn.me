import Head from 'next/head'
import Layout from '../src/components/Layout'
import React from 'react'

export default function Home() {
  return (
   <React.Fragment>
      <Head>
    <title>SHIJU P JOHN</title>
  </Head>
     <Layout>
       <h1>Hello</h1>
     </Layout>
   </React.Fragment>
  )
}
