import React, { useState, createContext, useEffect } from "react";
import { fetchUser } from "../utilities/fetchInfo";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [userData, setUserData] = useState({
		name: "",
		points: 0,
	});

	useEffect(() => {
		fetchUser(setUserData);
	}, [userData.points]);

	return (
		<UserContext.Provider value={[userData, setUserData]}>
			{children}
		</UserContext.Provider>
	);
};
