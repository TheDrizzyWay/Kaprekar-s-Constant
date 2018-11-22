 "use strict";

 const myForm = document.getElementById("my-form");
 myForm.addEventListener("submit", checkInput);
 let counter = 0;
 let resultArray = [];
 let outputDiv = document.getElementById("output");

 function checkInput(e){
	e.preventDefault();
	const digit = parseInt(document.getElementById("num-input").value);
	let digitString = digit.toString();
	let digitSet = new Set(digitString);
    // check type of input and length

	if (typeof digit != "number" || digitString.length != 4){
		outputDiv.className = "output-class-red";
		outputDiv.innerHTML = `Please enter a four digit number.`;
	// check if all digits are not the same
	} else if (digitSet.size == 1){
		outputDiv.className = "output-class-red";
		outputDiv.innerHTML = `All digits should not be the same`;
	} else {
		resultArray.push(digitString);
		kaprekar();
    }
}


function kaprekar(){
	let x = resultArray.pop();
	let lowDigit = x.split("").sort().join("");
	let highDigit = x.split("").sort().reverse().join("");
	let result = highDigit - lowDigit;
	counter++ ;

	if (counter > 7){
		outputDiv.className = "output-class-red";
		outputDiv.innerHTML = `The number you entered is a repdigit.`;
		counter = 0;
	} else if (result !== 6174){
		result = result.toString();
		resultArray.push(result);
		kaprekar();
	} else {
		outputDiv.className = "output-class-green";
		outputDiv.innerHTML = `${counter} iterations.`;
		counter = 0;
	}
}
// 1110, 8898, 7767 and 9989 are repdigits.
