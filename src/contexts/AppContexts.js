import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
	const [hoverProduct, setHoverProduct] = useState(false);

	return (
		<AppContext.Provider value={{ hoverProduct, setHoverProduct }}>
			{children}
		</AppContext.Provider>
	);
}
