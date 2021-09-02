import React from "react";

// Components
import FilterBar from "../components/FilterBar/FilterBar";
import ProductsList from "../components/ProductsList/ProductsList";
import Hero from "../components/Hero/Hero";
import FooterBar from "../components/FooterBar/FooterBar";

export default function RedeemStore() {
	return (
		<>
			<Hero />
			<FilterBar />
			<ProductsList />
			<FooterBar />
		</>
	);
}
