import React, { useContext } from "react";

import { ProductContext } from "../../contexts/productContexts.js";
import { PaginationContext } from "../../contexts/paginationContext";

// Styles
import "./FooterBar.style.css";

export default function FooterBar({ dataLimit = 16 }) {
	const [productData] = useContext(ProductContext);
	const [currentPage, setCurrentPage] = useContext(PaginationContext);

	const pages = Math.round(productData.length / dataLimit);

	function previousPage() {
		setCurrentPage((page) => page - 1);
	}

	function nextPage() {
		setCurrentPage((page) => page + 1);
	}
	return (
		<>
			<div className="footerBar">
				<span>16 of 32 products</span>
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
			<div className="footerBar-separator"></div>
		</>
	);
}
