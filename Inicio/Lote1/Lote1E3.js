/*
 3.- Pedir un número entre 0 y 9999 y mostrarlo con las cifras al revés.
*/
var n = -1;
while(parseInt(n) < 0 || parseInt(n) > 9999){
    n = parseInt(prompt("Introduzca el numero"));
}

function numeroAlReves(n) {
  const nFinal = n.toString().split("").reverse().join("");
  return Number(nFinal);
}

document.write("El numero al reves es: "+numeroAlReves(n)+"<br>");