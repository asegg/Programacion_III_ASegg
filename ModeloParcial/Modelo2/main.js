function abierto(){
    let nuevaTabla = document.createElement("button");
    let tablaUno = document.createTextNode("Opcion 2");
    
    nuevaTabla.appendChild(tablaUno);
    nuevaTabla.setAttribute("class","boton");
    document.querySelector("body").appendChild(nuevaTabla);
}