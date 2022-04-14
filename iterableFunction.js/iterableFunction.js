function map(iterable, f) {
  let iterator = iterable[Symbol.iterator]()
  return {
    [Symbol.iterator]() { return this },
    next() {
      console.log(this)
      let v = iterator.next()
      if (v.done) {
        return v
      } else {
        return { value: f(v.value) }
      }
    }
  } 
}

console.log(map([1,2,3,4,5], x => x + 3).next())