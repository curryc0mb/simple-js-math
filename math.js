// math.js, functions called by forms in the display.html file

function answerOne() {
    var a = document.forms["form-one"]["in-one"].value;
    if (a == 4) {
	  document.getElementById("result-one").innerHTML = "<b>Correct</b>";
	}
	else if (a == "") {
	  document.getElementById("result-one").innerHTML = "<b>Please enter a value</b>";
	}
	else {
	  document.getElementById("result-one").innerHTML = "<b>Incorrect</b>";
  }
}

function answerTwo() {
    var a = document.forms["form-two"]["in-two"].value;
	if (a == 5) {
	  document.getElementById("result-two").innerHTML = "<b>Correct</b>";
	}
	else if (a == "") {
	  document.getElementById("result-two").innerHTML = "<b>Please enter a value</b>";
	}
	else {
	  document.getElementById("result-two").innerHTML = "<b>Incorrect</b>";
	}
}

function answerThree() {
    var a = document.forms["form-three"]["in-three"].value;
	if (a == 34.6) {
	  document.getElementById("result-three").innerHTML = "<b>Correct</b>";
	}
	else if (a == "") {
	  document.getElementById("result-three").innerHTML = "<b>Please enter a value</b>";
	}
	else {
	  document.getElementById("result-three").innerHTML = "<b>Incorrect</b>";
	}
}
