const diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

let ciudades = [];

let i, j;
let ciudad;
let numCiudades;



alert("Hola hola");
alert("ahora te pido el numero de ciudades");

numCiudades = prompt("Cuantas ciudades metes?:");
for (i = 0; i < numCiudades; i++) {
    ciudades[i] = [];
    ciudades[i][0] = prompt(`dame el nombre de la ciudad ${i}`);
}

alert("ahora te pido la temperatura de las ciudades esa semana");

for (i = 0; i < numCiudades; i++) {
    for (j = 0; j < 7; j++) {
        ciudades[i][j] = prompt(`dame la temperatura de ${ciudades[i][0]} el ${diasSemana[j]}: `);
        }
    }
document.write(ciudades);

