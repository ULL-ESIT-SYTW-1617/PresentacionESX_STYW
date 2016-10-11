function Person() {
  let that = this
  that.age = 0

  setTimeout(function growUp() {
    that.age++
  }, 100)
}

var p = new Person()

setTimeout(function print() {
  console.log(p.age)
}, 200)
