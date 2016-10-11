function miPrograma (argv) {
  let options =   {
    autor: 'Tu nombre',
    titulo: 'Titulo del Libro',
    descripcion: 'Descripción breve del gitbook',
    ...argv
  }
  console.log(options)
  // Hacer algo con las opciones
}


let argv = {
  autor: 'Jose Jiménez'
}

miPrograma(argv)
