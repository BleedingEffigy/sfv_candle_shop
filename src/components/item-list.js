import React from "react"
import ItemCard from "./item-card"

class ItemList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      items: {
        "one": {"shape":"square","color":"green"},
        "two": {"shape":"square","color":"green"},
        "three": {"shape":"square","color":"green"},
        "four": {"shape":"square","color":"green"},
        "five": {"shape":"square","color":"green"},
      }
    }
  }

  render(){
    return (
      <div className="columns is-multiline">
        {Object.entries(this.state.items).map((key, item) =>
          <div className="column is-4" key={key}><ItemCard shape={item.shape}/></div>
        )}
      </div>)
  }
}


export default ItemList
