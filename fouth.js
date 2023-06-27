// description (4) ---this function we takes a input likes array.where some number as like positive and negative number. then if the number is negative i return it  'badData' otherwise i return the function  'goodData'.

function findingBadData(arr) {
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			count++;
		}
	}
	return count;
}
let arr = [2, -5, -7, -13];
const finalResult = findingBadData(arr);
console.log(finalResult);
