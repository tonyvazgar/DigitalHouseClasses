const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leer: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },

    // Micro desafío 2.1 - Escribir la tareas en el archivo JSON
    // ---------------
    // escribirJSON:
    // El metodo recibe un array de tareas
    // JSON.stringify() para transformar el array a JSON
    // fs.writeFileSync()para escribir el JSON obtenido a el archivo
    escribirJSON: function (tareas) {
        let tareasArreglo = JSON.stringify(tareas);
        fs.writeFileSync('./tareas.json', tareasArreglo);
    },

    // Micro desafío 2.2 - Guardar la tarea en el archivo JSON
    // ---------------
    // Usar las funciones ya escritas previamente de lectura y escritura al JSON
    // No olvidar hacer uso de push()
    guardarTarea: function (tarea) {
        let tareas = this.leer();
        tareas.push(tarea);
        this.escribirJSON(tareas);
    },

    // Micro desafío 3, aplicar filter para traer solo las tareas pendientes
    // array.filter((elemento, index, todosLosElementos)=>{
    //     condicional de filtrado
    // })
    leerPorEstado: function (status) {
        let tareas = this.leer();
        let i = tareas.filter(function (param) {
            return param.estado == status
        });
        return i;
    }

}

module.exports = archivoTareas;