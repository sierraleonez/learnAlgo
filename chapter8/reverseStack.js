class Stack {
  val = []

  pop() {
    this.val.pop()
  }

  add(item) {
    this.val.push(item)
  }

  read() {
    return this.val[this.val.length - 1]
  }
}

let arg = 'ABCDE'
function reverseStack(arg) {
  let letter = new Stack()
  for (let i = 0; i < arg.length; i++) {
    letter.add(arg[i])
  }
  for (let i = 0; i < arg.length; i++){
    console.log(letter.read())
    letter.pop()
  }
}

reverseStack(arg)
