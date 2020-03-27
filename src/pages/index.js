import React from "react"
 import Layout from "../components/layout"
 import SEO from "../components/seo"
 import Overview from "./overview"
 import Courses from "./courses"
 import Patreon from "./patreon"
 import About from "./about"
//  import Image from "../components/image"

 const IndexPage = () => (
   <Layout>
     <SEO title="Teaching the code behind the design" />
     <Overview sectionName="overview"/>
     <Courses sectionName="courses"/>
     <Patreon sectionName="patreon" />
     <About sectionName="about" />
   </Layout>
 )

 export default IndexPage