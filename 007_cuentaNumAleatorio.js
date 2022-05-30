
/*
función flecha
muestra 10 números aleatorios entre 0 y 9 
*/

let i, j;
let numeros;
// si le defino esta matriz como new Array(9) me lo toma como caractares y no escribe numeros
// por ello le tengo que inicializar con el valor 0
// otra opción sería definirlo como 
// let resultados = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let resultados = new Array(9);
let resultado;
let aleatorio;

numAleatorio = () => Math.floor(Math.random() * 10);

alert("hola hola");

//inicializo la matriz de resultados a cero
for (i = 0; i < 10; i++) {
    resultados[i] = 0;
}

numeros = prompt("cuantos números aleatorios quieres que calcule...: ", 10);
document.write(`<h3> Ahora te muestro todos los números aleatorios que han salido </h3>`)
for (i = 1; i <= numeros; i++) {
    aleatorio = numAleatorio();
    document.write(` Numero aleatorio   ${i}:   ${aleatorio} <br>`);
    resultados[aleatorio]++;

}

document.write(` ------------------------------------- <br>`);
document.write(`<h3> Ahora te muestro los porcentajes  </h3>`)
/* for (i = 0; i < 10; i++) {

    document.write(`el numero ${i} ha salido  ${resultados[i]} veces  <br>`);

}
 */

for (resultado in resultados){
    document.write(` el número  ${resultado} ha salido en : ${resultados[resultado]} ocasiones. Lo que supone un ${(resultados[resultado]/numeros)*100} %<br>`);
}
