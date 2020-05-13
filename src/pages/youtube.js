import React from "react"
import { Container, Row, Col } from "react-bootstrap";


const Courses = (props) => (
    <section id={props.sectionName} className="blue">
        <Container>
            <h2>The Free Material– YouTube</h2>
            <Row>
                <Col lg={6}>
                    
                    <p>I've got 57+ videos and counting on YouTube. All free for you to learn and grow. <a href="https://www.youtube.com/adesignerwhocodes">Become a subscriber</a> and become a better web designer.</p>
                    <div className="video-responsive mb-5">
                        
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/K1Vt0fEiuhE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="helo"></iframe>
          </div>
                </Col>
                <Col lg={6} className="border border-white rounded">
                    <p className="mt-3"><strong>Share your Design through Code success stories!</strong></p>
                    <p>Did you create an awesome web design through code? It could be something as a unique way of designing a link color/style. Maybe you created one cool responsive grid design. I'd love to showcase your work on a future YouTube and/or Podcast episode. </p>
                    <p><a href="https://forms.gle/QWAQ4LDm1J42VeFL8"><strong>Submit a Design through Code Success Story</strong></a></p>
                    <p>** Also, if your work is selected to be showcased, I'll be sending a.Designer who codes sticker and a thank you note. It's my way of saying thank you! **</p>
                </Col>
            </Row>
            
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
    </section>
)

export default Courses
