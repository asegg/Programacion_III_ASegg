/**[C.07] Trunca la cadenita
Crear una función truncate(cadena, longitud) que verifique la longitud de cadena y, si excede longitud,
reemplaza el final de cadena con el carácter de puntos suspensivos "…", para hacer su longitud igual al
parámetro longitud.
El resultado de la función debe ser la cadena truncada (si es necesario) */


function truncate (cadena, longitud){
    let cadenaTruncate = "";
    if (cadena.length > longitud){
        cadenaTruncate = cadena.substring(0, longitud) + "..."; //Corta la cadena del indice 0 al indice "longitud"
    }
    else{
        cadenaTruncate = cadena;
    }
    return cadenaTruncate;
}


console.log(truncate("Agustina",7));