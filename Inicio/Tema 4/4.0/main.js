let sevilla = [];
let huelva = [];
let cadiz = [];


function registrarEmpleados(array = []){

    let cantidadEmple = 0;

    do {
        cantidadEmple = parseInt(prompt("Introduzca la cantidad de empleados de la delegacion"));
    } while (cantidadEmple < 4);

    array.length = cantidadEmple;

    let nb,sueldo,mediaSueldo = 0;

    for(let i = 0;i < array.length;i++){
        nb = prompt("Introduzca su nombre del empleado "+(i+1));
        sueldo = parseInt("Introduzca el sueldo del empleado "+(i+1));
        mediaSueldo += sueldo;
        array[i] = nb + ":" + sueldo;
    }
    console.log("La delegacion tiene "+cantidadEmple+" empleados");
    console.log("El sueldo medio de la delegacion es:"+mediaSueldo/array.length);

}