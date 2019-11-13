import React, {Component}from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    linResults: '',
    binResults: '',
    search: 0
  }
  
  arr = [30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]

  sortedArr = this.arr.sort((a, b) => a - b)

  binarySearch = (sortedArr, value, start = 0, end = sortedArr.length-1, count = 1) => {
    const midIndex = Math.floor((start + end)/2)
    const middle = sortedArr[midIndex]

    if(start > end) {
      return `It took ${count} steps, but value was not found`
    }

    if(middle === value) {
      return `It took ${count} steps to find ${value} at index ${midIndex}`
    }
    else if(middle < value) {
      return this.binarySearch(sortedArr, value, midIndex+1, end, ++count)
    }
    else if(middle > value) {
      return this.binarySearch(sortedArr, value, start, midIndex-1, ++count)
    }
  }

  linearSearch = (arr, value) => {
    let count = 0
    for(let i=0; i < arr.length; i++) {
      count += 1
      if(arr[i] === value) {
        return `It took ${count} to find ${value} at index ${i}`
      }
    }
    return `It took ${count} steps, but value was not found`
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let {value} = e.target
    console.log(value.value)
    let linResults = this.linearSearch(this.arr, Number(value.value))
    let binResults = this.binarySearch(this.sortedArr, Number(value.value))
    this.setState({
      linResults,
      binResults
    })
  }

  render(){

    return (
      <div className="App">
        {/* {this.sortedArr.map(val => (
          <p>{val}</p>
        ))} */}
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input type="number" name="value" />
          <button className="linVbin" type="submit">Search</button>
        </form>
        <div className="results">
          <p>Linear Search: {this.state.linResults}</p>
          <p>Binary Search: {this.state.binResults}</p>
        </div>
      </div>
    );
  }
}

export default App;
