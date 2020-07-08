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
      <div className="card has-background-white-bis">
        <Link to={"/detail/"+this.props.shape+"-candle"}>
          <div className="card-image">
            <figure className="image is-5by4">
              <img src={require(`../images/${this.props.color}_${this.props.shape}_candle.jpg`)}></img>
            </figure>
          </div>
        </Link>
        <div className="card-content">
          <p>10in {this.props.shape} candle</p>
          <div className="field is-grouped">
            <p className="control">
              <button className="button is-rounded is-small"
                style={{backgroundColor: "#bf0e44"}}
                onClick={this.handleColorClick.bind(this, this.props, this.props.index, "red")}></button>
            </p>
            <p className="control">
              <button className="button is-rounded is-small"
                style={{backgroundColor: "#b74bdd"}}
                onClick={this.handleColorClick.bind(this, this.props, this.props.index, "violet")}></button>
            </p>
            <p className="control">
              <button className="button is-rounded is-small"
                style={{backgroundColor: "#223ed2"}}
                onClick={this.handleColorClick.bind(this, this.props, this.props.index, "blue")}></button>
            </p>
            <p className="control">
              <button className="button is-rounded is-small"
                style={{backgroundColor: "#ebe958"}}
                onClick={this.handleColorClick.bind(this, this.props, this.props.index, "yellow")}></button>
            </p>
          </div>
          <p className="has-text-weight-bold">$10.99</p>
        </div>
      </div>
    )
  }
}

const ItemCard = connect(null, mapDispatchToProps)(ConnectedItemCard)

export default ItemCard
