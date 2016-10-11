function foo(usuario, apellidos) {
  console.log(usuario)
  console.log(apellidos)
  for (var i=2; i < arguments.length; i++) {
    console.log(arguments[i])
  }

}

foo('Jose', 'Jiménez')

foo('Juan', 'Jerez', 658329832, 'Calle Wallaby 32, Sydney')
