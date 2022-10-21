var hora = new Date();
var opcion = 100;

do{
    opcion = parseInt(prompt("Que opción quiere 1.Analógico,2.Digital"));
    if(opcion < 1 || opcion > 2) alert("Los números introducidos deben estar entre 1 y 3 incluidos");
}while(opcion < 1 || opcion > 2);
switch (opcion) {
    case 1:
        document.write("<h3>"+hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds()+"</h3>");
        break;
    case 2:
        if(hora.getHours() > 11 && hora.getHours() <= 23){
            document.write("<h3>"+hora.getHours()+":"+hora.getMinutes()+" PM</h3>");
        }else{
            document.write("<h3>"+hora.getHours()+":"+hora.getMinutes()+" AM</h3>");
        }
        break;
}