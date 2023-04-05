import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <h1 className="text-red-500 mb-10 text-3xl">
      wellcome to my gatsby sites!
    </h1>
    <StaticImage
      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
      src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
    />
  </Layout>
)
export const Head = () => <Seo title={"home"} />

export default IndexPage
