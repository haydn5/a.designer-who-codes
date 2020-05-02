import React from "react"
 import Layout from "../components/layout"
 import SEO from "../components/seo"
 import Overview from "./overview"
 import Courses from "./courses"
 import Patreon from "./patreon"
 import About from "./about"
 import Podcast from "./podcast"
//  import Image from "../components/image"

 const IndexPage = () => (
   <Layout>
     <SEO title="Web Development Tutorials for Designers" />
     <Overview sectionName="overview"/>
     <Courses sectionName="courses"/>
     <Patreon sectionName="patreon" />
     <About sectionName="about" />
     <Podcast sectionName="podcast" />
   </Layout>
 )

 export default IndexPage