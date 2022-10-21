/*
Escribe una función que reciba dos números con dos decimales, que son la base y altura de un rectángulo, de
forma que devuelva su perímetro. Puedes elegir que la función obtenga los datos de la entrada estándar o no.
Indicándolo en el script.
*/

function perimetroRectangulo(b,a){
    return (2*b)+(2*a);
}

function pintar(base,altura,perimetro){
    var p =`
    <table>
         <tr>
            <th>Entrada</th>
            <th>Salida</th>
        </tr>
    `
    for (let i = 0;i < base.length; i++) {
        p +=`<tr>    
            <td>`+base[i]+`,`+altura[i]+`</td>
            <td>`+perimetro[i]+`</td>
        </tr>`
    }
    p+=`</table>`

    return p
}

var a,b;
var valido = true;
var base = [];
var altura = [];
var perimetro = [];

for(let i = 0;valido;i++){
    b = parseFloat(prompt("Introduzca la base del rectangulo"));
    base[i] = b;
    a = parseFloat(prompt("Introduzca la altura del rectangulo"));
    altura[i] = a;

    perimetro[i] = perimetroRectangulo(base[i],altura[i]);

    do{
        tipo = prompt("¿Quiere continuar?(y/n)").toLowerCase();
    }while(tipo.toLowerCase() != "n" && tipo.toLowerCase() != "y");
    if(tipo.toLowerCase() == "n"){
        valido = false;
    }
}

document.write(pintar(base,altura,perimetro));