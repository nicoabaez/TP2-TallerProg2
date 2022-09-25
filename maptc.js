import fs from 'fs'

const ruta    = './package.json'
const archivo = 'info.txt'

const readFilePromise = (ruta) => {
   return new Promise((resolve,reject) => {
       fs.readFile(ruta,'utf-8', (error, datos) => {
           if(error) {
              reject(error)
            } else {
               resolve(datos) 
            }
       })
   })
}

readFilePromise(ruta)
.then( datos => {
   let info = {
      contenidoStr: datos,
      contenidoObj: JSON.parse(datos),
      size: ''
   }   
   fs.stat(ruta, (error, stats) =>{
      if(error) throw new Error(`Error en fs.stat: ${error.message}`)
      info.size = stats.size      

      fs.writeFile(archivo, JSON.stringify(info,null,'\t'), (error, datos) => {
         if(error) throw new Error(`Error en fs.stat: ${error.message}`)
         console.log('ESCRITURA OK', info)
      })  
      
   })
})
.catch( error => console.log(error) )
