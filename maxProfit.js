const BST = require('./bst');

let price = [128, 97, 121, 123, 98, 97, 105]

function maxProfit(arr) {
  let max = 0
  for(let i=0; i<arr.length; i++) {
    for(let j=1; j<arr.length; j++) {
      if(arr[j] - arr[i] > max) {
        max = arr[j] - arr[i]
      }
    }
  }
  return max;
}

//base: buy < sell
//find: lowest price and highest after the index of lowest price
//find: highest price after the index of 

console.log(maxProfit(price))