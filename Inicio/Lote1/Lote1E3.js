/*
 3.- Pedir un número entre 0 y 9999 y mostrarlo con las cifras al revés.
*/
var n = -1;
while(parseInt(n) < 0 || parseInt(n) > 9999){
    n = parseInt(prompt("Introduzca el numero"));
}

var numViejo = n;

function numeroAlReves(n) {
  const nFinal = n.toString().split("").reverse().join("");
  return Number(nFinal);
}

document.write("<h3>El numero "+numViejo+" al reves es: "+numeroAlReves(n)+"</h3><br>");