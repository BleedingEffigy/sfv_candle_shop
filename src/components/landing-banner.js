import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const Landing = () => (
  <div>
    <section className="hero is-primary is-medium">
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
                <h2 className="title is-2 has-text-dark">The title 2 heading</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
              </div>
            </div>
          </div>

          <div className="columns is-gapless">
            <div className="column is-6 is-flex">
              <div className="content notification is-white">
                <h2 className="title is-2 has-text-dark">The title 2 heading</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
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
