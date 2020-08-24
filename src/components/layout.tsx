/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
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
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1000,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          <Link to="home">Home</Link>
          <p>
            <a>0427991708</a>
          </p>
          <p font-size="11px">
            <a>thebestletterboxdelivery@bigpond.com</a>
          </p>
        </footer>
      </div>
    </>
  )
}

export default Layout
