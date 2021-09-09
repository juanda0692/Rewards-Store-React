import React, { useContext } from "react";

// Context
import { ProductContext } from "../../contexts/productContexts";
import { PaginationContext } from "../../contexts/paginationContext";

// Styles
import "./PaginationBar.style.css";

export default function PaginationBar({ dataLimit = 16 }) {
	const [productData] = useContext(ProductContext);
	const [currentPage, setCurrentPage] = useContext(PaginationContext);

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

	return (
		<>
			<div className="paginationBar">
				<div className="paginationBar-sort">
					<span>
						<b>{numProducts}</b> of {""}
						<b>{productData.length}</b> products
					</span>
					<div className="paginationBar-sort_verticalLine"></div>
				</div>
				<div className="paginationBar-arrows">
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
			<div className="paginationBar-separator"></div>
		</>
	);
}
