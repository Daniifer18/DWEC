function random(min, max) {

    return Math.floor((Math.random() * (max - min + 1)) + min);

}

let numSecreto = parseInt(prompt("Introduzca el número secreto"));


let numMaquina = random(0,100);
let valorVariable = 0;
let numIntentos = 0;

valorVariable = numMaquina;

while(numMaquina != numSecreto){
    if(numMaquina > numSecreto){
        document.write("<h3>El número secreto es menor.</h3>");
        valorVariable = numMaquina;
        numMaquina = random(0,valorVariable);
    }else{
        document.write("<h3>El número secreto es mayor.</h3>");
        valorVariable = numMaquina;
        numMaquina = random(valorVariable,100);
    }
    numIntentos++;
}


document.write("<h1>La maquina encontró el número secreto ("+numSecreto+") en "+numIntentos+" intentos</h1>");