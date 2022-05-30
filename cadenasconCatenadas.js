/*
palabras clave: 
confirm, if, concatenar


Pide una serie cadenas desde el teclado cuando se pulsa cancelar se muestran todas concatenadas con un guión
*/
let cadenaTotal = "";
let cadena;

alert("Hola hola, te voy a pedir cadenas hasta que pulses cancelar. Después te las muestro separadas por guión");
do {
    cadena = prompt("Escribe una cadena: ");
    cadenaTotal = `${cadenaTotal} - ${cadena}`;

} while (confirm("¿Seguimos?"));

document.write(cadenaTotal);
