//#1 How many searches?
  //sorted list = 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
  //step 1: identify middle and compare
  //step 2: since 8 < 11 --> 3, 5, 6, 8
  //step 3: mid = 5, 8> 5 --> 6, 8
  //step 4: mid = 6, --> 8
  //step 5: return 8

  function binarySearch(sortedArr, value, start = 0, end = sortedArr.length-1, count = 1) {
    const midIndex = Math.floor((start + end)/2)
    const middle = sortedArr[midIndex]

    if(start > end) {
      return `Value not found`
    }

    if(middle === value) {
      return `It took ${count} steps to find ${value} at index ${midIndex}`
    }
    else if(middle < value) {
      return binarySearch(sortedArr, value, midIndex+1, end, ++count)
    }
    else if(middle > value) {
      return binarySearch(sortedArr, value, start, midIndex-1, ++count)
    }
  }

  const arr=[3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
  console.log(binarySearch(arr, 16))