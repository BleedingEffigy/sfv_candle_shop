import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const Landing = () => (
  <div>
    
    <section className="p-20 bg-purple-400">
    	<SEO title="Home" />
    	<div className="grid grid-cols-6 grid-rows-2 gap-8 h-screen">
    		<div className="col-span-3 rows-span-2">
				<img src={require("../images/Landing_Candles.png")}
					 className="object-scale-down"></img>
			</div>
			<div className="col-span-3 nm-pink-flat p-5">
				<h2 className="text-5xl font-bold">Made right in the SFV</h2>
				<p className="text-2xl">All our free standing candles are made in our home in the beautiful San Fernando Valley</p>
			</div>
			<div className="col-start-4 col-span-2 text-center">
			<Link to="/candles">
				<button className="nm-pink-flat text-white hover:text-gray-300 w-full text-3xl rounded p-2 mt-4 ">
					<span className="bg-clip-text text-transparent 
                            bg-gradient-to-r from-yellow-100 to-pink-200 filter hover:brightness-125">
						Browse
					</span>
				</button>
			</Link>
			<div className='col-start-4 col-span-2 text-center text-white text-3xl mt-4 nm-pink-flat'>
				<span className="bg-clip-text text-transparent 
                            bg-gradient-to-r from-yellow-100 to-pink-200 filter hover:brightness-125">
					Contact us below!
				</span>
			</div>
      	</div>
		</div>

		
      
    </section>
  </div>
)

export default Landing
