import React from "react"
import ItemCard from "./item-card"

import { connect } from "react-redux"

const state = {
        items: {
          "one": {"shape":"square","color":"red"},
          "two": {"shape":"etched stripes","color":"violet"},
          "three": {"shape":"pyramid","color":"yellow"},
          "four": {"shape":"round","color":"green"},
          "five": {"shape":"square","color":"blue"},
        }
      }

const select = state => {
  return { candle_colors: state.candle_colors}
}

const ConnectedItemList  = ({candle_colors}) => (
  <div className="columns is-multiline">
    {Object.entries(candle_colors).map(([key, item]) =>
      <div className="column is-4" key={key}><ItemCard shape={item.shape} color={item.color}/></div>
    )}
  </div>
)

const ItemList = connect(select)(ConnectedItemList)

export default ItemList
