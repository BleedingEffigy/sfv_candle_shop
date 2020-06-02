import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const Landing = () => (
  <div>
    <section class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="container">
          <SEO title="Home" />
          <div className="columns is-gapless">
            <div className="column is-6">
              <figure className="image is-3by2">
                <img src="https://bulma.io/images/placeholders/800x480.png"></img>
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
                <img src="https://bulma.io/images/placeholders/800x480.png"></img>
              </figure>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
)

export default Landing
