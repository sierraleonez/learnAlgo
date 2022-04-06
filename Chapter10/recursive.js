/**
 * 1. Map the array
 * 2. Do conditional check to see if array element is another array
 * 3. If true, call our function with those array element as argument
 * 4. If false, print
 */

 function printNestedArray(arr) {
  arr.forEach(el => {
    Array.isArray(el) ? printNestedArray(el) : console.log(el)
  })
}

let array = [1,2,3,[4,5,6],7,[8,[9,10,11,[12,13,14]]],[15,16,17,18,19,[20,21,22,[23,24,25,[26,27,29]],30,31],32],33]
printNestedArray(array)