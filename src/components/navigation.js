import React from "react"
import { Link } from "gatsby"

const Navigation = () => (
  <nav className="navbar has-background-grey-darker" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        <Link to="/candles">Shop</Link>
      </a>

      <a className="navbar-item">
        Contact
      </a>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <Link to="/cart">Cart</Link>
          </a>
          <a className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
)

export default Navigation
