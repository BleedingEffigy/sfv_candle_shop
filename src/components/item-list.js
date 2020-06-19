import React from "react"
import ItemCard from "./item-card"

class ItemList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      items: {
        "one": {"shape":"square","color":"green"},
        "two": {"shape":"etched stripes","color":"green"},
        "three": {"shape":"pyramid","color":"green"},
        "four": {"shape":"round","color":"green"},
        "five": {"shape":"square","color":"green"},
      }
    }
  }

  render(){
    return (
      <div className="columns is-multiline">
        {Object.entries(this.state.items).map(([key, item]) =>
          <div className="column is-4" key={key}><ItemCard shape={item.shape} color={item.color}/></div>
        )}
      </div>)
  }
}


export default ItemList
