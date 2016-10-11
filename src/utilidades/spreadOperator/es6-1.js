function foo(usuario, apellidos, ...other) {
  console.log(usuario)
  console.log(apellidos)
  for (let param of other) console.log(param)
}

foo('Jose', 'Jiménez')

foo('Juan', 'Jerez', 658329832, 'Calle Wallaby 32, Sydney')
