const apiKey = "a2dda52dce059eb8a14e95aaa0db6ab7";
let cityName = "Sydney";
let geoApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;
let temperatureApiUrl;
// console.log(geoApiUrl);

function getCityData(cityResponse) {
	const lat = cityResponse.data[0].lat;
	const lon = cityResponse.data[0].lon;
	let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
	return weatherApiUrl;
}

axios
	.get(geoApiUrl)
	.then(getCityData)
	.then((apiUrl) => {
		temperatureApiUrl = apiUrl; // Assign the result to temperatureApiUrl
	})
	.then(() => {
		axios.get(temperatureApiUrl).then(getWeatherData);
	});

function getWeatherData(weatherResponse) {
	let cityTemperature = Math.round(weatherResponse.data.main.temp, 2); // Fixed variable name to 'weatherResponse'
	let titleText = document.querySelector("h1");
	console.log(`The temperature in ${cityName} is ${cityTemperature}ºC`);
	titleText.innerHTML = `The temperature in ${cityName} is ${cityTemperature}ºC`;
}
