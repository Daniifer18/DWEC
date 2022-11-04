
function abrirVentana(){
    
    let vs = window.open("https://www.w3schools.com/js/default.asp" ,"Comunicacion de ventanas" ,"width=600, height=500");	
    

    setTimeout(()=>
        vs.close()
    ,10000);
 
}

function cerrarVentana(){

    vs.close();
    
}