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
        <p className="has-text-weight-bold">subtotal</p>
      </div>
      <div className="level-right">
        <p>${sumQuantityPrice(cart)}</p>
      </div>
    </div>
    <hr/>
    <br/>
    <div className="columns">
      <div className="column">
        <p className="has-text-weight-bold">shipping</p>
      </div>
      <div className="column">
        <div className="control">
          <label className="radio" disabled>
            <input type="radio" name="shipping" disabled/>Fast
              <div className="has-text-grey-light">
                (+$20)
              </div>
          </label>
          <label className="radio">
            <input type="radio" name="shipping" defaultChecked/>Standard
              <div className="has-text-grey-light">
                (+$6)
              </div>
          </label>
        </div>
      </div>
    </div>
    <hr/>
    <br/>
    <div className="level">
      <div className="level-left">
        <p className="has-text-weight-bold">Total</p>
      </div>
      <div className="level-right">
        <p>${sumQuantityPrice(cart)+6}</p>
      </div>
    </div>
    <button className="button is-fullwidth is-primary" disabled title="We are currently not processing any orders">Proceed to checkout</button>
  </div>
)

const CartTotal = connect(select)(ConnectedCartTotal)


export default CartTotal
