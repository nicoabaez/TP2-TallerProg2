import fs from 'fs'

const ruta    = './package.json'
const archivo = 'info.txt'

try {
   let datos = fs.readFileSync(ruta,'utf-8')
   let stats = fs.statSync(ruta)
   let info = {
      contenidoStr: datos,
      contenidoObj: JSON.parse(datos),
      size: stats.size
   }
   console.log(info)
   fs.writeFileSync(archivo, JSON.stringify(info,null,'\t'))
}
catch(error) {
   console.log(`Error en operación: ${error.message}`)
}





