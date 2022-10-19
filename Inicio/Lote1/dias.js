var anioNuevo = new Date(2022,12-1,31);

var diaHoy = new Date();
var seg = anioNuevo.getTime() - diaHoy.getTime();

console.log(anioNuevo.getTime());
console.log(diaHoy.getTime());
console.log(seg);

var SegundosFechas = seg / 1000;
var SegundosEntreFechas = Math.abs(SegundosFechas);

function pasarADias(seg){
    var dias = Math.floor(seg / 86400);
    var horas = Math.floor((seg % 86400) / 3600);
    var min = Math.floor(((seg % 86400) % 3600) / 60);
    var sec = ((seg % 86400) % 3600) % 60;
 
    return "<h3>"+(dias) + " dias " + horas + " horas " + min + " minutos " + seg + " segundos</h3>";
}

var diasTranscurridos = pasarADias(SegundosEntreFechas);

function pintar(diasTranscurridos){
    var p;

    p += `<h3>`+diasTranscurridos+`</h3>`;
    return p;
}    

document.write(pintar(diasTranscurridos));