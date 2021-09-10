import React from "react";
import "./Hero.style.css";

// Contants
import { URLS } from "../../utilities/utils";

export default function Hero() {
	return (
		<div className="hero">
			<img src={`${URLS.publicPath}/assets/header-x1.png`} alt="Hero img" />
			<h1>Electronics</h1>
		</div>
	);
}
