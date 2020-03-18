import React from "react"
 import Layout from "../components/layout"
 import SEO from "../components/seo"
 import Overview from "./overview"
 import Courses from "./courses"

 const IndexPage = () => (
   <Layout>
     <SEO title="Teaching the code behind the design" />
     <Overview />
     <Courses sectionName="courses"/>
   </Layout>
 )

 export default IndexPage