import React, { useContext, useState } from "react";

// addCoins post function
import { addCoins } from "../../utilities/fetchInfo";

// UserContext
import { UserContext } from "../../contexts/userContext";

// React Router DOM
import { Link } from "react-router-dom";

// Styles
import "./Header.style.css";

export default function Header() {
	// Import the user data from the userContext file
	const [userData, setUserData] = useContext(UserContext);
	const [menuCoins, setMenuCoins] = useState(true);

	const handleMenuCoins = (e) => {
		e.preventDefault();
		setMenuCoins(!menuCoins);
	};

	// Handle event to add user coins
	const handlePostCoins = (amount) => {
		addCoins(amount, userData, setUserData);
	};

	return (
		<header className="header">
			<Link to="/">
				<img src="/assets/aerolab-logo.svg" alt="Logo" />
			</Link>
			<div className="header-user">
				<span>{userData.name}</span>
				<div className="header-user_coins">
					<span>{userData.points}</span>
					<img
						onClick={handleMenuCoins}
						src="/assets/icons/coin.svg"
						alt="Coin icon"
					/>
					{!menuCoins ? (
						<ul className="header-menu_coins">
							<h4>Add Coins</h4>
							<li onClick={() => handlePostCoins(1000)}>
								<span>1000</span>
								<img src="/assets/icons/coin.svg" alt="Coin icon" />
							</li>
							<li onClick={() => handlePostCoins(5000)}>
								<span>5000</span>
								<img src="/assets/icons/coin.svg" alt="Coin icon" />
							</li>
							<li onClick={() => handlePostCoins(7500)}>
								<span>7500</span>
								<img src="/assets/icons/coin.svg" alt="Coin icon" />
							</li>
						</ul>
					) : null}
				</div>
				<Link to="/redeem-history">
					<button className="header-user_redeemed" type="button">
						Redeemed Products
					</button>
				</Link>
			</div>
		</header>
	);
}
