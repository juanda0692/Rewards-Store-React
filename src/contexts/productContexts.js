import React, { useState, createContext, useEffect } from "react";
import { getProducts } from "../utilities/fetchInfo";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
	const [productData, setProductData] = useState([]);

	useEffect(() => {
		getProducts(setProductData);
	}, []);

	return (
		<ProductContext.Provider value={[productData, setProductData]}>
			{children}
		</ProductContext.Provider>
	);
};
