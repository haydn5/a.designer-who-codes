import React from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import introToHTML from "../images/courses/intro-to-html-css-responsive-portfolio.jpg"
import gatsbyJSstarter from "../images/courses/gatsby-js-starter-guide.jpg"
import gatsbyJSBlog from "../images/courses/udemy-gatsby-js-blog.jpg"

 import Layout from "../components/layout"
 import SEO from "../components/seo"


 const Courses = () => (
   <Layout>
      <SEO title="Free & Paid Courses to make you a better web designer through code" /> 
        <Container>
            <h1>Free & Paid Courses to make you a better web designer through code</h1>
            <p className="singleCol">Ready to jump in and improve your web design game? I've designed them to focus on design through code and to make you a better web designer.</p>
            <Row>
                <Col md={6} lg={4}>
                    <Card>
                    <Card.Img variant="top" src={gatsbyJSstarter} alt="Gatsby JS Starter Guide: Setup, Build & Deploy" />
                    <Card.Body>
                        <Card.Title>How to Setup - Build - and Deploy your first Gatsby Website</Card.Title>
                        <Button variant="primary" href="https://courses.adesignerwhocodes.com/p/how-to-setup-build-and-deploy-your-first-gatsby-js-website-with-react-bootstrap" block>Enroll</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card>
                    <Card.Img variant="top" src={introToHTML} alt="Intro to HTML & CSS: Build a Responsive Portfolio Website" />
                    <Card.Body>
                        <Card.Title>Intro to HTML & CSS: Build a Responsive Portfolio Website</Card.Title>
                        <Button variant="primary" href="https://www.udemy.com/course/intro-to-html-css-build-a-responsive-portfolio-website/?referralCode=2E0BAC82419DBD3BDC8F" block>Enroll</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card>
                    <Card.Img variant="top" src={gatsbyJSBlog} alt="Gatsby JS Blog Course Cover" />
                    <Card.Body>
                        <Card.Title>How to Build a Blog Using Gatsby JS: The Complete Guide</Card.Title>
                        <Button variant="primary" href="https://courses.adesignerwhocodes.com/p/how-to-build-a-blog-in-gatsby-js-1" block>Enroll</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </Layout>
)

export default Courses
