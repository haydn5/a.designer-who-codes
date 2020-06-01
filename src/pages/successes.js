import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Button } from "react-bootstrap";


const Courses = (props) => (
    <Layout>
    <SEO title="What are you struggling with?" /> 
    <Container className="singleCol">
            <h1>Show Your Web Design through Code Skills off</h1>
           
                        
         
                    <p className="mt-3"><strong>Share your Design through Code success stories!</strong></p>
                    <p>Did you create an awesome web design through code? It could be something as a unique way of designing a link color/style. Maybe you created one cool responsive grid design. I'd love to showcase your work on a future YouTube and/or Podcast episode. </p>
                    <p className="text-center">
                        <Button href="https://forms.gle/QWAQ4LDm1J42VeFL8">Submit a Design through Code Success Story</Button>
                    </p>
                    {/* <p><a ><strong></strong></a></p> */}
                    <p>** Also, if your work is selected to be showcased, I'll be sending a.Designer who codes sticker and a thank you note. It's my way of saying thank you! **</p>
            
            {/* <Row>
                <Col md={6} lg={4}>
                    <Card>
                    <Card.Img variant="top" src={gatsbyJSstarter} alt="Gatsby JS Starter Guide: Setup, Build & Deploy" />
                    <Card.Body>
                        <Card.Title>How to Setup - Build - and Deploy your first Gatsby Website</Card.Title>
                        <Button variant="primary" href="https://courses.adesignerwhocodes.com/p/how-to-setup-build-and-deploy-your-first-gatsby-js-website-with-react-bootstrap" block>Enroll</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card>
                    <Card.Img variant="top" src={introToHTML} alt="Intro to HTML & CSS: Build a Responsive Portfolio Website" />
                    <Card.Body>
                        <Card.Title>Intro to HTML & CSS: Build a Responsive Portfolio Website</Card.Title>
                        <Button variant="primary" href="https://www.udemy.com/course/intro-to-html-css-build-a-responsive-portfolio-website/?referralCode=2E0BAC82419DBD3BDC8F" block>Enroll</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card>
                    <Card.Img variant="top" src={gatsbyJSBlog} alt="Gatsby JS Blog Course Cover" />
                    <Card.Body>
                        <Card.Title>How to Build a Blog Using Gatsby JS: The Complete Guide</Card.Title>
                        <Button variant="primary" href="https://courses.adesignerwhocodes.com/p/how-to-build-a-blog-in-gatsby-js-1" block>Enroll</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row> */}
        </Container>
        </Layout>
)

export default Courses
