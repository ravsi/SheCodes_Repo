/*
let weather = {
	paris: {
		temp: 19.7,
		humidity: 80,
	},
	tokyo: {
		temp: 17.3,
		humidity: 50,
	},
	lisbon: {
		temp: 30.2,
		humidity: 20,
	},
	"san francisco": {
		temp: 20.9,
		humidity: 100,
	},
	oslo: {
		temp: -5,
		humidity: 20,
	},
};

function data() {
	// let city = prompt("Enter the name of the city");
	city = searchCity.value;
	// city = city.toLowerCase().trim();
	if (weather.hasOwnProperty(city)) {
		let celsiusTemp = Math.round(weather[city].temp);
		let fahrenheit = Math.round(weather[city].temp * 1.8 + 32);
		alert(
			`It is currently ${celsiusTemp}ºC (${fahrenheit}ºF) in ${city} with a humidity of ${weather[city].humidity}%`
		);
	} else if (city === "") {
		alert("Enter city name");
	} else {
		alert(
			`Sorry, we don't know the weather for this city, try going to 'https://www.google.com/search?q=weather+${city}'`
		);
	}
} 

let cityButton = document.querySelector(".searchButton");
cityButton.addEventListener("click", data);

*/

/* Feature 1: Function to display the UTC hour and day of the week  */

function formatDate(date) {
	let minutes = date.getMinutes();
	let hours = date.getHours();
	let day = date.getDay();

	if (minutes < 10) {
		minutes = `0${minutes}`;
	}

	if (hours < 10) {
		hours = `0${hours}`;
	}

	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	let formattedDay = days[day];
	return `${formattedDay} ${hours}:${minutes}`;
}

let currentDateELement = document.querySelector("#timeStamp");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

/* Function to display searched city  */

function displaySearchedCity() {
	let searchCity = document.querySelector("#searchCity");
	let cityNameDisplay = document.querySelector("#displayCityName");
	cityNameDisplay.innerHTML = searchCity.value;
}

let searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", displaySearchedCity);

/* function to toggle between ºc to ºf */

let celsiusTemperature = parseFloat(
	extractNumericValue(document.querySelector("#celsiusTemp").textContent)
);

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
	if (isCelsius) {
		// Toggle to Fahrenheit
		let fahrenheitTemp = convertToFahrenheit(celsiusTemperature);
		celsiusTemperature = fahrenheitTemp;
		document.querySelector(
			"#celsiusTemp"
		).textContent = `${fahrenheitTemp.toFixed(1)}°F`;
	} else {
		// Toggle to Celsius
		let celsiusTemp = convertToCelsius(celsiusTemperature);
		celsiusTemperature = celsiusTemp;
		document.querySelector("#celsiusTemp").textContent = `${celsiusTemp.toFixed(
			1
		)}°C`;
	}

	isCelsius = !isCelsius; // Toggle the flag

	event.preventDefault();
}

let temperature = document.querySelector("#temperature");
temperature.addEventListener("click", changeTempUnit);

let searchInputElement = document.querySelector("#searchCity");
function searchCity(event) {
	event.preventDefault();
	let cityElement = document.querySelector("#current-city");
	cityElement.innerHTML = searchInputElement.value;
}

let searchForm = document.querySelector("#searchCity");
searchForm.addEventListener("submit", searchCity);

// adding the search engine functionality
const apiKey = "fab9ef0ob5eb3bc4c4c4ec6eat913133";
let cityName = searchInputElement.value;
console.log(cityName);
let geoApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;
// `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}`;
console.log("geoApiUrl is" + geoApiUrl);
let temperatureApiUrl;

let searchInput = document.querySelector("#search-input");
// let searchButton = document.querySelector("#search-button");

function searchCityWeather(cityResponse) {
	const lat = cityResponse.data[0].lat;
	const lon = cityResponse.data[0].lon;
	const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
	console.log(weatherApiUrl);
	return weatherApiUrl;
}

axios
	.get(geoApiUrl)
	.then(searchCityWeather)
	.then((apiUrl) => {
		temperatureApiUrl = apiUrl; // Assign the result to temperatureApiUrl
	})
	.then(() => {
		axios.get(temperatureApiUrl).then(getWeatherData);
	});

function getWeatherData(weatherResponse) {
	let cityTemperature = Math.round(weatherResponse.data.main.temp); // Fixed variable name to 'weatherResponse'
	let temperatureValue = document.querySelector(".current-temperature-value");
	temperatureValue.innerHTML = `${cityTemperature}ºC`;
}

searchButton.addEventListener("submit", searchCityWeather);
