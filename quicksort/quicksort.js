let helper = require('./index')

function quicksort() {

}

function partition(arr, leftPointer, rightPointer, pvtIdx) {
  let pivot = arr[pvtIdx]
  let temp
  for (let i = 0; i < arr.length; i++) {
    if (arr[leftPointer] < pivot) {
      leftPointer++
    } else {
      if (arr[rightPointer] > pivot) {
        rightPointer--
      } else {
        if (leftPointer >= rightPointer) {
          temp = arr[leftPointer]
          arr[leftPointer] = pivot
          arr[arr.length - 1] = temp
          console.log(arr)
          return leftPointer
        } else {
          temp = arr[leftPointer]
          arr[leftPointer] = arr[rightPointer]
          arr[rightPointer] = temp
          return partition(arr, leftPointer, rightPointer, pvtIdx)
        }
      }
    }
  }
}

function partition2(arr, leftPointer, rightPointer, pvtIdx) {
  let pivot = arr[pvtIdx]
  let temp
  while (true) {
    while (arr[leftPointer] < pivot) {
      leftPointer++
    }
    while (arr[rightPointer] > pivot) {
      rightPointer--
    }
    if (leftPointer >= rightPointer) {
      temp = arr[leftPointer]
      arr[leftPointer] = pivot
      arr[arr.length - 1] = temp
      console.log(arr)
      return leftPointer
    } else {
      temp = arr[leftPointer]
      arr[leftPointer] = arr[rightPointer]
      arr[rightPointer] = temp
    }
  }
}

let arg = [0, 5, 2, 1, 6, 3]
let part1Clbck = () => partition(arg, 0, arg.length - 2, arg.length - 1)
let part2Clbck = () => partition2(arg, 0, arg.length - 2, arg.length - 1)
helper.countExecTime(part1Clbck)
helper.countExecTime(part2Clbck)
// console.log(helper)
// console.log(partition(arg, 0, arg.length - 2, arg.length - 1))


function test(arr) {
  let temp = arr
  temp.shift()
  console.log("temp:", temp)
  console.log("arg: ", arr)

  for (let i = 0; i < 2; i++) {
    return i
  }
}

// console.log(test([1,2,3,4,5,6]))