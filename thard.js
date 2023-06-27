//description (3) --- You have to take a function, the name of the function is 'isLGSeven'. If the number is less than 7, the function returns the subtraction of 7 from the number-return subtraction; If the number is greater than or equal to 7, the function returns the result of multiplying the number by 2-return multiplies;

function isLGSeven(number) {
	if (number < 7) {
		let subtraction = number - 7;
		return subtraction;
	} else {
		let multiplies = number * 2;
		return multiplies;
	}
}
const finalResult = isLGSeven(15);
