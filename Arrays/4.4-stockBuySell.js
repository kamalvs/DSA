// leetcode 121: Best time to buy and sell stock
// [7,1,5,3,6,4]

function maxProfit(prices) {
  let profit = 0;
  let min = prices[0];
  for (i = 1; i < prices.length; i++) {
    if (prices[i] > min) {
      currentProfit = prices[i] - min;
      profit = Math.max(profit, currentProfit);
    } else {
      min = prices[i];
    }
  }
  return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
