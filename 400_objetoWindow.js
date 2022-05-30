/* palabras clave
Window. objetos más usados
open()
close()
closed()
stop()
alert()
print()
prompt()
confirm()

----------
Screen



*/
let direccion01 = "https://www.jcyl.es";
let ventana01 = open(direccion01);

setTimeout("ventana01.close()", 5000);
// screenleft y screentop son propiedades de lectura sólo
const pantallaIzquierda = window.screenLeft;
const pantallaArriba = window.screenTop;

document.write(`posición a la izquierda:  ${pantallaIzquierda} <br>`);
document.write(`posición  arriba:  ${pantallaArriba} <br>`);
window.scroll(20,40000);