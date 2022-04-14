let iterable = [1,2,3,4]
 
/**
 * An iterable is any object that have special iterator method that 
 * return an iterator object.
 * 
 * An Iterator object is any object that have next() method that return
 * iteration result object
 * 
 * An iteration result object is an object that have 'value' and 'done'
 * properties
 */

/**
 * And how is it works?
 * 1. We call / invoke the special iterator method in our iterable object
 *    that will return 'iterator object'
 * 2. Call / invoke the 'next()' method of our iterator object that will return
 *    'iteration result' object, when we call 'next()' on our iterator object, it
 *    will behave like moving to the next element / item of our object
 *    (we can simply think like moving to index+1 on array)
 * 3. Now we have our iteration result with 'value' and/or 'done' property, we can
 *    use it to get the value of current iteration states and determine are we
 *    already reaches the end of our element
 * 
 */



let iterator = iterable[Symbol.iterator]()

// for (let result = iterator.next(); !result.done; result = iterator.next()) {
//   console.log(result.value)
// }

let iterable2 = [2,3,4,5,6]
let iterator2 = iterable2[Symbol.iterator]()
let head = iterator2.next().value
let tail = [...iterator2]
console.log(tail)
// console.log(iterator.next())

class iteratorClass {
  constructor (from, to) {
    this.to = to
    this.from = from
  }

  [Symbol.iterator]() {
    let next = Math.ceil(this.from)
    let last = this.to
    return {
      next() {
        return (next <= last)
          ? { value: next++ }
          : { done: true }
      },
      [Symbol.iterator]() { return this }
    }
  }
}

const newIterable = new iteratorClass(2, 10)
// for (let x of new iteratorClass(1, 30)) {
//   console.log(x)
// }
console.log(...newIterable)