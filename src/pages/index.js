import React from "react"
import "./sitestyles.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation"
import Landing from "../components/landing-banner"

const IndexPage = () => (
  <div>
    <Navigation/>
    <Landing/>
</div>
)

export default IndexPage
