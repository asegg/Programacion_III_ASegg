/**[C.04] ¿Es par o impar?
Realizar una función que reciba un número y que muestre (por consola) un mensaje como el siguiente:
El número 5 es impar, siendo 5 el número recibido como parámetro.
*/

function parOImpar (numero){
    let retorno = "";
    if (numero %2 == 0){
        retorno = `El numero: ${numero} es par.`;
    }
    else{
        retorno = `El numero: ${numero} es impar.`;
    }
    return retorno;
}
console.log(parOImpar(5));