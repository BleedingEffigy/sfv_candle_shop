import React from "react"
import Navigation from "../components/navigation"

const CartPage = () => (
  <div>
    <Navigation/>
    <div className="columns is-centered">
      <div className="column is-10">

        <div className="columns">
          <div className="column is-8">
            <div className="columns">
              <div className="column is-offset-2">
                <p>PRODUCT</p>
              </div>
              <div className="column is-offset-6">
                <p>PRICE</p>
              </div>
              <div className="column">
                <p>QUANTITY</p>
              </div>
              <div className="column">
                <p>SUBTOTAL</p>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-8">
            <div className="columns is-vcentered">
              <div className="column">
                <figure className="image is-128x128">
                  <img src="https://bulma.io/images/placeholders/1280x960.png"></img>
                </figure>
              </div>
              <div className="column">
                <p>PRODUCT</p>
              </div>
              <div className="column is-offset-6">
                <p>PRICE</p>
              </div>
              <div className="column">
                <p>QUANTITY</p>
              </div>
              <div className="column">
                <p>SUBTOTAL</p>
              </div>
            </div>

            <div className="columns is-vcentered">
              <div className="column">
                <figure className="image is-128x128">
                  <img src="https://bulma.io/images/placeholders/1280x960.png"></img>
                </figure>
              </div>
              <div className="column">
                <p>PRODUCT</p>
              </div>
              <div className="column is-offset-6">
                <p>PRICE</p>
              </div>
              <div className="column">
                <p>QUANTITY</p>
              </div>
              <div className="column">
                <p>SUBTOTAL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default CartPage
