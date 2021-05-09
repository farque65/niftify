import React from 'react'
import './MintView.css'

const MintView = () => {
	return (
		<div className="mintview">
			<div className="mintview__row">
				<form>
					<h1>Mint NFT</h1>
					<br/><br/>
					<label>
						Name:
						<input type="text" name="name" />
					</label>
					<br/><br/>
					<label>
						Market:
						<input type="text" name="market" />
					</label>
					<br/><br/>
					<label>
						Supply:
						<input type="text" name="supply" />
					</label>
					<br/><br/>
					<label>
						Supply:
						<input type="text" name="supply" />
					</label>
					<br/><br/>
					<label>
						NFT Type:
						<input type="text" name="nft_type" />
					</label>
					<br/><br/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		</div>
	)
}

export default MintView;
