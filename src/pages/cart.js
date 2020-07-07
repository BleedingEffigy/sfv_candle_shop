import React from "react"
import Navigation from "../components/navigation"
import CartTotal from "../components/cart-total"
import Layout from "../components/layout"
import { Link } from "gatsby"

import { connect } from "react-redux"
import {addToCart, removeFromCart} from "../js/actions/index"
import {renderImage ,createSKU} from "../js/utils"
import { FaShoppingBag } from "react-icons/fa";

const select = state => {
  return { cart: state.cart}
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => dispatch(addToCart(item)),
    removeFromCart: item => dispatch(removeFromCart(item))
  }
}

function ConnectedCartPage({cart, addToCart, removeFromCart}){

const handleAddToCartClick = (item) => {
  const SKU = createSKU(item.shape, item.color)
  const new_item = {
    [SKU]: {
      "shape": item.shape,
      "color": item.color,
      "quantity": 1,
    }
  }
  addToCart(new_item)
}

const handleRemoveFromCartClick = (item) => {
  const SKU = createSKU(item.shape, item.color)
  const new_item = {
    [SKU]: {
      "shape": item.shape,
      "color": item.color,
      "quantity": 1,
    }
  }
  removeFromCart(new_item)
}

  return (
    <Layout>
      <Navigation/>
      <div className="columns is-centered">
        <div className="column is-10">
          {Object.keys(cart).length === 0
            ? <div className="box has-text-centered">
                <p className="content has-text-dark is-size-1">Your shopping cart is empty!</p>
                <span className="icon is-large has-text-danger">
                  <FaShoppingBag size={64}/>
                </span>
                <br/>
                <Link to="/candles" className="is-size-4">Go browse our candles</Link>
              </div>
            : <div className="columns">
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
                      {Object.entries(cart).map(([key, item]) =>
                        <tr key={key}>
                          <td>
                            <figure className="image is-128x128">
                              <img src={renderImage(item.shape.toLowerCase(), item.color)}></img>
                            </figure>
                          </td>
                          <td style={{verticalAlign: "middle"}}>10in. {item.color+" "+item.shape.toLowerCase()} candle</td>
                          <td style={{verticalAlign: "middle"}}>$8.99 </td>
                          <td style={{verticalAlign: "middle"}}>
                            <div className="field has-addons">
                              <p className="control">
                                <button className="button"
                                        onClick={() => handleRemoveFromCartClick(item)}>
                                  <span>-</span>
                                </button>
                              </p>
                              <p className="control">
                                <button className="button is-static">
                                  <span>{item.quantity}</span>
                                </button>
                              </p>
                              <p className="control">
                                <button className="button"
                                        onClick={() => handleAddToCartClick(item)}>
                                  <span>+</span>
                                </button>
                              </p>
                            </div>
                          </td>
                          <td style={{verticalAlign: "middle"}}>${8.99*item.quantity}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="column is-4">
                  <CartTotal/>
                </div>
              </div>
          }
        </div>
      </div>
    </Layout>)
}

const CartPage = connect(select, mapDispatchToProps)(ConnectedCartPage)

export default CartPage
