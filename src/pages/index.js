import React from 'react'
import Seo from '../components/seo'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const index = () => {
  return (
    <Layout pageTitle="Home page">
         <div>
            <h1>This is home page</h1>
            <StaticImage alt='hello' src='https://i.ytimg.com/vi/dip_8dmrcaU/maxresdefault.jpg' />
         </div>
    </Layout>
  )
}
export const Head = () => <Seo title="My Blog Posts" />
export default index