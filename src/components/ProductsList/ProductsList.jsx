import React, { useContext } from "react";

// Component
import Product from "./components/Product/Product";

import { ProductContext } from "../../contexts/productContexts.js";

// Styles
import "./ProductsList.style.css";

export default function ProductsList() {
	const [productData] = useContext(ProductContext);
	return (
		<main className="productsList">
			{productData.map((product) => (
				<Product
					name={product.name}
					category={product.category}
					img={product.img}
					cost={product.cost}
					key={product._id}
					id={product._id}
				/>
			))}
		</main>
	);
}
