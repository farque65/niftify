import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, price, title, image, rating}) {
	const [{basket}, dispatch] = useStateValue();

	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};

	return (
		<div>
			<img className="checkoutProduct__image" src={image} alt=""/>
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduce__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>👍</p>
						))}
				</div>
				<button onClick={removeFromBasket}>Remove From Basket</button>
			</div>
		</div>
	)
}

export default CheckoutProduct
