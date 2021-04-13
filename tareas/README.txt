{
    "notas": [
        {"titulo":"Lavar los platos", "estado": "finalizado"},
        {"titulo":"Sacar la basura", "estado": "pendiente"},
        {"titulo":"Sacar la basura", "estado": "pendiente"}
    ]
}

-----------------------------

let yargs = require('yargs') // importo la libreria
let comando = yargs.argv.comando //lee por consola --comando y asigna como valor lo que sigue
let titulo = yargs.argv.titulo //lee por consola --titulo y asigna como valor lo que sigue
let estado = yargs.argv.estado//lee por consola --estado y asigna como valor lo que sigue


----------------------------------------------
// Leemos el archivo (string)
const gonzaJSON = fs.readFileSync(__dirname + '/gonza.json', 'utf-8')

const gonzaObject = JSON.parse(gonzaJSON)

// agregamos una nueva propiedad
gonzaObject.clubFutbol = 'Boca'

// lo pasamos nuevamente a JSON
const gonzaModifiedJSON = JSON.stringify(gonzaObject)

// escribimos el archivo
fs.writeFileSync(__dirname + '/gonza.json', gonzaModifiedJSON)


--------------------------------------------------
@ -0,0 +1,24 @@
# Challenge 2 : JSON + Argumentos + Notas

Un cliente nos contrató para desarrollar una aplicación en un har que le permita almacenar tareas y listarlas. La misma nos pidieron que se ejecuten a traves de un `cli` ya que la usarán luego para conectarse con un hardware externo.


La misma debe poseer

```
// muestra en pantalla el listado de las tareas y su estado

node app --comando "listar"
```

```
// muestra en pantalla el listado de las tareas y su estado (pendiente, finalizado, en marcha)

node app --comando "crear" --tarea "Texto de la tarea" --estado "pendiente"
```

Para esto podes ayudarte instalando la librería 
https://www.npmjs.com/package/yargs

Y si querés podes agregarle colores con 
https://www.npmjs.com/package/chalk
