/*Distintas formas de convertir una cadena a número 
*/


let cadena = "2";
document.write(typeof cadena  + "<br>");
document.write("Ahora convierto este string en número <br>");
document.write( typeof (+cadena) + "<br>");
document.write( typeof (Number(cadena)) + "<br>" );
document.write( typeof (parseInt(cadena)) + "<br>" );

