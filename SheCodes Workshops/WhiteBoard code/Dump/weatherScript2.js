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

// attempt 1
function data1(weather) {
	let city = prompt("Enter the name of the city");
	city = city.toLowerCase().trim();
	let found = false;
	for (let x in weather) {
		if (city === x) {
			found = true;
			break;
		}
	}
	if (found) {
		alert(
			`It is currently ${weather[x].temp}(66°F) in ${x} with a humidity of ${weather[x].humidity}%`
		);
	} else {
		alert(
			`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
		);
	}
}

let cityButton1 = document.querySelector(".selectButton");
cityButton1.addEventListener("click", data1);

// attempt 2
/* let city = prompt("Enter the name of the city");
city = city.toLowerCase().trim();

if (weather.hasOwnProperty(city)) {
	alert(
		`It is currently ${weather[city].temp}(66°F) in ${city} with a humidity of ${weather[city].humidity}%`
	);
} else {
	alert(
		`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
	);
}
 */
//attempt 3
const weatherLength = Object.keys(weather).length;

function checkElement(weatherData, targetCity) {
	let found = false;

	for (let x in weather) {
		if (city === x) {
			found = true;
			alert(
				`It is currently ${weather[x].temp}(66°F) in ${x} with a humidity of ${weather[x].humidity}%`
			);
			break;
		}
	}
	if (!found) {
		alert(
			`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
		);
	}
}

checkElement(weather, city);

//attempt 4

/* function data() {
	let city = prompt("Enter the name of the city");
	city = city.toLowerCase().trim();
	let found = false;
	for (let x in weather) {
		if (city === x) {
			found = true;
			alert(
				`It is currently ${weather[x].temp}(66°F) in ${x} with a humidity of ${weather[x].humidity}%`
			);
			break;
		}
		if (!found) {
			alert(
				`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
			);
			break;
		}
	}
}

let cityButton = document.querySelector(".selectButton");
cityButton.addEventListener("click", data);
 */
