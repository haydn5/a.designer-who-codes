

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Container } from "react-bootstrap";

import Header from "./header"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../css/custom.css"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="emptySpace"></div>
      <div>
        <main>{children}</main>
        <footer>
          <hr />
          <Container className="text-center mb-5">
          © {new Date().getFullYear()}, a.designer who codes
          </Container>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
