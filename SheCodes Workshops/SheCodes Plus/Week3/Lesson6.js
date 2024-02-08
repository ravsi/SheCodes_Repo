// challenge 1
let weather = {};
console.log(weather);
// challenge 2
weather.temp = 30;
weather.humidityPercent = 10.5;
console.log(weather);
// Challenge 3
console.log(weather.temp, weather.humidityPercent);
// challenge 4
weather.windSpeed = 5;
console.log(weather.windSpeed);
// challenge 5
for (let property in weather) {
	console.log(weather[property]);
}
console.log(weather.windSpeed);
// challenge 6
let forcast = [
	{ day: "Monday", temperature: 25 },
	{ day: "Tuesday", temperature: 34 },
	{ day: "Wednesday", temperature: 25 },
	{ day: "Thursday", temperature: 37.2 },
	{ day: "Friday", temperature: 29 },
	{ day: "Saturday", temperature: 19 },
	{ day: "Sunday", temperature: 25 },
];
function display(dayTemp) {
	console.log(dayTemp.day, dayTemp.temperature);
}
forcast.forEach(display);
