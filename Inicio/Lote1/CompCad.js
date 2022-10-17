var arr1 = ["java","Hola","javaScript","esternocleidomastoideo"];
var arr2 = ["JAva","Pepe","JavaScript","nosequeponeraqui"];
var arrFinal = [];

function compararCadenas(arr1,arr2,arrFinal){
    var valido = true

    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i].includes(arr2[i])) {
            valido[i] = true
        }else{
            valido[i] = false;
        }
    
        arrFinal[i] = arr1[i].toLowerCase()+" , "+arr2[i].toLowerCase()+" devuelve: "+valido;
    }
}

compararCadenas(arr1,arr2,arrFinal);

function visualzarArray(arrFinal){
    var p;
    for(let i = 0;i < arrFinal.length;i++){
        p +=`<h3>`+
            arrFinal[i]
        +`</h3>`
    }
    return p;
}
document.write(visualzarArray(arrFinal));