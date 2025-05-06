/**[C.09] Arrays con spread
Usando el operador spread (...), crea una copia de un array y agrega un nuevo elemento al final.
Ejemplo:
// Original: const frutas = ["manzana", "banana"];
// Resultado: ["manzana", "banana", "naranja"] */

const productos = ["Barras", "maquinas", "bancos", "tapizados"];
const productoUltimo =["Bulones"];
const productosNuevos = [...productos, ...productoUltimo]; //spend ... agrega o une arrays

console.log(productos);
console.log(productosNuevos);