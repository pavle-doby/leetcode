// Time: 63 ms (beats: 47.23%) | Memory: 42.6 MB (beats: 27.41%) | 122. Best Time to Buy and Sell Stock II

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let profit = 0;
    
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] > prices[i -1]) {
            profit += (prices[i] - prices[i - 1]);
        }
    }
    
    return profit;
};


