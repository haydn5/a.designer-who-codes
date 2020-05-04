import React from "react"
import mainLogo from "../images/adwc_mainlogo.svg"
import computerBefore from "../images/computer-before.jpg"
import computerAfter from "../images/computer-after.jpg"

import { Container, Image, Row, Col } from "react-bootstrap";

const AboutPage = (props) => (
    <section id={props.sectionName}>
        <Container>
            <Row>
                <Col lg={4}>
                    <Image src={computerBefore} alt="Computer before" fluid />
                </Col>
                <Col lg={4} className="mt-5 mb-5">
                    <Image src={mainLogo} alt="A Designer who codes full logo"   fluid />
                    
                </Col>
                <Col lg={4}>
                    <Image src={computerAfter} alt="Computer After" fluid />
                </Col>
            </Row>
            <hr />
            <div className="singleCol">
            <h1>Become a better Web Designer by learning how to code.</h1>
                    <em>
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
                    </em>
                   
            </div>
        </Container>
    </section>
)

export default AboutPage
