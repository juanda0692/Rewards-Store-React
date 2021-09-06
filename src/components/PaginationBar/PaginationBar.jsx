import React, { useContext } from "react";

// Context
import { ProductContext } from "../../contexts/productContexts";
import { PaginationContext } from "../../contexts/paginationContext";

//Custom Hooks
// import usePagination from "../../hooks/usePagination";

// Styles
import "./PaginationBar.style.css";

export default function FilterBar({ dataLimit = 16 }) {
	const [productData] = useContext(ProductContext);
	const [currentPage, setCurrentPage] = useContext(PaginationContext);
	// const { previousPage, nextPage, getPaginatedData, dataLimit } = usePagination;

	const pages = Math.round(productData.length / dataLimit);

	const numProducts = Math.min(
		currentPage * dataLimit - dataLimit + dataLimit,
		productData.length
	);

	function previousPage() {
		setCurrentPage((page) => page - 1);
	}

	function nextPage() {
		setCurrentPage((page) => page + 1);
	}

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
					<span className="filterBar-sort_filter">Most Recent</span>
					<span className="filterBar-sort_filter">Lowest Price</span>
					<span className="filterBar-sort_filter">Highest Price</span>
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
		</>
	);
}
