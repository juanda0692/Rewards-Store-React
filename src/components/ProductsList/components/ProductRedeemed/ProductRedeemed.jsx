import React from "react";

// Components
import { URLS } from "../../../../utilities/utils";

// Styles
import "./ProductRedeemed.style.css";

export default function ProductRedeem({ img, name, cost }) {
	return (
		<article className="productRedeem">
			<img
				src={img.url}
				alt="product reference"
				className="productRedeem-img"
			/>
			<div className="productRedeem-info">
				<b>{name}</b>
				<span className="productRedeem-info_cost">
					<b>Cost: </b>
					{cost}
					<img
						src={`${URLS.publicPath}/assets/icons/coin.svg`}
						alt="Coin icon"
					/>
				</span>
			</div>
		</article>
	);
}
