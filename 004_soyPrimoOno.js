/*
Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
    Un número primo es aquel que solo es divisible por sí mismo y la unidad

*/


const soyPrimo = (num) => {
    for (let i = num - 1; i > 1; i--) {
        document.write(` Estoy dividiendo  ${num} entre  ${i}  <br> `)
        if (num % i == 0) {
            return ("  no primo  ");
        }
    }
    return ("  primo !! ")
}

const soyPrimo2 = (num) => {
    for (let i = num - 1; i > 1; i--) {
        document.write(` Estoy dividiendo  ${num} entre  ${i}  <br> `)
        if (num % i == 0) {
            return (false);
        }
    }
    return (true);
}


let numero;

numero = parseInt(prompt("Dime un número y te diré si es primo o no:  "));
while (numero < 0) {
    numero = parseInt(prompt("El número debe ser mayor que 0, prueba otra vez:  "));
}


document.write(` Después de innumerables cálculos puedo decirte que el número: ${numero} es ${soyPrimo(numero)} <br> `);

//otro método llamando a otra función 

if (soyPrimo2(numero)){
    document.write(` metodo 2 - el número: ${numero} es PRIMO  <br> `);
}
else 
document.write(` metodo 2 - el número: ${numero}  NO ES PRIMO  <br> `);






