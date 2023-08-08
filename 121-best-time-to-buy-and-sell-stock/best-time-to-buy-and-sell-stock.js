/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let minPrice = Number.MAX_VALUE;
    let maxDiff = Number.MIN_VALUE;

    for(let i = 0; i < prices.length; i++) {
        minPrice = Math.min(prices[i], minPrice);
        maxDiff = Math.max(prices[i] - minPrice, maxDiff)
    }

    return maxDiff;
};