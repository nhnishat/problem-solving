// description -----> this function The code defines a function that takes three arguments, which represent the number of gems each of three friends. The code checks if totalJams is greater than 1000.then the function  return the total friend gems -2000. otherwise the function return the total friends gems number.
function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {
	let firstFriendJams = firstFriend * 21;
	let secondFriendJames = secondFriend * 32;
	let thirdFriendJams = thirdFriend * 43;

	let totalJams = firstFriendJams + secondFriendJames + thirdFriendJams;
	if (totalJams >= 1000) {
		return totalJams - 2000;
	} else {
		return totalJams;
	}
}
const finalResult = gemsToDiamond(100, 5, 1);
console.log(finalResult);
