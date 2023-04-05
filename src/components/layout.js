import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="max-w-screen-md mx-auto">
        <header className="text-4xl font-bold my-3 text-gray-600">{data.site.siteMetadata?.title}</header>
        <div className="flex gap-x-4 py-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        </div>
        <main className=" max-w-screen-md mx-auto">{children}</main>
        <footer></footer>
      </div>
    </>
  )
}

export default Layout
