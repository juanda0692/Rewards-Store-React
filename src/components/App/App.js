// Components
import Header from "../../components/Header/Header.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import FilterBar from "../../components/FilterBar/FilterBar.jsx";
import ProductsList from "../../components/ProductsList/ProductsList.jsx";
import FooterBar from "../../components/FooterBar/FooterBar.jsx";

// Context provider
import { ProductProvider } from "../../contexts/productContexts.js";
import { UserProvider } from "../../contexts/userContext.js";

// Styles
import "./App.styles.css";

function App() {
	return (
		<UserProvider>
			<ProductProvider>
				<div className="container">
					<Header />
					<Hero />
					<FilterBar />
					<ProductsList />
					<FooterBar />
				</div>
			</ProductProvider>
		</UserProvider>
	);
}

export default App;
