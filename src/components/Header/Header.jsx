import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

// Styles
import "./Header.style.css";

export default function Header() {
	const [userData] = useContext(UserContext);
	return (
		<header className="header">
			<img src="/assets/aerolab-logo.svg" alt="Logo" />
			<div className="header-user">
				<span>{userData.name}</span>
				<div className="header-user_coins">
					<span>{userData.points}</span>
					<img src="/assets/icons/coin.svg" alt="Coin icon" />
				</div>
			</div>
		</header>
	);
}
