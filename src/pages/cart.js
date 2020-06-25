import React from "react"
import Navigation from "../components/navigation"
import CartTotal from "../components/cart-total"

import { connect } from "react-redux"

const select = state => {
  return { cart: state.cart}
}

const ConnectedCartPage = ({cart}) => (
 <div>
    <Navigation/>
    <div className="columns is-centered">
      <div className="column is-10">

        <div className="columns">
          <div className="column is-8">
            <div className="columns">
              <div className="column is-offset-2 has-text-weight-bold">
                <p>PRODUCT</p>
              </div>
              <div className="column is-offset-5 has-text-weight-bold">
                <p>PRICE</p>
              </div>
              <div className="column has-text-weight-bold">
                <p>QUANTITY</p>
              </div>
              <div className="column has-text-weight-bold">
                <p>SUBTOTAL</p>
              </div>
            </div>

            {Object.entries(cart).map(([key, val]) =>
              <div className="columns is-vcentered">
                <div className="column">
                  <figure className="image is-128x128">
                    <img src="https://bulma.io/images/placeholders/1280x960.png"></img>
                  </figure>
                </div>
                <div className="column">
                  <p>PRODUCT</p>
                </div>
                <div className="column is-offset-5">
                  <p>PRICE</p>
                </div>
                <div className="column">
                  <p>QUANTITY</p>
                </div>
                <div className="column">
                  <p>SUBTOTAL</p>
                </div>
              </div>
            )}
          </div>

          <div className="column is-4">
            <CartTotal/>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const CartPage = connect(select)(ConnectedCartPage)

export default CartPage
