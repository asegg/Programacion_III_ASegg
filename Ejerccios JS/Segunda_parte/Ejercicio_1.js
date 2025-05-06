/**[D.01] Producto JSON
Crear, dentro del archivo producto.js, un JSON para representar información acerca de un producto (código
de barra, nombre, precio y fecha de vencimiento). Asignarle valores a cada una de sus propiedades.
Validar su buen diseño ingresando en http://jsonviewer.stack.hu/.
Una vez validado el JSON, mostrar todas sus propiedades por consola.
 */

//Archivo JSON - Dic
const producto = {
    "codigoDeBarra" : "abcd1234",
    "nombre":"Arroz",
    "precio":1250,
    "fechaDeVencimiento":"02/05/2026"
};
//Muestro por consola como diccionario
console.log(producto);


//Muestro en consola como string
let cadenaProducto = JSON.stringify(producto);
console.log(cadenaProducto);