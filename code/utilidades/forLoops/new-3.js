// Desde ES5

function foo(array) {
  array.forEach(element => {
    console.log(element)
    if (element === 'Javier') return // No vuele a la línea 10! :(
  })
}

let arr = ['Jose', 'Juan', 'Javier', 'Jorge']
arr.foo = 'Alguien'
foo(arr)
