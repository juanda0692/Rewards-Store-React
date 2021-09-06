import React, { useState, createContext, useEffect } from "react";

export const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		setCurrentPage(currentPage);
	}, [currentPage]);

	return (
		<PaginationContext.Provider value={[currentPage, setCurrentPage]}>
			{children}
		</PaginationContext.Provider>
	);
};
