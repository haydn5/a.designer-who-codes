import React from "react"
import { Container } from "react-bootstrap";

import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'




const Intro = (props) => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "background-with-code.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
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
            <div className="black-overlay intro">
                <Container className="singleCol ">
                    <p>Hi there. I'm Haydn Adams, BFA.</p>
                    <h1>I'm here to help web designers & front-end web developers <strong className="whiteText">design more & to troubleshoot less, with practical tutorials & online courses.</strong></h1>
                    <p>Let's get started.</p>
                    
                </Container>
            </div>
            
        
        </BackgroundImage>
    )
  }
  
  export default Intro

  