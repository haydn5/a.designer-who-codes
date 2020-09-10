import React from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = (props) => (
    <Layout>
      <SEO title="Contact Me for Speaking Engagement, YouTube Collaborations and More" /> 
        <Container>
            <h1>Get in touch with me for Speaking Engagements, YouTube Collaborations and more!</h1>
            
            <Row>
                <Col lg={5}>
                    <p>E-mail me: <a href="mailto:info@adesignerwhocodes.com">info@adesignerwhocodes.com</a>
                    </p>
                    <p>Find me on <a href="https://www.instagram.com/_adesignerwhocodes/">Instagram</a></p> 
                </Col>
                <Col lg={7}>
                <Form 
                        name="contact v2"
                        method="post"
                        
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit="submit"
                    >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact v2" />
                    <p hidden>
                    <label>
                        Don’t fill this out: <input name="bot-field" />
                    </label>
                    </p>
                     


                        <Row>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control 
                                        type="text" name="first-name"
                                     />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                            <Form.Group>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control 
                                       type="text" name="last-name"

                                     />
                            </Form.Group>
                            </Col>
                        </Row>


                            
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                required
                                type="email" 
                                name="email" 
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control 
                                required
                                type="text" 
                                name="phone" 
                            />
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Label>How can I help you?</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                name="how-can-I-help-you"
                                rows="3"
                             />
                        </Form.Group>
                        <Button type="submit">Release The Hounds!</Button>
                        </Form>
                </Col>
            </Row>
        </Container>
    </Layout>
)

export default About
