// Recursive function with multiple argument

function doubleArray(arr, index = 0) {
  // The base case is when index is bigger or same with array length
  if (index >= arr.length) {
    return arr
  } else {
    arr[index] *= 2
    return doubleArray(arr, index + 1)
  }
}

let arr = [1,3,5,7,9]

console.log(doubleArray(arr))