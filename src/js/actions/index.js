export const CHANGE_CANDLE_COLOR = "CHANGE_CANDLE_COLOR"

export function changeCandleColor(payload){
  return { type: CHANGE_CANDLE_COLOR, payload}
}
