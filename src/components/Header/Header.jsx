import React from "react";

// Styles
import "./Header.style.css";

export default function Header() {
	return (
		<header className="header">
			<img src="/assets/aerolab-logo.svg" alt="Logo" />
			<div className="header-user">
				<span>John Doe</span>
				<div className="header-user_coins">
					<span>6000</span>
					<img src="/assets/icons/coin.svg" alt="Coin icon" />
				</div>
			</div>
		</header>
	);
}
