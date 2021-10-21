import React from "react"
import ItemCard from "./item-card"

import { connect } from "react-redux"

const select = state => {
  return { candle_colors: state.candle_colors}
}

const ConnectedItemList  = ({candle_colors}) => (
  <div className="flex flex-wrap justify-around">
    {Object.entries(candle_colors).map(([key, item]) =>
      <div className="w-1/3" key={key}><ItemCard shape={item.shape} color={item.color} index={key}/></div>
    )}
  </div>
)

const ItemList = connect(select)(ConnectedItemList)

export default ItemList
