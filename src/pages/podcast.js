import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
import podcastArtwork from "../images/a-designer-who-codes-podcast.jpg"
import { Container, Row, Col, Image } from "react-bootstrap";
import PodcastStuff from "../components/podcast-stuff"


const PodcastPage = (props,{data}) => {
    return (
      <section id={props.sectionName}>
          <Container>
            <h1>a.Designer Who Codes Podcast</h1>
            <Row>
                <Col lg={4}>
                    <Image src={podcastArtwork} alt="Podcast Artwork" fluid />
                </Col>
                <Col lg={8}>
                    <PodcastStuff />
                </Col>
            </Row>
            
          </Container>
        
            
      </section>
    );
  };

export default PodcastPage;

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`