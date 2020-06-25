import React from "react"
import Navigation from "../components/navigation"
import CartTotal from "../components/cart-total"

import { connect } from "react-redux"
import {addToCart} from "../js/actions/index"

const select = state => {
  return { cart: state.cart}
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: cart => dispatch(addToCart(cart))
  }
}

const ConnectedCartPage = ({cart}) => (
 <div>
    <Navigation/>
    <div className="columns is-centered">
      <div className="column is-10">
        <div className="columns">
          <div className="column is-8">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>PRODUCT</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>SUBTOTAL</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(cart).map(([key, val]) =>
                  <tr>
                    <td>
                      <figure className="image is-128x128">
                        <img src="https://bulma.io/images/placeholders/1280x960.png"></img>
                      </figure>
                    </td>
                    <td style={{verticalAlign: "middle"}}>{val.shape+" "+val.color}</td>
                    <td style={{verticalAlign: "middle"}}>PRICE</td>
                    <td style={{verticalAlign: "middle"}}>{val.quantity}</td>
                    <td style={{verticalAlign: "middle"}}>SUBTOTAL</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="column is-4">
            <CartTotal/>
          </div>
        </div>

      </div>
    </div>
  </div>
)

const CartPage = connect(select, mapDispatchToProps)(ConnectedCartPage)

export default CartPage
