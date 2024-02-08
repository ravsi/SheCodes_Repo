function isWindy(speed) {
  
   return speed>5;
}
let speed = prompt("What is the wind speed?");
isWindy(speed);
   

function isCold(temperature) {
	return temperature <= 10;
}
let temperature = prompt("What is the temperature today?");

isCold(temperature);



function isWindy(speed, unit) {
	return speed > 5 && unit === "metric";
}
let unit = prompt("Enter unit (metric/imperial)");
isWindy(speed, unit);