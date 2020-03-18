import React from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import introToHTML from "../images/courses/intro-to-html-css-responsive-portfolio.jpg"
import gatsbyJSstarter from "../images/courses/gatsby-js-starter-guide.jpg"


const Courses = (props) => (
    <section id={props.sectionName} className="singlePageBlue">
        
        <Container className="text-center">
            <h2 >Udemy Courses</h2>
            <Row>
                <Col md={6} lg={4}>
                    <Card>
                    <Card.Img variant="top" src={gatsbyJSstarter} alt="Gatsby JS Starter Guide: Setup, Build & Deploy" />
                    <Card.Body>
                        <Card.Title>Gatsby JS Starter Guide: Setup, Build & Deploy</Card.Title>
                        <Button variant="primary" href="https://www.apple.com" block>Enroll</Button>
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
                    
                    <Card.Body>
                        <Card.Title>More coming soon!</Card.Title>
                        <Card.Text>Sign-up to be e-mailed when new courses become available</Card.Text>
                        <Button variant="primary" href="https://www.udemy.com/course/intro-to-html-css-build-a-responsive-portfolio-website/?referralCode=2E0BAC82419DBD3BDC8F" block>Sign-up</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Courses
