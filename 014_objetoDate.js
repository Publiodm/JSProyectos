
/* 
date 
 */
let tiempo1 = Date.now();
let fechaHoy = new Date();

document.write("Ahora muestro el día, el mes y el año actuales por separado");

document.write("hoy es día : " + fechaHoy.getDate() + "<br>");
document.write("Estamos a este mes: " + (fechaHoy.getMonth() + 1) +  "<br>");
document.write("Estamos en este año: " + fechaHoy.getFullYear() +  "<br>");

document.write("Ahora mido el tiempo entre 2 instantes dados " + "<br>");
for(i=0; i<10000; i++){
    document.write(i + "  ");
}
let tiempo2 = Date.now();


document.write("Han pasado entre las 2 variables  " + (tiempo2 - tiempo1) + " milisegundos <br>");