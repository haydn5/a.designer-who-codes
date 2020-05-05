

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery } from "gatsby"

import { Container } from "react-bootstrap";

import Header from "./headerNoNav"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../css/custom.css"


const Layout = ({ children }) => {
  

  return (
    <>
      <Header />
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
