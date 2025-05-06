/**[C.06] Mostrame el nombre y apellido
Guardar su nombre y apellido en dos variables distintas. Dichas variables serán pasadas como parámetro de
la función mostrarNombreApellido, que mostrará el apellido en mayúscula y el nombre solo con la primera
letra en mayúsculas y el resto en minúsculas.
El apellido y el nombre se mostrarán separados por una coma (,).
Nota: Utilizar console.log() */




function mostrarNombreApellido(nombre, apellido){
    apellidoNuevo = apellido.toUpperCase();
    nombreNuevo = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

    let retorno = `${apellidoNuevo}, ${nombreNuevo}`;
    return retorno;
}

console.log(mostrarNombreApellido("agustina", "seggiaro"));