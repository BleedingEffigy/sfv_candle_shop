import React from "react"
import {Provider} from "react-redux"

import store from "./src/js/store/index"

export default ({element}) => {
  return <Provider store={store}>{element}</Provider>
}
