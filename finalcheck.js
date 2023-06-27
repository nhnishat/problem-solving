// description (1) ----> You have to take a function, the name of the function is 'mindGame' then you have to take a parameter inside the function, parameter name number, then in that parameter, first multiply, second add, third, divide, then subtract, then return the result.result.

function mindGame(numbers) {
	let multiplies = numbers * 3;
	let add = multiplies + 10;
	let division = add / 2;
	let subtract = division - 5;
	let result = subtract;
	return result;
}
// const finalResult = mindGame(5);
// console.log(finalResult);

//description (2) ----> You have to take a function, the name of the function is 'evenOdd'.this function we get some string and firstly we find out how many character in this string divided the number of string with 2.if the output is ==0 then return even, otherwise return Odd;

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
// const finalResult = evenOdd('Batch7');
// console.log(finalResult);

//description (3) ----> You have to take a function, the name of the function is 'isLGSeven'. If the number is less than 7, the function returns the subtraction of 7 from the number-return subtraction; If the number is greater than or equal to 7, the function returns the result of multiplying the number by 2-return multiplies;

function isLGSeven(number) {
	if (number < 7) {
		let subtraction = number - 7;
		return subtraction;
	} else {
		let multiplies = number * 2;
		return multiplies;
	}
}
// const finalResult = isLGSeven(6);
// console.log(finalResult);

// description (4) ----> this function we takes a input likes array.where some number as like positive and negative number. then if the number is negative i return it  'badData' otherwise i return the function  'goodData'.

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
// const finalResult = findingBadData(arr);
// console.log(finalResult);

// description (5) -----> this function The code defines a function that takes three arguments, which represent the number of gems each of three friends. The code checks if totalJams is greater than 1000.then the function  return the total friend gems -2000. otherwise the function return the total friends gems number.

function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {
	let firstFriendJams = firstFriend * 21;
	let secondFriendJames = secondFriend * 32;
	let thirdFriendJams = thirdFriend * 43;

	const totalJams = firstFriendJams + secondFriendJames + thirdFriendJams;
	if (totalJams > 1000) {
		return totalJams - 2000;
	} else {
		return totalJams;
	}
}
// const finalResult = gemsToDiamond(100, 5, 1);
// console.log(finalResult);
