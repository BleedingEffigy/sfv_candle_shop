import React from "react"

import Navigation from "../../components/navigation"
import CandleDetail from "../../components/candle-detail"
import Layout from "../../components/layout"


const RoundCandlePage = () => (
  <Layout>
    <CandleDetail shape={"Round"}
                  description={"A round pillar that is 10in in height and 4in in width"}/>
  </Layout>
)

export default RoundCandlePage
