let vs;

function abrirVentana(){
    
    vs = window.open("https://www.w3schools.com/js/default.asp" ,"Comunicacion de ventanas" ,"width=600, height=500");	
    
}

function cerrarVentana(){

    vs.close();

    setTimeout(()=>
        vs.close()
    ,10000);
    
}