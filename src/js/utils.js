export const renderImage = (shape, color) => {
  switch(shape){
    case "square":
      switch(color){
        case "red":
          return "https://i5.walmartimages.com/asr/1faca61b-08fe-47d3-96da-931700b6c875_1.52ba715a82a79cd136437bd76a480c39.jpeg"
        case "violet":
          return "https://ak1.ostkcdn.com/images/products/6504586/Unscented-Square-Pillar-Candles-Pack-of-12-6b1545ba-ba7a-4fa2-a0d4-1c5074401602_320.jpg?impolicy=medium"
        case "blue":
          return "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAd-yIm8zr8P6B9GzQQUWZw3u3BBnfpvbRbDRnmIe1drmxXlWGygeRwKZn03eUSweasjgeQvwA&usqp=CAc"
        case "yellow":
          return "https://images.homedepot-static.com/productImages/5e4ff4e7-2f9e-4d27-9815-9c749b89211a/svn/yellow-zest-candle-candles-cpz-142-12-64_1000.jpg"
        default:
          return "https://ii2.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/32470_XXX_v1.tif&wid=480&cvt=jpeg"
      }
    case "etched-stripes":
      switch(color){
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
    case "pyramid":
      switch(color){
        case "red":
          return "https://i.etsystatic.com/9365536/c/1997/1587/0/136/il/2f6ef9/2388925461/il_340x270.2388925461_lnlu.jpg"
        case "violet":
          return "https://i.etsystatic.com/12913650/r/il/66d340/1008965965/il_570xN.1008965965_elx3.jpg"
        case "blue":
          return "https://cdn11.bigcommerce.com/s-e9348/images/stencil/1280x1280/products/4752/5965/CPSWC__74376.1509110713.JPG?c=2&imbypass=on"
        case "yellow":
          return "https://i.etsystatic.com/12913650/r/il/2f970b/1291554918/il_fullxfull.1291554918_fe1i.jpg"
        default:
          return "https://ii2.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/32470_XXX_v1.tif&wid=480&cvt=jpeg"
      }
    case "round":
      switch(color){
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

export const sumQuantityPrice = (cart) => {
  const cart_items = Object.values(cart)
  let quantities = []
  cart_items.map((item) => {
    quantities.push(Object.values(item)[2])
  })
  let price = quantities.reduce((acc, curVal) => acc + curVal) * 8.99
  return price
}
