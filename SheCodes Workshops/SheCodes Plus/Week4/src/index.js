function showAlert(event) {
	event.preventDefault();
	event.target.innerHTML = "18 degrees";
}

let buttonEvent = document.querySelector("#button");
buttonEvent.addEventListener("click", showAlert);

// When the button is clicked, replace button label by ‘18 degrees’
