/*los caracteres shift para mostrar texto

Las plantillas literales son cadenas literales que habilitan el uso de expresiones incrustadas

Las plantillas literales se delimitan con el caracter de comillas o tildes invertidas (` `) (grave accent), en lugar de las comillas sencillas o dobles.
*/

console.log(`línea 1 de la cadena de texto 
línea 2 de la cadena de texto`);

let a = 5;
let b = 10 ;

console.log(`Quince es ${a + b} y
no ${2 * a + b}.`);
// "Quince es 15 y
// no 20."

let usuario = "pedrito",
    password = "123";
let texto = `Hola. Estos son tus datos:
Usuario: ${usuario}
Contraseña: ${password}`;
alert(texto);

