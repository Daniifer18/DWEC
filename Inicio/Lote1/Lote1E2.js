/*
 2.- Pedir un número entre 0 y 9999 y decir cuantas cifras tiene.

*/

var num = -1;

while(num < 0 || num > 9999){
    num = prompt("Introduzca el numero");
}

document.write("<h3>El numero "+num+" tiene "+num.length+" cifras</h3><br>");