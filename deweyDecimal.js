function searchDewey(library, dDIndex, title, start = 0, end = library.length -1) {
  const midIndex = Math.floor((start + end)/2)
  const midDewey = library[midIndex].dewey;
  const midTitle = library[midIndex].title;

  if (start > end) {
    return 'try looking for a book that exists';
  }
  if (midDewey === dDIndex) {
    if (midTitle === title) {

      return `${midTitle} with a Dewey decimal of ${midDewey} found at index ${midIndex}`;
    } else if (title > midTitle ) {

      return searchDewey(library, dDIndex, title, midIndex + 1, end)
    } else if (title < midTitle) {

      return searchDewey(library, dDIndex, title, start, midIndex - 1)
    }
  } 
  else if (midDewey < dDIndex) {
    return searchDewey(library, dDIndex, title, midIndex + 1, end)
  }
  else if (midDewey > dDIndex) {
    return searchDewey(library, dDIndex, title, start, midIndex - 1)
  }
}


const lib = [
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },

  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },



  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  { author: 'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];

console.log(searchDewey(lib, '231.7652', 'Starlight and Time'));

/*
000 - comp sci, information, general works
100 – Philosophy & psychology
200 – Religion
300 – Social sciences
400 – Language
500 – Pure Science
600 – Technology
700 – Arts & recreation
800 – Literature
900 – History & geography


000 - A - Z books


*/

/*
Question 4
                    35
```
                25        89

            15     27   79    91

          14  19           90

post order traversal would be:
  14, 19, 15, 27, 25, 79, 90, 91, 89, 35



              8
         6        10
      5     7   9     11

preorder traversal would be:
  8, 6, 5, 7, 10, 9, 11
*/