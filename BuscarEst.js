const util = require("util");
function buscarEstudiante(nombre,array){

    for(let i=0; i<array.length; i++){
       if (array[i].nombre===nombre){
        return array[i];
       }
             
    }
    return null;
}

const estudiantes = [
    { nombre: 'Juan', edad: 20 },
    { nombre: 'María', edad: 18 },
    { nombre: 'Pedro', edad: 22 }
  ];
   
const inspected = util.inspect(buscarEstudiante('Pedro', estudiantes));
console.log(inspected);
// { nombre: 'Pedro', edad: 22 }
const inspected1 = util.inspect(buscarEstudiante('Carlos', estudiantes));
console.log(inspected1);
// null