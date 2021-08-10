import React from "react";

// Component
import Product from "./components/Product/Product";

// Styles
import "./ProductsList.style.css";

export default function ProductsList() {
	return (
		<main className="productsList">
			<Product />
		</main>
	);
}
