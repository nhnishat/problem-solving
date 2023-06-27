// description (1) ---You have to take a function, the name of the function is 'mindgame' then you have to take a parameter inside the function, parameter name number, then in that parameter, first multiply, second add, third, divide, then subtract, then return the result.result.

function mindGame(numbers) {
	let multiplies = numbers * 3;
	let add = multiplies + 10;
	let division = add / 2;
	let subtract = division - 5;
	let result = subtract;
	return result;
}
const finalResult = mindGame(5);
console.log(finalResult);
