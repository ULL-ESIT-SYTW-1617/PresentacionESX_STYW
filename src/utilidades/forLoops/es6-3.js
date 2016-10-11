// Desde ES6

function foo(array) {
  for (let element of array) {
    console.log(element)
    if (element === 'Javier') return // Ahora sí vuelve :)
  }
}

foo(['Jose', 'Juan', 'Javier', 'Jorge'])