
/* 

NaN
Infinity
 */

let x = NaN;
let y = Infinity;
let z = -Infinity;
let w = 34;
/*
if (Number.isNaN(x)) {
    document.write("el valor de x:  es un literal no un número <br>");
}
else {
    document.write("el valor de x: es un número <br>");
}

*/

document.write("True si la variable es un literal, False si es un número " +"<br>" );
document.write("el valor de x es:" + Number.isNaN(x) + " <br>");
document.write("el valor de w es:" + Number.isNaN(w) + " <br>");


document.write("True si la variable es infinita, False si es un número " +"<br>" );
document.write("el valor de y es:" + Number.isFinite(y) + " <br>");
document.write("el valor de w es:" + Number.isFinite(w) + " <br>");

