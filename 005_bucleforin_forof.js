/*
let const
for in 
for of
document.write

*/


/*
Recorro y muestro matrices con for in y for out

*/

let mascotas = ["gato", "perro", "tortuga", "huron"];
const diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
let escribeMascota;
let escribedia;


alert("hola hola");
/*Aquí mascota nos mostrará el indice no el valor del elemento */
document.write(`<h3>Recorrido de bucle for in </h3>`);
for (mascota in mascotas) {
    escribeMascota = `Mascota casa, ${mascota} <br>`;
    document.write(escribeMascota);

}

/*Aquí mascota nos mostrará el valor del elemento */
document.write(`<h3>Recorrido de bucle for in mostrando el valor  </h3>`);

for (mascota in mascotas) {
    escribeMascota = `Mascota casa, ${mascotas[mascota]} <br>`;
    document.write(escribeMascota);

}
document.write(`<h3>Recorrido de bucle for of </h3>`);

for (mascota of mascotas) {
    escribeMascota = `Mascota casa, ${mascota} <br>`;
    document.write(escribeMascota);

}

document.write(`<h3>lo mismo con los días de la semana </h3>`);

for (dia in diasSemana) {

    escribedia = `el dia de ${parseInt(dia) + 1} la semana es: , ${diasSemana[dia]}<br>`;
    document.write(escribedia);

}

for (dia of diasSemana) {

    escribedia = `el dia de la semana es, ${dia}<br>`;
    document.write(escribedia);

}
