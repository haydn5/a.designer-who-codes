import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react";
// import ScrollspyNav from "react-scrollspy-nav"
import Scrollspy from 'react-scrollspy'

import { Container, Navbar, Nav } from 'react-bootstrap';

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Header = ({ siteTitle }) => (
  <header>
         <Link to="/">{siteTitle}</Link>

         <Container>
           <Navbar expand="lg" fixed="top">
             <Navbar.Brand href="#home"><Link to="/">{siteTitle}</Link></Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="navbar-nav"> 
                 <ul className="navbar-nav">
                   <Scrollspy items={ ['section-1', 'section-2', 'section-3', 'section-4'] } className="navbar-nav" currentClassName="active">
                     <li><a href="#test" className="nav-link">Test</a></li>
                     <li><a href="#section-2" className="nav-link">section 2</a></li>
                     <li><a href="#section-3" className="nav-link">section 3</a></li>
                     <li><a href="#section-4" className="nav-link">section 4</a></li>
                   </Scrollspy>
                 </ul>
               </Nav>
             </Navbar.Collapse>
           </Navbar>
         </Container>
   </header>
)


export default Header

