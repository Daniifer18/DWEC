var fechaActual = new Date();
var annio,autor,titulo;


titulo = prompt("Introduca el titulo de la pelicula");

autor = prompt("Introduca el autor de la pelicula");

do {
    annio = parseInt(prompt("Introduzca el año de estreno:"));
} while (annio < 1900 || annio > fechaActual.getFullYear());

var tituloSinEspacios = titulo.replaceAll(" ","");
console.log(tituloSinEspacios);

var cadena=`
<table>
    <tr>
        <th></th><th>Normal</th><th>Mayusculas</th><th>Minusculas</th><th>Longitud(caracteres)</th>
    </tr>
    <tr>
        <td>A.Titulo</td><td>`+titulo+`</td><td>`+titulo.toUpperCase()+`</td><td>`+titulo.toLowerCase()+`</td><td>`+tituloSinEspacios.length+`</td>
    </tr>
    <tr>
        <td>B.Autor</td><td>`+autor+`</td><td>`+autor.toUpperCase()+`</td><td>`+autor.toLowerCase()+`</td><td>`+autor.trim().length+`</td>
    </tr>
    <tr>
        <td>C.Año produccion</td><td colspan = "4">`+annio+`</td>
    </tr>
</table>`


document.write(cadena);
