//description (2) ---You have to take a function, the name of the function is 'evenOdd'.this function we get some string and firstly we find out how many character in this string divided the number of string with 2.if the output is ==0 then return even, otherwise return Odd;

function evenOdd(str) {
	let result = '';
	for (let i = 0; i < str.length; i++) {
		if (str.length % 2 == 0) {
			result = 'Even';
		} else {
			result = 'Odd';
		}
	}
	return result;
}
const finalResult = evenOdd('Batch7');
console.log(finalResult);
