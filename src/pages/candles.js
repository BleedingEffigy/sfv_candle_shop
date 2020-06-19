import React from "react"
import { Link } from "gatsby"

import Navigation from "../components/navigation"
import ShopBanner from "../components/shop-banner"
import ItemCard from "../components/item-card"
import Items from "../components/item-list"

const CandlePage = () => (
  <div>
    <Navigation/>
    <ShopBanner/>
    <div className="columns is-centered">
      <div className="column is-10">
        <Items/>
    </div>
  </div>
  </div>
)

export default CandlePage
