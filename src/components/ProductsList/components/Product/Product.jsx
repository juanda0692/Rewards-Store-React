import React, { useContext } from "react";

// AppContext
import { AppContext } from "../../../../contexts/AppContexts";

// Styles
import "./Product.style.css";
import "./ProductHover.style.css";

export default function Product() {
	const { hoverProduct, setHoverProduct } = useContext(AppContext);

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
						className="product-img"
						src="/assets/product-pics/AcerAspire-x1.png"
						alt="product"
					/>
					<div className="product-separator"></div>
					<span>Laptops</span>
					<h3>Acer Aspire</h3>
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
							<span>12.000</span>
							<img src="/assets/icons/coin.svg" alt="Coin icon" />
						</div>
						<button className="product-redeem_button hover">Redeem now</button>
					</div>
					<img
						className="product-img"
						src="/assets/product-pics/AcerAspire-x1.png"
						alt="product"
					/>
					<div className="product-separator"></div>
					<span>Laptops</span>
					<h3>Acer Aspire</h3>
				</div>
			)}
		</>
	);
}
