/**[C.10] Música
Definir un array nombrado estilos, con los ítems “Jazz” y “Blues”. Se pide:
1. Agregar “Rock-n-Roll” al final.
2. Reemplazar el valor del medio por “Heavy Metal”. El código para encontrar el valor medio debe
funcionar con cualquier array de longitud impar.
3. Quitar el primer valor del array.
4. Anteponer Rap y Reggae al array.
Mostrar el array durante el proceso, debería quedar así:
Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Heavy Metal, Rock-n-Roll
Heavy Metal, Rock-n-Roll
Rap, Reggae, Heavy Metal, Rock-n-Roll
Nota: Utilizar console.log()
 */


const estilosMusica = ["Jazz", "Blue"];
console.log(estilosMusica);

estilosMusica.push("Rock and Roll"); //Agrega un elemento al finald el array
console.log(estilosMusica);

if (estilosMusica.length % 2 !== 0){
    mitad = (estilosMusica.length + 1) /2; //Identifica el valor del medio 
    estilosMusica[mitad-1] = "Heavy MEtal"; //Lo modifica
}
console.log(estilosMusica);

estilosMusica.shift(); //Saca el primer valor
console.log(estilosMusica);

estilosMusica.unshift("Rap", "Reggae"); //Agrega al principio
console.log(estilosMusica);




