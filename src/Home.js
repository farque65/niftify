import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
	return (
		<div className="home">
		{/* Product id, title, price, rating image */}
		<div className="home__row">
				<Product
					id="12321341"
					title="The Lean Startup"
					price={11.96}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
				/>
				<Product
					id="12321342"
					title="Nike Men's Air Force 1 '07 Basketball Shoes"
					price={174.99}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/81uiWMk9dnL._AC_UX695_.jpg"
				/>
			</div>
		</div>
	)
}

export default Home
