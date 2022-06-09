/*
 Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar"
    si el número es 5 el resultado será:
        1 - es impar
        2 - es par
        3 - es impar
        4 - es par
        5 - es impar


*/


let numero;

numero = parseInt(prompt("Dime que hata que núumero te digo si es par o impar: "));
for (let i = numero ; i > 0; i--) {
    if (i % 2 == 0) {
        document.write(` El número: ${i} es par <br> `);
    }
    else
     document.write(` El número: ${i} es impar <br> `);

}


