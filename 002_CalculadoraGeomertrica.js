/*
Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b*h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)

    utilizo funciones flecha 

*/

const PI = 3.1416;
let base;
let altura;
let area;
let radio;
let eligeFigura = 0;

// definición de fórmulas
const areaTriangulo = (b, h) => { return (b * h / 2) }
const areaRectangulo = (b, h) => { return (b * h) }
const areaCirculo = (r) => { return (PI * r * r) }


while (eligeFigura < 1 || eligeFigura > 3) {
    eligeFigura = parseInt(prompt(`Dime que figura quieres calcular el area: 
    1.-Triángulo 📐
    2.-Rectángulo 🗄
    3.-Círculo 🎯`))

}

switch (eligeFigura) {
    case 1:          //triángulo
        base = parseInt(prompt("Dame la base del triángulo: "));
        altura = parseInt(prompt("Dame la altura del triángulo: "));
        area = areaTriangulo(base, altura);
        document.write(`El área del triánglo es:  ${area} <br> `);
        document.write(`El área del triánglo es:  ${(base * altura / 2)} <br>`);
        document.write(`El área del triánglo es:  ${areaTriangulo(base, altura)} <br>`);
        break;
    case 2:        //rectángulo
        base = parseInt(prompt("Dame la base del rectángulo: "));
        altura = parseInt(prompt("Dame la  altura del rectángulo: "));
        document.write(`El área del rectángulo es:  ${areaRectangulo(base, altura)} `);
        break;
    case 3:        //círculo 
        radio = parseInt(prompt("Dame el radio del círculo: "));
        document.write(`El área del círculo es:  ${areaCirculo(radio)} `);
        break;
    default:
        break;
}



