import React, { useContext, useMemo } from "react";

// Context
import { ProductContext } from "../../contexts/productContexts";
import { PaginationContext } from "../../contexts/paginationContext";
import { FilterContext, FILTERS } from "../../contexts/filterContext";

// Styles
import "./PaginationBar.style.css";

import ProductsList from "../ProductsList/ProductsList";

export default function FilterBar({ dataLimit = 16 }) {
	const [productData] = useContext(ProductContext);
	const [currentPage, setCurrentPage] = useContext(PaginationContext);
	const [filter, setFilter] = useContext(FilterContext);

	// Pagination
	const pages = Math.round(productData.length / dataLimit);

	// Enumerate the products according to the pagination number
	const numProducts = Math.min(
		currentPage * dataLimit - dataLimit + dataLimit,
		productData.length
	);

	// Handle the next page
	function nextPage() {
		setCurrentPage((page) => page + 1);
	}

	// Handle the previous page
	function previousPage() {
		setCurrentPage((page) => page - 1);
	}

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

	// Handle event of the buttons filter
	const handleFilter = (e) => {
		setFilter(e.target.innerHTML);
	};

	return (
		<>
			<div className="filterBar">
				<div className="filterBar-sort">
					<span>
						{numProducts} of {""}
						{productData.length} products
					</span>
					<div className="filterBar-sort_verticalLine"></div>
					<span>Sort by:</span>
					{FILTERS.map((item, index) => {
						return (
							<button
								type="button"
								value={item.value}
								className="filterBar-sort_filter"
								key={index}
								onClick={handleFilter}
							>
								{item.value}
							</button>
						);
					})}
				</div>
				<div className="filterBar-arrows">
					<img
						src="/assets/icons/arrow-left.svg"
						alt="Arrow left icon"
						onClick={previousPage}
						className={`prev ${currentPage === 1 ? "disabled" : ""}`}
					/>
					<img
						src="/assets/icons/arrow-right.svg"
						alt="Arrow right icon"
						onClick={nextPage}
						className={`next ${currentPage === pages ? "disabled" : ""}`}
					/>
				</div>
			</div>
			<div className="filterBar-separator"></div>
			<ProductsList filteredProducts={filteredProducts} />
		</>
	);
}
