// API challenge URL
const API_URL = "https://coding-challenge-api.aerolab.co";

// Create the headers object to perform the fetch request
const headers = {
	"Content-Type": "application/json",
	Accept: "application/json",
	Authorization:
		"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTAxYWJhY2Q5MDU1YjAwMjBhNjMzZGEiLCJpYXQiOjE2Mjc0OTk0MzZ9.M7x6M8SXWK4yu70uIXayu8GUSaPMH9M_1s8hfIT1_wA",
};

// Get the user´s data with a fetch request to the API
export const fetchUser = async (setUserData) => {
	try {
		const result = await fetch(`${API_URL}/user/me`, { headers });
		const data = await result.json();
		setUserData(data);
	} catch (error) {
		alert("Ocurrió un error al obtener la información del servidor", error);
	}
};

// Get the list of products with a fetch request to the API
export const getProducts = async (setProductData) => {
	try {
		const result = await fetch(`${API_URL}/products`, { headers });
		const data = await result.json();
		setProductData(data);
	} catch (error) {
		alert("Ocurrió un error al obtener la información del servidor", error);
	}
};

// Add coins to the user through the fetch post to the API
export const addCoins = async (amount, userData, setUserData) => {
	let amountCoins = JSON.stringify({ amount: amount });

	let requestOptions = {
		method: "POST",
		headers,
		body: amountCoins,
	};

	try {
		const result = await fetch(`${API_URL}/user/points`, requestOptions);
		const newPointsData = await result.json();
		let newPointsState = { ...userData };
		newPointsState.points = newPointsData["new Points"];
		setUserData(newPointsState);
	} catch (error) {
		alert("Ocurrió un error al obtener la información del servidor", error);
	}
};
