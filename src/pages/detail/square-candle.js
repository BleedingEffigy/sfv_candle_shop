import React from "react"

import Navigation from "../../components/navigation"
import CandleDetail from "../../components/candle-detail"
import {renderImage} from "../../js/utils"
import Layout from "../../components/layout"


const SquareCandlePage = () => (
  <Layout>
    <CandleDetail render={renderImage}
                  shape={"Square"}
                  description={"A square pillar that is 10in in height and 4in in width"}/>
  </Layout>
)

export default SquareCandlePage
