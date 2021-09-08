import React, { useContext, useMemo } from "react";

// Component
import Product from "./components/Product/Product";

// Context
import { ProductContext } from "../../contexts/productContexts.js";
import { PaginationContext } from "../../contexts/paginationContext.js";
import { FilterContext } from "../../contexts/filterContext";

// Styles
import "./ProductsList.style.css";

export default function ProductsList({ dataLimit = 16 }) {
	const [productData] = useContext(ProductContext);
	const [currentPage] = useContext(PaginationContext);
	const [filter] = useContext(FilterContext);

	// Conditional Switch to set the products by cost filter
	const filteredProducts = useMemo(() => {
		switch (filter) {
			case "Highest Price": {
				return [...productData].sort((a, b) => b.cost - a.cost);
			}

			case "Lowest Price": {
				return [...productData].sort((a, b) => a.cost - b.cost);
			}

			case "Most Recent":
			default: {
				return productData;
			}
		}
	}, [filter, productData]);

	// Function for slice the product data to calculated the currentPage and dataLimit
	const getPaginatedData = () => {
		const startIndex = currentPage * dataLimit - dataLimit;
		const endIndex = startIndex + dataLimit;
		return filteredProducts.slice(startIndex, endIndex);
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
