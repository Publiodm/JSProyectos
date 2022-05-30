
/* 



-pop()
-shift()  
-unsift()
-push()


 */

let i;
//crear matrices
let matriz01 = new Array(3);
//acabamos de crear una matriz con 4 elemntos indefinidos
document.write("ahora muestro la matriz: matriz01 <br>");
// ahora la recorro
for (i = 0; i < 4; i++) {
    document.write("la posición " + i + " es: ");
    document.write(matriz01[i] + "<br>");
}

document.write(" <br> <br>");

//Exactamente igual resultado que el anterior
let matriz02 = [];
//acabamos de crear una matriz con 4 elemntos indefinidos
document.write("ahora muestro la matriz: matriz02 <br>");
// ahora la recorro
for (i = 0; i < 4; i++) {
    document.write("la posición " + i + " es: ");
    document.write(matriz02[i] + "<br>");
}
document.write(`la longitud de una matriz de rango indefinido es 0. Vease: <br>`);
document.write(`la longitud de matriz02 es: ${matriz02.length}`);
document.write(" <br> <br>");

//las matrices o array son objet... 
document.write("tipo de objeto de matri01: " + typeof matriz01 + "<br>");
document.write("tipo de objeto de matri02: " + typeof matriz02 + "<br>");




let diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

let dia;

let saco;
// pop() push() para sacar y meter al final de la matriz
// shift() y unshift para sacar y meter al principio de la matriz


//función pop() para sacar al final de la matriz

document.write("los días de la semana original son: " + diasSemana + " <br>");
document.write(`La semana originalmente tiene ${diasSemana.length} dias  <br>`);
dia = diasSemana.pop();
document.write("he sacado el día: <b style='color:red'>" + dia + "</b><br>");
document.write("los dias de la semana quedan así: " + diasSemana + "<br>");

//función unshift() para añadir al principio de la matriz

document.write(" <br> <br>");
document.write("ahora meto el domingo al principio de la matriz <br>");
document.write(" <br> <br>");

document.write("partimos de los día de las semana: " + diasSemana + " <br>");
document.write(`que son: ${diasSemana.length} dias  <br>`);

diasSemana.unshift(dia);
document.write("he metido día: <b style='color:red'>" + dia + "</b><br>");
document.write("los dias de la semana quedan así: " + diasSemana + "<br>");

// El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.


document.write(" <br> <br>");
document.write("ahora meto un día nuevo después del lunes  <br>");
document.write(" <br> <br>");

dia = "diaNuevo";
document.write("partimos de los día de las semana: " + diasSemana + " <br>");
document.write(`que son: ${diasSemana.length} dias  <br>`);
diasSemana.splice(2, 0, dia);
document.write("he metido día: <b style='color:red'>" + dia + "</b><br>");
document.write("los dias de la semana quedan así: " + diasSemana + "<br>");

document.write(" <br> <br>");
document.write("ahora borro 3 días desde el martes <br>");
document.write(" <br> <br>");


dia = "diaNuevo";
document.write("partimos de los día de las semana: " + diasSemana + " <br>");
document.write(`que son: ${diasSemana.length} dias  <br>`);
dia = diasSemana.splice(3, 3);
document.write("he sacado estos días : <b style='color:red'>" + dia + "</b><br>");
document.write("los dias de la semana quedan así: " + diasSemana + "<br>");


document.write(" <br> <br>");
document.write("ahora borro dia nuevo y añado martes miercoles y jueves <br>");
document.write(" <br> <br>");

dia = ["martes", "miercoles", "jueves"];
document.write("partimos de los día de las semana: " + diasSemana + " <br>");
document.write(`que son: ${diasSemana.length} dias  <br>`);
saco = diasSemana.splice(2, 3, "martes", "miercoles", "jueves");
document.write("he sacado estos días : <b style='color:red'>" + saco + "</b><br>");
document.write("los dias de la semana quedan así: " + diasSemana + "<br>");