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
    for (let i = 0; i < 10; i++) {
        p +=`<tr>    
            <td>`+ arr1[i]+`</td>
            <td>`+arr2[i]+`</td>
        </tr>`
    }
    p+=`</table>`

    return p
}

let tipo;
for(let i = 0;i < 10;i++){
    do{
        tipo = prompt("Introduzca el tipo de conversion que desee (C/F)").toLowerCase();
    }while(tipo.toLowerCase() != "c" && tipo.toLowerCase() != "f");
    let num = parseInt(prompt("Introduzca el numero "+(i+1)));
    if (tipo.toLocaleLowerCase() == 'c') {
        arr1[i] = num;
        arr2[i] = convertirAC(num);
    }else{
        arr1[i] = num;
        arr2[i] = convertirAF(num);
    }
}
document.write(pintar(arr1,arr2));