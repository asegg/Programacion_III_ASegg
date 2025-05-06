/**[D.02] Colección de productos JSON
Tomando como punto de partida el ejercicio anterior, diseñar, en el archivo productos.js, una colección de
tres elementos de tipo producto. Asignarle, a cada elemento, valores para cada una de las propiedades.
Validar su buen diseño ingresando en http://jsonviewer.stack.hu/.
Una vez validado el JSON, mostrar todas las propiedades de todos los productos por consola.
 */

//Archivo JSON - Array
const producto = [{
    "codigoDeBarra" : "abcd1234",
    "nombre":"Arroz",
    "precio":1250,
    "fechaDeVencimiento":"02/05/2026"
},
{
    "codigoDeBarra" : "abcd5678",
    "nombre":"Fideos",
    "precio":2255,
    "fechaDeVencimiento":"20/04/2026"
},
{
    "codigoDeBarra" : "1234efgh",
    "nombre":"Yerba",
    "precio":3252,
    "fechaDeVencimiento":"05/1/2025"
}];
//Muestro por consola como diccionario
producto.forEach(p =>{
    console.log(p);
})

//Muestro por consola como Array
console.log(producto);

//Muestro detallado value

for(i=0; i< producto.length; i++){
    let cadena = `${producto[i].codigoDeBarra} - ${producto[i].nombre} - ${producto[i].precio} - ${producto[i].fechaDeVencimiento}.`;
    console.log(cadena);
}