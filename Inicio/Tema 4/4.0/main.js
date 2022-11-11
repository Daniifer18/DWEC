/*
1.- La empresa Dolty S.A., tiene tres delegaciones en tres provincias andaluzas
(Sevilla, Huelva, Cadiz). Cada una de ellas tiene un numero variado de
empleados, que no es inferior a 4 en ninguna de ellas. Realiza un programa que
cargue el sueldo de los empleados, junto a su nombre, de cada una de las delegaciones en una array
distinto. Para finalizar la carga de cada array se ingresa como dato el cero.
Una vez ingresados los sueldos, mostrar los siguientes datos:
    a) Informar del tamaño (numero de empleados) de cada una de las delegaciones.
    b) Determinar la media de los sueldos de cada una de las delegaciones.
    c) Ordenar de menor a mayor los sueldos de Huelva, De mayor a menor los de Sevilla y
         Cádiz. Indicando a que delegación pertenece cada lista ordenada
    d) Determinar  el sueldo menor y el mayor de las tres delegaciones.
*/ 

let sevilla = [];
let huelva = [];
let cadiz = [];


function registrarEmpleados(array){

    let cantidadEmple = 0;

    do {
        cantidadEmple = parseInt(prompt("Introduzca la cantidad de empleados de la delegacion"));
    } while (cantidadEmple < 4);

    array.length = cantidadEmple;

    let nb,sueldo,mediaSueldo = 0;

    for(let i = 0;i < array.length;i++){
        nb = prompt("Introduzca su nombre del empleado "+(i+1));
        sueldo = parseInt(prompt("Introduzca el sueldo del empleado "+(i+1)));
        mediaSueldo += sueldo;
        array[i]={
            nombre: nb,
            sueldo: sueldo
        }
    }
    document.write("<p>La delegacion tiene "+cantidadEmple+" empleados</p>");
    document.write("<p>El sueldo medio de la delegacion es:"+mediaSueldo/array.length+"</p>");

}

document.write("<h3>Delegacion de Sevilla</h3>");
registrarEmpleados(sevilla);
document.write("<h3>Delegacion de Huelva</h3>");
registrarEmpleados(huelva);
document.write("<h3>Delegacion de Cadiz</h3>");
registrarEmpleados(cadiz);

function pintar(array,caso,delegacion,or1,or2){
    let orden;
    switch (caso) {
        case 1:
            orden = ((a,b) => a.sueldo - b.sueldo)
            
        break;
        case 2:
            orden = ((a,b) => b.sueldo - a.sueldo)
        break;
        default:
            orden = null;
    }

    array.sort(orden);

    document.write("<p>Los sueldos de la delegacion de "+delegacion+" ordenados de "+or1+" a "+or2+" son:</p>");

    array.forEach(element => {
        document.write("<span>"+element.sueldo+" </span>");
    });
}

pintar(sevilla,1,"Sevilla","min","mayor");
pintar(huelva,2,"Huelva","mayor","min");
pintar(cadiz,2,"Sevilla","mayor","min");


let array = sevilla.concat(huelva,cadiz);

array.sort((a,b) => a.sueldo - b.sueldo);

document.write("<p>El sueldo menor es "+array[0].sueldo+"</p>");
document.write("<p>El sueldo mayor es "+array[array.length-1].sueldo+"</p>");