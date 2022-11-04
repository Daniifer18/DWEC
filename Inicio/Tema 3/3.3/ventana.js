let vs;

function abrirVentana(){
    
    vs = window.open("https://www.w3schools.com/js/default.asp" ,"Comunicacion de ventanas" ,"width=600, height=500");	
    setTimeout(()=>{
        if(vs != null)
            vs.close();
    },10000);
    
}

function cerrarVentana(){

    if(vs != null) vs.close();
 
}