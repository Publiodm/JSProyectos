
/*
función flecha
muestra 10 números aleatorios entre 0 y 9 
*/

let i;

numAleatorio = () => Math.floor(Math.random() * 10);

alert("hola hola");


for (i = 0; i < 10; i++) {

    document.write(` Numero aleatorio   ${i}:   ${numAleatorio()} <br>`);

}


/*
alert("hola" + i);
document.getElementById("demo") = ` Numero aleatorio   ${i}:   ${Math.random()}`;
 */