var arr1 = [];
var arr2 = [];

function convertirAF(num){
    /*(0 °C × 9 / 5) + 32 = 32 °F*/ 
    return (num * 1.8) + 32;
}

function convertirAC(num){
   /* (32 °F − 32) × 5 / 9 = 0 °C*/
   return (num - 32)/1.8;
}

function pintar(arr1,arr2){
    var p =`
    <table>
         <tr>
            <th>C</th>
            <th>F</th>
        </tr>
    `
    for (let i = 0;i < arr1.length; i++) {
        p +=`<tr>    
            <td>`+arr1[i]+`</td>
            <td>`+arr2[i]+`</td>
        </tr>`
    }
    p+=`</table>`

    return p
}

let tipo;
let valido = true;
for(let i = 0;valido;i++){
    do{
        tipo = prompt("Introduzca el tipo de conversion que desee (C/F/S)").toLowerCase();
    }while(tipo.toLowerCase() != "c" && tipo.toLowerCase() != "f" && tipo.toLowerCase() != "s");
    if(tipo.toLowerCase() == "s"){
        valido = false;
    }else{
        valido = true;
        let num = parseInt(prompt("Introduzca el numero "+(i+1)));
        if (tipo.toLowerCase() == 'c') {
            arr1[i] = num;
            arr2[i] = convertirAC(num);
        }else{
            arr1[i] = num;
            arr2[i] = convertirAF(num);
        }
    }
    
}
document.write(pintar(arr1,arr2));