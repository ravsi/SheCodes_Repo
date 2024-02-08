function alertHooray() {
	alert("Hooray!");
}

let button = document.querySelector("#special-button");
button.addEventListener("click", alertHooray);

function alertPwd() {
	let pwdValue = document.querySelector("#password-input");
	alert(pwdValue.value);
}

let pwdSubmit = document.querySelector("#password-form");
pwdSubmit.addEventListener("submit", alertPwd);

function alertDetails() {
	let email = document.querySelector("#email-input");
	let userName = document.querySelector("#username-input");
	alert(`Username is ${userName.value} and email is ${email.value}`);
}

let submitDetailsBtn = document.querySelector("#signup-form");
submitDetailsBtn.addEventListener("submit", alertDetails);
