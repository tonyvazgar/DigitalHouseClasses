const fs = require('fs');

console.log('Aplicación tareas');
console.log('------------------');
console.log('');
let tarea = {
    titulo: 'Hacer cronograma',
    descripcion: 'Describir detalladamente...',
    status: 'En proceso'
}

let tarea1 = {
    titulo: 'Hacer comida',
    descripcion: 'Describir detalladamente...',
    status: 'Terminado'
}
let tarea2 = {
    titulo: 'Hacer maleta',
    descripcion: 'Describir detalladamente...',
    status: 'En proceso'
}
let tarea3 = {
    titulo: 'Hacer oso',
    descripcion: 'Describir detalladamente...',
    status: 'En proceso'
}

let tareas = [tarea, tarea1, tarea2, tarea3];
// console.log(tareas);

// let i = tareas.length;
// while(i){
//     console.log(tareas[i - 1].titulo);
//     i--;
// }

let tareasJSON = JSON.stringify(tareas);
console.log(tareasJSON);
console.log("********");

var desdeArchivo;
try {
    desdeArchivo = JSON.parse(fs.readFileSync('tareas.json', 'utf8'))
    console.log(desdeArchivo)
} catch (err) {
    console.error(err)
}

for(let i = 0; i < desdeArchivo.length; i++){
    let tarea = desdeArchivo[i];
    if(tarea.status != "Terminado"){
        console.log(tarea);
    }
}