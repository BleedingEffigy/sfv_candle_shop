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
    <div className="flex justify-center bg-purple-200">
      <div className="w-5/6">
        <Items/>
      </div>
    </div>
  </Layout>
)

export default CandlePage
