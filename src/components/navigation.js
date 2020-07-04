import React from "react"
import { Link } from "gatsby"

const Navigation = () => (
  <nav className="navbar has-background-grey-darker" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <Link className="navbar-item" to="/">
      <p className="title logo has-text-white">SFV CANDLES</p>
    </Link>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
        <Link to="/candles" className="navbar-item has-text-white">Shop</Link>

      <a className="navbar-item has-text-white">
        Contact
      </a>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
            <Link to="/cart" className="button is-primary has-text-white">Cart</Link>
        </div>
      </div>
    </div>
  </div>
</nav>
)

export default Navigation
