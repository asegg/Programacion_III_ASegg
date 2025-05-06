/**[C.08] Arrays con rest
Crea una función llamada crearArray que reciba n números como argumentos usando el parámetro rest
(...numeros) y devuelva un array.
EjempoJ:
crearArray(1, 2, 3, 4); // [1, 2, 3, 4] */

function crearArray(numeros , ...restoNumeros){
    numerosArray = [numeros, ...restoNumeros];
    return numerosArray; //Retorna todos los numeros como array
}

console.log(crearArray(1,2,5,4,5,7,5,8,9,6,2));