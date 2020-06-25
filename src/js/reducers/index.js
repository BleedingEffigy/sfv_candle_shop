import {CHANGE_CANDLE_COLOR, ADD_TO_CART} from "../actions/index.js"

const initialState = {
  candle_colors: {
    "one": {"shape":"square","color":"red"},
    "two": {"shape":"etched-stripes","color":"violet"},
    "three": {"shape":"pyramid","color":"yellow"},
    "four": {"shape":"round","color":"green"},
    "five": {"shape":"square","color":"blue"},
  },
  cart: {
    "PC01-R": {
      "shape":"Square",
      "color":"blue",
      "quantity": 2,
    }
  }
}

function rootReducer(state = initialState, action) {
  switch(action.type){
    case CHANGE_CANDLE_COLOR:
      const new_colors = Object.assign({}, state.candle_colors)
      new_colors[action.payload.index]["color"] = action.payload.color
      return Object.assign({}, state, {
        candle_colors: new_colors
      })
      break
    case ADD_TO_CART:
      const new_cart = Object.assign({}, state.cart, action.payload)
      return Object.assign({}, state, {
        cart: new_cart
      })
      break
  }
  return state
}

export default rootReducer
