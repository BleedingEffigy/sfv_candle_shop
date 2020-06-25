import React from "react"
import Navigation from "./navigation"

import {connect} from "react-redux"
import {addToCart} from "../js/actions/index"
import {createSKU} from "../js/utils"

const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => dispatch(addToCart(item))
  }
}


class ConnectedCandleDetail extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      "color": "red"
    }
    this.handleAddToCartClick = this.handleAddToCartClick.bind(this)
  }

  handleAddToCartClick = (props, color) => {
    const SKU = createSKU(props.shape, color)
    const new_item = {
      [SKU]: {
        "shape": props.shape,
        "color": color,
        "quantity": 1,
      }
    }
    props.addToCart(new_item)
  }

  render(){
      return (
        <div>
          <Navigation/>

          <div className="columns is-centered">
            <div className="column is-10">
              <div className="columns">
                <div className="column is-5">
                  <figure className="image">
                    <img src={this.props.render(this.state.color)}></img>
                  </figure>
                </div>
                <div className="column">
                  <h1 className="title">{this.props.shape} Candles</h1>
                  <br/>
                  <h2 className="subtitle">$10.99</h2>
                  <p>{this.props.description}</p>
                  <br/>
                  <div className="field is-grouped">
                    <p className="has-text-weight-bold">Color: &nbsp;</p>
                      <p className="control">
                        <button className="button is-rounded is-small"
                          style={{backgroundColor: "#bf0e44"}}
                          onClick={() => this.setState({"color":"red"})}></button>
                      </p>
                      <p className="control">
                        <button className="button is-rounded is-small"
                          style={{backgroundColor: "#b74bdd"}}
                          onClick={() => this.setState({"color":"violet"})}></button>
                      </p>
                      <p className="control">
                        <button className="button is-rounded is-small"
                          style={{backgroundColor: "#223ed2"}}
                          onClick={() => this.setState({"color":"blue"})}></button>
                      </p>
                      <p className="control">
                        <button className="button is-rounded is-small"
                          style={{backgroundColor: "#ebe958"}}
                          onClick={() => this.setState({"color":"yellow"})}></button>
                      </p>
                  </div>
                  <p>In stock</p>
                  <br/>
                  <div className="columns">
                    <div className="column is-6">
                      <button className="button is-fullwidth"
                              onClick={this.handleAddToCartClick.bind(this, this.props, this.state.color)}>add to cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )}
}

const CandleDetail = connect(null, mapDispatchToProps)(ConnectedCandleDetail)

export default CandleDetail
