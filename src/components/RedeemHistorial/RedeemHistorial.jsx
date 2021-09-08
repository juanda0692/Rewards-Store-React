import React, { useState, useEffect } from "react";

import ProductRedeem from "../ProductsList/components/ProductRedeemed/ProductRedeemed";

import { getHistory } from "../../utilities/fetchInfo";

// Styles
import "./RedeemHistorial.style.css";

export default function RedeemHistorial() {
	const [redeemHistory, setRedeemHistory] = useState([]);

	useEffect(() => {
		getHistory(setRedeemHistory);
	}, [setRedeemHistory.length]);

	// Copy the original redeem history array, and then reversing it
	// to obtain the most recent redeem articles
	const reverseRedeemHistory = [...redeemHistory].reverse();

	return (
		<section className="redeemHistory">
			<h2>Redeemed Products</h2>
			<p>Your most recent redeemed products</p>
			<div className="redeemHistory-products">
				{reverseRedeemHistory.map((product) => {
					return (
						<ProductRedeem
							{...product}
							key={product.createDate}
						></ProductRedeem>
					);
				})}
			</div>
		</section>
	);
}
