/*Palabras clave
 if y else if encadenados
alert
console.log
*/
/* 
- Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings

*/

let nombre;
let edad;



nombre = prompt("Por favor escribe tu nombre", "Harry Potter");
edad = prompt("Y ahora tu edad", "");
 
document.write("Hola hola " + nombre + "! Cómo estás hoy? <br>");
document.write("Tienes  " + edad + "años <br>");
document.write(`El año que viene tendras ${++edad} años <br>`);




/* 
console.log(` Hola, hola ${nombre} tienes ${edad} años`);
console.log(` Es más el año, que biene tendrás ${edad} años`);
 */


