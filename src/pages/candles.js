import React from "react"
import { Link } from "gatsby"

import Navigation from "../components/navigation"
import ShopBanner from "../components/shop-banner"
import ItemCard from "../components/item-card"
import Items from "../components/item-list"
import Layout from "../components/layout"

const CandlePage = () => (
  <Layout>
    <Navigation/>
    <ShopBanner/>
    <div className="columns is-centered">
      <div className="column is-10">
        <Items/>
      </div>
    </div>
  </Layout>
)

export default CandlePage
