
const colors = require('colors');
const fs = require('fs');


const crearArchivoTabla = async (base = 5, listar, hasta = 12 ) => {

  try {
    
    
    
    
    let salida = '', consola = '';
    
      for (let i = 1; i <= hasta; i++) {
    
        salida += `${base} x ${i} = ${base * i}\n`;
        consola += `${base} x ${i} = ${base * i}\n`.blue;

      }
    
      
      fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
  
      
      if( listar ) {
        console.log('=====================')
        console.log(`     Tabla del ${base}           `)
        console.log('=====================')
  
        console.log(consola);

      }

    
      return `tabla-${base}.txt`;
    
  } catch (err) {
    throw err;
  }




}

module.exports = {
  crearArchivoTabla
}