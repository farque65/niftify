import React from 'react'
import './Home.css'
import './Home.js'
import Product from './Product'

function Home() {
	return (
		<div className="home">
			<img
			className="home__image"
			src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/paylaterquiz/Apay-EMI_Quiz_1242x450.jpg"
			alt=""
			/>

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
			<div className="home__row">
				<Product
					id="12321341"
					title="The Lean Startup"
					price={11.96}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
				/>
				<Product
					id="12321341"
					title="The Lean Startup"
					price={11.96}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
				/>
								<Product
					id="12321341"
					title="The Lean Startup"
					price={11.96}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id="12321341"
					title="Nike Mens Court Vision Low Sneaker"
					price={150.96}
					rating={3}
					image="https://images-na.ssl-images-amazon.com/images/I/71mujD0Vu8L._AC_UX695_.jpg"
				/>
			</div>
			{/* Product */}
		</div>
	)
}

export default Home
