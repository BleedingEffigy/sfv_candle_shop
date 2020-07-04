import React from "react"
import "./sitestyles.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation"
import Landing from "../components/landing-banner"


const IndexPage = () => (
  <Layout>
    <Navigation/>
    <Landing/>
  </Layout>
)

export default IndexPage
