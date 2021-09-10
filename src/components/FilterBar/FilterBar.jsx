import React, { useContext, useEffect } from "react";

// Context
import { FilterContext, FILTERS } from "../../contexts/filterContext";

// Styles
import "./FilterBar.style.css";

export default function FilterBar() {
	const [filter, setFilter] = useContext(FilterContext);

	//  Handle event of the buttons filter
	const handleFilter = (e) => {
		setFilter(e.target.value);
	};

	// useEffect to handle the filter side effects
	useEffect(() => {
		setFilter(filter);
	}, [filter, setFilter]);

	return (
		<div className="filterBar">
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
	);
}
