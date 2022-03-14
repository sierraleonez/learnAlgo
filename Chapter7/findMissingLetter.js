let alphabet = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
  i: 0,
  j: 0,
  k: 0,
  l: 0,
  m: 0,
  n: 0,
  o: 0,
  p: 0,
  q: 0,
  r: 0,
  s: 0,
  t: 0,
  u: 0,
  v: 0,
  w: 0,
  x: 0,
  y: 0,
  z: 0,
}

function findMissingLetter(charArr) {
  let alphabetKey = Object.keys(alphabet)
  for (let i = 0; i < charArr.length; i++) {
    alphabet[charArr[i]]++
  }
  for (let j = 0; j < alphabetKey.length; j++) {
    if (!alphabet[alphabetKey[j]]) {
      return alphabetKey[j]
    }
  }
  return false
}

let arg = "the quick brown box jumps over a lazy dog"
console.log(findMissingLetter(arg))