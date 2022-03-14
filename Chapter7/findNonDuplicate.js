function firstNonDuplicate(arrChar) {
  let indexChar = {}
  for (let i = 0; i < arrChar.length; i++) {
    if (indexChar[arrChar[i]] >= 0) {
      indexChar[arrChar[i]] += 1
    } else {
      indexChar[arrChar[i]] = 1
    }
  }
  for (let j = 0; j < arrChar.length; j++) {
    if(indexChar[arrChar[j]] == 1) {
      return arrChar[j]
    }
  }
  return false
}

let arg = "minimum" 
console.log(firstNonDuplicate(arg))