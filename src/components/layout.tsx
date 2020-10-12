/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"
import Button from "react-bootstrap/Button"

//Styles
import "../styles.css"

interface LayoutProps {
  children: any
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }: any) => {
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>
          <Link to="home">Home</Link>
          <p>
            <a>0427991708</a>
          </p>
          <p font-size="11px">
            <a>thebestletterboxdelivery@bigpond.com</a>
          </p>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
