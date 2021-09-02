import React, { useState } from "react";

// AppContext
// import { UserContext } from "../../../../contexts/userContext";

//Fetch Redeem product
import { redeemProducts } from "../../../../utilities/fetchInfo";

// Styles
import "./Product.style.css";
import "./ProductHover.style.css";

export default function Product({
	name,
	category,
	img,
	cost,
	userPoints,
	productCost,
	productId,
	id,
}) {
	const [hoverProduct, setHoverProduct] = useState(false);
	// const [userData, setUserData] = useContext(UserContext);
	// const [redeemProduct, setRedeemProduct] = useState("");

	function handleRedeemProduct(id) {
		redeemProducts(id);
	}

	return (
		<>
			{!hoverProduct ? (
				<div
					// className={`product ${hoverProduct ? "hover" : null}`}
					className="product"
					onMouseEnter={() => setHoverProduct(true)}
					// onMouseLeave={() => setHoverProduct(false)}
				>
					<img
						className="product-buyIcon"
						src="/assets/icons/buy-blue.svg"
						alt="buy blue icon"
					/>
					<img
						lazy="loading"
						className="product-img"
						src={img.url}
						alt="product"
					/>
					<div className="product-separator"></div>
					<span>{category}</span>
					<h3>{name}</h3>
				</div>
			) : (
				<div
					// className={`product ${hoverProduct ? "hover" : null}`}
					className="product hover"
					// onMouseEnter={() => setHoverProduct(true)}
					onMouseLeave={() => setHoverProduct(false)}
				>
					<div className="product-layer hover">
						<img
							className="product-buyIcon hover"
							src="/assets/icons/buy-white.svg"
							alt="buy white icon"
						/>
						<div className="product-value hover">
							<span>{cost}</span>
							<img src="/assets/icons/coin.svg" alt="Coin icon" />
						</div>
						<button
							className="product-redeem_button hover"
							type="button"
							onClick={() => handleRedeemProduct(id)}
						>
							Redeem now
						</button>
					</div>
					<img className="product-img" src={img.hdUrl} alt="product" />
					<div className="product-separator"></div>
					<span>{category}</span>
					<h3>{name}</h3>
				</div>
			)}
		</>
	);
}
