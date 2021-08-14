const API_URL = "https://coding-challenge-api.aerolab.co";

//
const headers = {
	"Content-Type": "application/json",
	Accept: "application/json",
	Authorization:
		"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTAxYWJhY2Q5MDU1YjAwMjBhNjMzZGEiLCJpYXQiOjE2Mjc0OTk0MzZ9.M7x6M8SXWK4yu70uIXayu8GUSaPMH9M_1s8hfIT1_wA",
};

export const fetchUser = async (setUserData) => {
	try {
		const result = await fetch(`${API_URL}/user/me`, { headers });
		const res = await result.json();
		setUserData(res);
	} catch (error) {
		alert("Ocurrió un error al obtener la información del servidor", error);
	}
};

export const getProducts = async (setProductData) => {
	try {
		const result = await fetch(`${API_URL}/products`, { headers });
		const data = await result.json();
		// const products = data.map((product) => {
		// 	const { name, category, img, cost, _id } = product;
		// 	return { name, category, img, cost, _id };
		// });
		console.log(data);
		setProductData(data);
	} catch (error) {
		alert("Ocurrió un error al obtener la información del servidor", error);
	}
};
