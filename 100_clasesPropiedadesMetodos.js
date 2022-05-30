/*
Clases propiedades atributos metodos funciones


*/

/* Nota: Las clases se escriben con la primera letra en mayúsculas. Tiene que quedar claro que una clase es una especie de "declaración de características y funcionalidades" de los objetos. Dicho de otro modo, las clases son descripciones de la forma y funcionamiento de los objetos. Con las clases generalmente no se realiza ningún trabajo, sino que se hace con los objetos, que creamos a partir de las clases.
Una vez comprendida la diferencia entre objetos y clases, cabe señalar que String es una clase, lo mismo que Date. Si queremos trabajar con cadenas de caracteres o fechas necesitamos crear objetos de las clases String y Date respectivamente. Como sabemos, Javascript es un lenguaje sensible a las mayúsculas y las minúsculas y en este caso, las clases, por convención, siempre se escriben con la primera letra en mayúscula y también la primera letra de las siguientes palabras, si es que el nombre de la clase está compuesto de varias palabras. Por ejemplo si tuvieramos la clase de "Alumnos universitarios" se escribiría con la -A- de alumnos y la -U- de universitarios en mayúscula. AlumnosUniversitarios sería el nombre de nuestra supuesta clase.
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
    verinfo(){
        document.write(this.info + "<br>");
        document.write(`${this.info} <br>`);

    }

}

const laika = new Animal("perro","4","marron");
const micifu = new Animal("gato","2","negro");
const karuso = new Animal("pajaro","5","amarillo");


laika.verinfo();
micifu.verinfo();
karuso.verinfo();



