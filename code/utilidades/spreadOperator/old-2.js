function miPrograma (argv) {
  var options =   {
    autor: argv.autor || 'Tu nombre',
    titulo: argv.titulo || 'Titulo del Libro',
    descripcion: argv.descripcion || 'Descripción breve del gitbook'
  }
  console.log(options)
  // Hacer algo con las opciones
}


var argv = {
  autor: 'Jose Jiménez'
}

miPrograma(argv)
