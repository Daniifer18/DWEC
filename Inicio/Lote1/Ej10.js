function conversorDivisas() {
    const error = document.querySelector('.error');

    let origen = document.getElementById('divisasOrigen').value;
    let destino = document.getElementById('divisasDestino').value;
    let cantidadOrigen = parseFloat(document.getElementById('cantidadOrigen').value);
    let cantidadDestino = document.getElementById('cantidadDestino');

    const conversion = {
        "eur" : {
            "dol" : 0.97,
            "lib" : 0.88,
            "yen" : 141.43
        },
        "dol" : {
            "eur" : 1.03,
            "lib" : 0.9,
            "yen" : 145.67
        },
        "lib" : {
            "eur" : 1.14,
            "dol" : 1.11,
            "yen" : 161.23
        },
        "yen" : {
            "eur" : 0.0071,
            "dol" : 0.0069,
            "lib" : 0.0062
        }
    };

    if(!isNaN(cantidadOrigen) && cantidadOrigen > 0 && origen != destino) {
        cantidadDestino.value = cantidadOrigen * conversion[origen][destino];
    } else if(origen == destino) {
        error.innerHTML = "Seleccione divisas distintas";
    } else if(cantidadOrigen <= 0) {
        cantidadDestino.value = "";
        error.innerHTML = "Introduzca una cantidad válida";
    } else {
        error.innerHTML = "Introduzca un valor válido";
    }
}