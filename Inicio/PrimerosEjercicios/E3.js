/*1.*/
let nombre = prompt("Introduzca su nombre");
let correo = prompt("Introduzca su correo");

alert("Su nombre es "+ nombre +" y su correo es "+ correo);

document.body.innerHTML += "<h1>Su nombre es: "+nombre+" y su correo es "+correo+"</h1>";

/*2.*/ 
const pi = 3.14;
let radio = prompt("Introduzca el radio de la circunferencia");
alert("El area de la circunferencia es "+ pi*(radio*radio));

document.body.innerHTML += "<p><br>El area de la circunferencia es"+pi*(radio*radio)+" cenímetros cuadrados</p>";

/*3.*/ 
var array = [];
array.length = 4;

for(let i = 0;i < array.length; i++){
    array[i] = prompt("Introduzca la edad de la "+(i+1)+" persona");
}

let suma = (parseInt(array[0])+parseInt(array[3])+parseInt(array[1])*parseInt(array[2]));

alert("La suma total es "+ suma);

document.body.innerHTML += "<p><br>La suma total es "+suma+"</p>";

/*4.*/ 
let cuadrado = prompt("Introduzca el lado del cuadrado");
alert("El perimetro del cuadrado es "+ 4*cuadrado);

document.body.innerHTML += "<p><br>El perimetro del lado es "+4*cuadrado+" centímetros</p>";

/*5*/
let precio = prompt("Introduzca el precio del producto");
let cantidad = prompt("Introduzca la cantidad que quiere del producto");
let total = precio*cantidad;

let abonar = prompt("Tiene que abonar "+ total);


if(abonar < total){
    alert("Te falta dinero rata");
}else{
    alert("Su cambio es de "+ abonar - total+" euros");
}

document.body.innerHTML += "<p><br>Has abonado "+abonar+" euros </p>";