import React from "react"
 import Layout from "../components/layoutNoNav"
 import SEO from "../components/seo"

//  import Image from "../components/image"
import { Container } from "react-bootstrap";

 const thankYouPage = () => (
   <Layout>
     <SEO title="Thank you for signing up!" />
     <section>
       <Container>
         <h1 className="text-center"><small>Thank you for signing up! Here is your free online course</small><br />How to Host Your Static Website for Free (4k)</h1>
          <div class="video-responsive">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/4UZp5i5uphs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="helo"></iframe>
          </div>
       </Container>
     </section>
   </Layout>
 )

 export default thankYouPage