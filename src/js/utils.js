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
