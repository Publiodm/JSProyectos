/*
diferentes formas de crear funciones 
arrow
flecha
funciones


*/ 



//función tradicional ----- función declarada
function saludar01(nombre) {
    let frase = ` ¡ Hola ${nombre}! ¿Cómo estás? <br> `;
    document.write(frase);
}
//funciones anónimas --- función expresada 
const saludar02 = function (nombre) {
    let frase = ` ¡ Hola ${nombre}! ¿Cómo estás? <br> `;
    document.write(frase);
}
//funciones flecha
const saludar03 = (nombre) => {
    let frase = ` ¡ Hola ${nombre}! ¿Cómo estás? <br> `;
    document.write(frase);

}
//Ojo con la definición de las funciones flecha
// se las tiene que asignar a una variable
// const (var o let) nombreFunción = (param1,param2) => {cuerpo}
//lleva implícito el return

saludar01("Luis");
saludar02("Juan");
saludar03("Pedro");


document.write("Ahora con la función suma " + "<br>");

function sumaTradicional(a,b) {
    return(a + b);
}


const sumaAnonima = function(a,b){return(a+b)};
const sumaFlecha = (a,b)=>{return(a+b)};


document.write(`Ahora con la función suma tradicional 2 + 3 = ${sumaTradicional(2,3)}<br> `);
document.write(`Ahora con la función suma anónima 2 + 3 = ${sumaAnonima(2,3)}<br> `);
document.write(`Ahora con la función suma flecha 2 + 3 = ${sumaFlecha(2,3)}<br> `);


