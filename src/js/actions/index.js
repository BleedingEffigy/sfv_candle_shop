export const CHANGE_CANDLE_COLOR = "CHANGE_CANDLE_COLOR"
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export function changeCandleColor(payload){
  return { type: CHANGE_CANDLE_COLOR, payload}
}

export function addToCart(payload){
  return { type: ADD_TO_CART, payload}
}

export function removeFromCart(payload){
  return { type: REMOVE_FROM_CART, payload}
}
