/*Palabras clave
 array asociativo
 document.wrte

*/

/*
 Defino y muestro un array asociativo ojo porque en el fondo se trata de un objeto
ojo... Esto es un objeto

*/
let cadenaAtributos = [];

let pc = {
    nombre: "miPC",
    procesador: "intelcorei7",
    ram: "16Gb",
    hd: "1TB",
};

let nombre1 = pc["nombre"];
let procesador1 = pc["procesador"];
let ram1 = pc["ram"];
let hd1 = pc["hd"];


frase = `el nombre de mi pc es: ${nombre1} <br>
el procesador es: ${procesador1}  <br>
la ram es: ${ram1}  <br>
el hd es es: ${hd1} <br>`


document.write("<hr>");
document.write("ver que tipo de variables son las siguientes  <br>");
document.write("cadenaAtributos:  " + typeof  cadenaAtributos + "<br>" );
document.write("pc:  " + typeof  pc + "<br>" );
document.write("Object.keys(pc):  " + typeof Object.keys(pc) + "<br>" );
document.write("<hr>");



document.write("ahora imprimo los valores clave <br>")
// object.keys nos devuelve un array con los nombres de los atributos del objeto.
document.write(Object.keys(pc) + "<br>");
document.write("<hr>");

// esta cadena puede ser recorrida por un bucle forEach
document.write("ahora los recorro e imprimo con un bucle forEach  <br>")
cadenaAtributos = Object.keys(pc);
document.write("cadenaAtributos:  " + typeof  cadenaAtributos + "<br>" );
cadenaAtributos.forEach((valor) => {
    document.write(valor + "<br>");
})

document.write("<hr>");


document.write(frase);


frase2 = `el nombre de mi pc es: ${pc.nombre} <br>
el procesador es: ${pc.procesador}  <br>
la ram es: ${pc.ram}  <br>
el hd es es: ${pc.hd} <br>`

document.write("<br> pero también se puede recorre así: <br> ");

document.write(frase2);


