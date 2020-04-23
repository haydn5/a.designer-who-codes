import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap";

import haydnPhoto from "../images/haydn-photo.jpg"


const About = (props) => (
    <section id={props.sectionName}>
        <Container>
            <h2 className="text-center">About Haydn S. Adams, BFA</h2>
            <script src="https://f.convertkit.com/ckjs/ck.5.js" />
      <form action="https://app.convertkit.com/forms/1341543/subscriptions" className="seva-form formkit-form" method="post" data-sv-form="1341543" data-uid="b3d7490e6f" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;https://adesignerwhocodes.com/#patreon&quot;,&quot;action&quot;:&quot;message&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}"  min-width="400 500 600 700 800">
          <div data-style="clean">
            <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
            <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields">
                <div className="formkit-field">
                    <input className="formkit-input" aria-label="Your first name" name="fields[first_name]" placeholder="Your first name" type="text" />
                </div>
                <div className="formkit-field">
                    <input className="formkit-input" name="email_address" placeholder="Your email address" required="" type="email" />
                </div>
                <button data-element="submit" className="formkit-submit formkit-submit" >
                    <div className="formkit-spinner"><div></div><div></div><div></div></div><span>Subscribe</span></button></div></div></form>
            <Row>
                <Col lg={4}>
                    <p><Image src={haydnPhoto} alt="Photo of Haydn" fluid rounded /></p>
                </Col>
                <Col lg={8}>
                    <p>Since the mid '90s, Haydn has been building websites. He decided to up his design game and receive a Bachelors of Fine Arts in Computer Arts in New Media from the Academy of Art University in San Francisco. Following graduation, Haydn opened up his own design company, Nautilus Designs.</p>

                    <p>Not long after running his business, the Academy offered Haydn a professorship. And for 13 years he worked, teaching Web Development, Graphic Design, Usability, and tablet design. During his tenture at the Academy, he launched 3 apps, one of which was download over 100,000 times (and possibly more as it is still live on the app store).</p>

                    <p>Academia is in Haydn's blood, but after 13 years, he decided to hang up his professorship and return to the private design sector. He then started up a.Designer who codes, a resourse for designers to learn the code behind the design</p>
                    
                    <p>In addition to coding & desiging gorgeous websites, he is a certified TRX instrutor and and takes his road (cylocross) bike, dubbed Black Bird, out for spins around Savannah. He is also the author of two books and travels as much as he does sleep.</p>
                </Col>
            </Row>
        </Container>
    </section>
)

export default About
