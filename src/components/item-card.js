import React from "react"
import { Link } from "gatsby"

import { connect } from "react-redux"
import {changeCandleColor} from "../js/actions/index"

const mapDispatchToProps = dispatch => {
  return {
    changeCandleColor: candleColor => dispatch(changeCandleColor(candleColor))
  }
}

class ConnectedItemCard extends React.Component{
  constructor(props){
    super(props);

    this.handleColorClick = this.handleColorClick.bind(this)
  }

  handleColorClick = (props, index, new_color) => {
    const candle_color = {
      "index":index,
      "color": new_color
    }
    props.changeCandleColor(candle_color)
  }

  render(){
    return (
      <div className="bg-gray-200 m-5">
        <Link to={"/detail/"+this.props.shape+"-candle"}>
            <figure className="">
              <img src={require(`../images/${this.props.color}_${this.props.shape}_candle.jpg`)}
                    className="w-full"></img>
            </figure>
        </Link>
        <div className="">
          <p>10in {this.props.shape} candle</p>
          <div className="flex">
            <p className="mx-1">
              <button className="p-4 rounded-full "
                style={{backgroundColor: "#bf0e44"}}
                onClick={this.handleColorClick.bind(this, this.props, this.props.index, "red")}></button>
            </p>
            <p className="mx-1">
              <button className="p-4 rounded-full "
                style={{backgroundColor: "#b74bdd"}}
                onClick={this.handleColorClick.bind(this, this.props, this.props.index, "violet")}></button>
            </p>
            <p className="mx-1">
              <button className="p-4 rounded-full "
                style={{backgroundColor: "#223ed2"}}
                onClick={this.handleColorClick.bind(this, this.props, this.props.index, "blue")}></button>
            </p>
            <p className="mx-1">
              <button className="p-4 rounded-full "
                style={{backgroundColor: "#ebe958"}}
                onClick={this.handleColorClick.bind(this, this.props, this.props.index, "yellow")}></button>
            </p>
          </div>
          <p className="font-bold">$10.99</p>
        </div>
      </div>
    )
  }
}

const ItemCard = connect(null, mapDispatchToProps)(ConnectedItemCard)

export default ItemCard
