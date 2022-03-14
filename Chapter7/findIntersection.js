function findIntersection(arr1, arr2) {
  let arr1Map = {}
  let finalArr = []
  for (let i = 0; i < arr1.length; i++) {
      arr1Map[arr1[i]] = true
  }
  for (let j = 0; j < arr2.length; j++) {
    arr1Map[arr2[j]] && finalArr.push(arr2[j])
  }
  return finalArr
}

let arg1 = [1,2,3,4,5]
let arg2 = [0,2,4,6,8]
console.log(findIntersection(arg1, arg2))