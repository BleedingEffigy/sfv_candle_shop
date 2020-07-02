import React from "react"
import {sumQuantityPrice} from "../js/utils"

import { connect } from "react-redux"

const select = state => {
  return {cart: state.cart}
}

const ConnectedCartTotal = ({cart}) => (
  <div className="box">
    <h1 className="title">Cart Total</h1>
    <div className="level">
      <div className="level-left">
        <p>subtotal</p>
      </div>
      <div className="level-right">
        <p>${sumQuantityPrice(cart)}</p>
      </div>
    </div>
    <br/>
    <div className="columns">
      <div className="column">
        <p>shipping</p>
      </div>
      <div className="column">
        <div className="control">
          <label className="radio box">
            <input type="radio" name="shipping" defaultChecked/>Fast
              <div className="has-text-grey-lighter">
                (+$20)
              </div>
          </label>
          <label className="radio">
            <input type="radio" name="shipping"/>Standard
          </label>
        </div>
      </div>
    </div>
    <br/>
    <p>Total</p>
    <button className="button is-fullwidth" disabled title="We are currently not processing any orders">Proceed to checkout</button>
  </div>
)

const CartTotal = connect(select)(ConnectedCartTotal)


export default CartTotal
