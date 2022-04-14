function reverseStringRec(string) {
  console.log(string)
  if (string.length === 1) {
    return string[0]
  }
  return reverseStringRec(string.slice(1, -1) + string[0])
}

let res = reverseStringRec('abcde')
let string = 'abcde'

// console.log(string.slice(1,-1) + string[0])

