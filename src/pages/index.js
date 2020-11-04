import React from "react"
 import Layout from "../components/layout"
 import SEO from "../components/seo"
 import Overview from "./overview"
//  import Courses from "./courses"
//  import Patreon from "./patreon"
//  import About from "./about"
import Intro from "./intro"
//  import SignUp from "./sign-up"
//  import YouTube from "./youtube"

 const IndexPage = (
   {data}
 ) => (
   <Layout>
     <SEO title="Become a better Web Designer by learning how to code." />
     <Intro sectionName="intro" />
     <Overview sectionName="overview"/>
     {/* <SignUp sectionName="signup" /> */}
     {/* <Courses sectionName="courses"/> */}
     {/* <YouTube sectionName="youtube"/> */}
     {/* <About sectionName="about" />   */}
     {/* <Patreon sectionName="patreon" />    */}
   </Layout>
 )

 export default IndexPage
