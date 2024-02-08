/* Feature 1: Function to display the UTC hour and day of the week  */

let date = new Date();
const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
let day = days[date.getDay()];
let hours = date.getHours();
let minutes = date.getMinutes();
let timeStamp = document.querySelector("#timeStamp");
timeStamp.innerHTML = `${day} ${hours}:${minutes}`;

/* Function to display searched city  */

function displaySearchedCity() {
	const searchCity = document.querySelector("#searchCity");
	const cityNameDisplay = document.querySelector("#displayCityName");
	cityName = searchCity.value; // Update the global cityName
	cityNameDisplay.innerHTML = cityName;
	updateWeatherData(); // Trigger weather update
}

let searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", displaySearchedCity);

/* function to toggle between ºc to ºf */

let celsiusTemperature = parseFloat(
	extractNumericValue(document.querySelector("#currentCityTemp").textContent)
);
let fahrenheitTemperature = convertToFahrenheit(celsiusTemperature); // Initial conversion

let isCelsius = true;

function extractNumericValue(text) {
	return parseFloat(text.replace(/[^0-9.-]/g, ""));
}

function convertToCelsius(fahrenheit) {
	return (fahrenheit - 32) / 1.8;
}

function convertToFahrenheit(celsius) {
	return celsius * 1.8 + 32;
}

function changeTempUnit(event) {
	let temperatureElement = document.querySelector("#currentCityTemp");

	if (isCelsius) {
		// Toggle to Fahrenheit
		temperatureElement.innerHTML = `${fahrenheitTemperature.toFixed(1)}°F`;
	} else {
		// Toggle to Celsius
		temperatureElement.innerHTML = `${celsiusTemperature.toFixed(1)}°C`;
	}

	isCelsius = !isCelsius; // Toggle the flag

	event.preventDefault();
}

let temperature = document.querySelector("#temperature");
temperature.addEventListener("click", changeTempUnit);

const apiKey = "fab9ef0ob5eb3bc4c4c4ec6eat913133";
let cityName = document.querySelector("#searchCity").value;
const geoApiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}`;
let temperatureApiUrl;
console.log("geoAPI is " + geoApiUrl);

function getCityData(cityResponse) {
	console.log(cityResponse);
	const lat = cityResponse.data.coordinates.latitude;
	const lon = cityResponse.data.coordinates.longitude;
	let weatherApiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}`;
	console.log("weatherApiUrl is " + weatherApiUrl);
	return weatherApiUrl;
}

function getWeatherData(weatherResponse) {
	// let cityTemperature = Math.round(weatherResponse.data.temperature.current);
	let cityTemperature = weatherResponse.data.temperature.current;
	// Update both Celsius and Fahrenheit temperatures
	celsiusTemperature = cityTemperature;
	fahrenheitTemperature = convertToFahrenheit(celsiusTemperature);

	let temperatureElement = document.querySelector("#currentCityTemp");
	temperatureElement.innerHTML = `${celsiusTemperature.toFixed(1)}°C`;
}

function updateWeatherData() {
	let newGeoApiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}`;
	axios
		.get(newGeoApiUrl)
		.then(getCityData)
		.then((apiUrl) => {
			temperatureApiUrl = apiUrl;
			return axios.get(temperatureApiUrl);
		})
		.then(getWeatherData)
		.catch((error) => {
			console.error("Error updating weather data:", error);
		});
}

axios
	.get(geoApiUrl)
	.then(getCityData)
	.then((apiUrl) => {
		temperatureApiUrl = apiUrl;
		return axios.get(temperatureApiUrl);
	})
	.then(getWeatherData)
	.catch((error) => {
		console.error("Error initializing weather data:", error);
	});
