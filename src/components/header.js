import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react";
// import ScrollspyNav from "react-scrollspy-nav"
// import Scrollspy from 'react-scrollspy'
import logoImage from "../images/a-designer-d-logo.svg"
import youTubelogo from "../images/yt-logo.svg"

import { Container, Navbar, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap'




const Header = ({ siteTitle }) => (
  <header>
           <Navbar expand="lg"  variant="dark">
             <Container>
              <Navbar.Brand href="#home">
                <Link to="/">
                  <img src={logoImage} alt={siteTitle} className="img-fluid" width="50" />
                </Link>
              </Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="navbar-nav"> 
                 <ul className="navbar-nav">
                      <li><Link to="/courses/" className="nav-link" activeClassName="active">Courses</Link></li>

                      <li><Link to="/struggles/" className="nav-link" activeClassName="active">Struggles</Link></li>

                      <li><Link to="/successes/" className="nav-link" activeClassName="active">Successes</Link></li>


                      <li><Link to="/about/" className="nav-link" activeClassName="active">About</Link></li>

                      <li><Link to="/contact/" className="nav-link" activeClassName="active">Contact</Link></li>
                 </ul>
               </Nav>
               <Nav className="navbar-nav ml-auto">
               <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip>
                      Subscribe to the YouTube Channel
                    </Tooltip>
                  }
                >
                  <a href="https://www.youtube.com/adesignerwhocodes?sub_confirmation=1"><img src={youTubelogo} alt="YouTube" className="img-fluid" width="100" /></a>
                </OverlayTrigger>
               
               </Nav>
             </Navbar.Collapse>
             </Container>
           </Navbar>
   </header>
)


export default Header

