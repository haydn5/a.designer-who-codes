import React from "react"
 import { Link } from "gatsby"

//  import scrollTo from 'gatsby-plugin-smoothscroll';
 import Layout from "../components/layout"
 import Image from "../components/image"
 import SEO from "../components/seo"
 import About from "./about"

 import Scrollspy from 'react-scrollspy'

 const IndexPage = () => (
   <Layout>
     <SEO title="Home" />
     This is only a test.
     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
       <Image />
     </div>
     <Link to="/page-2/">Go to page 2</Link>
     <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut magna massa. Aenean blandit, felis in gravida faucibus, nibh elit ullamcorper justo, rutrum suscipit erat elit vel eros. Vestibulum ex tortor, convallis eu dignissim non, vestibulum at eros. Phasellus id ultricies lorem. Cras a malesuada erat. Suspendisse potenti. Proin hendrerit tellus eu rhoncus aliquam. Aliquam dictum diam in lorem imperdiet consectetur. Mauris cursus non ligula vel faucibus. Fusce risus elit, luctus eget auctor ut, cursus in enim. Mauris aliquet sollicitudin purus, sit amet luctus velit sollicitudin eget. Phasellus purus eros, eleifend at lobortis quis, varius vel ante. Phasellus vel bibendum odio, eget cursus sapien. Sed consectetur enim nec ipsum feugiat, vitae pulvinar eros porta.
     </p>
     <p id="test">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut magna massa. Aenean blandit, felis in gravida faucibus, nibh elit ullamcorper justo, rutrum suscipit erat elit vel eros. Vestibulum ex tortor, convallis eu dignissim non, vestibulum at eros. Phasellus id ultricies lorem. Cras a malesuada erat. Suspendisse potenti. Proin hendrerit tellus eu rhoncus aliquam. Aliquam dictum diam in lorem imperdiet consectetur. Mauris cursus non ligula vel faucibus. Fusce risus elit, luctus eget auctor ut, cursus in enim. Mauris aliquet sollicitudin purus, sit amet luctus velit sollicitudin eget. Phasellus purus eros, eleifend at lobortis quis, varius vel ante. Phasellus vel bibendum odio, eget cursus sapien. Sed consectetur enim nec ipsum feugiat, vitae pulvinar eros porta.
     </p>
     <div>
 <div>
   <section id="section-1">section 1</section>
   <section id="section-2">section 2</section>
   <section id="section-3">section 3</section>
 </div>
 <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current">
   <li><a href="#section-1">section 1</a></li>
   <li><a href="#section-2">section 2</a></li>
   <li><a href="#section-3">section 3</a></li>
 </Scrollspy>
 </div>
     <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut magna massa. Aenean blandit, felis in gravida faucibus, nibh elit ullamcorper justo, rutrum suscipit erat elit vel eros. Vestibulum ex tortor, convallis eu dignissim non, vestibulum at eros. Phasellus id ultricies lorem. Cras a malesuada erat. Suspendisse potenti. Proin hendrerit tellus eu rhoncus aliquam. Aliquam dictum diam in lorem imperdiet consectetur. Mauris cursus non ligula vel faucibus. Fusce risus elit, luctus eget auctor ut, cursus in enim. Mauris aliquet sollicitudin purus, sit amet luctus velit sollicitudin eget. Phasellus purus eros, eleifend at lobortis quis, varius vel ante. Phasellus vel bibendum odio, eget cursus sapien. Sed consectetur enim nec ipsum feugiat, vitae pulvinar eros porta.
     </p>
     <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut magna massa. Aenean blandit, felis in gravida faucibus, nibh elit ullamcorper justo, rutrum suscipit erat elit vel eros. Vestibulum ex tortor, convallis eu dignissim non, vestibulum at eros. Phasellus id ultricies lorem. Cras a malesuada erat. Suspendisse potenti. Proin hendrerit tellus eu rhoncus aliquam. Aliquam dictum diam in lorem imperdiet consectetur. Mauris cursus non ligula vel faucibus. Fusce risus elit, luctus eget auctor ut, cursus in enim. Mauris aliquet sollicitudin purus, sit amet luctus velit sollicitudin eget. Phasellus purus eros, eleifend at lobortis quis, varius vel ante. Phasellus vel bibendum odio, eget cursus sapien. Sed consectetur enim nec ipsum feugiat, vitae pulvinar eros porta.
     </p>
     <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut magna massa. Aenean blandit, felis in gravida faucibus, nibh elit ullamcorper justo, rutrum suscipit erat elit vel eros. Vestibulum ex tortor, convallis eu dignissim non, vestibulum at eros. Phasellus id ultricies lorem. Cras a malesuada erat. Suspendisse potenti. Proin hendrerit tellus eu rhoncus aliquam. Aliquam dictum diam in lorem imperdiet consectetur. Mauris cursus non ligula vel faucibus. Fusce risus elit, luctus eget auctor ut, cursus in enim. Mauris aliquet sollicitudin purus, sit amet luctus velit sollicitudin eget. Phasellus purus eros, eleifend at lobortis quis, varius vel ante. Phasellus vel bibendum odio, eget cursus sapien. Sed consectetur enim nec ipsum feugiat, vitae pulvinar eros porta.
     </p>
     <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut magna massa. Aenean blandit, felis in gravida faucibus, nibh elit ullamcorper justo, rutrum suscipit erat elit vel eros. Vestibulum ex tortor, convallis eu dignissim non, vestibulum at eros. Phasellus id ultricies lorem. Cras a malesuada erat. Suspendisse potenti. Proin hendrerit tellus eu rhoncus aliquam. Aliquam dictum diam in lorem imperdiet consectetur. Mauris cursus non ligula vel faucibus. Fusce risus elit, luctus eget auctor ut, cursus in enim. Mauris aliquet sollicitudin purus, sit amet luctus velit sollicitudin eget. Phasellus purus eros, eleifend at lobortis quis, varius vel ante. Phasellus vel bibendum odio, eget cursus sapien. Sed consectetur enim nec ipsum feugiat, vitae pulvinar eros porta.
     </p>
     <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut magna massa. Aenean blandit, felis in gravida faucibus, nibh elit ullamcorper justo, rutrum suscipit erat elit vel eros. Vestibulum ex tortor, convallis eu dignissim non, vestibulum at eros. Phasellus id ultricies lorem. Cras a malesuada erat. Suspendisse potenti. Proin hendrerit tellus eu rhoncus aliquam. Aliquam dictum diam in lorem imperdiet consectetur. Mauris cursus non ligula vel faucibus. Fusce risus elit, luctus eget auctor ut, cursus in enim. Mauris aliquet sollicitudin purus, sit amet luctus velit sollicitudin eget. Phasellus purus eros, eleifend at lobortis quis, varius vel ante. Phasellus vel bibendum odio, eget cursus sapien. Sed consectetur enim nec ipsum feugiat, vitae pulvinar eros porta.
     </p>
     <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut magna massa. Aenean blandit, felis in gravida faucibus, nibh elit ullamcorper justo, rutrum suscipit erat elit vel eros. Vestibulum ex tortor, convallis eu dignissim non, vestibulum at eros. Phasellus id ultricies lorem. Cras a malesuada erat. Suspendisse potenti. Proin hendrerit tellus eu rhoncus aliquam. Aliquam dictum diam in lorem imperdiet consectetur. Mauris cursus non ligula vel faucibus. Fusce risus elit, luctus eget auctor ut, cursus in enim. Mauris aliquet sollicitudin purus, sit amet luctus velit sollicitudin eget. Phasellus purus eros, eleifend at lobortis quis, varius vel ante. Phasellus vel bibendum odio, eget cursus sapien. Sed consectetur enim nec ipsum feugiat, vitae pulvinar eros porta.
     </p>
     <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut magna massa. Aenean blandit, felis in gravida faucibus, nibh elit ullamcorper justo, rutrum suscipit erat elit vel eros. Vestibulum ex tortor, convallis eu dignissim non, vestibulum at eros. Phasellus id ultricies lorem. Cras a malesuada erat. Suspendisse potenti. Proin hendrerit tellus eu rhoncus aliquam. Aliquam dictum diam in lorem imperdiet consectetur. Mauris cursus non ligula vel faucibus. Fusce risus elit, luctus eget auctor ut, cursus in enim. Mauris aliquet sollicitudin purus, sit amet luctus velit sollicitudin eget. Phasellus purus eros, eleifend at lobortis quis, varius vel ante. Phasellus vel bibendum odio, eget cursus sapien. Sed consectetur enim nec ipsum feugiat, vitae pulvinar eros porta.
     </p>
     <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut magna massa. Aenean blandit, felis in gravida faucibus, nibh elit ullamcorper justo, rutrum suscipit erat elit vel eros. Vestibulum ex tortor, convallis eu dignissim non, vestibulum at eros. Phasellus id ultricies lorem. Cras a malesuada erat. Suspendisse potenti. Proin hendrerit tellus eu rhoncus aliquam. Aliquam dictum diam in lorem imperdiet consectetur. Mauris cursus non ligula vel faucibus. Fusce risus elit, luctus eget auctor ut, cursus in enim. Mauris aliquet sollicitudin purus, sit amet luctus velit sollicitudin eget. Phasellus purus eros, eleifend at lobortis quis, varius vel ante. Phasellus vel bibendum odio, eget cursus sapien. Sed consectetur enim nec ipsum feugiat, vitae pulvinar eros porta.
     </p>

        <About sectionName="section-4" />

   </Layout>
 )

 export default IndexPage