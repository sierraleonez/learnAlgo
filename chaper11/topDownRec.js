/**
 * A function to sum all element in array using top-down recursive approach
 * @param {Array} Array Array of int / string to be summed
 * @returns {string} Summed result - return type depends on provided type
 */
function sum(array) {
  if (array.length === 1) {
    return array[0]
  }
  // Sum first index of array and rest of array (array[0] + array{1,2,3,4...})
  return array[0] + sum(array.splice(1, array.length - 1))
}

let arg = [1,2,3,4,5]
console.log(sum(arg))


/**
 * A function to reverse string using top-down recursive approach
 * @param {string} string String to be reversed
 * @returns {string} Reversed String
 */
function reverse(string) {
  if (string.length === 1) {
    return string[0]
  }
  return reverse(string.slice(1, string.length)) + string[0]
}

let argReverse = 'abcde'
console.log(reverse(argReverse))

function countingX(string) {
  if (string.length === 0) return 0
  if (string[0] === 'x') {
    return 1 + countingX(string.slice(1, string.length))
  } else {
    return countingX(string.slice(1, string.length))
  }
}
let argCountX = 'axbxcx'
// Expected result: 3
console.log(countingX(argCountX))