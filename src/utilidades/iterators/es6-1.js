function* fibonacci(){
  var [ a, b ] = [1, 1]
  while (true){
    [ a, b ] = [a + b, a]
    var reset = yield b
  }
}

let sequence = fibonacci()

console.log(sequence.next().value)
console.log(sequence.next().value)
console.log(sequence.next().value)
console.log(sequence.next().value)
console.log(sequence.next().value)
console.log(sequence.next().value)
console.log(sequence.next().value)
console.log(sequence.next().value)
console.log(sequence.next().value)
console.log(sequence.next().value)
console.log(sequence.next().value)
console.log(sequence.next().value)
