/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   let sortedPrices = [...prices].sort((a, b) => a - b);
//   let lowestPrice = sortedPrices[0];
//   let highestPrice = sortedPrices[sortedPrices.length - 1];

//   for (let i = 0; i < prices.length + 1; i++) {
//     if (prices.indexOf(lowestPrice) > prices.indexOf(highestPrice)) {
//       highestPrice = sortedPrices[sortedPrices.length - i];
//     }
//   }
//   return highestPrice - lowestPrice;
// };

var maxProfit = function (prices) {
  let profit = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; ++i) {
    if (min > prices[i]) {
      min = prices[i];
    } else if (prices[i] - min > profit) {
      profit = prices[i] - min;
    }
  }

  return profit;
};

console.log(maxProfit([2, 4, 1]));
