import React from "react";

// Components
import PaginationBar from "../components/PaginationBar/PaginationBar";
import FilterBar from "../components/FilterBar/FilterBar";
import ProductsList from "../components/ProductsList/ProductsList";
import Hero from "../components/Hero/Hero";

export default function RedeemStore() {
	return (
		<>
			<Hero />
			<section className="principalBar">
				<PaginationBar />
				<FilterBar />
			</section>
			<ProductsList />
			<PaginationBar />
		</>
	);
}
