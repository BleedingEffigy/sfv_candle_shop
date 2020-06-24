import React from "react"

import Navigation from "../../components/navigation"
import CandleDetail from "../../components/candle-detail"
import {renderColorImage} from "../../js/utils"


const SquareCandlePage = () => (
  <CandleDetail render={renderColorImage}
                shape={"Round"}
                description={"A round pillar that is 10in in height and 4in in width"}/>
)

export default SquareCandlePage
