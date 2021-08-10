import React from "react";

// Styles
import "./Product.style.css";
import "./ProductHover.style.css";

export default function Product() {
	return (
		<div className="product">
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
	);
}
