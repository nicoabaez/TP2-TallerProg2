import fs from 'fs'

const ruta    = './package.json'
const archivo = 'info.txt'

const test_fs_con_promise = async () => {
   try {
      let datos = (await fs.promises.readFile(ruta)).toString()
      let stats = (await fs.promises.stat(ruta))
      let info = {
         contenidoStr: datos,
         contenidoObj: JSON.parse(datos),
         size: stats.size
      }   
      await fs.promises.writeFile(archivo, JSON.stringify(info,null,'\t'))
      console.log('ESCRITURA OK:',info)
   }
   catch( error ) {
      console.log(error)
   }
}

test_fs_con_promise()
