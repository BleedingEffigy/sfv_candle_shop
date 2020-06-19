import React from "react"

import Navigation from "../components/navigation"

const DetailPage = () => (
  <div>
    <Navigation/>

    <div className="columns is-centered">
      <div className="column is-10">
        <div className="columns">
          <div className="column is-5">
            <figure className="image">
              <img src="https://bulma.io/images/placeholders/1280x960.png"></img>
            </figure>
          </div>
          <div className="column">
            <h1 className="title">Candles Titles</h1>
            <br/>
            <h2 className="subtitle">$10.99</h2>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
            <br/>
            <div className="field is-grouped">
              <p className="has-text-weight-bold">Color: &nbsp;</p>
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
            <p>In stock</p>
            <br/>
            <div className="columns">
              <div className="column is-6">
                <button className="button is-fullwidth">add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default DetailPage
