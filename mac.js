import fs from 'fs'

const ruta = './package.json'
const archivo = 'info.txt'

fs.readFile(ruta,'utf-8', (error, datos) => {
   if(error) { throw Error(`Error en lectura de archivo: ${error.message}`) }
   fs.stat(ruta, (error, stats) =>{
      if(error) { throw Error(`Error en stats de archivo: ${error.message}`) }
      let info = {
         contenidoStr: datos,
         contenidoObj: JSON.parse(datos),
         size: stats.size
      }
      
      console.log(info)
      
      fs.writeFile(archivo, JSON.stringify(info,null,'\t'), error => {
         if(error) { throw Error(`Error en escritura de archivo: ${error.message}`) }
         console.log('ESCRITURA OK')
      })      
   })
})






