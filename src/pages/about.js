import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const about = () => {
  return (
    <Layout>
      <h1 className=" font-bold">About Me</h1>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  )
}

export const Head = () => <Seo title={"about"} />
export default about
