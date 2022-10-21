var fechaActual = new Date();
var annio,autor,titulo;


titulo = prompt("Introduca el titulo de la pelicula");

autor = prompt("Introduca el autor de la pelicula");

do {
    annio = parseInt(prompt("Introduzca el año de estreno:"));
} while (annio < 1900 || annio > fechaActual.getFullYear());

var tituloSinEspacios = titulo.replaceAll(" ","");
console.log(tituloSinEspacios);

document.write("<h3>A. Titulo: "+titulo+" , y su longitud es de :"+tituloSinEspacios.length+" caracteres</h3>");
document.write("<h3>B. Autor: "+autor+" mayusculas y minusculas :"+autor.toUpperCase()+" , "+autor.toLowerCase()+" , "+autor.trim().length+" caracteres</h3>");
document.write("<h3>c. Año: "+annio+"</h3>");
