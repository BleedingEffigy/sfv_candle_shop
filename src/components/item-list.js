import React from "react"
import ItemCard from "./item-card"

const state = {
        items: {
          "one": {"shape":"square","color":"red"},
          "two": {"shape":"etched stripes","color":"violet"},
          "three": {"shape":"pyramid","color":"yellow"},
          "four": {"shape":"round","color":"green"},
          "five": {"shape":"square","color":"blue"},
        }
      }

const ItemList  = () => (
  <div className="columns is-multiline">
    {Object.entries(state.items).map(([key, item]) =>
      <div className="column is-4" key={key}><ItemCard shape={item.shape} color={item.color}/></div>
    )}
  </div>
)


export default ItemList
