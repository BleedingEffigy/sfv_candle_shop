import {CHANGE_CANDLE_COLOR} from "../actions/index.js"

const initialState = {
  candle_colors: {
    "one": {"shape":"square","color":"red"},
    "two": {"shape":"etched stripes","color":"violet"},
    "three": {"shape":"pyramid","color":"yellow"},
    "four": {"shape":"round","color":"green"},
    "five": {"shape":"square","color":"blue"},
  }
}

function rootReducer(state = initialState, action) {
  switch(action.type){
    case CHANGE_CANDLE_COLOR:
      const new_colors = Object.assign({}, state.candle_colors, action.payload)
      return Object.assign({}, state, {
        candle_colors: new_colors
      })
      break
  }
  return state
}

export default rootReducer
