import React from "react";

// Styles
import "./FilterBar.style.css";

export default function FilterBar() {
	return (
		<>
			<div className="filterBar">
				<div className="filterBar-sort">
					<span>16 of 32 products</span>
					<div className="filterBar-sort_verticalLine"></div>
					{/* <div className="filterBar-sort_filters"> */}
					<span>Sort by:</span>
					<span className="filterBar-sort_filter">Most Recent</span>
					<span className="filterBar-sort_filter">Lowest Price</span>
					<span className="filterBar-sort_filter">Highest Price</span>
					{/* </div> */}
				</div>
				<img src="/assets/icons/arrow-right.svg" alt="Arrow right icon" />
			</div>
			<div className="filterBar-separator"></div>
		</>
	);
}
