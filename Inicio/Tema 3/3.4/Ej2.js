let ventana;

function abrir(){

    let num = parseInt(Math.random()* 4);


    switch (num) {
        case 0:
            ventana = window.open("https://mail.google.com/" ,"Comunicacion de ventanas" ,"width=600, height=500");
            break;
        case 1:
            ventana = window.open("https://correoweb.educa.madrid.org/" ,"Comunicacion de ventanas" ,"width=600, height=500");
            break;
        case 2:
            ventana = window.open("https://es.yahoo.com/" ,"Comunicacion de ventanas" ,"width=600, height=500");
            break;
        case 3:
            ventana = window.open("https://outlook.live.com/owa/" ,"Comunicacion de ventanas" ,"width=600, height=500");
        break;
    }

}