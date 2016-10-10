function foo(array) {
  for (var i in array) {
    console.log(array[i])
  }
  console.log(i) // 3!!
}

foo(['Jose', 'Juan', 'Javier', 'Jorge'])