import React from "react"
import { Link } from "gatsby"

import Navigation from "../components/navigation"
import ShopBanner from "../components/shop-banner"
import ItemCard from "../components/item-card"

const CandlePage = () => (
  <div>
    <Navigation/>
    <ShopBanner/>
    <div className="columns is-centered">
      <div className="column is-10">
        <div className="columns is-multiline">
          <div className="column is-4"><ItemCard/></div>
          <div className="column is-4"><ItemCard/></div>
          <div className="column is-4"><ItemCard/></div>
          <div className="column is-4"><ItemCard/></div>
          <div className="column is-4"><ItemCard/></div>
        </div>
    </div>
  </div>
  </div>
)

export default CandlePage
