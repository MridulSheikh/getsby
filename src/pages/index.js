import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <h1 className="text-red-500 text-center text-3xl">
      wellcome to my gatsby sites!
    </h1>
    <StaticImage
      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
      src="../images/example.png"
    />
  </Layout>
)
export const Head = () => <Seo title={"home"} />

export default IndexPage
