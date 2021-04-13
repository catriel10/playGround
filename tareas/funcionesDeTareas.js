/*Después de haber logrado lo anterior, nuestro tech leader nos pide modularizar la
aplicación, llevando toda la funcionalidad de lectura de tareas a un archivo
llamado funcionesDeTareas.js, el cual deberá ser consumido desde el archivo
app.js y se espera que todo siga funcionando sin problemas.*/

const tareasConvertidas = require ("./app");

function guardarTarea (tarea) {
    console.log("tareasArray: " + tareasConvertidas.notas)
    let todasLasTareas = tareasConvertidas.notas
    console.log("todasLasTareas antes del push: " + todasLasTareas)
    todasLasTareas.notas.push(tarea)
    console.log("todasLasTareas después del push: " + todasLasTareas)
    escribirJSON(todasLasTareas) 
}
console.log (tareasConvertidas.notes
    )
guardarTarea ("Cortar el pasto")