// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	// 	Money = {
	// 		"H": 50,
	// 		"Q": 25,
	// 		"D": 10,
	// 		"N": 5,
	// 		"P": 1
	// 	};
	// 	coins = [50, 25, 10, 5, 1];
	// 	let amount = currency;
	// 	// Your code goes here!
	// if (amount > 10000)	{
	// 	return ({ error: "You are rich, my friend! We don't have so much coins for exchange" })
	// }
	// if (amount === 0) return currency = {}
	// if (amount < 0) return currency = {}
	// if (amount <= 1000) {
	// 	for (let i; i < coins.length; i++) {
	// 		if ((currency % coins[0]) === 0) {
	// 			result[i] = Math.trunc(amount / coins[i]);
	// 		}
			
	// 	}
	// 	if ((currency % coins[0]) === 0) {result = {"H": currency / coins[0]}}
	// 	if ((currency - (currency / coins[0])  % coins[1]) === 0) {result = {"H": currency / coins[0], "Q": }}	
	// 	return result
	// }
		// Return an object containing the minimum number of coins needed to make change

    switch (true) {
			case (currency <= 0):
			return {}
			case (currency > 10000):
			return { error: 'You are rich, my friend! We don\'t have so much coins for exchange' }
			case (currency > 0 && currency <= 10000):
			let arr = {},
					valH = 0,
					valQ = 0,
					valD = 0,
					valN = 0,
					valP = 0;
			const H = 'H',
					Q = 'Q',
					D = 'D',
					N = 'N',
					P = 'P';
			while (currency > 0) {
					if (currency / 50 >= 1) {
							currency -= 50
							valH++
							arr[H] = valH
					} else if (currency / 25 >= 1) {
							currency -= 25
							valQ++
							arr[Q] = valQ
					} else if (currency / 10 >= 1) {
							currency -= 10
							valD++
							arr[D] = valD
					} else if (currency / 5 >= 1) {
							currency -= 5
							valN++
							arr[N] = valN
					} else if (currency > 0) {
							currency -= 1
							valP++
							arr[P] = valP
					}
			}
			return arr
			default:
					break;
	}
}
