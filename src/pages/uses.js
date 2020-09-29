import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap";

import mic from "../images/mic.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = (props) => (
    <Layout>
      <SEO title="Uses" /> 
        <Container>
            <h1>What I Use for YouTube videos, course creation and freelance work</h1>
            
            <Row>
                <Col lg={4}>
                    <Image className="mb-3" src={mic} alt="Røde Procaster Microphone on boom arm" fluid rounded />
                </Col>
                <Col lg={8}>
                    <h2>The Hardware</h2>
                    <p>For recordings, I use the <a href="https://amzn.to/3jcM2Iq">Røde Procaster</a> and one very <a href="https://www.bswusa.com/Pop-Filters-BSW-RE320POP-Black-P7872.aspx?gclid=EAIaIQobChMI09Tg9sCM7AIVLv_jBx1msARSEAQYASABEgKAh_D_BwE">overpriced pop filter</a> for reasons I'm not entirely sure of, aside from it looked cool. Before jumping up to the procaster, I used the <a href="https://amzn.to/347aMvp">Blue Yeti</a> for years. I still have it and keep it as a back-up mic in case something happens to the Røde.</p>
                    <p>The <a href="https://amzn.to/3cCgDgh">LG 27UL850 monitor</a> with USB-C interface has been the best monitor I've ever used—period. Color accuracy along with a large screen was mission-critical to me. Apple gave LG the nod and so am I. I actually bought a second one of these puppies to go in a satellite office I use occasionally.</p>
                    <p>I use both an iMac 27" and a 13" MBP. Gotta love those retina screens.</p>
                    <p>I also use an iPad 3 (just called iPad) for watching Netflix on Delta Airlines.</p>
                    

                    <h2>The Software</h2>
                    <p>I'm an <a href="http://bit.ly/ADWC-Adobe">Adobe Creative Cloud</a> guy. Some software has stunk and some software has been amazing. I've tested countless beta and alpha products for them. Adobe Acrobat is one of the most underrated tools in their arsenal. Contracts are signed digitally that take about 30 seconds to execute. And there isn't a day I'm not spending time in Photoshop. Plus the fonts Adobe gives with membership to their creative cloud is pretty amazing.</p>
                    <p>For coding, it's all about <a href="https://code.visualstudio.com">VS Code</a>. I can't believe I'm advocating a Microsoft product.</p>
                    <p><a href="https://www.backblaze.com/cloud-backup.html#af9vjv">Backblaze</a> is another tool I can't live without. That first online backup takes forever but it's piece of mind that if a hurricane knocks down my house and soaks the local drives, I've got a remote, off-site backup. I think I've got about 9TB or so of data on Backblaze's server. It's much cheaper than calling <a href="https://drivesaversdatarecovery.com">DriveSavers</a>, which yours truly has had to do before.</p>

                    <h2>Online Tools</h2>

                    <p>For podcasting clients, it's all about <a href="https://www.buzzsprout.com">Buzzsprout</a>. Their <a href="https://www.gatsbyjs.com/plugins/gatsby-source-buzzsprout/">Gatsby plugin</a> sold me. But aside from that, the systems they have in place make it very easy to manage podcasts from a back-end. Did I mention they have an awesome Gatsby plugin?</p>

                    <p>For email marketing, I'm all about <a href="https://app.convertkit.com/referrals/l/1d8f6e84-b223-4541-8e33-0edfabbc6f69
">ConvertKit</a>. I've had to hack a solution for Gatsby / React, but aside from that, the landing page setup and form integration has been great. Plus the design of the email is separate from the content. From a design standpoint, that's crucial. Focus on the content at hand, not the specific design aspects.</p>

                    <p>For domains, I've got them on <a href="https://www.godaddy.com">Godaddy</a>. Been buying them there for years. The main reason why is they will handle tech support for domain issues. While other companies simply handle things via chat or text, GoDaddy still has human beings on the other end of the phone. That's a big deal to me.</p>
                    
                    <h2>Other Things I Can't Live Without</h2>
                    <p>I thought <a href="https://amzn.to/30gKYf9">Beats headphones</a> were crazy expensive for headphones until I had an amazon credit and gave them a try. Now there's before and after having Beats headphones.</p>
                    <p>Get yourself a notebook, especially a <a href="https://amzn.to/2S6VyAZ">Molskine Notebook</a>. Writing down notes, specific topics I'm to record or any journal-related information goes into a physical notebook. I take mine everywhere. I'm more a writer than sketcher when it comes to the art side, but still, I can't imagine not having my Molskine Notebook with me.</p>
                    <p><a href="https://amzn.to/3jcnyPE">Two wine fridges</a>. Because the first rule of government spending is why buy one when you can buy two at twice the price. I live in the South. Gotta protect the wine from the summertime heat.</p>
                    
                </Col>

            </Row>
        </Container>
    </Layout>
)

export default About
