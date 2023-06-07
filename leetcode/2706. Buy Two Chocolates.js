var buyChoco = function (prices, money) {
  let priceList = prices.sort((a, b) => a - b);
  let sum = priceList[0] + priceList[1];

  if (money >= sum) return money - sum;

  return money;
};
