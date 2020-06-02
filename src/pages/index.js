import React from "react"
import { Link } from "gatsby"
import "./sitestyles.scss"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Navigation from "../components/navigation"
import Landing from "../components/landing-banner"
import CandlePage from "../pages/candles"

const IndexPage = () => (
  <div>
    <Navigation/>
    <Landing/>
</div>
)

export default IndexPage
