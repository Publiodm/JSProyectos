/*Palabras clave
alert
console.log

*/
/* 
P


dineroCofla = prompt("¿Cuanto dinero tienes Cofla?");
/* Se deben insertar los números con el . como señalador de decimales. */

let opcionConversion
let grados

opcionConversion = prompt(`Escribe que conversión deseas hacer:
    1- de Celsis a Farenheit 
    2- de Farenheit a Celsius `);

grados = prompt(`Escribe los drados que quieres convertir: `);


switch (opcionConversion) {
    case '1':
        document.write(` ${grados} Celsius son ${aFarenheit(grados)} Farenheit `);
        break;
    case '2':
        document.write(` ${grados} Farenheit son ${aCelsius(grados)} Celsius `);
        break;
    default:
        document.write(` lo siento esa no es una opción válida `);
        break;
}


function aFarenheit(g){
    return (g * 1.8 + 32);
}

function aCelsius(g){
    return ((g-32) / 1.8);
}

console.log('Hola soy un mensaje que solo se ve en la consola');