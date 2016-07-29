// math.js, functions called by forms in the display.html file

function answerOne() {
    var a = document.forms["form-one"]["in-one"].value;
	var b = document.getElementById("result-one").innerHTML;
    if (a == 4) {
	  b = "<b>Correct</b>";
	}
	else if (a == "") {
	  b = "<b>Please enter a value</b>";
	}
	else {
	  b = "<b>Incorrect</b>";
        }
}

function answerTwo() {
    var a = document.forms["form-two"]["in-two"].value;
	var b = document.getElementById("result-two").innerHTML;
	if (a == 5) {
	  b = "<b>Correct</b>";
	}
	else if (a == "") {
	  b = "<b>Please enter a value</b>";
	}
	else {
	  b = "<b>Incorrect</b>";
	}
}

function answerThree() {
    var a = document.forms["form-three"]["in-three"].value;
	var b = document.getElementById("result-three").innerHTML;
	if (a == 34.6) {
	  b = "<b>Correct</b>";
	}
	else if (a == "") {
	  b = "<b>Please enter a value</b>";
	}
	else {
	  b = "<b>Incorrect</b>";
	}
}
