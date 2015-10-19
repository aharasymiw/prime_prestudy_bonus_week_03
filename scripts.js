function function1 (a) {
	return a*a;
}

function function2 (a) {
	return a+1;
}

function function3 (a) {
	return a-1;
}

var maxInt = 94906265
var seed = 0;
var result = 0;

var isNumber = false;

while (isNumber == false) {
	seed = prompt("Pick a number, any number (as long as it's possitive and less than or equal to " + maxInt + ":");
	seed = Math.abs(parseInt(seed));

	if (seed === parseInt(seed) && seed <= maxInt) {
		isNumber = true;
	}
	else {
		alert("Hey now, that's not a number, (at least not a proper one.)");
	}
}

result = function1(function2(function3(seed)));

document.write('<h1>Is this the square of your number?</h1>');
document.write('<h2>Result: </h2>');
document.write('<p>');
document.write(result);
document.write('</p>');

confirm("Well, is it?");