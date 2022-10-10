const encender = document.getElementById("der");
const apagar = document.getElementById("izq");
const foto = document.getElementById("foto");

encender.onclick = evento => foto.src = "encendida.png";

apagar.onclick = evento => foto.src = "apagada.png";

