/*
4.- Pedir un número entre 0 y 9999 y decir si es capicúa.
*/
var capi = -1;

while(parseInt(capi) < 0 || parseInt(capi) > 9999){
    capi = prompt("Introduzca el numero");
}

let valido = true;
for(let i = 0;i < capi.length/2 && valido;i++){
    if (capi[i] == capi.length-1-i) {
        valido = true;
    }else{
        valido = false;
    }
}

if(!valido){
    document.write("Es capicua");
}else{
    document.write("No es capicua");
}