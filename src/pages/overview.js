import React from "react"
// import { Link } from "gatsby"
// import scrollTo from 'gatsby-plugin-smoothscroll';
// import Image from "../components/image"
// import SEO from "../components/seo"
import mainLogo from "../images/adwc_mainlogo.svg"
import computerBefore from "../images/computer-before.jpg"
import computerAfter from "../images/computer-after.jpg"



// import Scrollspy from 'react-scrollspy'
import { Container, Image, Row, Col, Form } from "react-bootstrap";

const AboutPage = (props) => (
    <section id={props.sectionName}>
        
        <Container>
            <Row>
                <Col lg={4}>
                    <Image src={computerBefore} alt="Computer before" fluid />
                </Col>
                <Col lg={4}>
                    <Image src={mainLogo} alt="A Designer who codes full logo"  fluid />
                    <h1 className="text-center codeType mt-3 smaller">&lt;Web Development Tutorials<br />
                    for Designers /&gt;</h1>
                </Col>
                <Col lg={4}>
                    <Image src={computerAfter} alt="Computer After" fluid />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col lg={8}>
                    <em>
                        <p>
                            I've always had the belief that learning how to code, even on a basic level, will make you a better web designer. My courses, YouTube Channel and podcast are all about helping you achieve a better web design, through good programming methodologies. 
                        </p>
                        <p>Proper markup, good CSS and image optimization means your sites will load faster, preform better and just look darn good.</p>
                        <p>
                            Drop the drag-and-drop and get your hands dirty. Throw some error messages, forget a few close tags and let's learn how to code in HTML, CSS, JS/JSX. And watch your design skills on the web thrive. 
                        </p>
                        <p>
                        Thank you,<br />
                        Haydn S. Adams, BFA
                        </p>
                    </em>
                </Col>
                <Col lg={4}>
                    <h2 className="newsletterTitle"><small>The Monthly Newsletter</small></h2>
                    <p>We send, no wait, I (team of one here) send out one email a month recapping what new content has come out, as well as notifications when a new course has been launched (with discount codes). </p>
                    <script src="https://f.convertkit.com/ckjs/ck.5.js" />
                    <Form action="https://app.convertkit.com/forms/1343793/subscriptions" method="post" data-sv-form="1343793" data-uid="b64e2c1bed" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Thanks for signing up. Check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;https://adesignerwhocodes.com/thank-you/&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800">
                        <div data-style="clean">
                            <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert">
                            </ul>
                            <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields">
                                        <Form.Group>
                                            <Form.Control className="formkit-input" aria-label="Your first name" name="fields[first_name]" placeholder="Your first name" type="text"   />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control name="email_address" placeholder="Your email address" required="" type="email"   />
                                        </Form.Group>
                                        <button data-element="submit" className="btn btn-primary" ><div class="formkit-spinner"><div></div><div></div><div></div></div><span>Sign me up!</span></button>
                            </div>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
        
    </section>
)

export default AboutPage
