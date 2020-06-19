import React from "react"
import "./sitestyles.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation"
import Landing from "../components/landing-banner"

import store from "../js/store/index"
import { Provider } from "react-redux"

const IndexPage = () => (
  <div>
    <Provider store={store}>
      <Navigation/>
      <Landing/>
    </Provider>
</div>
)

export default IndexPage
