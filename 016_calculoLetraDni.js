/* palabras clave
funciones flecha 
operador resto o módulo
if else
*/

/*
Calcula la letra del dni a partir del número introducido.
comprueba que introduces un número de 8 dígitos
*/


let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let numeroDni;
let i;

alert("Hola hola");
letraDni = (numero)=>letras[numeroDni % 23];


parseInt(numeroDni = prompt("Escribe tu número de dni, te diré cual es tu letra: "));
if (numeroDni.length != 8){
    alert("ese número no es válido: ");
    }
else{
    alert(`tu letra es: ${letraDni(numeroDni)}`);
}


