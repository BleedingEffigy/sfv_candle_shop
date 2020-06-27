import React from "react"

const CartTotal = () => (
  <div className="box">
    <h1 className="title">Cart Total</h1>
    <p>subtotal</p>
    <br/>
    <div className="columns">
      <div className="column">
        <p>shipping</p>
      </div>
      <div className="column">
        <div className="control">
          <label className="radio box">
            <input type="radio" name="shipping" defaultChecked/>Fast
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

export default CartTotal
