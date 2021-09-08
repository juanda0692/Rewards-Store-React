// Components
import Header from "../../components/Header/Header.jsx";

// Pages
import RedeemHistory from "../../pages/RedeemHistory.jsx";
import RedeemStore from "../../pages/RedeemStore.jsx";

// Context provider
import { ProductProvider } from "../../contexts/productContexts.js";
import { UserProvider } from "../../contexts/userContext.js";
import { PaginationProvider } from "../../contexts/paginationContext.js";
import { FilterProvider } from "../../contexts/filterContext.js";

// React router DOM
import { Switch, Route } from "react-router-dom";

// Styles
import "./App.styles.css";

function App() {
	return (
		<UserProvider>
			<ProductProvider>
				<PaginationProvider>
					<FilterProvider>
						<div className="container">
							<Header />
							<Switch>
								<Route exath path="/" exact component={RedeemStore} />
								<Route exath="/redeem-history" component={RedeemHistory} />
							</Switch>
						</div>
					</FilterProvider>
				</PaginationProvider>
			</ProductProvider>
		</UserProvider>
	);
}

export default App;
