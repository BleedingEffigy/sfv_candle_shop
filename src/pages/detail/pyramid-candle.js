import React from "react"

import Navigation from "../../components/navigation"
import CandleDetail from "../../components/candle-detail"
import {renderImage} from "../../js/utils"


const SquareCandlePage = () => (
  <CandleDetail render={renderImage}
                shape={"Pyramid"}
                description={"A pyramid that is 10in in height and 4in in width"}/>
)

export default SquareCandlePage
