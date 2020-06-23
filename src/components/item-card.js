import React from "react"
import { Link } from "gatsby"

import { connect } from "react-redux"
import {changeCandleColor} from "../js/actions/index"

const mapDispatchToProps = dispatch => {
  return {
    changeCandleColor: candleColor => dispatch(changeCandleColor(candleColor))
  }
}

const renderColorImage = (props) => {
  switch(props){
    case "red":
      return "https://via.placeholder.com/1280x960/bf0e44/000000.png"
    case "violet":
      return "https://via.placeholder.com/1280x960/b74bdd/000000.png"
    case "blue":
      return "https://via.placeholder.com/1280x960/223ed2/000000.png"
    case "yellow":
      return "https://via.placeholder.com/1280x960/ebe958/000000.png"
    default:
      return "https://bulma.io/images/placeholders/1280x960.png"
  }
}

class ConnectedItemCard extends React.Component{
  constructor(props){
    super(props);

    this.handleColorClick = this.handleColorClick.bind(this)
  }

  handleColorClick = (props) => {
    const color = {
      "index":"one",
      "color": "violet"
    }
    props.changeCandleColor(color)
  }

  render(){
    return (
      <div className="card">
        <Link to="/CandleDetail">
          <div className="card-image">
            <figure className="image">
              <img src={renderColorImage(this.props.color)}></img>
            </figure>
          </div>
        </Link>
        <div className="card-content">
          <p>10in {this.props.shape} candle</p>
          <div className="field is-grouped">
            <p className="control">
              <button className="button is-rounded is-small" style={{backgroundColor: "#bf0e44"}} onClick={this.handleColorClick.bind(this, this.props)}></button>
            </p>
            <p className="control">
              <button className="button is-rounded is-small" style={{backgroundColor: "#b74bdd"}}></button>
            </p>
            <p className="control">
              <button className="button is-rounded is-small" style={{backgroundColor: "#223ed2"}}></button>
            </p>
            <p className="control">
              <button className="button is-rounded is-small" style={{backgroundColor: "#ebe958"}}></button>
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
