/* palabras clave
delete 
Object.keys
propiedades

borramos una propiedad de un objeto

*/

let pc = {
    nombre: "miPC",
    procesador: "intelcorei7",
    ram: "16Gb",
    hd: "1TB",
};

document.write(Object.keys(pc) + "<br>");
delete pc.ram;

document.write(Object.keys(pc) + "<br>");

