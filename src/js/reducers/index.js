import {CHANGE_CANDLE_COLOR} from "../actions/index.js"

const initialState = {
  candle_colors: {}
}

function rootReducer(state = initialState, action) {
  switch(action.type){
    case CHANGE_CANDLE_COLOR:
      new_colors = Object.assign({}, state.candle_colors, action.payload)
      return Object.assign({}, state, {
        candle_colors: new_colors
      })
      break
  }
  return state
}

export default rootReducer
