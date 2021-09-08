import React, { useState, createContext } from "react";

export const FilterContext = createContext();

export const FILTERS = [
	{
		value: "Most Recent",
	},
	{
		value: "Highest Price",
	},
	{
		value: "Lowest Price",
	},
];

export const FilterProvider = ({ children }) => {
	const [filter, setFilter] = useState(FILTERS[0].value);

	return (
		<FilterContext.Provider value={[filter, setFilter]}>
			{children}
		</FilterContext.Provider>
	);
};
