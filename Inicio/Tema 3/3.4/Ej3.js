let url = "https://www.w3schools.com/js/default.asp";
let ventana;

function abrirMitadTamaño(){
    
    ventana = window.open(url,'_blank', 'fullscreen=no,menubar=yes,toolbar=yes,resizable=no');

    ventana.resizeTo(ventana.innerWidth/2, ventana.innerHeight/2);

    if(!navigator.cookieEnabled){    
        alert("No tiene las cookies activadas");
    }else alert("Tienes las cookies activadas");  
}