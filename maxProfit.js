const BST = require('./bst');

let price = [128, 97, 121, 123, 98, 97, 105]

let prices2 = [7,2,4,1]

let prices3 = [11,2,7,1,4]

let prices4 = [7,6,4,3,1]

function maxProfit(arr) {
  let max = 0
  for(let i=0; i<arr.length; i++) {
    for(let j= i + 1; j<arr.length; j++) {
      if(arr[j] - arr[i] > max) {
        max = arr[j] - arr[i]
      }
    }
  }
  return max;
}

const maxProfit = (prices) => {
  let lowest = {value: 1000000000000000, index: -1};
  let highest = {value: -1000000000000000, index: -1};
  let max1 = 0;
  let max2 = 0;
  for (let i = 0; i < prices.length; i++) {
    if (lowest.value > prices[i] && i !== prices.length - 1) {
      lowest.value = prices[i];
      lowest.index = i;
    }
    if (highest.value < prices[i] && i !== 0) {
      highest.value = prices[i];
      highest.index = i;
    }
  }
  for (let i = 0; i < highest.index; i++) {
    if (highest.value - prices[i] > max1) {
      max1 = highest.value - prices[i]
    }
  }
  for (let i = lowest.index; i < prices.length; i++) {
    if (prices[i] - lowest.value > max2) {
      max2 = prices[i] - lowest.value
    }
  }
  return max1 > max2 ? max1 : max2
}

//base: buy < sell
//find: lowest price and highest after the index of lowest price
//find: highest price after the index of 

console.log(maxProfit(prices4))