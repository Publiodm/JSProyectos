/* Enunciado del ejercicio:
Crea una clase Libro
La clase libro tendrá título, autor, año y género.
Crea un método que devuelva toda la información del libro
Pide 3 libros y guárdalos en un array
Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduzcan vacíos
Validar que el año sea un número y que tenga 4 dígitos
Validar que el género sea: aventuras, terror o fantasía
Crea una función que muestre todos los libros
Crea una función que muestre los autores ordenados alfabéticamente
Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información
 */


class Libro {
    constructor(titulo, autor, año, genero) {
        this.titulo = titulo,
            this.autor = autor,
            this.año = año,
            this.genero = genero
    }

    infolibro() {
        return (`Ficha del libro: Título: ${this.titulo}. Autor: ${this.autor}. Año:  ${this.año}.Género:  ${this.genero}.  `);


    }

}

const libro1 = new Libro("Dracula", "Bram Stoker", 1879, "Terror");
document.write(`${libro1.infolibro()}`);

for (i = 0; i < 3; i++) {
    pedirLibro();
}

pedirLibro() = {
         

}



        /*Pediré 3 libros 
        for (i = 0; i < 3; i++) {
            setLibro[i] = pedirLibro();
        }



        pedirLibro() =

            {

                return datosLibro
            }

        prompt("Please enter your name", "Harry Potter");







        /*
        alert("Hola hola");

        let pc = {
            nombre: "miPC",
            procesador: "intelcorei7",
            ram: "16Gb",
            hd: "1TB",
        };

        document.write(Object.keys(pc) + "<br>");
        delete pc.ram;

        document.write(Object.keys(pc) + "<br>");

        let materias = {
            fisica: ["Perez", "pedro", "pepito", "cofla", "maria"],
            programacion: ["Dalto", "pedro", "juan", "pepito"],
            logica: ["Hernandez", "pedro", "juan", "pepito", "cofla", "maria"],
            quimica: ["Rodriguez", "pedro", "juan", "pepito", "cofla", "maria"]
        }

        let alumnos;
        let asignatura;

        const verAlumnos = (asignat) => {
            if (materias[asignat] == undefined) {
                alert("no existen la materia");
                return (false);
            }
            else {
                return (materias[asignat]);
            }
        }

        asignatura = prompt("Dime la asignatura en la que quieres ver los alumnos: ");
        //alumnos = verAlumnos(asignatura);
        if (verAlumnos(asignatura) == false) {
            document.write("lo siento esa asignatura no existe");

        } else {
            document.write(alumnos);

        } */