import React from "react"
import { Container, Row, Col, Card, Form } from "react-bootstrap";

import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image"




const Patreon = (props) => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "background-with-code.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        youTubeImage: file(relativePath: { eq: "youtube-mockup-payer.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
      }
    `)
  
    return (
        <BackgroundImage
            fluid={data.placeholderImage.childImageSharp.fluid}
            id={props.sectionName}
        >
            <section className="black-overlay">
                <Container>
                <h2 className="text-center white">Let's start here</h2>
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col lg={6}>
                                        <h2><span className="grey-type">FREE ONLINE COURSE IN 4K</span><br/>
                                        <span className="larger-type">How to Host Your Static Website for Free</span><br />
                                        <em>(and save hundreds)</em></h2>
                                        <hr />
                                        <p>I used to use expensive, slow and antiquated hosting companies that worked on decades old models. I was paying even for SSL security. But then I figured out how to host my static sites on these new, blazing fast Content Delivery Network and my world changed. </p>
                                        <p>
                                            There is an initial setup to deploy sites to these newer CDNs (Content Delivery Networks), but once you get the setup complete, everyone flows easier.
                                        </p>
                                        <p>
                                            I'll walk you through, step-by-step, how to deploy your static site to two CDNs, for free.
                                        </p>
                                    </Col>
                                    <Col lg={6}>
                                        <script src="https://f.convertkit.com/ckjs/ck.5.js" />
                                        <Form action="https://app.convertkit.com/forms/1343793/subscriptions" method="post" data-sv-form="1343793" data-uid="b64e2c1bed" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;You're almost there! Check your e-mail for the link to the online course. Note, you might need to check your spam filter too.&quot;,&quot;redirect_url&quot;:&quot;https://adesignerwhocodes.com/thank-you-free-online-course-1155245/&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800"
                                        className="mb-2 "
                                        >
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
                                                        <button data-element="submit" className="btn btn-primary btn-block" ><div class="formkit-spinner"><div></div><div></div><div></div></div><span>Sign me up for this free course!</span></button>
                                            </div>
                                        </div>
                                    </Form>
                                    <Img fluid={data.youTubeImage.childImageSharp.fluid} />
                                    <p>
                                        <small>Nearly an hour of free step-by-step methods of how you can host your static websites for free.</small>
                                    </p>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6}>

                    </Col>
                </Row>
            </Container>
            </section>
            
        
        </BackgroundImage>
    )
  }
  
  export default Patreon

  