import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import ScrollspyNav from "react-scrollspy-nav";

import { Container, Navbar, Nav } from 'react-bootstrap';



const Header = ({ siteTitle }) => (
  <header>
        
        <Container>
          <Navbar expand="lg" fixed="top">
            <Navbar.Brand href="#home"><Link to="/">{siteTitle}</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navbar-nav"> 
                
                
                  <ScrollspyNav
                    scrollTargetIds={[ "the-first", "the-second", "about" ]}
                    activeNavClass="active" 
                    scrollDuration="1000"
                    className="navbar-nav"
                  >
                    <ul>
                      <li><a href="#the-first" className="nav-link">The First</a></li>
                      <li><a href="#the-second" className="nav-link">The Second</a></li>
                      <li><a href="#about" className="nav-link">About</a></li>
                    </ul>
                  </ScrollspyNav>
                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
  </header>
)


export default Header

