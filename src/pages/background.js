import React from "react"
import { graphql } from 'gatsby'
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import patreonTitle from "../images/patreon-navy.svg"
import patreonButton from "../images/become_a_patron_button.png"
import BackgroundImage from 'gatsby-background-image'


const Patreon = (props) => (
    <div>
        <BackgroundImage
        className="margin10vh"
        fluid={props.data.desktop.childImageSharp.fluid}
        >
            <p>This is only a test.</p>
            <p>This is only a test.</p>
            <p>This is only a test.</p>
            <p>This is only a test.</p>
            <p>This is only a test.</p>
            <p>This is only a test.</p>
            <p>This is only a test.</p>
            <p>This is only a test.</p>
        </BackgroundImage>
    
    <section id={props.sectionName} className="singlePageBlack">
        <Container>
            <h2 className="text-center displayNone">Patreon</h2>
            <Row>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <Image src={patreonTitle} alt="Patreon" fluid />
                            </Card.Title>
                            <Card.Text>
                            <p>I spend a majority of my time making YouTube videos for you to use and consume, gratis. If you have received some value the from myriad of videos, it would be awesome if you would contribute. Even $3 a month means the world (and I can buy another latte that month).</p>  
                            <p>Free course coupon tiers are availabe.</p>
                            </Card.Text>
                            <p>
                                <a href="https://www.patreon.com/adesignerwhocodes?fan_landing=true">
                                    <Image src={patreonButton} alt="Patreon" style={{maxWidth: "217px"}} fluid rounded />
                                </a>
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>

                </Col>
            </Row>
        </Container>
    </section>
    </div>
)

export default Patreon

export const query = graphql`
  query {
    desktop: file(relativePath: { eq: "background-with-code.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
}`