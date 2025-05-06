/**[C.11] ¿Son todas mayúsculas, minúsculas o qué?
Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A
partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo
por minúsculas o por una mezcla de ambas.
*/


function mayusMinisc(cadena){
    let retorno ="";
    if (cadena === cadena.toUpperCase()){
        retorno = "La cadeane esta tada en mayuscula";
    }
    if (cadena === cadena.toLowerCase()){
        retorno = "La cadena esta toda en minuscula";
    }
    else{
        retorno ="La cadena esta en minuscula y mayuscula";
    }

    return retorno;
}

console.log(mayusMinisc("AGUSTINa"));