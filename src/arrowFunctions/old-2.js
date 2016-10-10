function Person() {
  let that = this
  that.age = 0

  setTimeout(function growUp() {
    that.age++ // this.age es undefined!
  }, 100)
}

var p = new Person()

setTimeout(function print() {
  console.log(p.age) // p vale 0! :(
}, 200)
