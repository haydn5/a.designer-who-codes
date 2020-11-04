import React from "react"
import top10 from "../images/top-10-splash.jpg"
import gatsbyImage from "../images/gatsby-image-cheat-sheet.jpg"
import { Container, Button, Row, Col, Card } from "react-bootstrap";
// import { Helmet } from "react-helmet"
// import { Link } from "gatsby"

const AboutPage = (props) => (
    <div>
        <Container>
            {/* <Row>
                <Col lg={4}>
                    <Image src={computerBefore} alt="Computer before" fluid />
                </Col>
                <Col lg={4} className="mt-5 mb-5">
                    <Image src={mainLogo} alt="A Designer who codes full logo"   fluid />
                    
                </Col>
                <Col lg={4}>
                    <Image src={computerAfter} alt="Computer After" fluid />
                </Col>
            </Row> */}
            <div>
            
         
                <h2 className="text-center pt-5">Download One of My Gatsby JS Tips & Cheat Sheets to power up your Gatsby workflow. </h2>
                
            <Row >
                
                <Col lg={6}>
                    <Card>
                        <Card.Img variant="top" src={top10} />
                            <Card.Body>
                                <h3>Top 10 Gatsby CLI Commands</h3>
                                <Card.Text>
                                A cheat-sheet for when you are learning Gatsby JS.
                                </Card.Text>
                                <p className="text-center">
                                <Button href="https://adesignerwhocodes.ck.page/c410584ca5
" variant="primary"><strong>I could use that!</strong></Button>
                                </p>
                                
                            </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card>
                        <Card.Img variant="top" src={gatsbyImage} />
                            <Card.Body>
                                <h3>Gatsby Image Cheat Sheet</h3>
                                <Card.Text>
                                Learn the 5 steps to implementing (and troubleshooting) Gatsby Image.
                                </Card.Text>
                                <p className="text-center">
                                <Button href="https://adesignerwhocodes.ck.page/e083d8f8aa
" variant="primary"><strong>Yes, I need that!</strong></Button>
                                </p>
                                
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
            
            
            {/* <p>Hi there! I'm Haydn, a web designer who also codes. I'm here to help Web Designers and Front-end Web Developers design more & troubleshoot less.</p>

            <p>I consider myself both a front-end web developer <em>and</em> a web designer. A unicorn of sorts. To me, designing on the web requires knowledge of code.</p> */}

            {/* <p>I've always had the belief that learning how to code, even on a basic level, will make you a better web designer. Through my free & premium courses and my <a href="https://www.youtube.com/adesignerwhocodes">YouTube Channel</a> where I upload content once to twice a week, you'll learn how to become a better web designer.</p> */}

            {/* <p>What makes me different is I look at code from a design perspective. I went to school for art, receiving my Bachelors of Fine Arts degree. I love to design on the web—but I have to learn how to code & run a successful busines to do so.</p>

            <p>Let's get started!</p>

            <p>Haydn S. Adams, BFA</p> */}
                    {/* <em>
                    <p>
                        I've always had the belief that learning how to code, even on a basic level, will make you a better web designer. My courses, YouTube Channel and podcast are all about helping you achieve a better web design, through good programming methodologies. 
                    </p>
                    <p>Proper markup, good CSS and image optimization means your sites will load faster, preform better and just look darn good.</p>
                    <p>
                        Drop the drag-and-drop and get your hands dirty. Throw some error messages, forget a few close tags and let's learn how to code in HTML, CSS, JS/JSX. And <strong>watch your design skills on the web thrive.</strong> 
                    </p>
                    <p>
                    Thank you,<br />
                    Haydn S. Adams, BFA
                    </p>
                    </em> */}
                   
            </div>
        </Container>
    </div>
)

export default AboutPage
