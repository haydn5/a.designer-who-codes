import React from "react"
 import Layout from "../components/layout"
 import SEO from "../components/seo"
 import { Container, Button, Form, Row, Col } from "react-bootstrap";


 const IndexPage = () => (
   <Layout>
      <SEO title="What are you struggling with?" /> 
      <Container>
        <h1>What are you struggling with in terms of design through code?</h1>
      </Container>
      <Container className="singleCol">
        
        <p>It can be tough to design a website through code. What is the right code to use where? It looked great in Photoshop but not in Safari. A lot of web designers struggle when it comes to knowing what to write, where, how, why.</p>
        <p>
          I hear ya. That's why I built this form. Submit your question, let me know what you are struggling with in terms of web design through code.
        </p>
        <p>
          I'll select the more pertient questions and feature the answers here. There are no silly questions here. Just the ones that are not asked.
        </p>
        <hr />
        <Form 
                    name="struggles v1"
                    method="post"
                    action="/struggles-success/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit="submit"
                    className="form-colored"
                    >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact v9" />
                    <p hidden>
                    <label>
                        Don’t fill this out: <input name="bot-field" />
                    </label>
                    </p>
                     


                        <Row>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control 
                                        type="text" name="name"
                                     />
                                </Form.Group>
                            </Col>
                            <Col md={8}>
                              <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                    required
                                    type="email" 
                                    name="email" 
                                />
                              </Form.Group>
                            </Col>
                        </Row>
                        
                        <Form.Group>
                            <Form.Label>What's your Struggle?</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                name="how-much-space"
                                rows="3"
                                placeholder="I want to create a list without bullet points, but I don't know how to accomplish it."
                             />
                        </Form.Group>
                        
                        <Button type="submit">Submit your struggle.</Button>
                        </Form>
      </Container>
   </Layout>
 )

 export default IndexPage
