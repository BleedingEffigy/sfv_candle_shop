import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const Landing = () => (
  <div>
    
    <section className="h-screen p-20 bg-purple-400">
    	<SEO title="Home" />
    	<div className="grid grid-cols-6 gap-16">
    		<div className="col-span-3">
      
				<img src="https://cdn18.picryl.com/photo/2019/10/07/san-fernando-valley-california-e90e48-1024.jpg"></img>
			</div>
			<div className="col-span-3 nm-pink-flat p-5">
				<h2 className="title is-2 has-text-dark">Made right in the SFV</h2>
				<p>All our free standing candles are made in our home in the beautiful San Fernando Valley</p>
			</div>
			<div className="col-start-3 col-span-2 text-center">
			<Link to="/candles">
				<button className="bg-purple-400 w-3/4 text-xl rounded p-2 mt-4">Browse</button>
			</Link>
			<div className='col-start-3 col-span-2 text-center text-3xl text-purple-400'>^</div>
      	</div>
		</div>

		
      
    </section>
  </div>
)

export default Landing
