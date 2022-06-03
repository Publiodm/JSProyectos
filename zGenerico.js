

let pc = {
    nombre: "miPC",
    procesador: "intelcorei7",
    ram: "16Gb",
    hd: "1TB",
};

alert("Hola hola");
document.write(Object.keys(pc) + "<br>");
delete pc.ram;

document.write(Object.keys(pc) + "<br>");
console.log("texto  ");


/*


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