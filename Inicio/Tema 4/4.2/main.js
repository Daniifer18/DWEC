/*
Declara una clase llamada Mascotas, que reciba en el constructor los valores nombre y cantidad
de comida en gramos al día que consume. Definir un método que imprima las
características de cada mascota.


Declarar luego una clase llamada MascotasComida, que herede de Mascotas y añada el
método mascotaDias, que en base a, si las bolsas de comida son de 3kg, para todas
las mascotas, calcule los días que durará la bolsa.


Crea 3 mascotas diferentes y muestra la información para cada una de ellas.
*/ 

class Mascotas{

    nombre;
    cantidadComida;

    constructor (nombre,cantidadComida){
        this.nombre = nombre;
        this.cantidadComida = cantidadComida;
    }

    imprimirDatos(){
        document.write(`<h3>${this.nombre} consume ${this.cantidadComida} gramos de comida al dia</h3>`);
    }
}

class MascotasComida extends Mascotas{

    constructor(nombre,cantidadComida){
        super(nombre,cantidadComida);
    }

    mascotaDias(bolsa = 3){
        document.write(`<h2>La comida de ${this.nombre} va a durar ${Math.round(parseFloat((bolsa*1000)/this.cantidadComida)*100)/100} dias</h2>`);
    }

}


const gato = new MascotasComida("Doraemon",350);
gato.imprimirDatos();
gato.mascotaDias(5);

const perro = new MascotasComida("Nevado",650);
perro.imprimirDatos();
perro.mascotaDias(10);

const hamster = new MascotasComida("Hamtaro",150);
hamster.imprimirDatos();
hamster.mascotaDias();