function firstDuplicate(arr) {
  let arrIndex = {}
  for (let i = 0; i < arr.length; i++) {
    if (arrIndex[arr[i]]) {
      return arr[i]
    }
    arrIndex[arr[i]] = true
  }
}

let arg = ["a", "b", "c", "d", "c", "e", "f"]
console.log(firstDuplicate(arg))