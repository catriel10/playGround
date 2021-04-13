
const yargs = require ("yargs/yargs")
const fs = require('fs')
// Leemos el archivo (string)
const tareasJSON = fs.readFileSync(__dirname + '/tareas.json', 'utf-8')
//
const tareasConvertidas = JSON.parse(tareasJSON)
//
//console.log (tareasJSON);
//console.log (tareasConvertidos);
//Este es el micro desafio 2
let desdeTerminal = process.argv[2];
switch (desdeTerminal){
    case "listar":
        console.log (tareasConvertidas);
        break
    case undefined:
        console.log ("Atención - Tienes que pasar una acción");
        break;
    default:
        console.log ("No entiendo que hacer");
}

module.exports = tareasConvertidas
//console.log (process.argv);