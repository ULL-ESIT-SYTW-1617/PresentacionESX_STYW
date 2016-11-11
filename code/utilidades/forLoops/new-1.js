function foo(array) {
  for (let i in array) {
    if (i === 0) return // No sale porque i es de tipo String :(
    console.log(array[i])
  }
  console.log(i) // Not defined :) !!
}

foo(['Jose', 'Juan', 'Javier', 'Jorge'])
