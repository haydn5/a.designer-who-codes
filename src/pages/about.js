import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap";

import haydnPhoto from "../images/haydn-photo.jpg"


const About = (props) => (
    <div className="margin10vh">
    <section id={props.sectionName}>
        <Container>
            <h2 className="text-center">About Haydn S. Adams, BFA</h2>
            <Row>
                <Col lg={4}>
                    <Image src={haydnPhoto} alt="Photo of Haydn" fluid rounded />
                </Col>
                <Col lg={8}>
                    <p>Since the mid '90s, Haydn has been building websites. He decided to up his design game and receive a Bachelors of Fine Arts in Computer Arts in New Media from the Academy of Art University in San Francisco</p>
                    <p>Following graduation, Haydn opened up his own design company, Nautilus Designs, which after 15+ years, is still in operation</p>

                    <p>Not long after running his business, the Academy offered Haydn a professorship. And for 13 years he worked, teaching Web Development, Graphic Design, Usability, and tablet design. During his tenture at the Academy, he launched 3 apps, one of which was download over 100,000 times (and possibly more as it is still live on the app store).</p>
                    <p>Academia is in Haydn's blood, but after 13 years, he decided to hang up his professorship and return to the private design sector. He then started up a.Designer who codes, a resourse for designers to learn the code behind the design</p>
                    <p>In addition to coding gorgeous websites, he is a certified TRX Instrutor and and takes his road bike, dubbed Black Bird, out for spins around Savannah. He is also the author of two books and travels as much as he does sleep.</p>
                </Col>
            </Row>
        </Container>
    </section>
    </div>
)

export default About
