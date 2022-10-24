var todosLados=null;

function abrirVentana(){
    
    let vs = window.open("secundaria.html");	
    
    

    vs.onload=function(){

        vs.getUrl(url);
        window.getUrl = (url) => {
			console.log('funciona');
			texto.innerHTML = `${url}`;
		}
    }
    
    todosLados="no nos gusta tampoco";
    
    // Cerrar Venta pasados un 3 segundos
    setTimeout(()=>
        vs.close()
    ,3000);
 
}