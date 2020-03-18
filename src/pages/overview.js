import React from "react"
// import { Link } from "gatsby"
// import scrollTo from 'gatsby-plugin-smoothscroll';
// import Image from "../components/image"
// import SEO from "../components/seo"
import mainLogo from "../images/adwc_mainlogo.svg"
import computerBefore from "../images/computer-before.jpg"
import computerAfter from "../images/computer-after.jpg"


// import Scrollspy from 'react-scrollspy'
import { Container, Image, Row, Col } from "react-bootstrap";

const AboutPage = (props) => (
    <section id={props.sectionName}>
        
        <Container>
            <Row>
                <Col md={4}>
                    <Image src={computerBefore} alt="Computer before" fluid />
                </Col>
                <Col md={4}>
                    <Image src={mainLogo} alt="A Designer who codes full logo"  fluid />
                    <h1 className="text-center codeType mt-3 smaller">&lt;Teaching the code <br />
behind the design /&gt;</h1>
                </Col>
                <Col md={4}>
                    <Image src={computerAfter} alt="Computer After" fluid />
                </Col>
            </Row>
        </Container>
    </section>
)

export default AboutPage
