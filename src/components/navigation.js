import React from "react"
import { Link } from "gatsby"
import { FaShoppingCart } from "react-icons/fa";

class Navigation extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      active: false,
    }
  }

  render () {
    return(
        <nav className="flex justify-between w-screen bg-gray-500">
          <div className="px-5 xl:px-10 py-6 flex w-full items-center">
            {/* Logo here! */}
            <div className="p-2 nm-gray-flat">
            <Link to="/">
              <p className="text-4xl font-bold font-heading bg-clip-text text-transparent 
                            bg-gradient-to-r from-yellow-100 to-pink-200 filter hover:brightness-125">SFV CANDLES</p>
            </Link>
            </div>
            {/* <!-- Nav Links --> */}
            <ul className="flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li>
                  <Link to="/candles" className="p-4 hover:text-gray-200 text-2xl text-white nm-gray-flat">Shop</Link>
              </li>
            </ul>
            {/* <!-- Header Icons --> */}
            <div className="flex items-center space-x-5">
              <Link className="flex items-center p-3 nm-gray-flat hover:text-gray-200 " to="/cart">
                  <span className="h-9 w-9">
                    <FaShoppingCart size={32}/>
                  </span>
                <span className="flex absolute -mt-7 ml-6">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                    </span>
                  </span>
              </Link>
            </div>
          </div>
        </nav>
    ) 
  }
}

export default Navigation
