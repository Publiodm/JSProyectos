
/* 



-pop()
-shift()  
-unsift()
-push()


 */
let carroCompra = new Array();
let articulo;

articulo = prompt("que artículo hay que añadir:  🛒");
carroCompra.push(articulo); 

while (confirm("Desea incluir más artículos")) {
articulo = prompt("que artículo hay que añadir: 🛒  ");
carroCompra.push(articulo); 
}

console.log("todo seguido") 
console.log(carroCompra);

//otra forma de ver el array

console.log("elemento a elemento") 
for (const item of carroCompra){
    console.log(item);
}
   
// otra forma más el famoso forEach

console.log("ahora con un forEach")
carroCompra.forEach((item) => console.log(item));

