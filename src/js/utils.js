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
