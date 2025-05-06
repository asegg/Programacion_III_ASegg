/*[C.03] ¿Cuál es el número?
Cree una aplicación que muestre, a través de un Array, los nombres de los meses de un año y el número al
que ese mes corresponde. Utilizar una estructura repetitiva para escribir en la consola.
Nota: Utilizar console.log() */

let mesesAnio = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

for(let i=0; i < mesesAnio.length; i++){
    console.log(mesesAnio[i], i + 1);
};