var anioNuevo = new Date(2023,03,19);

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
 
    return "<h3>"+(dias-31) + " dias " + horas + " horas " + min + " minutos " + sec + " segundos</h3>";
}

var diasTranscurridos = pasarADias(SegundosEntreFechas);

function pintar(diasTranscurridos){
    var p;

    p += `<h3>`+diasTranscurridos+`</h3>`;
    return p;
}    

document.write(pintar(diasTranscurridos));