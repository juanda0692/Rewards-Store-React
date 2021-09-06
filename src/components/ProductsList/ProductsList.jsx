import React, { useContext } from "react";

// Component
import Product from "./components/Product/Product";

// Context
import { ProductContext } from "../../contexts/productContexts.js";
import { PaginationContext } from "../../contexts/paginationContext.js";

// Styles
import "./ProductsList.style.css";

export default function ProductsList({ dataLimit = 16 }) {
	const [productData] = useContext(ProductContext);
	const [currentPage] = useContext(PaginationContext);

	// The start index is calculated using the currentPage and dataLimit and the end index is calculated by adding the start index and the dataLimit
	const getPaginatedData = () => {
		const startIndex = currentPage * dataLimit - dataLimit;
		const endIndex = startIndex + dataLimit;
		return productData.slice(startIndex, endIndex);
	};
	return (
		<main className="productsList">
			{getPaginatedData().map((product) => (
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
