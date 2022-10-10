/*
1.- Pedir tres números y mostrarlos ordenados de mayor a menor. 
*/
var arr =[];
arr.length = 3

for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(prompt("Introduzca el "+(i+1)+" numero"));
}

arr.sort((a,b) => b-a);

document.write(arr[0]+","+arr[1]+","+arr[2]+"<br>");