import React from "react"
import { Link } from "gatsby"

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

const ItemCard = (props) => (
    <div className="card">
      <Link to="/CandleDetail">
        <div className="card-image">
          <figure className="image">
            <img src={renderColorImage(props.color)}></img>
          </figure>
        </div>
      </Link>
      <div className="card-content">
        <p>10in {props.shape} candle</p>
        <div className="field is-grouped">
          <p className="control">
            <button className="button is-rounded is-small" style={{backgroundColor: "#bf0e44"}}></button>
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

export default ItemCard
