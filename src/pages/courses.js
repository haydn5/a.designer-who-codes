import React from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import introToHTML from "../images/courses/intro-to-html-css-responsive-portfolio.jpg"
import gatsbyJSstarter from "../images/courses/gatsby-js-starter-guide.jpg"
import gatsbyJSBlog from "../images/courses/udemy-gatsby-js-blog.jpg"


const Courses = (props) => (
    <section id={props.sectionName} className="blue">
        <Container className="text-center">
            <h2>What do you want to learn about?</h2>
            <Row>
                <Col md={6} lg={4}>
                    <Card>
                    <Card.Img variant="top" src={gatsbyJSstarter} alt="Gatsby JS Starter Guide: Setup, Build & Deploy" />
                    <Card.Body>
                        <Card.Title>Gatsby JS Starter Guide: Setup, Build & Deploy</Card.Title>
                        <Button variant="primary" href="https://www.udemy.com/course/starter-guide-to-gatsby-js-site-setup-build-and-deploy/?referralCode=10A0D3657B3CB6FFBEE5" block>Enroll</Button>
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
                        <Button variant="primary" href="https://www.udemy.com/course/how-to-build-a-blog-using-gatsby-js-the-complete-guide/?referralCode=AE367F7DDFD6DB09B8E7" block>Enroll</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Courses
