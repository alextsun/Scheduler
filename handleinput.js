"use strict";
window.onload = function() {
	console.log("lookig");
	document.getElementById("submit2").onclick = processInput;
}

function processInput() {
	console.log("looking");
	var password1 = document.getElementById("password1").value;
	var password2 = document.getElementById("password2").value;
	var totalError = "";
	if(password1 != password2) {
		totalError += "Passwords do not match'\n'";
	}
	var email = document.getElementById("email").value;
	var reg = new RegExp(".*@.*\.[a-z]{3}");
	if(!reg.test(email)) {
		totalError += "Email not valid.  [user]@[domain].[type]'\n'";
	}
	if(totalError != "") {
		alert(totalError);
	} else {
		var ajax = new XMLHttpRequest();
		ajax.open("GET", "handlerregistration.php?user=" + )
	}
}
