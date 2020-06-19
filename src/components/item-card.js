import React from "react"
import { Link } from "gatsby"

const ItemCard = (props) => (
    <div className="card">
      <Link to="/CandleDetail">
        <div className="card-image">
          <figure className="image">
            <img src="https://bulma.io/images/placeholders/1280x960.png"></img>
          </figure>
        </div>
      </Link>
      <div className="card-content">
        <p>10in {props.shape} candle</p>
        <div className="field is-grouped">
          <p className="control">
            <button className="button is-rounded is-small" style={{backgroundColor: "rgb(191, 14, 68)"}}></button>
          </p>
          <p className="control">
            <button className="button is-rounded is-small" style={{backgroundColor: "rgb(183, 75, 221)"}}></button>
          </p>
          <p className="control">
            <button className="button is-rounded is-small" style={{backgroundColor: "rgb(34, 62, 210)"}}></button>
          </p>
          <p className="control">
            <button className="button is-rounded is-small" style={{backgroundColor: "rgb(235, 233, 88)"}}></button>
          </p>
        </div>
        <p className="has-text-weight-bold">$10.99</p>
      </div>
    </div>
)

export default ItemCard
