const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();
 
crearArchivoTabla( argv.base, argv.l, argv.h)
  .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
  .catch( err => console.log(error));