import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {
	const [ {basket, user} , dispatch] = useStateValue();

	return (
		<div className="header">
		<Link to="/">
			<h2  className="header__logo">
				KUBJUB
			</h2>
		</Link>
		<div className="header__search">
			<input type="text" className="header__searchInput"/>
			<SearchIcon className="header__searchIcon" />
		</div>

		<div className="header__nav">
			<Link to={!user && "/login"} className="header__link">
				<div className="header__option">
					<span className="header__optionLineOne"> Hello {user && user.email}</span>
					<span className="header__optionLineTwo"> {user ? 'Sign Out' : 'Sign In'}</span>
				</div>
			</Link>

			<Link to="/" className="header__link">
				<div className="header__option">
					<span className="header__optionLineOne"> Returns</span>
					<span className="header__optionLineTwo"> & orders</span>
				</div>
			</Link>

			<Link to="/mintview" className="header__link">
				<div className="header__option">
					<span className="header__optionLineTwo"> Mint NFT </span>
				</div>
			</Link>

			<Link to="/checkout" className="header__link">
				<div className="header__optionBasket">
					<ShoppingBasketIcon />
					<span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
				</div>
			</Link>
		</div>

		{/* Basket icon */ }
		</div>
	)
}

export default Header
