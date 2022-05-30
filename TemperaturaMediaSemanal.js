al/* let mascotas = ["gato", "perro", "tortuga", "huron"];
let escribeMascota;

alert("hola hola");
/*Aquí mascota nos mostrará el indice no el valor del elemento */
/*
for (mascota in mascotas) {
    escribeMascota = `Mascota casa, ${mascota} <br>`;
    document.write(escribeMascota);

}

Aquí mascota nos mostrará el valor del elemento 
for(mascota in mascotas){
    escribeMascota = `Mascota casa, ${mascotas[mascota]} <br>`;
    document.write(escribeMascota);
    
    }
 for (mascota of mascotas) {
    escribeMascota = `Mascota casa, ${mascota} <br>`;
    document.write(escribeMascota);

}

 */
const diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
let ciudades = [2][7];
let ciudad;
let i;
let numeroCiudades;

numeroCiudades = prompt("cuantas ciudades vas a introducir: ?");
alert(`Bien ahora dame el nombre de las ${numeroCiudades} ciudades`);


//Ojo con la definición de las funciones flecha
// se las tiene que asignar a una variable
// const (var o let) nombreFunción = (param1,param2) => {cuerpo}
const nombreCiudad = (c) => {
    return prompt(`Cual es el nombre de la ciduad número ${c}: `);
}


for (i = 0; i < numeroCiudades; i++) {
    ciudades[i][0] = nombreCiudad(i);

  
    //ciudades[i] = prompt(`Cual es el nombre de la ciudad número ${i+1}: `);

}


document.write(` las ciudades son: ${ciudades} </br>`);