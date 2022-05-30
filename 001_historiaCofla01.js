/*Palabras clave
 if y else if encadenados
alert
console.log
*/
/* 
Pido el dinero que tienes y con la tabla de precios de más abajo te digo el helado más caro que puedes comprar. Además te digo lo que te queda de vuelta. 

Precios de los helados
Palito de helado de agua: 0, 6
Palito de heado de crema: 1
Bombón helado marca heladix: 1, 6
Bombón helado marca heladovich: 1, 7
Bombón helado marca helardo: 1, 8
Potecito de helado con confites: 2, 9
Pote de 1 / 4 kg. : 2, 9 
muestra también la vuelta 

*/

let dineroCofla;
let vuelta;

alert("hola hola");




dineroCofla = prompt("¿Cuanto dinero tienes Cofla?");
/* Se deben insertar los números con el . como señalador de decimales. */
dineroCofla = parseFloat(dineroCofla);

alert("Cofla, tienes " + dineroCofla + " leuros ");
if (dineroCofla < 0.6) {
    alert("Cofla no tienes dinero para un helado");
}
else if ((dineroCofla > 0.6) && (dineroCofla < 1)) {
    alert("Cofla comprate el helado de agua");
    vuelta = dineroCofla - 0.6 ;
    alert("te sobran "  + vuelta + " leuros");
}
else if ((dineroCofla >= 1) && (dineroCofla < 1.6)) {
    alert("Cofla comprate el helado de crema");
    vuelta = dineroCofla - 1 ;
    alert("te sobran "  + vuelta + " leuros");
} else if ((dineroCofla >= 1.6) && (dineroCofla < 1.7)) {
    alert("Cofla comprate el helado de heladix");
    vuelta = dineroCofla - 1.6 ;
    alert("te sobran "  + vuelta + " leuros");
} else if ((dineroCofla >= 1.7) && (dineroCofla < 1.8)) {
    alert("Cofla comprate el helado heladovich");
    vuelta = dineroCofla - 1.7 ;
    alert("te sobran "  + vuelta + " leuros");
} else if ((dineroCofla >= 1.8) && (dineroCofla < 2.9)) {
    alert("Cofla comprate el bombón de helardo");
    vuelta = dineroCofla - 1.8 ;
    alert("te sobran "  + vuelta + " leuros");
}
else  {
    alert("Cofla comprate el potecito de helado con confites o el pote de 1/4 kg. ");
    vuelta = dineroCofla - 2.9 ;
    alert("te sobran "  + vuelta + " leuros");
}
console.log('Hola soy un mensaje que solo se ve en la consola');