const encender = document.getElementById("der");
const apagar = document.getElementById("izq");
const foto = document.getElementById("foto");

encender.onclick = a => foto.src = "encendida.png";

apagar.onclick = b => foto.src = "apagada.png";

