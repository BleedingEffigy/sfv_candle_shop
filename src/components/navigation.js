import React from "react"
import { Link } from "gatsby"

class Navigation extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      active: false,
    }
    this.hamburgerClick = this.hamburgerClick.bind(this)
  }

  hamburgerClick(){
    this.setState({active: !this.state.active})
  }

  render () {
    return (
      <nav className="navbar has-background-grey-darker" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <p className="title has-text-white">SFV CANDLES</p>
          </Link>

          <a role="button" className="navbar-burger burger" onClick={this.hamburgerClick} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu has-background-grey-darker ${this.state.active ? "is-active": ""}`}>
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
  }
}

export default Navigation
