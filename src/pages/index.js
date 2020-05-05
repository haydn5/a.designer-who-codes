import React from "react"
 import Layout from "../components/layout"
 import SEO from "../components/seo"
 import Overview from "./overview"
 import Courses from "./courses"
 import Patreon from "./patreon"
 import About from "./about"
 import Podcast from "./podcast"
 import SignUp from "./sign-up"

 const IndexPage = (
   {data}
 ) => (
   <Layout>
     <SEO title="Web Development Tutorials for Designers" />
     <Overview sectionName="overview"/>
     <SignUp sectionName="signup" />
     <Courses sectionName="courses"/>
     <Podcast sectionName="podcast" /> 
     <About sectionName="about" />  
     <Patreon sectionName="patreon" />   
   </Layout>
 )

 export default IndexPage
