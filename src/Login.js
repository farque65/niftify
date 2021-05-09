import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom";

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');


	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt=""
				/>
			</Link>

			<div className="login__container">
				<h1>Sign In</h1>
				<form>
					<h5>Email</h5>
					<input value={email} onChange={event=>setEmail(event.target.value)} type="text"></input>
					<h5>Password</h5>
					<input value={password} onChange={event=>setPassword(event.target.value)} type="text"></input>
					<button className="login__signInButton">Sign In</button>
				</form>
				<p>
					By signing-in you agree to Amazon's Conditions of Use and Sale. Please see our Privacy
					Notice, our Cookies Notice and our Interest-Base Ads Notice.
				</p>
				<button className="login__registerButton"> Create your Amazon Account</button>
			</div>
		</div>
	)
}

export default Login
