// Desde ES5

function foo(array) {
  array.forEach(element => {
    console.log(element)
    if (element === 'Javier') return // No vuele a la línea 10! :(
  })
}

foo(['Jose', 'Juan', 'Javier', 'Jorge'])