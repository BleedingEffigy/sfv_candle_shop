export const renderColorImage = (props) => {
  switch(props){
    case "red":
      return "https://images-na.ssl-images-amazon.com/images/I/21A6jA0wdhL._AC_.jpg"
    case "violet":
      return "https://candle4less-com.3dcartstores.com/assets/images/purple-3x6-candles.jpg"
    case "blue":
      return "https://www.candles4less.com/assets/images/lightblue-4x8-candles.jpg"
    case "yellow":
      return "https://www.candles4less.com/assets/images/yellow-3x6-candles.jpg"
    default:
      return "https://ii2.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/32470_XXX_v1.tif&wid=480&cvt=jpeg"
  }
}

export const createSKU = (shape, color) => {
  let sku = "PC"

  switch(shape.toLowerCase()){
    case "square":
      sku = sku.concat("01")
      break
    case "etched-stripes":
      sku = sku.concat("02")
      break
    case "pyramid":
      sku = sku.concat("03")
      break
    case "round":
      sku = sku.concat("04")
      break
  }
  switch(color.toLowerCase()){
    case "red":
      sku = sku.concat("-R")
      break
    case "violet":
      sku = sku.concat("-V")
      break
    case "blue":
      sku = sku.concat("-B")
      break
    case "yellow":
      sku = sku.concat("-Y")
      break
  }
  return sku
}
