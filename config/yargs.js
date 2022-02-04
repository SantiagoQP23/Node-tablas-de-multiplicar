
const argv = require('yargs')
.option('b', {
  alias: 'base',
  type: 'number',
  demandOption: true,
  describe: 'Es la base de la tabla de multiplicar'
})
.option('l', {
  alias: 'listar',
  type: 'boolean',
  demandOption: true,
  default: false,
  describe: 'Muestra la tabla de multiplicar'

})
.option('h', {
  alias: 'hasta',
  type: 'number',
  demandOption: true,
  default: 12,
  describe: 'Hasta qué número se va a multiplicar la base'

})
.check( (argv, options) => {

  if( isNaN(argv.base)){
    throw 'La base tiene que ser un número'
  }
  return true

})
.argv;



module.exports =  argv; 