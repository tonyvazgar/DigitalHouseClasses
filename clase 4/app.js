// 1. Puesta en común de los tipos de datos que vamos a necesitar
// para guardar nuestras tareas

// 2. Se arma un array 

// 3. Se hace evidente que los datos tienen que estar afuera
// Creamos un archivo JSON

// console.log(tareasJson)
// console.log(typeof tareasJson)

// Salto de Fé
// Módulos nativos
// const fs = require('fs');
// let tareasJson = fs.readFileSync('tareas.json', 'utf-8');
// let tareas = JSON.parse(tareasJson);

// Micro desafío 1
// transformar el código anterior en una función
// function leerJson() {
//    return JSON.parse(fs.readFileSync('tareas.json', 'utf-8'));;
// }

// 4. Se lleva el código a un modulo

let archivoTareas = require('./tareas');

let accion = process.argv[2];

switch (accion) {
    case 'listar':
        console.log('Listado de tareas');
        let tareas = archivoTareas.leer();
        // for (let i = 0;  i < tareas.length; i++) {
        //     console.log(i + '. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
        // }
        tareas.forEach((tarea, i) => {
            console.log(i + '. ' + tarea.titulo + ' - ' + tarea.estado);
        });
        break;

    // Micro desafío 2
    // -----
    // Escribir el caso para crear una nueva tarea
    // Tener en cuenta que el nombre de la tarea va a llegar como segundo parametro
    // Tener en cuenta que el estado por default para una nueva tarea tiene que ser 'pendiente'
    case 'crear':
        let title = process.argv[3];
        let status = 'pendiente';
        let tarea = {
            titulo: title,
            estado: status
        }
        console.log("Guardando tarea....");
        archivoTareas.guardarTarea(tarea);
        console.log("Tarea guardada con éxito :) ");

        // Un objeto que contenga el titulo y 'pendiente' como estado
        // A este objeto guardarlo con el metodo 'guardarTarea' de tareas.js
        // Mostrar mensaje de exito
        break;


    // Micro desafío 3
    // -----
    case 'filtrar':
        let estado = process.argv[3];
        // process.argv[2] <- el case
        // process.argv[3] <- el estado a buscar
        console.log("Filtrando tareas....");
        console.log(archivoTareas.leerPorEstado(estado));
        console.log("Filtrado de tareas finalizado");
        // Hace uso de 'leerPorEstado'
        // Iterar por las tareas encontradas y mostrarlas como resultado
        break;

    
    // Micro desafío 1
    // Atajar el caso en que no se envíe un parámetro
    case undefined:
        console.log('Tenés que pasarme una acción');
        break;

    // Micro desafío 2
    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar');
        break;
}
