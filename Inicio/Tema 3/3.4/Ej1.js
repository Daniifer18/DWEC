let v;

function abrirVentanaNueva(){


    if (confirm("¿Está de acuerdo con esto?") == true) {

        v = window.open("https://www.w3schools.com/js/default.asp" ,"Comunicacion de ventanas" ,"width=300px, height=200px");

        v.moveBy(500,500);

        v.moveTo(100,200);

	    v.onload = function scrollToBottom(){
		    v.scrollTo(0, document.body.scrollHeight);
        }
    }

}