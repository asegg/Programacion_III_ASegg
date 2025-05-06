
/**[C.02] Mostrando impares
Crear un programa que use un bucle for para mostrar los números del 1 al 20, pero que salte los
números pares (usando continue) y se detenga cuando alcance el número 15 (usando break).
Nota: Utilizar console.log() */

for (let i = 1; i < 20; i++) {
    if(i % 2 != 0){
        console.log(i);
    }
    if(i== 15){
        break;
    }
};