function foo(array) {
  for (let i in array) {
    if (i === 0) return
    console.log(array[i])
  }
}

let arr = ['Jose', 'Juan', 'Javier', 'Jorge']
arr.foo = 'Alguien'
foo(arr)
