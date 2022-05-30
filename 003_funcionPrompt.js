/*Palabras clave
 prompt (texto que muestra, texto por defecto)
 getElementById("demo").innerHTML...
 reempaza el texto html con la etiqueta demo

*/



var person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hola " + person + "! Cómo estás hoy?";
}