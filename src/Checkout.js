import React from "react";
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct.js'
import Subtotal from './Subtotal.js'

function Checkout() {
	const [{basket}, dispatch] = useStateValue();
	
	return (
		<div className="checkout">
			<div>
				<img
					className="checkout__ad"
					src="https://images-na.ssl-images-amazon.com/images
					/G/15/CA-hq/2020/img/Prime/XCM_CUTTLE_1267621_13739
					22_CA_PD20_3374369_1500x110_2X_en_CA.jpg"
					alt=""
					/>
					{basket.length === 0 ? (
						<div>
							<h2> Your Shopping Basket is empty</h2>
						</div>
					) : (
						<div>
						<h2 className="checkout__title"> Your Shopping Basket has {basket.length}
						{basket.length === 1? ' item': ' items'}</h2>
						{basket.map(item => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
						</div>
					)}
			</div>
			{basket.length > 0 && (
				<div className="checkout__right">
					<Subtotal />
				</div>
			)}
		</div>
	);
}

export default Checkout
