/*
Clases propiedades atributos metodos funciones


*/

class Animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} añoss y soy de color: ${this.color}`;
    }


    //OJO no se pueden usar la sintaxis de las funciones flecha. para definir un método se usa la
    //sintaxis tradicional de funciones. 
    verinfo() {
        document.write(this.info + "<br>");
        document.write(`${this.info} <br>`);

    }

}

class Perro extends Animal {
    constructor(especie, edad, color, raza) {
        super(especie, edad, color);
        this.raza = raza;

    }
ladrar() {
alert ("guau!!!");

}

}


const laika = new Perro("perro", "4", "marron", "pequines");
const micifu = new Animal("gato", "2", "negro");
const karuso = new Animal("pajaro", "5", "amarillo");


laika.verinfo();
micifu.verinfo();
karuso.verinfo();
laika.ladrar();



