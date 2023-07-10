const util = require("util");
function buscarEstudiante(nombre,arregloest){

    for(const i=0; i<estudiantes.length; i++){
       return estudiantes.filter(estudiante => estudiante.nombre===nombre);
        
    }
}

const estudiantes = [
    { nombre: 'Juan', edad: 20 },
    { nombre: 'María', edad: 18 },
    { nombre: 'Pedro', edad: 22 }
  ];


const inspected = util.inspect(buscarEstudiante('Pedro', estudiantes));
console.log(inspected);
/*const inspected = util.inspect());
console.log(inspected);*/
// { nombre: 'Pedro', edad: 22 }
const inspected1 = util.inspect(buscarEstudiante('Carlos', estudiantes));
console.log(inspected1);
// null