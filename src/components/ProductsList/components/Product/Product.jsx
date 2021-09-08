import React, { useState, useContext } from "react";

// AppContext
import { UserContext } from "../../../../contexts/userContext";

//Fetch Redeem product
import { redeemProducts } from "../../../../utilities/fetchInfo";

//SweetAlert2 library
import Swal from "sweetalert2";

// Styles
import "./Product.style.css";
import "./ProductHover.style.css";

export default function Product({ name, category, img, cost, id }) {
	const [hoverProduct, setHoverProduct] = useState(false);
	const [redeemProduct, setRedeemProduct] = useState(false);
	const [userData, setUserData] = useContext(UserContext);

	// Handle to configure products history and the user data once the
	// product is redeemed
	const handleRedeemProduct = (id, cost, userPoints) => {
		const redeemed = redeemProducts(id);
		const userNewPoints = userPoints - cost;
		setUserData({ ...userData, points: userNewPoints });
		setRedeemProduct(redeemed);
	};

	// Message of redeem products according to the success of the fetch data
	const redeemMessage = () => {
		if (redeemProducts === true) {
			setRedeemProduct(!redeemProduct);
		}

		!redeemProduct
			? Swal.fire({
					customClass: {
						confirmButton: "swalBtnColor",
					},
					icon: "success",
					title: "Congratulations!",
					text: "You've redeem the product successfully!",
					timer: 4000,
			  })
			: Swal.fire({
					customClass: {
						confirmButton: "swalBtnColor",
					},
					icon: "error",
					title: "Oops...Something went wrong",
					text: "Please try it in a few minutes!",
					timer: 4000,
			  });
	};

	return (
		<>
			{!hoverProduct ? (
				<div className="product" onMouseEnter={() => setHoverProduct(true)}>
					{cost > userData.points ? (
						<div className="RedeemInfoContainer">
							<p>You need {cost - userData.points}</p>
							<img src="/assets/icons/coin.svg" alt="coin icon" />
						</div>
					) : (
						<img
							className="product-buyIcon"
							src="/assets/icons/buy-blue.svg"
							alt="buy blue icon"
						/>
					)}

					<img
						lazy="loading"
						className="product-img"
						src={img.url}
						alt="product"
					/>
					<div className="product-separator"></div>
					<span>{category}</span>
					<h3>{name}</h3>
				</div>
			) : (
				<div
					className="product hover"
					onMouseLeave={() => setHoverProduct(false)}
				>
					<div className="product-layer hover">
						<img
							className="product-buyIcon hover"
							src="/assets/icons/buy-white.svg"
							alt="buy white icon"
						/>
						<div className="product-value hover">
							<span>{cost}</span>
							<img src="/assets/icons/coin.svg" alt="Coin icon" />
						</div>

						<button
							className={`product-redeem_button hover ${
								cost > userData.points ? "display-none" : ""
							}`}
							type="button"
							onClick={() => {
								redeemMessage();
								handleRedeemProduct(id);
							}}
						>
							Redeem now
						</button>
					</div>
					<img className="product-img" src={img.hdUrl} alt="product" />
					<div className="product-separator"></div>
					<span>{category}</span>
					<h3>{name}</h3>
				</div>
			)}
		</>
	);
}
