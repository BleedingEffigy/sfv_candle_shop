import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const Landing = () => (
  <div>
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container">
          <SEO title="Home" />
          <div className="columns is-gapless">
            <div className="column is-6">
              <figure className="image is-3by2">
                <img src="https://cdn18.picryl.com/photo/2019/10/07/san-fernando-valley-california-e90e48-1024.jpg"></img>
              </figure>
            </div>
            <div className="column is-6 is-flex">
              <div className="content notification is-white">
                <h2 className="title is-2 has-text-dark">Made right in the SFV</h2>
                <p>All our free standing candles are made in our home in the beautiful San Fernando Valley</p>
              </div>
            </div>
          </div>

          <div className="columns is-gapless">
            <div className="column is-6 is-flex">
              <div className="content notification is-white">
                <h2 className="title is-2 has-text-dark">Choose from a combination of colors</h2>
                <p>Mix colors to create a candle unique to you</p>
              </div>
            </div>
            <div className="column is-6">
              <figure className="image is-3by2">
                <img src="https://image.exportimes.com/UploadFile/UploadImg/2017/12/7/201712071031273727.jpg"></img>
              </figure>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
)

export default Landing
