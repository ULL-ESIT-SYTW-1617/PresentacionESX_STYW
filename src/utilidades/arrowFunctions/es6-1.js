function Person() {
  this.age = 0

  setTimeout(() => this.age++, 100)
}

var p = new Person()

setTimeout(function print() {
  console.log(p.age)
}, 200)
