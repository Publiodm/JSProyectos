
/* 
recorrer matrices
forEach()
 */
let omitir
let diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

document.write("Ahora muestro los días de la semana recorridos con un bucle forEach" + "<br>");
diasSemana.forEach(function (valor, indice, diasSemana) {
    document.write(`el día ${indice + 1} es: ${valor} <br>  `);
})

document.write("<br>Ahora muestro los días de la semana recorridos con un bucle forEach" + "<br>");

function recorrerDias(val,ind){
    document.write(`el día ${ind + 1} es: ${val} <br>  `);

}

diasSemana.forEach(recorrerDias);

document.write("<br>Ahora muestro los días de la semana recorridos con un bucle forEach con función flecha" + "<br>");

recorrerDias = (valor, indice)=> {
    document.write(`el día ${indice + 1} es: ${valor} <br>  `);

}

diasSemana.forEach(recorrerDias);




/* 
omitir= prompt("¿Qué día quieres que no aparezca?");

omitirDia(omitir,) */