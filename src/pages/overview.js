import React from "react"
import mainLogo from "../images/adwc_mainlogo.svg"
import computerBefore from "../images/computer-before.jpg"
import computerAfter from "../images/computer-after.jpg"
import { Container, Image, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet"
// import { Link } from "gatsby"

const AboutPage = (props) => (
    <div>
        <Helmet>
        {/* <!-- TradeDoubler site verification 3182343 --> */}
        </Helmet>
        {/* <!-- TradeDoubler site verification 3182343 --> */}
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
            <h1>All The Tools You Need To Become A Successful Web Designer</h1>
            <p className="text-center"><strong>Learn to Code ~ Manage A Web Design Business ~ And more!</strong></p>
            
            <p>I've been designing on the web since web browsers were in the lexicon. I say design beacuse there's where all of my websites start out. With a design. But the next question quickly became, <em>how do I build it?</em></p>

            <p>How do I integrate a podcast on mine or my client's website? How do I design a form that emails me? It's easy to design in Photoshop, but soon after you have to enter the world of code.</p>

            <p>I've always had the belief that learning how to code, even on a basic level, will make you a better web designer. Through my free & premium courses and my <a href="https://www.youtube.com/adesignerwhocodes">YouTube Channel</a> where I upload content once to twice a week, you'll learn how to become a better web designer.</p>

            <p>What makes me different is I look at code from a design perspective. I went to school for art, receiving my Bachelors of Fine Arts degree. I love to design on the web—but I have to learn how to code & run a successful busines to do so.</p>

            <p>Let's get started!</p>

            <p>Haydn S. Adams, BFA</p>
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
