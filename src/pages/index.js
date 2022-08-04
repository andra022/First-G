import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const Homepage = ()=>{
  return (
    <Layout pageHeading='Home' pageTitle='Home Page'>
      Welcome to my new Gatsby site!
      <StaticImage src="../images/photoshoot.png" alt="Belu Andra-Stefania" />
    </Layout>
  )
};

export default Homepage;