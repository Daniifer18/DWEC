var mediaClase = 0;
var nombre = [];
var nota = [];


function pintar(nombre,nota,mediaClase){
    var p =`
    <table>
         <tr>
            <th>Nombre</th>
            <th>Nota</th>
        </tr>
    `
    for (let i = 0;i < nota.length; i++) {
        p +=`<tr>    
            <td>`+nombre[i]+`</td>
            <td>`+nota[i]+`</td>
        </tr>`
    }
    p+=`
        <tr>
            <td colspan=2>`+mediaClase+`</td>
        </tr>
    </table>`

    return p
}

var numAlumnos = 0;

do{
    numAlumnos = parseInt(prompt("Introduzca el numero de alumnos"))
}while(numAlumnos < 8 || numAlumnos > 20);

for (let i = 0; i < numAlumnos;i++) {
    nombre[i] = prompt("Introduzca el nombre del alumno "+(i+1));
    do {
        nota[i] = parseFloat(prompt("Introduzca la nota del alumno"));
    } while (nota[i] < 0 || nota[i] > 10);

    mediaClase += nota[i];
}

mediaClase = mediaClase/numAlumnos;



document.write(pintar(nombre,nota,mediaClase));